import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "../components/Layout/Layout";
import Hero from "../components/general/Hero/Hero";
import Portrait from "../components/general/Portrait/Portrait";
import { Box, Grid, SimpleGrid, Stack } from "@mantine/core";
import Experience from "../components/general/Experience/Experience";
import Projects from "../components/general/Projects/Projects";
import Interests from "../components/general/Interests/Interests";
import { useMediaQuery } from "@mantine/hooks";

const IndexPage: React.FC<PageProps> = () => {
    const desktop = useMediaQuery("(min-width: 56.25em)");

    return (
        <Layout>
            {/*  */}

            {desktop ? (
                <Grid gutter={0}>
                    {/* LEFT PANEL */}
                    <Grid.Col
                        span={4}
                        sx={(theme) => ({
                            minHeight: "325vh",
                            backgroundColor: theme.colors.teal[6],
                        })}
                    >
                        <Stack spacing={0}>
                            <Portrait />
                            <Experience />
                            <Interests />
                        </Stack>
                    </Grid.Col>

                    {/* RIGHT PANEL */}

                    <Grid.Col
                        span={8}
                        sx={(theme) => ({
                            minHeight: "300vh",
                        })}
                    >
                        <Stack
                            spacing={0}
                            sx={(theme) => ({
                                backgroundColor: theme.colors.teal[6],
                            })}
                        >
                            <Hero />
                            <Projects />
                            <Box
                                h={"50vh"}
                                sx={(theme) => ({
                                    backgroundColor: theme.colors.teal[6],
                                })}
                            ></Box>
                        </Stack>
                    </Grid.Col>
                </Grid>
            ) : (
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
            )}
        </Layout>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Steven Peng's Portfolio</title>;
