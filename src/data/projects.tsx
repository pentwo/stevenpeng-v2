import { tech } from "./tech";
import asone_1 from "../images/projects/asone/asone-01.webp";
import asone_2 from "../images/projects/asone/asone-02.webp";
import asone_3 from "../images/projects/asone/asone-03.webp";
import asone_4 from "../images/projects/asone/asone-04.webp";
import numero_1 from "../images/projects/numero/numero-01.webp";
import numero_2 from "../images/projects/numero/numero-02.webp";
import numero_3 from "../images/projects/numero/numero-03.webp";
import numero_4 from "../images/projects/numero/numero-04.webp";
import numero_5 from "../images/projects/numero/numero-05.webp";
import numero_6 from "../images/projects/numero/numero-06.webp";
import podcastplayer_1 from "../images/projects/podcastplayer/podcastplayer-01.webp";
import podcastplayer_2 from "../images/projects/podcastplayer/podcastplayer-02.webp";
import podcastplayer_3 from "../images/projects/podcastplayer/podcastplayer-03.webp";
import podcastplayer_4 from "../images/projects/podcastplayer/podcastplayer-04.webp";
import bucketlist_1 from "../images/projects/bucketlist/bucketlist-01.webp";
import bucketlist_2 from "../images/projects/bucketlist/bucketlist-02.webp";

export interface IProject {
    name: string;
    description: string;
    checkPoints?: string[];
    techStack: ITechStack[];
    links?: {
        github: string;
        live: string;
    };
    images?: {
        desktop: string[];
        mobile?: string[];
    };
}

interface ITechStack {
    name: string;
    icon?: React.ReactNode;
}

export const projects: IProject[] = [
    {
        name: "Educational Game Management Portal",
        description:
            "I designed and developed a front-end portal with key features: system admin can create school entities; school admin can add teachers, classes, and students, and view performance reports; and teachers can add classes and students, and track their performance. It offers an efficient and user-friendly experience for managing student performance in the game, and I believe it will contribute significantly to the project's success.",
        techStack: [tech.react, tech.typeScript, tech.mantine],
        images: {
            desktop: [numero_1, numero_2, numero_3, numero_4, numero_5, numero_6],
        },
    },
    {
        name: "Aboriginal Educational Program Portal",
        description:
            "As the lead front-end developer on an innovative Aboriginal educational project, I designed a user-friendly platform focused on cultural education. Key features include:",
        checkPoints: [
            "Participant Interface: A dashboard for completing tasks, scheduling, and tracking cultural journey progress, with family tree and kinship diagrams for heritage exploration.",
            "Course Manager Interface: A streamlined platform for monitoring and managing participants' progress, ensuring engagement with learning material.",
            "Administrative Interface: A comprehensive dashboard for full website control, including participant management, content updates, and course manager oversight.",
        ],
        techStack: [tech.react, tech.typeScript, tech.mantine],
        images: {
            desktop: [asone_1, asone_2, asone_3, asone_4],
        },
    },
];

export const sideProjects: IProject[] = [
    {
        name: "Perth Bucket List Web App",
        description: "",

        techStack: [tech.react, tech.typeScript, tech.tailwind],

        checkPoints: [
            "Designed and developed a full-stack web app, enabling users to browse, add to their list, and share completed items.",
            "Utilised React.js + TypeScript for front-end development and deployed on Netlify.",
            "Implemented Tailwind CSS for fast, customisable, and responsive design.",
        ],
        links: {
            github: "https://github.com/pentwo/perth-bucketlist-frontend",
            live: "https://perth-bucket-list.netlify.app/",
        },
        images: {
            desktop: [bucketlist_1, bucketlist_2],
        },
    },
    {
        name: "Podcast Player Web App",
        description: "",
        checkPoints: [
            "Designed and developed a ReactJS-based web app for a podcast player.",
            "Integrated Apple iTunes API for podcast search and playlist creation based on search criteria and genre.",
            "Created a responsive, modular, client-side HTML5 audio podcast player with playlist functionality.",
        ],
        techStack: [tech.react, tech.typeScript, tech.tailwind],

        links: {
            github: "https://github.com/pentwo/podcast-search-and-play",
            live: "https://pentwo.github.io/podcast-search-and-play/",
        },

        images: {
            desktop: [podcastplayer_1, podcastplayer_2, podcastplayer_3, podcastplayer_4],
        },
    },
];
