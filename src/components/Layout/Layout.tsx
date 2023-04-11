import React, { useState } from "react";
import { useHotkeys } from "@mantine/hooks";
import { MantineProvider, ColorSchemeProvider, ColorScheme, AppShell, Space } from "@mantine/core";
import { siteTheme } from "../styles/siteTheme";
import SPHeader from "./Header";
import { Helmet } from "react-helmet";
import SiteImage from "../../images/site-image.png";

// import "../../styles/index.css";
import Footer from "./Footer";

interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
    const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

    useHotkeys([["mod+J", () => toggleColorScheme()]]);

    return (
        <>
            <MantineProvider withGlobalStyles withNormalizeCSS theme={siteTheme}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Steven Peng's Portfolio</title>

                    <meta name="title" content="Steven Peng's Portfolio" />
                    <meta
                        name="description"
                        content=" Elevating web experiences with passion and expertise in cutting-edge technologies. Mastering responsive design across platforms through proficiency in HTML, CSS, JavaScript, React.js, and TypeScript."
                    />

                    <meta property="og:title" content="Steven Peng's Portfolio" />
                    <meta property="og:site_name" content="Steven Peng's Portfolio" />
                    <meta property="og:type" content="porfolio" />
                    <meta property="og:url" content="https://www.stevenpeng.com.au/" />
                    <meta property="og:image" content={SiteImage} />
                    <meta property="og:locale" content="en_AU" />
                    <meta
                        property="og:description"
                        content=" Elevating web experiences with passion and expertise in cutting-edge technologies. Mastering responsive design across platforms through proficiency in HTML, CSS, JavaScript, React.js, and TypeScript."
                    />
                </Helmet>

                <AppShell
                    padding={0}
                    // navbar={<Navbar width={{ base: 300 }} height={500} p="xs">{/* Navbar content */}</Navbar>}
                    // header={<SPHeader links={links} />}
                    footer={<Footer />}
                    styles={(theme) => ({
                        //   paddingBottom: 20,
                        main: {
                            backgroundColor: theme.colors.teal[6],
                        },
                    })}
                >
                    {/* <Space h={60} /> */}
                    {children}
                </AppShell>
            </MantineProvider>
        </>
    );
}
