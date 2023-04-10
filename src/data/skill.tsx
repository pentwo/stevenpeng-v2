import { IconBrandReact, IconBrandPhp, IconCloud } from "@tabler/icons-react";
import { ITech, tech } from "./tech";
import React from "react";

export const skills: {
  name: string;
  icon: React.ReactNode;
  items: ITech[];
}[] = [
  {
    name: "Front End",
    icon: <IconBrandReact />,
    items: [
      tech.html,
      tech.css,
      tech.react,
      tech.typeScript,
      tech.javaScript,
      tech.nextjs,
    ],
  },
  {
    name: "Back End",
    icon: <IconBrandPhp />,
    items: [
      tech.node,
      tech.php,
      tech.laravel,
      tech.express,
      tech.mysql,
      tech.mongodb,
    ],
  },
  {
    name: "Cloud services",
    icon: <IconCloud />,
    items: [tech.aws, tech.firebase, tech.gcp],
  },
];
