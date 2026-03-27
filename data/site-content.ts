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
  streamTodo: "",
  youtubeEmbedUrl: "https://www.youtube.com/embed/live_stream?channel=UCW28w9V9qFRtfAkUYwhpM-Q",

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
      name: "Avant Climbing",
      websiteUrl: "https://www.avantclimbing.com",
      logoPath: "/sponsors/avant.png",
    },
    {
      name: "Cafe Ibis",
      websiteUrl: "https://www.caffeibis.com/",
      logoPath: "/sponsors/cafeibis.png",
    },
    {
      name: "ONCRUX",
      websiteUrl: "https://www.oncrux.com/",
      logoPath: "/sponsors/oncrux.avif",
    },
    // {
    //   name: "Als Sporting Goods",
    //   websiteUrl: "https://www.als.com/",
    //   logoPath: "/sponsors/als.svg",
    // },
    {
      name: "Vivian's Live Again",
      websiteUrl: "https://www.viviansliveagain.com/",
      logoPath: "/sponsors/viviansliveagain.webp",
    },
    {
      name: "Rocky Talkie",
      websiteUrl: "https://rockytalkie.com/",
      logoPath: "/sponsors/rockytalkie.png",
    },
    {
      name: "Black Diamond",
      websiteUrl: "https://blackdiamondequipment.com/",
      logoPath: "/sponsors/blackdiamond.png",
    },
    {
      name: "Mountain Panacea",
      websiteUrl: "https://mountainpanacea.com/",
      logoPath: "/sponsors/mountainpanacea.png",
    },
    {
      name: "Redbull",
      websiteUrl: "https://www.redbull.com/us-en",
      logoPath: "/sponsors/redbull.svg",
    },
    {
      name: "Ailrys",
      websiteUrl: "https://www.ailrys.com/",
      logoPath: "/sponsors/ailrys.avif",
    },
    // {
    //   name: "NAME",
    //   websiteUrl: "LINK",
    //   logoPath: "/sponsors/IMAGE",
    // },
  ] satisfies Sponsor[],
} as const;
