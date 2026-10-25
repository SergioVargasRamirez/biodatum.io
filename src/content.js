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
    'My research focuses on the genomics and evolution of marine invertebrates, mainly sponges and corals, from phylogenetics and genomes to transcriptomics and host-microbiome interactions.',
    'You work with me directly, from the first call to the final handover.',
  ],
  // Milestones, newest first. Sources: CVs of 2025-03 and 2025-07 (employer names as on those CVs).
  timeline: [
    {
      period: '2025 – today',
      title: 'Founder, Biodatum.io',
      org: 'Independent consultancy, Munich',
      current: true,
      points: [
        'Bioinformatics, data science and training for biotech companies and academic labs.',
        'Genomic and epigenomic workflows on Illumina, Oxford Nanopore and PacBio data, built for reproducibility.',
      ],
    },
    {
      period: 'Mar – Jun 2025',
      title: 'Certified Data Scientist',
      org: 'Datascientest / Université Paris 1 Panthéon-Sorbonne',
      points: ['Machine and deep learning, MLOps, cloud computing (AWS, Docker) and data engineering.'],
    },
    {
      period: '2013 – 2025',
      title: 'Research associate',
      org: 'Ludwig-Maximilians-Universität München',
      points: [
        'Led omics projects and a team of bioinformaticians and lab technicians: single-cell transcriptomics (10x), PacBio genomes, exome capture, (meta)genomics and (meta)transcriptomics.',
        'Coordinated the in-house NGS facility (Illumina MiniSeq, Nanopore MinION): SOPs, quality control and data delivery to several research groups.',
        'Built reproducible Python and R pipelines on HPC clusters (SLURM, containers, Nextflow) with Shiny dashboards and reports.',
        'Worked with industry partners in Martinsried on custom bait sets and pre-release kits, and took part in decisions on collaborations, IT and lab infrastructure and data strategy.',
        'Trained and mentored junior scientists from more than 20 nationalities, in English and German.',
      ],
    },
    {
      period: '2019',
      title: 'Habilitation, Geobiology',
      org: 'Ludwig-Maximilians-Universität München',
    },
    {
      period: '2012 – 2013',
      title: 'Professional Service Engineer',
      org: 'PerkinElmer',
      points: [
        'Customised an electronic lab notebook for a major pharma customer in a Scrum team: SQL queries, statistical routines and data visualisation.',
        'Trained users in lab automation and e-lab management.',
      ],
    },
    {
      period: '2009 – 2012',
      title: 'Dr. rer. nat., Geobiology',
      org: 'Ludwig-Maximilians-Universität München',
    },
    {
      period: '1998 – 2008',
      title: 'B.Sc. and M.Sc., Biology',
      org: 'Universidad de Costa Rica',
    },
  ],
  // Numbers from Google Scholar (checked 2026-10-25); update occasionally.
  scholar: {
    url: 'https://scholar.google.com/citations?user=OAcpy4EAAAAJ&hl=en',
    stats: [
      { value: 60, suffix: '+', label: 'collaborative publications' },
      { value: 2300, suffix: '+', label: 'citations' },
    ],
  },
  facts: ['Munich, Germany', 'Spanish, German, English', 'Remote and on-site by agreement', 'Direct contact, no middlemen'],
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
    text: 'Multiomics from sequencing QC to final statistical and machine learning analyses.',
    points: [
      'Containerised pipelines delivered with interactive dashboards and documented code in a repository',
      'Statistical and Bayesian modelling, machine and deep learning',
      'Data archived in the major public repositories',
    ],
  },
  {
    name: 'Manuscripts & proposals',
    text: 'Support your team from first draft to submission, so you can focus on the science.',
    points: ['Literature research and review', 'Writing, editing and typesetting', 'Figures and supplementary material', 'Submission and revision handling'],
  },
  {
    name: 'Wet-lab services',
    text: 'Test, implement and optimise protocols. You pick the method, I make it work.',
    points: [
      'NGS workflows on Illumina, Oxford Nanopore and PacBio for diverse omics projects',
      'Fast adoption of new methods, with protocol validation and optimisation',
      'Extra hands for time-critical projects',
    ],
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

// Selected work: DOIs and titles verified against Crossref on 2026-10-25.
// Entry shape: { title, venue, year, href, note }
export const work = [
  {
    title: 'A 16S rRNA gene sequencing and analysis protocol for the Illumina MiniSeq platform',
    venue: 'MicrobiologyOpen',
    year: 2018,
    href: 'https://doi.org/10.1002/mbo3.611',
    note: 'Amplicon sequencing protocol',
  },
  {
    title: 'A novel target-enriched multilocus assay for sponges (Porifera): Red Sea Haplosclerida (Demospongiae) as a test case',
    venue: 'Molecular Ecology Resources',
    year: 2024,
    href: 'https://doi.org/10.1111/1755-0998.13891',
    note: 'Target-enrichment assay',
  },
  {
    title: 'Transcriptional response of the calcification and stress response toolkits in an octocoral under heat and pH stress',
    venue: 'Molecular Ecology',
    year: 2021,
    href: 'https://doi.org/10.1111/mec.16266',
    note: 'Transcriptomics',
  },
  {
    title: 'Body-Plan Reorganization in a Sponge Correlates with Microbiome Change',
    venue: 'Molecular Biology and Evolution',
    year: 2023,
    href: 'https://doi.org/10.1093/molbev/msad138',
    note: 'Microbiome and host response',
  },
  {
    title: 'The genome of the reef-building glass sponge Aphrocallistes vastus provides insights into silica biomineralization',
    venue: 'Royal Society Open Science',
    year: 2023,
    href: 'https://doi.org/10.1098/rsos.230423',
    note: 'Genome assembly',
  },
  {
    title: 'Comparative genomics and the nature of placozoan species',
    venue: 'PLOS Biology',
    year: 2018,
    href: 'https://doi.org/10.1371/journal.pbio.2005359',
    note: 'Comparative genomics',
  },
  {
    title: 'Profiling cellular diversity in sponges informs animal cell type and nervous system evolution',
    venue: 'Science',
    year: 2021,
    href: 'https://doi.org/10.1126/science.abj2949',
    note: 'Single-cell profiling',
  },
]
