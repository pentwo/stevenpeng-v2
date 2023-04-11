// REACT IMPORTS

import { BackgroundImage, Box, Center, Image, Stack } from "@mantine/core";
import React from "react";

// NEXT IMPORTS

// COMPONENT IMPORTS

// MANTINE IMPORTS

// NETWORK IMPORTS

// TYPE IMPORTS

// FUNCTION IMPORTS

// STYLE IMPORTS
import portraitBackground from "../../../images/portrait-background.webp";
import avatar from "../../../images/avatar.webp";
import { useMediaQuery } from "@mantine/hooks";

interface Props {}

const Portrait = (props: Props) => {
    const desktop = useMediaQuery("(min-width: 56.25em)");

    return (
        <BackgroundImage
            src={portraitBackground}
            sx={(theme) => ({
                position: "relative",
                height: desktop ? "50vh" : "30vh",
            })}
        >
            <Stack
                justify="flex-end"
                align="center"
                sx={(theme) => ({
                    height: "100%",
                    width: "100%",
                })}
            >
                <Box
                    sx={(theme) => ({
                        width: desktop ? "80%" : "50%",
                    })}
                >
                    <Image src={avatar} fit="cover" />
                </Box>
            </Stack>
        </BackgroundImage>
    );
};

export default Portrait;
