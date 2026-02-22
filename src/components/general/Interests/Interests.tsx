// REACT IMPORTS

import { Box, Paper, Title, Text, Blockquote } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import React from "react";

const DESKTOP_MQ = "@media (min-width: 56.25em)";

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
            <Title
                order={2}
                mb={30}
                sx={{
                    fontSize: "34px",
                    [DESKTOP_MQ]: { fontSize: "42px" },
                }}
            >
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
            <Title
                order={4}
                sx={{
                    fontSize: "16px",
                    [DESKTOP_MQ]: { fontSize: "20px" },
                }}
            >
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
