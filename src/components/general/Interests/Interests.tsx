// REACT IMPORTS

import { Box, Paper, Title, Text, Blockquote } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconChevronRight } from "@tabler/icons-react";
import React from "react";

// NEXT IMPORTS

// COMPONENT IMPORTS

// MANTINE IMPORTS

// NETWORK IMPORTS

// TYPE IMPORTS

// FUNCTION IMPORTS

// STYLE IMPORTS

interface Props {}

const interests: IInterest[] = [
    {
        name: "Scout Leader",
        description:
            "I am a scout leader for a local scout group. I have been a scout leader for 5 years and have been a scout for more than 15 years.",
        since: "2016",
        icon: <>🏕</>,
    },
    {
        name: "Rock Climbing",
        description:
            "I have been rock climbing for 3 years and actively gather with other climbers to climb and learn new techniques.",
        since: "2020",
        icon: <>🧗‍♀️</>,
    },
];

const Interests = (props: Props) => {
    const desktop = useMediaQuery("(min-width: 56.25em)");

    return (
        <Box
            p={30}
            sx={(theme) => ({
                background: theme.fn.linearGradient(
                    180,
                    theme.colors.green[2],
                    theme.colors.teal[3]
                ),
                borderRadius: `0 0 ${theme.radius.xl} 0`,
            })}
        >
            <Title order={2} size={desktop ? "h2" : "h3"} mb={30}>
                Interests
            </Title>
            {interests.map((interest, index) => {
                return <Interest {...interest} key={index} />;
            })}
        </Box>
    );
};

export default Interests;

interface IInterest {
    name: string;
    description: string;
    since: string;
    icon?: React.ReactNode;
}

const Interest = ({ name, description, since, icon }: IInterest) => {
    const desktop = useMediaQuery("(min-width: 56.25em)");

    return (
        <Paper
            p="md"
            radius={5}
            shadow="sm"
            mb={50}
            sx={(theme) => ({
                background: theme.fn.linearGradient(
                    180,
                    theme.colors.green[0],
                    theme.colors.teal[1]
                ),
            })}
        >
            <Title order={4} size={desktop ? "h4" : "h5"}>
                {icon ?? null} {name}
            </Title>
            <Blockquote
                icon={<IconChevronRight />}
                cite={`since ${since}`}
                sx={(theme) => ({
                    fontSize: theme.fontSizes.sm,
                })}
            >
                {description}
            </Blockquote>
        </Paper>
    );
};
