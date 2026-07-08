/**
 * Central content/data layer for the portfolio.
 * All copy is rewritten for clarity and impact but kept factually faithful to the CV.
 * Fields marked with `PLACEHOLDER` need to be filled in by Muzammil before launch.
 */

export const profile = {
  name: "Muzammil Satti",
  firstName: "Muzammil",
  // Personal brand
  headline: "Data Science Student · Aspiring AI & Data Analyst",
  tagline: "Turning raw data into decisions.",
  location: "Islamabad, Pakistan",
  email: "mgsatti2342@gmail.com",
  phone: "+92 328 5717749",
  availability: "Open to internships & full-time Data roles",
  resumeUrl: "/Muzammil-Satti-Resume.pdf", // place the PDF in /public
  elevatorPitch:
    "I'm a Data Science student at COMSATS University Islamabad who builds end-to-end analytics projects — from cleaning messy, real-world datasets to shipping dashboards and NLP experiments in Python and R. I'm now channelling that foundation toward AI, machine learning, and Python backend development.",
  heroIntro:
    "I clean, analyse, and visualise real-world data — and I'm building toward AI, machine learning, and Python backend engineering.",
  ctaPrimary: { label: "View My Work", href: "#projects" },
  ctaSecondary: { label: "Get in Touch", href: "#contact" },
};

export const socials = {
  github: "https://github.com/satti-112",
  linkedin: "https://linkedin.com/in/muzammil-satti-a5129034b",
  email: "mailto:mgsatti2342@gmail.com",
};

export const about = {
  summary:
    "Motivated Data Science student with hands-on experience across the full analytics workflow — collecting, cleaning, modelling, and visualising real-world datasets. Through several independent projects spanning sentiment analysis, ride-demand analytics, and business intelligence, I've developed a practical command of Python, R, SQL, Excel, and Power BI.",
  narrative:
    "My work sits at the intersection of data analysis and storytelling: I care as much about surfacing the right insight as about presenting it clearly. Recent projects range from tracking emotional arcs across ~700K words of literary text in R, to building interactive KPI dashboards in Power BI and Excel. I'm now deliberately expanding into machine learning, natural language processing, large language models, and Python backend development so I can build data products, not just report on them.",
  highlights: [
    "Full analytics lifecycle: data cleaning → modelling → visualisation → insight",
    "Comfortable in both Python and R ecosystems",
    "Completed an industry job simulation with Commonwealth Bank (Forage)",
    "Actively building a public GitHub portfolio",
  ],
  facts: [
    { label: "Projects Shipped", value: "5+" },
    { label: "Certifications", value: "8" },
    { label: "Words Analysed (NLP)", value: "700K+" },
    { label: "Tools & Frameworks", value: "12+" },
  ],
};

export const education = [
  {
    degree: "BS in Data Science",
    org: "COMSATS University Islamabad",
    period: "2025 – Present",
    location: "Islamabad, Pakistan",
    detail:
      "Relevant coursework: Data Science Fundamentals, Database Systems. Building a foundation across statistics, programming, and data engineering.",
    tags: ["Data Science", "Database Systems", "Statistics"],
  },
  {
    degree: "Intermediate — F.Sc Pre-Engineering",
    org: "Cadet College Palandri (AJK Board, Mirpur)",
    period: "Completed",
    location: "Palandri, AJK",
    detail: "Scored 1045/1200. Served as House Prefect — an early leadership role.",
    tags: ["1045 / 1200", "House Prefect"],
  },
  {
    degree: "Matriculation (SSC)",
    org: "Cadet College Palandri (AJK Board, Mirpur)",
    period: "Completed",
    location: "Palandri, AJK",
    detail: "Scored 1064/1100 — a strong academic base in science and mathematics.",
    tags: ["1064 / 1100"],
  },
];

export const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "R", "SQL"],
  },
  {
    title: "Data Science",
    skills: ["Pandas", "NumPy", "Data Cleaning", "Data Aggregation", "Data Anonymisation", "EDA"],
  },
  {
    title: "NLP / Text Mining",
    skills: ["Sentiment Analysis", "Tokenization", "tidytext", "BING / AFINN / NRC Lexicons"],
  },
  {
    title: "BI & Data Visualisation",
    skills: ["Power BI", "DAX", "Data Modeling", "Matrix Visuals", "Matplotlib", "ggplot2"],
  },
  {
    title: "Databases",
    skills: ["SQL Queries", "Joins", "Aggregations", "Database Design"],
  },
  {
    title: "Tools & Frameworks",
    skills: ["Excel (Power Query, Pivot Tables)", "dplyr", "stringr", "lubridate", "Jupyter"],
  },
  {
    title: "Version Control",
    skills: ["Git", "GitHub"],
  },
  {
    title: "Learning Next",
    skills: ["Machine Learning (scikit-learn)", "Deep Learning", "LLMs & Generative AI", "FastAPI / Python Backend"],
  },
];

