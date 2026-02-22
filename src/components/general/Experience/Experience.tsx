// REACT IMPORTS

import { Box, Divider, Group, Stack, Title } from "@mantine/core";
import React from "react";
import ExperienceCard from "../../element/ExperienceCard/ExperienceCard";
import { experience } from "../../../data/experience";

const DESKTOP_MQ = "@media (min-width: 56.25em)";

interface Props {}

const Experience = (props: Props) => {
    return (
        <Box
            p={30}
            sx={(theme) => ({
                // height: "95vh",
                background: theme.fn.linearGradient(
                    225,
                    theme.fn.darken(theme.colors.cyan[3], 0.6),
                    theme.fn.darken(theme.colors.cyan[9], 0.6)
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
                    Experiences
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
                        {experience.map((exp, index) => {
                            return (
                                <React.Fragment key={`ECard-${index}`}>
                                    <ExperienceCard experience={exp} />
                                    {index !== experience.length - 1 && (
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

export default Experience;
