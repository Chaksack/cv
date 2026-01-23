export const content = {
  app: {
    logo: 'AC.',
    email: 'chakdahah@outlook.com'
  },
  hero: {
    role: 'Technical Project Manager || DevOps Engineer',
    firstName: 'Andrew',
    lastName: 'Chakdahah',
    description: 'Building robust digital products. Based in Accra.',
    scrollIndicator: 'Scroll'
  },
  navigation: [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Advisory', id: 'advisory' },
    { label: 'Projects', id: 'projects' },
    { label: 'Blog', id: 'blog' }
  ],
  navContact: 'Contact',
  about: {
    headingNumber: '01',
    headingTitle: 'About',
    intro: [
      {
        highlight1: 'I strategise & build innovative tech solutions.Turning business needs into market-ready products',
        middle: ' from ',
        highlight2: 'concept to launch',
        end: '.'
      },
      {
        highlight1: 'As a seasoned DevSecOps Engineer and Technical Product Manager with expertise in cloud architecture, infrastructure automation, and DevSecOps solutions. I specialize in managing CI/CD pipelines, automating infrastructure with Terraform, and deploying Kubernetes clusters, while driving product lifecycle management, feature development, and roadmap planning. I bring a unique combination of technical acumen and strategic product oversight to deliver robust, scalable solutions aligned with business objectives and market needs ',
        middle: '',
        highlight2: '',
        end: ''
      }
    ]
  },
  experience: {
    headingNumber: '02',
    headingTitle: 'Experience',
    intro: 'Selected roles across product, infrastructure, and delivery.',
    startLabel: 'Genesis',
    endLabel: 'Apex'
  },
  advisory: {
    headingNumber: '03',
    headingTitle: 'Technical Advisory',
    intro: 'Reviews and advisory engagements.',
    startLabel: 'Genesis',
    endLabel: 'Apex'
  },
  projects: {
    headingNumber: '04',
    headingTitle: 'Artifacts',
    intro:
      'Selected engineering projects. High-impact features, pioneer in region, and AI integrations.',
    startLabel: 'Genesis',
    endLabel: 'Apex'
  },
  blog: {
    headingNumber: '05',
    headingTitle: 'Blog',
    intro: 'Writing on product delivery, DevSecOps, and building resilient systems.',
    startLabel: 'Genesis',
    endLabel: 'Apex'
  },
  footer: {
    availability: 'Availability: Nil',
    header: 'Contact.',
    cv: {
      label: 'Download CV',
      href: '/cv.pdf'
    },
    copyrightName: 'Andrew Chakdahah',
    copyrightRole: 'Technical Project Manager',
    copyrightYear: '2026'
  },
  ui: {
    period: 'Period',
    role: 'Role',
    technicalAdvisory: 'Technical Advisory'
  }
} as const

export type ExperienceRow = {
  company: string
  role: string
  period: string
  location?: string
  achievements?: string[]
  tech: string[]
  link: string
}

export type ProjectCard = {
  id: string
  category: string
  year: string
  title: string
  description: string
  tech: string[]
  link?: string
}

export type BlogPost = {
  id: string
  slug: string
  category: string
  date: string
  title: string
  excerpt: string
  tags: string[]
  body: string | string[]
  link?: string
}

