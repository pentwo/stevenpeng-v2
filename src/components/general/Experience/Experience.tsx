// REACT IMPORTS

import { Box, Divider, Group, Stack, Title } from "@mantine/core";
import React from "react";
import ExperienceCard from "../../element/ExperienceCard/ExperienceCard";
import { experience } from "../../../data/experience";
import { useMediaQuery } from "@mantine/hooks";

// NEXT IMPORTS

// COMPONENT IMPORTS

// MANTINE IMPORTS

// NETWORK IMPORTS

// TYPE IMPORTS

// FUNCTION IMPORTS

// STYLE IMPORTS

interface Props {}

const Experience = (props: Props) => {
    const desktop = useMediaQuery("(min-width: 56.25em)");

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
                <Title order={2} size={desktop ? "h2" : "h3"} color="dark.2">
                    Experiences
                </Title>
                <Group
                    sx={(theme) => ({
                        height: "100%",
                    })}
                    noWrap
                >
                    <Divider orientation="vertical" size={desktop ? "md" : "sm"} />
                    <Stack spacing={desktop ? 50 : 20}>
                        {experience.map((exp, index) => {
                            return (
                                <React.Fragment key={`ECard-${index}`}>
                                    <ExperienceCard experience={exp} />
                                    {index !== experience.length - 1 && (
                                        <Divider size={desktop ? "md" : "sm"} />
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
