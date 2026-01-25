type CopyAlertPayload = {
  ts: string
  host: string
  href: string
  referrer?: string
  userAgent?: string
  timezone?: string
  language?: string
}

function shouldAlert(currentHost: string, canonicalHost: string) {
  const allow = new Set([
    canonicalHost,
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
  ])

  if (!canonicalHost) return false
  if (!currentHost) return false
  return !allow.has(currentHost)
}

function dayKey() {
  const d = new Date()
  const yyyy = d.getFullYear()
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  return `${yyyy}${mm}${dd}`
}

export default defineNuxtPlugin(() => {
  if (import.meta.server) return

  const config = useRuntimeConfig()
  const canonicalHost = String(config.public.canonicalHost || '').trim()
  const webhook = String(config.public.copyAlertWebhook || '').trim()

  // Best-effort only.
  if (!canonicalHost || !webhook) return

  const currentHost = window.location.hostname
  if (!shouldAlert(currentHost, canonicalHost)) return

  // Avoid spamming: once per host per day per browser.
  const key = `copy_alert_sent:${currentHost}:${dayKey()}`
  try {
    if (localStorage.getItem(key)) return
    localStorage.setItem(key, '1')
  } catch {
    // If storage is blocked, continue but still only best-effort.
  }

  const payload: CopyAlertPayload = {
    ts: new Date().toISOString(),
    host: currentHost,
    href: window.location.href,
    referrer: document.referrer || undefined,
    userAgent: navigator.userAgent || undefined,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    language: navigator.language || undefined
  }

  try {
    const body = JSON.stringify(payload)

    if (navigator.sendBeacon) {
      const blob = new Blob([body], { type: 'application/json' })
      navigator.sendBeacon(webhook, blob)
      return
    }

    void fetch(webhook, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body,
      keepalive: true
    })
  } catch {
    // No-op: don't impact UX.
  }
})