export const competencies = [
  {
    title: "Data Cleaning & Preprocessing",
    desc: "Turning raw, messy datasets into analysis-ready tables — handling nulls, duplicates, and inconsistent formats.",
  },
  {
    title: "Exploratory Data Analysis",
    desc: "Profiling data to uncover patterns, correlations, and the questions worth asking before modelling.",
  },
  {
    title: "Business Intelligence",
    desc: "Designing KPI dashboards and data models that translate numbers into decisions.",
  },
  {
    title: "Statistical & Text Analysis",
    desc: "Applying sentiment and lexicon-based methods to extract meaning from unstructured text.",
  },
  {
    title: "Data Storytelling",
    desc: "Communicating findings with clear visuals and a narrative stakeholders can act on.",
  },
  {
    title: "Analytical Problem Solving",
    desc: "Breaking ambiguous problems into structured, data-driven steps.",
  },
];

export const experience = [
  {
    role: "Data Science Job Simulation (Virtual Experience)",
    org: "Commonwealth Bank · via Forage",
    period: "August 2025",
    location: "Remote",
    points: [
      "Completed an industry job simulation modelled on the work of a Commonwealth Bank data team.",
      "Performed data aggregation and analysis on structured datasets to support decision-making.",
      "Applied data anonymisation techniques to protect sensitive customer information.",
      "Proposed data-analysis approaches and designed a database schema to organise information effectively.",
    ],
    tags: ["Data Aggregation", "Data Anonymisation", "Database Design"],
  },
];

