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
    id: "sfp-general",
    title: "SFPs General Information",
    url: "/intake_visuals/SFPs_general_information/",
    category: "Research",
    description:
      "Overview and statistics of school food programs across different regions.",
    tags: ["school food", "programs", "statistics", "overview"],
  },
  {
    id: "sfp-food-breakdown",
    title: "SFPs Food Breakdown",
    url: "/intake_visuals/SFPs_food_breakdown/",
    category: "Research",
    description:
      "Detailed analysis of nutritional content and food distribution in programs.",
    tags: ["food", "nutrition", "analysis"],
  },
  {
    id: "parents-preferences",
    title: "Parents' Preferences",
    url: "/stakeholders_perception/parents_preferences/",
    category: "Stakeholders Perception",
    description:
      "Research findings on parents' preferences for school food programs.",
    tags: ["parents", "preferences", "research"],
  },
  {
    id: "parents-opinions",
    title: "Parents' Opinions",
    url: "/stakeholders_perception/parents_opinions/",
    category: "Stakeholders Perception",
    description:
      "Analysis of parent feedback and opinions on school food programs.",
    tags: ["parents", "opinions", "feedback"],
  },
  {
    id: "measurement-tool",
    title: "Measurement Tool Assessment",
    url: "/measurement_tool_assessment/",
    category: "Research",
    description:
      "Tools and methods for assessing school food program effectiveness.",
    tags: ["measurement", "assessment", "tools"],
  },
  {
    id: "sfp-components",
    title: "SFP Components",
    url: "/sfp_components/",
    category: "Research",
    description:
      "Key components and structure of successful school food programs.",
    tags: ["components", "structure", "implementation"],
  },
  {
    id: "national-characteristics",
    title: "National Characteristics of SFPs",
    url: "/national_characteristics/",
    category: "Research",
    description: "Analysis of school food programs across different regions.",
    tags: ["national", "characteristics", "comparison"],
  },
  {
    id: "uoft-study",
    title: "University of Toronto School Food Study",
    url: "/ongoing_studies/uoft_school_food_study/",
    category: "Ongoing Studies",
    description:
      "Current research on school food programs at University of Toronto.",
    tags: ["ongoing", "research", "university", "toronto"],
  },
];
