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
            "Scout Leader with a local group since 2016, and involved in Scouting for more than 15 years. These days that mostly means planning camps, sorting logistics and keeping families in the loop.",
        since: "2016",
        icon: <>🏕</>,
    },
    {
        name: "Rock Climbing",
        description:
            "Climbing since 2020 — I regularly get together with other climbers to train, share routes and pick up new techniques.",
        since: "2020",
        icon: <>🧗‍♀️</>,
    },
    {
        name: "3D Printing",
        description:
            "Designing and printing functional parts, fixes and the odd gadget — usually something around the house that needed a bracket yesterday.",
        icon: <>🖨️</>,
    },
    {
        name: "Homelab",
        description:
            "A small self-hosted setup at home running Docker services — home automation, DNS filtering, dashboards and a few tools I built myself — reachable securely from anywhere.",
        icon: <>🖥️</>,
    },
    {
        name: "Cooking",
        description:
            "Taiwanese home cooking: recreating the dishes I grew up with in a Perth kitchen.",
        icon: <>🍜</>,
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
    since?: string;
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
                cite={since ? `since ${since}` : undefined}
                sx={(theme) => ({
                    fontSize: theme.fontSizes.sm,
                })}
            >
                {description}
            </Blockquote>
        </Paper>
    );
};
