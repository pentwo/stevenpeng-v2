// REACT IMPORTS

import { Box, Title } from "@mantine/core";
import React from "react";
import ProjectCard from "../../element/ProjectCard/ProjectCard";
import { projects, sideProjects } from "../../../data/projects";
import { useMediaQuery } from "@mantine/hooks";

// NEXT IMPORTS

// COMPONENT IMPORTS

// MANTINE IMPORTS

// NETWORK IMPORTS

// TYPE IMPORTS

// FUNCTION IMPORTS

// STYLE IMPORTS

interface Props {}

const Projects = (props: Props) => {
    const desktop = useMediaQuery("(min-width: 56.25em)");

    return (
        <Box
            p={30}
            sx={(theme) => ({
                // height: "75vh",
                background: theme.fn.linearGradient(
                    225,
                    theme.colors.teal[5],
                    theme.colors.teal[9]
                ),
                borderRadius: `0 0 0 ${theme.radius.xl}`,
            })}
        >
            <Title order={2} size={desktop ? "h2" : "h3"} mb={30}>
                Projects
            </Title>
            {projects.map((project, index) => {
                return <ProjectCard project={project} key={index} />;
            })}

            {sideProjects && (
                <Title order={2} mb={30}>
                    Side-Projects
                </Title>
            )}
            {sideProjects.map((project, index) => {
                return <ProjectCard project={project} key={index} />;
            })}
        </Box>
    );
};

export default Projects;
