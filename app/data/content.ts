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
    { label: 'Projects', id: 'projects' }
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
