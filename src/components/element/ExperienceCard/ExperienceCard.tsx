// REACT IMPORTS

import { List, Title, Text, Stack } from "@mantine/core";
import React from "react";
import { IExperience } from "../../../data/experience";

const DESKTOP_MQ = "@media (min-width: 56.25em)";

interface Props {
    experience: IExperience;
}

const ExperienceCard = ({ experience }: Props) => {
    return (
        <Stack>
            <Title
                order={4}
                color="white"
                sx={{
                    fontSize: "16px",
                    [DESKTOP_MQ]: { fontSize: "20px" },
                }}
            >
                {experience.name}
            </Title>
            <Title
                order={3}
                color="teal"
                sx={{
                    fontSize: "20px",
                    [DESKTOP_MQ]: { fontSize: "34px" },
                }}
            >
                {experience.position}
            </Title>
            <Text
                color="white"
                weight={900}
                sx={{
                    fontSize: "0.8rem",
                    [DESKTOP_MQ]: { fontSize: "1rem" },
                }}
            >
                {experience.timeSpan}
            </Text>

            <Title
                order={4}
                color="teal"
                sx={{
                    fontSize: "16px",
                    [DESKTOP_MQ]: { fontSize: "20px" },
                }}
            >
                Job Duty
            </Title>

            <List
                sx={(theme) => ({
                    color: theme.white,
                    fontSize: "14px",
                    [DESKTOP_MQ]: { fontSize: "16px" },
                })}
            >
                {experience.jobDuties.map((duty, index) => {
                    return <List.Item key={index}>{duty}</List.Item>;
                })}
            </List>

            {experience.techStack && (
                <Title
                    order={4}
                    sx={{
                        fontSize: "16px",
                        [DESKTOP_MQ]: { fontSize: "20px" },
                    }}
                >
                    Tech
                </Title>
            )}
            <List
                sx={(theme) => ({
                    color: theme.white,
                    fontSize: "14px",
                    [DESKTOP_MQ]: { fontSize: "16px" },
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
