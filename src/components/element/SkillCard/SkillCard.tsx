// REACT IMPORTS

import { Badge, Grid, Group, Stack, Title } from "@mantine/core";
import React from "react";
import { ITech } from "../../../data/tech";

const DESKTOP_MQ = "@media (min-width: 56.25em)";

interface Props {
    skill: {
        name: string;
        icon: React.ReactNode;
        items: ITech[];
    };
}

const SkillCard = ({ skill }: Props) => {
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
                        <Title
                            order={4}
                            sx={{
                                fontSize: "16px",
                                [DESKTOP_MQ]: { fontSize: "20px" },
                            }}
                        >
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
                                color="orange.6"
                                size="sm"
                                sx={(theme) => ({
                                    color: theme.black,
                                    [DESKTOP_MQ]: {
                                        fontSize: "13px",
                                        height: "26px",
                                        paddingLeft: "10px",
                                        paddingRight: "10px",
                                    },
                                })}
                            >
                                <Group spacing={8}>
                                    {item.icon && item.icon}
                                    {item.name}
                                </Group>
                            </Badge>
                        );
                    })}
                    <Badge
                        variant="filled"
                        color="orange.6"
                        sx={(theme) => ({
                            color: theme.black,
                        })}
                    >
                        ...
                    </Badge>
                </Group>
            </Grid.Col>
        </Grid>
        // </Group>
    );
};

export default SkillCard;