export const experienceMain: ExperienceRow[] = [
  {
    company: 'GhostMark Studio',
    role: 'Technical Lead Engineer',
    period: 'DEC 2026 — PRESENT',
    location: 'Milton Keynes, England',
achievements: [
  'Led end-to-end development of the GhostMark platform, owning technical architecture, delivery execution, and long-term product strategy.',
  'Defined product vision and roadmap, aligning engineering execution with business goals to increase market adoption and user satisfaction.',
],
    tech: ['React', 'TypeScript', 'AWS', 'Terraform', 'Github Actions', 'Node.js', 'Prometheus', 'Grafana', 'Docker'],
    link: 'https://ghostmarkstudio.com/'
  },
  {
    company: 'Syentia',
    role: 'Technical Project Manager & Consultant',
    period: 'JAN 2023 — PRESENT',
    location: 'Chicago, Illinois',
    achievements: [
'Defined product vision and strategy, increasing market share and user satisfaction.',
'Managed product lifecycle, ensuring timely delivery and alignment with business objectives.',
    ],
    tech: ['Google Workspace', 'Go', 'TypeScript', 'Storybook','Github', 'Prometheus', 'Grafana', 'AWS', 'Docker', 'Postman', 'Figma', 'Jira', 'Slack'],
    link: 'https://syentia.io/'
  },
  // {
  //   company: 'Wise',
  //   role: 'DevSecOps Engineer',
  //   period: 'JUN 2024 — AUG 2025',
  //   location: 'London, England',
  //   achievements: [
  //     'Developed the Saved Cards feature on Checkout, driving over 223 million+ in PIV and 199k+ transactions in the first month.',
  //   ],
  //   tech: ['Go', 'Yaml', 'Kubernetes', 'Github Actions', 'AWS', 'Terraform', 'SonaQube'],
  //   link: 'https://wise.com/'
  // },
  {
    company: 'NylaBank',
    role: 'DevOps Engineer - Contract',
    period: 'JUN 2024 — NOV 2024',
    location: 'Accra, Ghana',
    achievements: [
      'Designed and implemented secure CI/CD pipelines using GitHub Actions, integrating automated security scans (SAST, dependency and container scanning) into the delivery lifecycle.',
    ],
    tech: ['Go', 'Yaml', 'Kubernetes', 'Github Actions', 'AWS', 'Terraform', 'SonaQube', 'ArgoCD', 'Lens', 'Helm','Docker','Trivy', 'TF-sec'],
    link: 'https://nylabank.com/'
  }
]

export const experienceAdvisory: ExperienceRow[] = [
  {
    company: 'Lean Icon Technology',
    role: 'Digital Expert | Technical Lead',
    period: 'May 2022 — April 2024',
    location: 'Hybrid',
    achievements: [
        'Provided IT consultancy and built scalable web and mobile solutions.',
'Led product design and development for custom digital solutions.',
'Authored SDLC and SRD documentation.',

    ],
    tech: ['Microsoft 365', 'Technical Writing', 'Quality Assurance', 'Project Management'],
    link: 'https://www.leanicontechnology.com/'
  },
  {
    company: 'Precept Advisory LTD.',
    role: 'Expert Reviewer',
    period: '2022',
    location: 'Remote',
    achievements: [
      'Oversaw product development cycles, ensuring alignment with business strategies.',
      'Compiled research and wrote comprehensive SDLC and SRD.',
      'Guided Software development in technical challenges.'
    ],
    tech: ['Frontend Architecture', 'Technical Writing'],
    link: 'https://www.smashingmagazine.com/'
  }
]

export const projects: ProjectCard[] = [
  {
    id: '01',
    category: 'Ecommerce',
    year: '2025',
    title: 'Ulee Home',
    description: 'An experimental playground exploring the capabilities of generative AI.',
    tech: ['React', 'TypeScript', 'Next.js', 'AWS', 'Resend', 'Medusa', 'Tailwind CSS', 'ShipStation'],
    link: 'https://uleehome.com/'
  },
  {
    id: '02',
    category: 'AI',
    year: '2025',
    title: 'Bible AI',
    description:
      'Integrated the first-ever Voice AI into the Chat feature, leveraging OpenAI and Eleven Labs.',
    tech: ['Next.js', 'Tailwind CSS', 'Grok AI', 'TypeScript', 'SQL'],
    link: 'https://bibleai.com/'
  },
  {
    id: '03',
    category: 'Application Monitoring',
    year: '2024',
    title: 'Nada',
    description:
      'Developed the Saved Cards feature driving over 223M+ in volume. Integrated 2FA into the flow.',
    tech: ['Vue', 'Fintech'],
    link: 'https://paystack.com/'
  },
  {
    id: '04',
    category: 'Education',
    year: '2024',
    title: 'Montessori World Connect',
    description:
      'Led the Direct Debit UI project (first-ever direct debit in Nigeria) implementation closely with the processing team.',
    tech: ['React', 'TypeScript', 'Remix'],
        link: 'https://montessoriworldconnect.com/'

  }
]

