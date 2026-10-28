import { IconBrandReact, IconBrandPython, IconCloud } from "@tabler/icons-react";
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
      tech.react,
      tech.typeScript,
      tech.nextjs,
      tech.javaScript,
      tech.mantine,
      tech.tailwind,
    ],
  },
  {
    name: "Back End",
    icon: <IconBrandPython />,
    items: [
      tech.python,
      tech.fastapi,
      tech.postgres,
      tech.node,
      tech.mysql,
      tech.laravel,
    ],
  },
  {
    name: "Cloud & Infra",
    icon: <IconCloud />,
    items: [
      tech.aws,
      tech.docker,
      tech.linux,
      tech.mqtt,
      tech.cloudflare,
      tech.tailscale,
    ],
  },
];
