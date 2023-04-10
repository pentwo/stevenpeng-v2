import React, { useState } from "react";
import { useHotkeys } from "@mantine/hooks";
import { MantineProvider, ColorSchemeProvider, ColorScheme, AppShell, Space } from "@mantine/core";
import { siteTheme } from "../styles/siteTheme";
import SPHeader from "./Header";

// import "../../styles/index.css";
import Footer from "./Footer";

interface LayoutProps {
    children: React.ReactNode;
}

const links = [
    {
        link: "/about",
        label: "About",
    },
    {
        link: "#1",
        label: "Projects",
        links: [
            {
                link: "/react",
                label: "React.js",
            },
            {
                link: "/gasby",
                label: "Gatsby.js",
            },
            {
                link: "/wordpress",
                label: "Wordpress",
            },
        ],
    },

    {
        link: "/contact",
        label: "Contact",
    },
];

export function Layout({ children }: LayoutProps) {
    const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

    useHotkeys([["mod+J", () => toggleColorScheme()]]);

    return (
        <MantineProvider withGlobalStyles withNormalizeCSS theme={siteTheme}>
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
    );
}
