import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "../components/Layout/Layout";
import Hero from "../components/general/Hero/Hero";
import Portrait from "../components/general/Portrait/Portrait";
import { Box, Grid, Stack } from "@mantine/core";
import Experience from "../components/general/Experience/Experience";
import Projects from "../components/general/Projects/Projects";
import Interests from "../components/general/Interests/Interests";

const DESKTOP_MQ = "@media (min-width: 56.25em)";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <>
            <Layout>
                {/* Desktop layout */}
                <Box
                    sx={{
                        display: "none",
                        [DESKTOP_MQ]: { display: "block" },
                    }}
                >
                    <Grid gutter={0}>
                        {/* LEFT PANEL */}
                        <Grid.Col
                            span={4}
                            sx={(theme) => ({
                                backgroundColor: theme.colors.teal[6],
                            })}
                        >
                            <Stack spacing={0}>
                                <Portrait />
                                <Experience />
                                <Interests />
                                <Box
                                    h={"10vh"}
                                    sx={(theme) => ({
                                        backgroundColor: theme.colors.teal[6],
                                    })}
                                ></Box>
                            </Stack>
                        </Grid.Col>

                        {/* RIGHT PANEL */}
                        <Grid.Col span={8}>
                            <Stack
                                spacing={0}
                                sx={(theme) => ({
                                    backgroundColor: theme.colors.teal[6],
                                })}
                            >
                                <Hero />
                                <Projects />
                            </Stack>
                        </Grid.Col>
                    </Grid>
                </Box>

                {/* Mobile layout */}
                <Box
                    sx={{
                        [DESKTOP_MQ]: { display: "none" },
                    }}
                >
                    <Stack
                        spacing={0}
                        sx={(theme) => ({
                            backgroundColor: theme.colors.teal[6],
                        })}
                    >
                        <Portrait />
                        <Hero />
                        <Experience />
                        <Projects />
                        <Interests />
                    </Stack>
                </Box>
            </Layout>
        </>
    );
};

export default IndexPage;

// export const Head: HeadFC = () => <title>Steven Peng's Portfolio</title>;