export type Project = {
  title: string;
  category: "Data Analytics" | "NLP / AI" | "Business Intelligence";
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  role: string;
  challenge: string;
  outcome: string;
  github: string;
  demo: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Jane Austen Sentiment Analysis",
    category: "NLP / AI",
    featured: true,
    overview:
      "A text-mining study tracking the emotional arc of six Jane Austen novels across ~700K+ words.",
    problem:
      "Long-form literary text is unstructured and hard to compare — how do you quantify and compare the emotional tone of entire novels, chapter by chapter?",
    solution:
      "Built a reproducible R pipeline that tokenises each novel into a tidy format and scores sentiment with three lexicons (BING, AFINN, NRC), then visualises the results for cross-novel comparison.",
    features: [
      "Tokenisation with unnest_tokens() plus custom regex for chapter detection, including Roman numerals",
      "Sentiment scoring across BING, AFINN, and NRC lexicons",
      "Chapter-by-chapter emotional-arc tracking",
      "Comparative bar and line charts in ggplot2",
    ],
    tech: ["R", "tidytext", "ggplot2", "janeaustenr", "dplyr", "stringr"],
    role: "Sole author — designed the pipeline, wrote the R code, and produced all visualisations.",
    challenge:
      "Reliably detecting chapter boundaries (including Roman-numeral headings) required custom regular expressions to avoid mis-splitting the text.",
    outcome:
      "Identified Pride & Prejudice as the most positive of the six novels and produced clear comparative visuals of each book's emotional trajectory.",
    github: "https://github.com/satti-112",
    demo: "",
  },
  {
    title: "Uber Ride-Demand Analysis",
    category: "Data Analytics",
    featured: true,
    overview:
      "Time-series analysis of Uber ride data to reveal when and where demand peaks.",
    problem:
      "Ride demand is uneven across hours, days, and seasons — surfacing those patterns is key to efficient driver allocation.",
    solution:
      "Cleaned raw trip data and engineered datetime features to expose peak hours, busy pickup zones, and seasonal trends through time-series and heatmap visualisations.",
    features: [
      "Datetime parsing and feature engineering with lubridate",
      "Missing-value handling and CSV cleaning",
      "Heatmaps of demand by hour and month",
      "Insights on driver-allocation efficiency by hour-of-day",
    ],
    tech: ["R", "dplyr", "ggplot2", "lubridate"],
    role: "Sole author — data cleaning, analysis, and visualisation.",
    challenge:
      "Raw datetime fields were inconsistent; normalising them was essential before any temporal pattern could be trusted.",
    outcome:
      "Produced a clear map of peak-demand windows and pickup hotspots that could inform smarter driver scheduling.",
    github: "https://github.com/satti-112",
    demo: "",
  },
  {
    title: "Mart Sales — Cleaning & KPI Dashboard",
    category: "Business Intelligence",
    featured: true,
    overview:
      "An interactive Excel dashboard built on a cleaned, standardised mart-sales dataset.",
    problem:
      "The raw sales dataset was riddled with duplicates, inconsistent formats, and nulls — unusable for reliable reporting.",
    solution:
      "Used Power Query to clean and standardise the data, then built an interactive dashboard with pivot tables and charts to track core KPIs.",
    features: [
      "End-to-end cleaning in Power Query (duplicates, formats, nulls)",
      "Pivot-table dashboard tracking revenue, quantity, and category performance",
      "Conditional formatting and a structured visual layout",
    ],
    tech: ["Microsoft Excel", "Power Query", "Pivot Tables"],
    role: "Sole author — data cleaning, dashboard design, and KPI definition.",
    challenge:
      "Standardising inconsistent category and format fields without losing records required careful, repeatable Power Query steps.",
    outcome:
      "Improved data-interpretation accuracy by an estimated 30% through a clearer, structured dashboard layout.",
    github: "https://github.com/satti-112",
    demo: "",
  },
  {
    title: "Student Performance Analysis",
    category: "Data Analytics",
    overview:
      "A Python EDA of 500+ student records to find what drives academic performance.",
    problem:
      "Which factors most influence a student's results — and can they be seen clearly in the data?",
    solution:
      "Cleaned the dataset in Pandas and analysed relationships between performance and factors like attendance and study hours, visualising the findings with Matplotlib.",
    features: [
      "Data cleaning and preparation with Pandas",
      "Correlation of performance against attendance and study hours",
      "Matplotlib charts surfacing actionable trends",
    ],
    tech: ["Python", "Pandas", "Matplotlib"],
    role: "Sole author — cleaning, analysis, and visualisation.",
    challenge:
      "Isolating meaningful drivers from noise across many candidate factors.",
    outcome:
      "Highlighted attendance and study hours as key correlates of performance, presented as clear, shareable charts.",
    github: "https://github.com/satti-112",
    demo: "",
  },
  {
    title: "Power BI Sales Dashboard",
    category: "Business Intelligence",
    overview:
      "A relational Power BI model over multi-year transaction data (DigiSkills exercise).",
    problem:
      "Multi-file transaction data (1997–1998) needed to be merged, modelled, and turned into trustworthy measures.",
    solution:
      "Combined the files with Get Data → From Folder, rebuilt the relational model by hand, and authored DAX measures validated through a matrix visual.",
    features: [
      "Multi-file ingestion via Get Data → From Folder",
      "Manual relationship modelling linking Customer_Lookup to Transaction Data",
      "DAX measures: Qty Sold (SUM), Total Orders (COUNT), Bulk Orders (Qty > 4)",
      "Calculated columns for Customer Priority and Current Age",
    ],
    tech: ["Power BI", "DAX", "Power Query", "Data Modeling"],
    role: "Sole author — data modelling, DAX, and validation.",
    challenge:
      "Recreating relationships correctly after removing the auto-generated ones, then validating every measure.",
    outcome:
      "Delivered a validated, interactive dashboard with reliable order and quantity metrics.",
    github: "https://github.com/satti-112",
    demo: "",
  },

  /* ────────────────────────────────────────────────────────────────
   * GITHUB PLACEHOLDER PROJECTS
   * Fill these in with real repos from github.com/satti-112.
   * Replace every field marked TODO, set the real `github`/`demo`
   * URLs, then delete this comment. Delete any card you don't need.
   * ──────────────────────────────────────────────────────────────── */
  {
    title: "TODO — GitHub Project 1",
    category: "Data Analytics",
    overview: "TODO — one-line summary of what this repo does.",
    problem: "TODO — what problem or question does this project address?",
    solution: "TODO — how you approached and solved it.",
    features: [
      "TODO — key feature or step 1",
      "TODO — key feature or step 2",
      "TODO — key feature or step 3",
    ],
    tech: ["TODO", "Tech", "Stack"],
    role: "TODO — your role and contribution.",
    challenge: "TODO — the hardest part and how you handled it.",
    outcome: "TODO — result, metric, or insight produced.",
    github: "https://github.com/satti-112", // TODO: link the real repo
    demo: "", // TODO: add a live/demo URL if available
  },
  {
    title: "TODO — GitHub Project 2",
    category: "NLP / AI",
    overview: "TODO — one-line summary of what this repo does.",
    problem: "TODO — what problem or question does this project address?",
    solution: "TODO — how you approached and solved it.",
    features: [
      "TODO — key feature or step 1",
      "TODO — key feature or step 2",
      "TODO — key feature or step 3",
    ],
    tech: ["TODO", "Tech", "Stack"],
    role: "TODO — your role and contribution.",
    challenge: "TODO — the hardest part and how you handled it.",
    outcome: "TODO — result, metric, or insight produced.",
    github: "https://github.com/satti-112", // TODO: link the real repo
    demo: "",
  },
  {
    title: "TODO — GitHub Project 3",
    category: "Business Intelligence",
    overview: "TODO — one-line summary of what this repo does.",
    problem: "TODO — what problem or question does this project address?",
    solution: "TODO — how you approached and solved it.",
    features: [
      "TODO — key feature or step 1",
      "TODO — key feature or step 2",
      "TODO — key feature or step 3",
    ],
    tech: ["TODO", "Tech", "Stack"],
    role: "TODO — your role and contribution.",
    challenge: "TODO — the hardest part and how you handled it.",
    outcome: "TODO — result, metric, or insight produced.",
    github: "https://github.com/satti-112", // TODO: link the real repo
    demo: "",
  },
];

