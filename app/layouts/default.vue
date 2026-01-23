<template>
  <div id="app" class="bg-black text-white">
    <NuxtRouteAnnouncer />

    <CursorFx />
    <NoiseOverlay />

    <SiteNav />

    <slot />
  </div>
</template>

<script setup lang="ts">
import CursorFx from '~/components/CursorFx.vue'
import NoiseOverlay from '~/components/NoiseOverlay.vue'
import SiteNav from '~/components/SiteNav.vue'

useHead({
  htmlAttrs: { class: 'scroll-smooth' },
  bodyAttrs: { class: 'antialiased selection:bg-white selection:text-black' }
})
</script>
