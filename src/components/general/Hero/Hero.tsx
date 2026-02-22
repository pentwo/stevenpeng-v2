// REACT IMPORTS

import { Box, Stack, Title, Text, Space, Center, Button, Group, Divider } from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";
import React from "react";
import SkillCard from "../../element/SkillCard/SkillCard";
import { skills } from "../../../data/skill";

const DESKTOP_MQ = "@media (min-width: 56.25em)";

interface Props {}

const Hero = (props: Props) => {
    return (
        <Box
            px={30}
            sx={(theme) => ({
                paddingTop: 30,
                paddingBottom: 30,
                [DESKTOP_MQ]: {
                    paddingTop: 100,
                    paddingBottom: 100,
                },
                minHeight: "65vh",
                background: theme.fn.linearGradient(
                    180,
                    theme.colors.gray[0],
                    theme.colors.teal[1]
                ),
                borderRadius: `0 0 0 ${theme.radius.xl}`,
            })}
        >
            <Center
                sx={(theme) => ({
                    height: "100%",
                })}
            >
                <Stack>
                    <Title
                        order={3}
                        sx={{
                            fontSize: "20px",
                            [DESKTOP_MQ]: { fontSize: "34px" },
                        }}
                    >
                        👋 你好! Hello! こんにちは!
                    </Title>
                    <Group>
                        <Title
                            order={3}
                            sx={{
                                fontSize: "20px",
                                [DESKTOP_MQ]: { fontSize: "34px" },
                            }}
                        >
                            I am
                        </Title>

                        <Title
                            order={1}
                            sx={(theme) => ({
                                fontSize: "42px",
                                [DESKTOP_MQ]: { fontSize: "58px" },
                                background: theme.fn.linearGradient(
                                    90,
                                    theme.colors.blue[8],
                                    theme.colors.teal[6]
                                ),
                                backdropClip: "text",
                                textFillColor: "transparent",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            })}
                        >
                            Steven Peng
                        </Title>
                    </Group>
                    <Title
                        order={3}
                        sx={{
                            fontSize: "20px",
                            [DESKTOP_MQ]: { fontSize: "34px" },
                        }}
                    >
                        A Frontend Developer
                    </Title>

                    <Text
                        sx={{
                            fontSize: "16px",
                            [DESKTOP_MQ]: { fontSize: "20px" },
                        }}
                    >
                        Elevating web experiences with passion and expertise in cutting-edge
                        technologies. Mastering responsive design across platforms through
                        proficiency in HTML, CSS, JavaScript, React.js, and TypeScript.
                    </Text>

                    <Space h={"xl"} />

                    {/* SKILLS */}
                    <Title
                        order={3}
                        sx={{
                            fontSize: "20px",
                            [DESKTOP_MQ]: { fontSize: "34px" },
                        }}
                    >
                        Skills
                    </Title>
                    <Stack spacing={"xl"}>
                        {skills.map((skill, i) => {
                            return (
                                <React.Fragment key={`skill-${i}`}>
                                    <SkillCard skill={skill} />
                                    {i !== skills.length - 1 && (
                                        <Divider size={"sm"} variant="dotted" />
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </Stack>

                    <Space h={"xl"} />

                    {/* CONTACT */}
                    <Title
                        order={3}
                        sx={{
                            fontSize: "20px",
                            [DESKTOP_MQ]: { fontSize: "34px" },
                        }}
                    >
                        Contact
                    </Title>
                    <Group>
                        <Button
                            component="a"
                            href="https://www.linkedin.com/in/steven-peng/"
                            target="_blank"
                            variant="filled"
                            sx={(theme) => ({
                                backgroundColor: "#0077B5",
                            })}
                            leftIcon={<IconBrandLinkedin />}
                        >
                            Linkedin
                        </Button>
                        <Button
                            component="a"
                            href="https://github.com/pentwo/"
                            target="_blank"
                            variant="filled"
                            sx={(theme) => ({
                                backgroundColor: "#4078c0",
                            })}
                            leftIcon={<IconBrandGithub />}
                        >
                            Github
                        </Button>
                        <Button
                            component="a"
                            href="mailto:hello@stevenpeng.com.au"
                            variant="filled"
                            color="red.9"
                            leftIcon={<IconMail />}
                        >
                            Email
                        </Button>
                    </Group>
                </Stack>
            </Center>
        </Box>
    );
};

export default Hero;
