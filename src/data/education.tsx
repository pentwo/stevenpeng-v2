export interface IEducation {
  institution: string;
  qualification: string;
  timeSpan: string;
  notes?: string[];
}

export const education: IEducation[] = [
  {
    institution: "RMIT University",
    qualification: "Graduate Certificate in Cyber Security",
    timeSpan: "In progress",
    notes: [
      "Building a formal security foundation — networks, risk and secure systems — to complement hands-on platform security work.",
    ],
  },
];
