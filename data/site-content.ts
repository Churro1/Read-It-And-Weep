export type HeatDownload = {
  title: string;
  status: "coming-soon" | "available";
  description: string;
  fileUrl?: string;
};

export type Sponsor = {
  name: string;
  websiteUrl: string;
  logoPath: string;
};

export const siteContent = {
  eventTitle: "Read it and Weep Boulder Competition",
  eventSubtitle: "Hosted at Utah State University",
  streamTodo:
    "TODO: Add your YouTube embed URL in data/site-content.ts once the stream link is finalized.",
  youtubeEmbedUrl: "",

//   HEATS - UPDATE WITH REAL HEAT NAMES, STATUSES, DESCRIPTIONS, AND FILE URLS AS THEY BECOME AVAILABLE
  heatDownloads: [
    {
      title: "Men's Intermediate Qualifiers Replay",
      status: "coming-soon",
      description: "Will be uploaded after the competition.",
      fileUrl: undefined,
    },
    {
      title: "Women's Intermediate Qualifiers Replay",
      status: "coming-soon",
      description: "Will be uploaded after the competition.",
      fileUrl: undefined,
    },
    {
      title: "Men's Intermediate Finals Replay",
      status: "coming-soon",
      description: "Will be uploaded after the competition.",
      fileUrl: undefined,
    },
    {
      title: "Women's Intermediate Finals Replay",
      status: "coming-soon",
      description: "Will be uploaded after the competition.",
      fileUrl: undefined,
    },
    {
      title: "Men's Advanced Qualifiers Replay",
      status: "coming-soon",
      description: "Will be uploaded after the competition.",
      fileUrl: undefined,
    },
    {
      title: "Women's Advanced Qualifiers Replay",
      status: "coming-soon",
      description: "Will be uploaded after the competition.",
      fileUrl: undefined,
    },
    {
      title: "Women's Advanced Finals Replay",
      status: "coming-soon",
      description: "Will be uploaded after the competition.",
      fileUrl: undefined,
    },
    {
      title: "Men's Advanced Finals Replay",
      status: "coming-soon",
      description: "Will be uploaded after the competition.",
      fileUrl: undefined,
    },
  ] satisfies HeatDownload[],

//   SPONSORS - UPDATE WITH REAL SPONSORS AND LOGOS
  sponsors: [
    {
      name: "Summit Supply Co.",
      websiteUrl: "https://example.com/summit",
      logoPath: "/sponsors/summit-supply.svg",
    },
    {
      name: "Granite Grind",
      websiteUrl: "https://example.com/granite",
      logoPath: "/sponsors/granite-grind.svg",
    },
    {
      name: "Crux Fuel",
      websiteUrl: "https://example.com/crux",
      logoPath: "/sponsors/crux-fuel.svg",
    },
  ] satisfies Sponsor[],
} as const;
