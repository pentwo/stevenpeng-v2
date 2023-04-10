// REACT IMPORTS

import { Badge, Grid, Group, Stack, Title } from "@mantine/core";
import React from "react";
import { ITech } from "../../../data/tech";
import { useMediaQuery } from "@mantine/hooks";

// NEXT IMPORTS

// COMPONENT IMPORTS

// MANTINE IMPORTS

// NETWORK IMPORTS

// TYPE IMPORTS

// FUNCTION IMPORTS

// STYLE IMPORTS

interface Props {
    skill: {
        name: string;
        icon: React.ReactNode;
        items: ITech[];
    };
}

const SkillCard = ({ skill }: Props) => {
    const desktop = useMediaQuery("(min-width: 56.25em)");

    return (
        // <Group position="apart" noWrap>
        <Grid>
            <Grid.Col
                span={4}
                sx={(theme) => ({
                    alignItems: "center",
                })}
            >
                <Stack
                    justify="center"
                    sx={(theme) => ({
                        height: "100%",
                    })}
                >
                    <Group noWrap>
                        <Title order={4} size={desktop ? "h4" : "h5"}>
                            {skill.name}
                        </Title>
                        {skill.icon}
                    </Group>
                </Stack>
            </Grid.Col>
            <Grid.Col span={1}></Grid.Col>
            <Grid.Col span={7}>
                <Group>
                    {skill.items.map((item, index) => {
                        // if (index > 1) return null;
                        return (
                            <Badge
                                variant="filled"
                                key={index}
                                color="orange.9"
                                size={desktop ? "md" : "sm"}
                            >
                                <Group spacing={8}>
                                    {item.icon && item.icon}
                                    {item.name}
                                </Group>
                            </Badge>
                        );
                    })}
                    <Badge variant="filled" color="orange.9">
                        ...
                    </Badge>
                </Group>
            </Grid.Col>
        </Grid>
        // </Group>
    );
};

export default SkillCard;
