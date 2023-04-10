export interface IExperience {
  name: string;
  position: string;
  jobDuties: string[];
  timeSpan: string;

  techStack?: string[];
  links?: {
    github: string;
    live: string;
  };
  images?: {
    desktop: string;
    mobile: string;
  };
}
export const experience: IExperience[] = [
  {
    name: "Bluesky Digital Labs",
    position: "Software Developer",
    jobDuties: [
      "Specialised in front-end development using React.js with TypeScript and various packages. Also familiar with back-end development using PHP Laravel.",
      "Worked efficiently in front-end design implementation and complex system design.",
      "Collaborated with back-end developers to design APIs and ensure seamless integration.",
    ],
    timeSpan: "June 2022 - April 2023",
  },
  {
    name: "Freelance",
    position: "Web Developer",
    jobDuties: [
      "Consulted with customers to gather requirements and discuss design choices.",
      "Planned website development, converting mockups into usable web presence with HTML, JavaScript, AJAX and JSON coding.",
      "Built various UI Reusable components in React and utilised tools like Gatsby.js for quickly building various prototypes with information gathered.",
    ],
    timeSpan: "September 2019 - June 2022",
  },
  {
    name: "SushiSushi",
    position: "Warehouse Storeman & Delivery Driver",
    jobDuties: [
      "Alternated goods in inventory by observing first-in and first-out approaches to keep shelves organised and properly stocked",
      "Evaluated supplies and product inventory to check for quality and quantity issues and returned unacceptable materials to vendors.",
      "Communicated with teammates and supervisors to maintain smooth operations and quickly handle any issues impacting warehouse operations or customer satisfaction.",
    ],
    timeSpan: "September 2018 - September 2021",
  },
  {
    name: "XaiTain Game Studio",
    position: "Game Designer",
    jobDuties: [
      "Collaborated with developers to conduct research and information gathering to troubleshoot and improve content quality.",
      "Assisted in idea generation and prototyping to assess content effectiveness.",
      "Cultivated professional working relationships with the marketing department, other design personnel, and upper management.",
    ],
    timeSpan: "April 2013 - July 2015",
  },
];