export const blogPosts: BlogPost[] = [
  {
    id: '01',
    slug: 'shipping-reliably-with-guardrails',
    category: 'WRITING',
    date: '2026',
    title: 'Shipping reliably with CI/CD and guardrails',
    excerpt: 'A practical system for moving fast without breaking trust: checks, automation, and reversible releases.',
    tags: ['CI/CD', 'DevSecOps', 'Delivery'],
    body: [
      '## Reliability is a speed multiplier',
      'Reliability is not the opposite of speed; it is the foundation that lets speed compound. Teams that ship quickly and safely usually do not “work harder” at release time—they reduce the amount of thinking that must happen under pressure.',
      'I like the word *guardrails* because it implies momentum. Guardrails are not walls. They allow the system to move, but they keep the blast radius bounded when something goes wrong.',
      '## A simple model: safe, observable, reversible',
      'When I design CI/CD systems, I try to make three properties true:',
      '- **Safe**: obvious defects and policy violations are caught automatically.\n- **Observable**: we can see what changed and whether it helped.\n- **Reversible**: we can return to known-good state quickly.',
      'If any one of these is missing, “shipping fast” becomes fragile.',
      '## Guardrails by layer',
      '### 1) Change size and review',
      'The first guardrail is **small changes**. Smaller pull requests are easier to review, easier to test, and easier to roll back. If you want fewer incidents, start by making “merge” and “deploy” less dramatic events.',
      'Practical defaults:',
      '- Prefer incremental changes over “big bang” rewrites.\n- Require at least one reviewer for production code.\n- Make review time part of the delivery system (not “extra work”).',
      '### 2) Deterministic builds',
      'The second guardrail is **consistent build inputs**. Pin Node and package manager versions, treat lockfiles as part of the artifact, and fail fast when dependency state is ambiguous. Determinism is a prerequisite for debugging.',
      '### 3) Fast quality gates',
      'The third guardrail is a minimum quality gate that runs every time:',
      '- Linting\n- Unit tests\n- A small set of fast integration tests',
      'The goal is not perfect coverage; it is catching obvious regressions before they reach production.',
      '### 4) Business-critical checks',
      'Then add checks that protect the business and the customer:',
      '- Backward compatible database migrations\n- API contract checks\n- Smoke tests for critical user journeys (login, payments, core “happy path”)',
      '## Security as a first-class gate',
      'Security belongs in the same pipeline as quality. SAST and dependency scanning should run automatically, but the most important part is the policy:',
      '- What blocks a deploy?\n- What becomes a ticket?\n- What is explicitly accepted risk?',
      'Guardrails need escalation paths. If a check fails at 2 a.m., who owns the decision to bypass, and how is it recorded? “Break-glass” mechanisms are useful, but they should be **auditable and rare**.',
      '## Make releases observable',
      'A deployment is a production experiment; if you cannot see the result, you are operating blind.',
      'Minimum bar:',
      '- Every deploy is **annotated** on dashboards.\n- There is a single place to view service health.\n- Rollouts have success criteria (error rate, latency, saturation).',
      '## Make reversibility real',
      'Progressive delivery makes reversibility practical:',
      '- **Blue/green** reduces infrastructure risk.\n- **Canary** reduces traffic risk.\n- **Feature flags** reduce product risk.',
      'You do not need all three, but you need at least one **reversible release strategy**.',
      'Rollbacks should be boring. If rollback is “someone SSHs in,” you do not have a rollback—you have heroics.',
      "Here’s the kind of pipeline shape I aim for:",
      '```yaml\non: [pull_request, push]\n\njobs:\n  build_test:\n    steps:\n      - checkout\n      - install (locked)\n      - lint\n      - test\n      - build\n\n  deploy:\n    needs: build_test\n    if: main_branch\n    steps:\n      - deploy (automated)\n      - smoke_test\n      - observe (metrics + logs + traces)\n      - progressive_rollout\n```',
      '## Close the loop with learning',
      'Every incident should produce at least one permanent guardrail improvement: a new test, a new alert, a new validation in the pipeline, or a change in rollout strategy. The system improves when learning turns into automation.',
      '## Summary',
      'Ship in small increments, automate the checks, make releases observable, and design for reversibility. That combination is what lets speed and reliability coexist instead of competing.'
    ]
  },
  {
    id: '02',
    slug: 'infrastructure-as-product',
    category: 'NOTES',
    date: '2026',
    title: 'Infrastructure as product',
    excerpt: 'Platform work gets easier when it is treated like product work: clear users, measurable outcomes, and real ownership.',
    tags: ['Platform', 'Terraform', 'Kubernetes'],
    body: [
      '## Why “product thinking” changes platform work',
      'When infrastructure is treated like a product, it gains clarity: who it serves, what problem it solves, and how success is measured. Without that clarity, “platform” becomes a dumping ground for urgent work and invisible maintenance.',
      'Product thinking helps because it forces explicit answers to:',
      '- Who are the users?\n- What’s the promise?\n- What outcomes matter?\n- What is the interface?\n- Who owns it end-to-end?',
      '## Start with customers',
      'Internal customers are still customers: application engineers, data teams, security, support, and sometimes finance.',
      'If you cannot name the user, prioritization becomes political instead of evidence-based.',
      '## Define the promise and measure outcomes',
      'Platforms typically aim to deliver one or more of these:',
      '- Faster delivery\n- Safer change\n- Lower operational toil\n- Better compliance\n- Lower cost',
      'Trying to optimize all of them at once often produces a platform that excels at none.',
      'Outcomes are not “adopt Terraform” or “migrate to Kubernetes.” Outcomes look like:',
      '- “A new service can reach production in under a day.”\n- “Onboarding a new engineer takes hours, not weeks.”\n- “Incidents drop because change is safer and more observable.”',
      '## Treat interfaces as first-class',
      'Your platform’s interface might be Terraform modules, a CLI, Kubernetes CRDs, or a web portal. Whatever it is, it should be **versioned**, **documented**, and designed to be hard to misuse.',
      'Example mindset for Terraform modules:',
      '```hcl\nmodule "service" {\n  source = "./modules/service"\n\n  name        = "api"\n  environment = "prod"\n  replicas    = 3\n\n  # opinionated defaults\n  enable_tracing = true\n  enable_waf     = true\n}\n```',
      '## Build a paved road',
      'A good platform product offers a **paved road**: the default path that is safe, supported, and fast.',
      'You can still leave the road, but the cost is explicit:',
      '- Extra review\n- Extra ownership\n- Extra operational responsibility',
      'This creates safe autonomy without creating queues.',
      '## Make self-service real',
      'Self-service is not a slogan. If teams have to wait for environments, secrets, or pipelines, you have built a queue.',
      'The product goal is not “control.” It’s **safe autonomy**.',
      '## Reliability and support are part of the product',
      'If your platform has uptime expectations, define SLOs and error budgets. Treat upgrades, deprecations, patching, and incident response as roadmap items, not “background chores.”',
      '## Security and cost belong in the defaults',
      'Security is easier when it is the default:',
      '- Hardened base images\n- Least-privilege IAM patterns\n- Integrated secret management\n- Policy checks in CI',
      'Cost is easier when it is visible:',
      '- Per environment\n- Per team\n- Per service',
      'You do not need perfect allocation; you need a feedback loop that reveals trade-offs.',
      '## Adoption is the KPI',
      'If engineers avoid the platform, value is not reaching the business. Measure real adoption signals:',
      '- How many services use the paved road?\n- How often do teams bypass it?\n- What reasons show up repeatedly?',
      '## Summary',
      'Infrastructure as product is a commitment to users, interfaces, measurable outcomes, and iteration. It turns platform work from “important but invisible” into something teams can trust and rely on.'
    ]
  },
  {
    id: '03',
    slug: 'observability-that-engineers-use',
    category: 'LEARNINGS',
    date: '2025',
    title: 'Observability that engineers actually use',
    excerpt: 'A pragmatic approach to logs, metrics, traces, and dashboards that earn trust and adoption.',
    tags: ['Observability', 'Grafana', 'SRE'],
    body: [
      '## Adoption is the goal',
      'Observability only works when it is easy to reach and easy to trust. “We have dashboards” is not the same as “engineers use dashboards under pressure.” Adoption is the real measure of success.',
      'I judge observability by how quickly it helps answer three questions:',
      '1. What is broken?\n2. Why is it broken?\n3. What should I do next?',
      'Tools are secondary to those outcomes.',
      '## Start with the golden signals',
      'The classic golden signals map closely to user pain and on-call reality:',
      '- **Latency**: are requests slow?\n- **Traffic**: what is the load pattern?\n- **Errors**: are requests failing?\n- **Saturation**: are we close to resource limits?',
      'Make these consistent across services so engineers do not have to translate every dashboard during incidents.',
      '## Make dashboards operational, not decorative',
      'I like dashboards that lead with an “am I on fire?” view and then provide an obvious drill-down path.',
      'Operational dashboards should:',
      '- Be consistent in layout and naming\n- Include clear time ranges and per-environment filters\n- Answer “what changed?” quickly (annotations help)',
      '## Alerts: fewer, higher-signal',
      'Treat alerts as prompts for investigation, not punishment. Alerts should be tied to user impact.',
      'If you alert on everything, engineers learn to ignore alerts—including the important ones.',
      'SLOs help here: instead of alerting on raw CPU, alert when reliability is violating the promise or burning error budget too quickly.',
      '## Logs: structured and correlated',
      'Logs should be structured wherever possible. It’s the difference between regex archaeology and fast querying.',
      'Example of a useful structured log shape:',
      '```json\n{\n  "level": "error",\n  "service": "api",\n  "env": "prod",\n  "request_id": "...",\n  "route": "/checkout",\n  "status": 502,\n  "duration_ms": 431,\n  "error_code": "UPSTREAM_TIMEOUT"\n}\n```',
      'The single biggest accelerator is **shared identifiers**. Propagate a request id through every hop so logs, traces, and metrics can be correlated.',
      '## Traces: critical paths first',
      'Traces are most valuable on critical paths and cross-service boundaries.',
      'If you cannot trace a core flow end-to-end (login, payments, profile load), incident response becomes guessing.',
      'Instrument what matters, not what is easy:',
      '- Key operations (create order, submit payment, fetch profile)\n- Useful attributes (endpoint, status, duration, dependency name)',
      'Avoid high-cardinality “everything everywhere” attributes that explode cost without adding insight.',
      '## Make the default experience friendly',
      'If a new engineer cannot find the right dashboard or query in a few minutes, observability is not serving the team.',
      'Good defaults include:',
      '- A single entry dashboard per service\n- Links from alerts to dashboards\n- Links from dashboards to logs and traces',
      '## Iterate based on real incidents',
      'After an outage, ask:',
      '- Which signal would have detected this sooner?\n- Which dashboard view would have shortened diagnosis?\n- What query did we wish we had?',
      'Then bake those answers back into the system so the next incident is cheaper.',
      '## Summary',
      'Observability becomes useful when it reduces cognitive load. The goal is not to collect data—it is to make it obvious what is happening, why it is happening, and what to do about it.'
    ]
  }
]
