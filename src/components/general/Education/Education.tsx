// REACT IMPORTS

import { Box, Divider, Group, List, Stack, Text, Title } from "@mantine/core";
import React from "react";
import { education, IEducation } from "../../../data/education";

const DESKTOP_MQ = "@media (min-width: 56.25em)";

interface Props {}

const Education = (props: Props) => {
    return (
        <Box
            p={30}
            sx={(theme) => ({
                background: theme.fn.linearGradient(
                    225,
                    theme.fn.darken(theme.colors.blue[4], 0.55),
                    theme.fn.darken(theme.colors.indigo[9], 0.55)
                ),
                borderRadius: `0 0 ${theme.radius.xl} 0`,
            })}
        >
            <Stack>
                <Title
                    order={2}
                    color="dark.2"
                    sx={{
                        fontSize: "34px",
                        [DESKTOP_MQ]: { fontSize: "42px" },
                    }}
                >
                    Education
                </Title>
                <Group
                    sx={(theme) => ({
                        height: "100%",
                    })}
                    noWrap
                >
                    <Divider
                        orientation="vertical"
                        sx={{
                            borderWidth: "1px",
                            [DESKTOP_MQ]: { borderWidth: "2px" },
                        }}
                    />
                    <Stack
                        sx={{
                            gap: "20px",
                            [DESKTOP_MQ]: { gap: "50px" },
                        }}
                    >
                        {education.map((edu, index) => {
                            return (
                                <React.Fragment key={`EduCard-${index}`}>
                                    <EducationCard education={edu} />
                                    {index !== education.length - 1 && (
                                        <Divider
                                            sx={{
                                                borderWidth: "1px",
                                                [DESKTOP_MQ]: { borderWidth: "2px" },
                                            }}
                                        />
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </Stack>
                </Group>
            </Stack>
        </Box>
    );
};

export default Education;

const EducationCard = ({ education }: { education: IEducation }) => {
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
                {education.institution}
            </Title>
            <Title
                order={3}
                color="teal"
                sx={{
                    fontSize: "20px",
                    [DESKTOP_MQ]: { fontSize: "28px" },
                }}
            >
                {education.qualification}
            </Title>
            <Text
                color="white"
                weight={900}
                sx={{
                    fontSize: "0.8rem",
                    [DESKTOP_MQ]: { fontSize: "1rem" },
                }}
            >
                {education.timeSpan}
            </Text>
            {education.notes && (
                <List
                    sx={(theme) => ({
                        color: theme.white,
                        fontSize: "14px",
                        [DESKTOP_MQ]: { fontSize: "16px" },
                    })}
                >
                    {education.notes.map((note, index) => {
                        return <List.Item key={index}>{note}</List.Item>;
                    })}
                </List>
            )}
        </Stack>
    );
};
