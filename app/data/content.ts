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
  body: string[]
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
  {
    company: 'Wise',
    role: 'DevSecOps Engineer',
    period: 'JUN 2024 — AUG 2025',
    location: 'London, England',
    achievements: [
      'Developed the Saved Cards feature on Checkout, driving over 223 million+ in PIV and 199k+ transactions in the first month.',
    ],
    tech: ['Go', 'Yaml', 'Kubernetes', 'Github Actions', 'AWS', 'Terraform', 'SonaQube'],
    link: 'https://wise.com/'
  },
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
    company: 'Smashing Magazine',
    role: 'Expert Reviewer',
    period: '2022',
    location: 'Remote',
    achievements: [],
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
    excerpt: 'How I think about delivery systems that move fast without breaking trust.',
    tags: ['CI/CD', 'DevSecOps', 'Delivery'],
    body: [
      'Reliability is not the opposite of speed. It is the foundation that lets speed compound.',
      'I like to think in terms of guardrails: automated checks, repeatable pipelines, and clear rollback paths.',
      'The goal is not to prevent change; it is to make change safe, observable, and reversible.'
    ]
  },
  {
    id: '02',
    slug: 'infrastructure-as-product',
    category: 'NOTES',
    date: '2026',
    title: 'Infrastructure as product',
    excerpt: 'Treating platform work like product work: outcomes, feedback loops, and ownership.',
    tags: ['Platform', 'Terraform', 'Kubernetes'],
    body: [
      'When infrastructure is treated like a product, it gets clarity: who it serves, what problem it solves, and how success is measured.',
      'That means prioritizing developer experience, reducing toil, and building feedback loops into every release.',
      'Ownership matters: a platform with no clear owner becomes a tax on every team.'
    ]
  },
  {
    id: '03',
    slug: 'observability-that-engineers-use',
    category: 'LEARNINGS',
    date: '2025',
    title: 'Observability that engineers actually use',
    excerpt: 'A pragmatic approach to logs, metrics, traces, and dashboards that earn adoption.',
    tags: ['Observability', 'Grafana', 'SRE'],
    body: [
      'Observability only works when it is easy to reach and easy to trust.',
      'Start with a few golden signals, make dashboards actionable, and instrument the critical paths first.',
      'The best dashboards answer: “What changed?” and “What do I do next?”'
    ]
  }
]
