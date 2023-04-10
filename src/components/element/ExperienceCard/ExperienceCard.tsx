// REACT IMPORTS

import { List, Title, Text, Stack } from "@mantine/core";
import React from "react";
import { IExperience } from "../../../data/experience";
import { useMediaQuery } from "@mantine/hooks";

// NEXT IMPORTS

// COMPONENT IMPORTS

// MANTINE IMPORTS

// NETWORK IMPORTS

// TYPE IMPORTS

// FUNCTION IMPORTS

// STYLE IMPORTS

interface Props {
    experience: IExperience;
}

const ExperienceCard = ({ experience }: Props) => {
    const desktop = useMediaQuery("(min-width: 56.25em)");

    //
    return (
        <Stack>
            <Title order={4} size={desktop ? "h4" : "h5"} color="white">
                {experience.name}
            </Title>
            <Title order={3} size={desktop ? "h3" : "h4"} color="teal">
                {experience.position}
            </Title>
            <Text color="white" weight={900} size={desktop ? "1rem" : "0.8rem"}>
                {experience.timeSpan}
            </Text>

            <Title order={4} size={desktop ? "h4" : "h5"} color="teal">
                Job Duty
            </Title>

            <List
                size={desktop ? 16 : 14}
                sx={(theme) => ({
                    color: theme.white,
                })}
            >
                {experience.jobDuties.map((duty, index) => {
                    return <List.Item key={index}>{duty}</List.Item>;
                })}
            </List>

            {experience.techStack && (
                <Title order={4} size={desktop ? "h4" : "h5"}>
                    Tech
                </Title>
            )}
            <List
                size={desktop ? 16 : 14}
                sx={(theme) => ({
                    color: theme.white,
                })}
            >
                {experience.techStack?.map((tech, index) => {
                    return <List.Item key={index}>{tech}</List.Item>;
                })}
            </List>
        </Stack>
    );
};

export default ExperienceCard;
