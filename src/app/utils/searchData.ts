export interface SearchItem {
  id: string;
  title: string;
  url: string;
  category: string;
  description?: string;
  tags?: string[];
}

export const searchData: SearchItem[] = [
  {
    id: "overview",
    title: "Overview",
    url: "/overview/",
    category: "Overview",
    description: "Comprehensive overview of school food programs across Canada, including provincial initiatives and national frameworks.",
    tags: ["overview", "canada", "food", "programs", "province", "national", "school meals", "nutrition policy", "education"],
  },
  {
    id: "sfp-general",
    title: "SFPs General Information",
    url: "/intake_visuals/SFPs_general_information/",
    category: "Research",
    description: "Overview and statistics of school food programs across different regions, including participation rates, funding models, and implementation strategies.",
    tags: ["school food", "programs", "statistics", "overview", "participation", "funding", "implementation", "policy", "regional comparison"],
  },
  {
    id: "sfp-food-breakdown",
    title: "SFPs Food Breakdown",
    url: "/intake_visuals/SFPs_food_breakdown/",
    category: "Research",
    description: "Detailed analysis of nutritional content, food distribution methods, and dietary considerations in school food programs, including allergen management and cultural inclusivity.",
    tags: ["food", "nutrition", "analysis", "dietary requirements", "allergens", "cultural foods", "distribution", "meal planning", "nutritional standards"],
  },
  {
    id: "parents-preferences",
    title: "Parents' Preferences",
    url: "/stakeholders_perception/parents_preferences/",
    category: "Research",
    description: "Research findings on parents' preferences for school food programs, including desired nutritional standards, cost considerations, and accessibility requirements.",
    tags: ["parents", "preferences", "research", "nutrition", "cost", "accessibility", "family engagement", "survey results", "stakeholder input"],
  },
  {
    id: "parents-opinions",
    title: "Parents' Opinions",
    url: "/stakeholders_perception/parents_opinions/",
    category: "Research",
    description: "Analysis of parent feedback and opinions on existing school food programs, including satisfaction levels, perceived benefits, and suggestions for improvement.",
    tags: ["parents", "opinions", "feedback", "satisfaction", "program evaluation", "improvement suggestions", "benefits", "challenges", "community input"],
  },
  {
    id: "measurement-tool",
    title: "Measurement Tool Assessment",
    url: "/measurement_tool_assessment/",
    category: "Research",
    description: "Tools and methods for assessing school food program effectiveness, including metrics for nutritional impact, academic performance correlation, and program sustainability.",
    tags: ["measurement", "assessment", "tools", "metrics", "evaluation", "effectiveness", "impact analysis", "data collection", "program monitoring", "outcomes"],
  },
  {
    id: "sfp-components",
    title: "SFP Components",
    url: "/sfp_components/",
    category: "Research",
    description: "Key components and structure of successful school food programs, including infrastructure requirements, staffing models, procurement strategies, and educational integration.",
    tags: ["components", "structure", "implementation", "infrastructure", "staffing", "procurement", "education", "program design", "best practices", "sustainability"],
  },
  {
    id: "national-characteristics",
    title: "National Characteristics of SFPs",
    url: "/national_characteristics/",
    category: "Research",
    description: "Comparative analysis of school food programs across different regions of Canada, highlighting regional variations, policy frameworks, and implementation approaches.",
    tags: ["national", "characteristics", "regional", "comparison", "policy", "implementation", "provincial differences", "federal guidelines", "case studies", "Canada",
      "elementary", "high school", "Consent", "form", "video", "instruction"
    ],
  },
  {
    id: "uoft-study",
    title: "University of Toronto, School Food Study",
    url: "/ongoing_studies/uoft_school_food_study/",
    category: "Ongoing Studies",
    description: "Current research on school food programs conducted at the University of Toronto, examining nutritional outcomes, implementation challenges, and policy recommendations.",
    tags: ["ongoing", "research", "university", "toronto", "uoft", "academic study", "nutrition science", "policy research", "education outcomes", "health impact"],
  },
  {
    id: "news",
    title: "News",
    url: "/news/",
    category: "Articles",
    description: "Recently launched research initiative examining innovative approaches to school food programs, focusing on sustainability, local food integration, and student engagement.",
    tags: ["new", "study", "school", "food", "programs", "innovation", "research", "sustainability", "local food", "student engagement", "methodology"],
  },
  {
    id: "publication",
    title: "Publication",
    url: "/publication/",
    category: "Publication",
    description: "Published research, reports, and policy papers on school food programs, providing evidence-based insights and recommendations for practitioners and policymakers.",
    tags: ["publication", "school", "food", "programs", "research papers", "policy documents", "reports", "academic literature", "evidence-based", "recommendations"],
  },
  {
    id: "about-fknm",
    title: "About FKNM",
    url: "/about_fknm/",
    category: "About",
    description: "What is Feeding Kids, Nourishing Minds? About the Feeding Kids, Nourishing Minds Dashboard. Meet The Team.",
    tags: ["fknm", "about", "information", "manitoba", "organization", "mission", "vision", "programs", "partnerships", "team", "contact"],
  },
  {
    id: "contact",
    title: "Contact",
    url: "/contact/",
    category: "Contact",
    description: "Contact information for questions or inquiries, feedback, or participate in our research.",
    tags: ["contact", "questions", "inquiries", "feedback", "participate", "research", "support", "communication", "feedback", "participation", "contact information", "email"],
  },
];
