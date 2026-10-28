import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "../components/Layout/Layout";
import Hero from "../components/general/Hero/Hero";
import Portrait from "../components/general/Portrait/Portrait";
import { Box } from "@mantine/core";
import Experience from "../components/general/Experience/Experience";
import Projects from "../components/general/Projects/Projects";
import Interests from "../components/general/Interests/Interests";

const DESKTOP_MQ = "@media (min-width: 56.25em)";

// Single render tree for both layouts (no duplicated sections).
// Mobile: columns use `display: contents`, so all sections sit in one flex
// column ordered by `order`. Desktop: two columns (4:8 split).
const column = (basis: string) => ({
    display: "contents",
    [DESKTOP_MQ]: { display: "flex", flexDirection: "column" as const, flex: `0 0 ${basis}`, maxWidth: basis },
});

const IndexPage: React.FC<PageProps> = () => {
    return (
        <>
            <Layout>
                <Box
                    sx={(theme) => ({
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: theme.colors.teal[6],
                        [DESKTOP_MQ]: { flexDirection: "row" },
                    })}
                >
                    {/* LEFT PANEL */}
                    <Box sx={column(`${(100 * 4) / 12}%`)}>
                        <Box sx={{ order: 1 }}>
                            <Portrait />
                        </Box>
                        <Box sx={{ order: 3 }}>
                            <Experience />
                        </Box>
                        <Box sx={{ order: 5 }}>
                            <Interests />
                        </Box>
                        <Box h="10vh" sx={{ order: 6, display: "none", [DESKTOP_MQ]: { display: "block" } }} />
                    </Box>

                    {/* RIGHT PANEL */}
                    <Box sx={column(`${(100 * 8) / 12}%`)}>
                        <Box sx={{ order: 2 }}>
                            <Hero />
                        </Box>
                        <Box sx={{ order: 4 }}>
                            <Projects />
                        </Box>
                    </Box>
                </Box>
            </Layout>
        </>
    );
};

export default IndexPage;

// export const Head: HeadFC = () => <title>Steven Peng's Portfolio</title>;
