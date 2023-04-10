import {
  IconBrandAmazon,
  IconBrandCss3,
  IconBrandDjango,
  IconBrandFirebase,
  IconBrandGoogle,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandLaravel,
  IconBrandMantine,
  IconBrandMongodb,
  IconBrandMysql,
  IconBrandNextjs,
  IconBrandPhp,
  IconBrandPython,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
} from "@tabler/icons-react";
import React from "react";

export interface ITech {
  name: string;
  icon?: React.ReactNode;
}

const html = {
  name: "HTML",
  icon: <IconBrandHtml5 size={16} />,
};

const css = {
  name: "CSS",
  icon: <IconBrandCss3 size={16} />,
};

const react = {
  name: "React",
  icon: <IconBrandReact size={16} />,
};

const typeScript = {
  name: "TypeScript",
  icon: <IconBrandTypescript size={16} />,
};

const javaScript = {
  name: "JavaScript",
  icon: <IconBrandJavascript size={16} />,
};

const nextjs = {
  name: "Next.js",
  icon: <IconBrandNextjs size={16} />,
};

const mantine = {
  name: "Mantine CSS",
  icon: <IconBrandMantine size={16} />,
};

const tailwind = {
  name: "Tailwind CSS",
  icon: <IconBrandTailwind size={16} />,
};

const python = {
  name: "Python",
  icon: <IconBrandPython size={16} />,
};

const node = {
  name: "Node.js",
  icon: <IconBrandJavascript size={16} />,
};

const php = {
  name: "PHP",
  icon: <IconBrandPhp size={16} />,
};

const laravel = {
  name: "Laravel",
  icon: <IconBrandLaravel size={16} />,
};

const django = {
  name: "Django",
  icon: <IconBrandDjango size={16} />,
};

const mysql = {
  name: "MySQL",
  icon: <IconBrandMysql size={16} />,
};

const express = {
  name: "Express.js",
  icon: <IconBrandJavascript size={16} />,
};

const mongodb = {
  name: "MongoDB",
  icon: <IconBrandMongodb size={16} />,
};

const aws = {
  name: "AWS",
  icon: <IconBrandAmazon size={16} />,
};

const firebase = {
  name: "Firebase",
  icon: <IconBrandFirebase size={16} />,
};

const gcp = {
  name: "GCP",
  icon: <IconBrandGoogle size={16} />,
};

export const tech: Record<string, ITech> = {
  html,
  css,
  react,
  typeScript,
  javaScript,
  nextjs,
  mantine,
  tailwind,
  python,
  node,
  php,
  laravel,
  django,
  mysql,
  express,
  mongodb,
  aws,
  firebase,
  gcp,
};