export const certifications = [
  { name: "Google Data Analytics Professional Certificate", issuer: "Google · Coursera" },
  { name: "Introduction to Data Science Job Simulation", issuer: "Commonwealth Bank · Forage" },
  { name: "Microsoft Excel for Data Analysis", issuer: "Microsoft" },
  { name: "What is Data Science?", issuer: "IBM · Coursera · HEC Pakistan" },
  { name: "Python for Data Analysis: Pandas & NumPy", issuer: "Coursera · HEC Pakistan" },
  { name: "Present with Purpose: Effective Presentations", issuer: "IBM · Coursera · HEC Pakistan" },
  { name: "Collaborate Effectively for Professional Success", issuer: "IBM · Coursera · HEC Pakistan" },
];

export const achievements = [
  {
    title: "Commonwealth Bank Job Simulation",
    desc: "Completed a real-world industry data simulation (Forage, Aug 2025), covering aggregation, anonymisation, and database design.",
  },
  {
    title: "Google Data Analytics Certificate",
    desc: "Earned Google's flagship professional analytics certificate, covering the full analysis process end to end.",
  },
  {
    title: "Consistent Academic Excellence",
    desc: "1064/1100 in Matric and 1045/1200 in F.Sc — a strong, sustained academic record.",
  },
  {
    title: "House Prefect",
    desc: "Selected as House Prefect at Cadet College Palandri — an early demonstration of leadership and responsibility.",
  },
];

export const researchInterests = [
  "Natural Language Processing & Text Mining",
  "Large Language Models & Generative AI",
  "Applied Machine Learning",
  "Business Intelligence & Analytics",
  "Data-Driven Decision Systems",
];

export const careerGoals = {
  near: {
    title: "Now → 12 months",
    items: [
      "Land an internship or entry-level Data Analyst / Data Science role",
      "Ship 2–3 machine-learning projects with scikit-learn",
      "Deepen SQL and Python engineering fundamentals",
    ],
  },
  mid: {
    title: "1 → 3 years",
    items: [
      "Grow into a Data Scientist / ML Engineer role",
      "Build and deploy NLP and LLM-powered applications",
      "Develop Python backends (FastAPI) that serve data products",
    ],
  },
  long: {
    title: "3+ years",
    items: [
      "Specialise in Generative AI and applied machine learning",
      "Lead data products from prototype to production",
      "Contribute to open-source AI/data tooling",
    ],
  },
};

export const services = [
  {
    title: "Data Cleaning & Preparation",
    desc: "I transform messy spreadsheets and raw exports into clean, analysis-ready datasets.",
  },
  {
    title: "Dashboards & Reporting",
    desc: "Interactive Power BI and Excel dashboards that make your KPIs impossible to miss.",
  },
  {
    title: "Exploratory Analysis",
    desc: "Python/R analysis that surfaces the patterns and insights hidden in your data.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
