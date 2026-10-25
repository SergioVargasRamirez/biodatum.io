// All copy lives here so text can be edited without touching components.

export const site = {
  name: 'Biodatum.io',
  email: 'info@biodatum.io',
  phone: '+49 1634677860',
  // Google Calendar appointment page; while empty, "Book" buttons fall back to an email draft.
  bookingUrl: 'https://calendar.app.google/qkYKdk84yUQMgTHd7',
}

// Same operator details as feedblick-pomodoro (src/lib/legal-controller.ts). Shared by Impressum and privacy page.
export const controller = {
  name: 'Dr. Sergio Vargas - biodatum.io',
  street: 'Nadistr. 06',
  cityLine: '80809 München',
  email: 'info@biodatum.io',
  vatId: 'DE463981547',
  wirtschaftsId: 'DE463981547-00001',
}

export const rates = {
  hourly: 75,
  daily: 550,
  dailyReduced: 500, // academic labs and start-ups
}

export const hero = {
  eyebrow: 'Independent bioinformatics & data consulting',
  title: 'Let your data support your business decisions, fast.',
  text:
    'Senior-level bioinformatics, statistics and lab support for biotech companies, ' +
    'academic labs and analytics teams. Reproducible, documented, delivered on time.',
}

// Set `photo` to a file in /public (e.g. '/sergio.jpg') to show a portrait.
export const about = {
  name: 'Dr. Sergio Vargas',
  title: 'Dr. rer. nat. habil.',
  photo: '',
  paragraphs: [
    'I am a molecular biologist and bioinformatician based in Munich. I have led omics projects from planning to delivery, so I know both sides of a project: the data and the lab, and the goals, budgets and deadlines around them.',
    'You work with me directly, from the first call to the final handover.',
  ],
  highlights: [
    {
      title: 'Leading omics teams',
      text: 'Led a team of bioinformaticians and lab technicians generating omics datasets for a wide range of projects. Defined goals, budget and timelines with project owners and set up collaborations with internal and external groups.',
    },
    {
      title: 'Strategy and infrastructure',
      text: 'Helped shape scientific collaborations, IT and molecular lab investments, and strategies for data ownership, access and storage.',
    },
    {
      title: 'Industry collaboration',
      text: 'Worked with biotech companies in the Munich area (Martinsried) on custom bait sets for metatranscriptomics and on testing pre-release kits.',
    },
    {
      title: 'Software and data in agile teams',
      text: 'Part of a Scrum team customising an electronic lab notebook for a major pharma customer: SQL optimisation, data visualisation, and turning requirements into tasks the team could implement.',
    },
  ],
  facts: ['Munich, Germany', 'Remote and on-site by agreement', 'Direct contact, no middlemen'],
}

export const audiences = [
  {
    name: 'Start-ups',
    text: 'No bioinformatician yet, or yours needs backup on a project? Get expert help at a start-up rate, without a full-time hire.',
  },
  {
    name: 'Academic labs',
    text: 'Experiments done, postdoc gone? Get the data analysed, the figures made and the manuscript submitted. Early-career researchers get mentoring to finally get those papers out.',
  },
  {
    name: 'Statistics & analytics firms',
    text: 'Add domain expertise in genomics and the life sciences to your projects, as a subcontractor under your brand.',
  },
  {
    name: 'Biotech companies',
    text: 'Fill capacity gaps without hiring. Get sequencing and omics analyses, pipelines and reports your team can build on.',
  },
]

export const services = [
  {
    name: 'Bioinformatics & data science',
    text: 'Genomics, transcriptomics, phylogenetics and statistical modelling, from QC to final figures.',
    points: [
      'Reproducible workflows and interactive notebooks',
      'Clean, documented code in a GitHub repository',
      'Data archived in the major public repositories',
    ],
  },
  {
    name: 'Manuscripts & proposals',
    text: 'Support from first draft to submission, so you can focus on the science.',
    points: ['Writing, editing and typesetting', 'Figures and supplementary material', 'Submission and revision handling'],
  },
  {
    name: 'Wet-lab services',
    text: 'Test, implement and optimise protocols. You pick the method, I make it work.',
    points: ['Fast adoption of new methods', 'Protocol validation and optimisation', 'Extra hands for time-critical projects'],
  },
  {
    name: 'Project management',
    text: 'You lead the science, I keep the project on track and the goals measurable.',
    points: ['Milestones and transparent tracking', 'Grant and reporting support', 'Coordination across partners'],
  },
  {
    name: 'ECR mentoring',
    text: 'Hands-on mentoring for early-career researchers (ECRs) who need to get their papers out.',
    points: ['Regular one-to-one sessions and a clear plan', 'Guidance on analysis, statistics and figures', 'Help with structure, writing and reviewer responses'],
  },
  {
    name: 'Training & workshops',
    text: 'Tailor-made courses that close your team’s knowledge gaps.',
    points: ['Data analysis and statistics in R and Python', 'Reproducible research practices', 'Custom formats: half-day to multi-day'],
  },
]

export const process = [
  { title: 'Free 30-minute call', text: 'You describe the project and the data. I tell you honestly whether and how I can help.' },
  { title: 'Scope & offer', text: 'A short written scope with timeline and price: hourly, daily or fixed.' },
  { title: 'Delivery', text: 'Regular updates, results and code handed over in a form your team can reuse.' },
]

export const faq = [
  { q: 'Do you sign NDAs?', a: 'Yes. Confidentiality is standard, and I am happy to sign yours before we discuss details.' },
  { q: 'Who owns the results and code?', a: 'You do. Everything produced for you is handed over at the end of the project.' },
  { q: 'Can you work with our existing pipelines and cloud?', a: 'Usually, yes. I work with HPC clusters, cloud environments and common workflow managers such as Nextflow.' },
  { q: 'Do you work remotely?', a: 'Mostly. I am based in Munich and most projects run fully remotely, with regular calls and updates.' },
  { q: 'Can you work in-house at our site?', a: 'Yes, but let’s talk about it. Tell me about your project and your location, and we will find a setup that works.' },
]

// Selected work / publications: to be curated together. Section is hidden while empty.
// Entry shape: { title, venue, year, href, note }
export const work = []
