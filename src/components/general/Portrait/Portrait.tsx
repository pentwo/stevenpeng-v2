// REACT IMPORTS

import { BackgroundImage, Box, Center, Image, Stack } from "@mantine/core";
import React from "react";

// STYLE IMPORTS
import portraitBackground from "../../../images/portrait-background.webp";
import avatar from "../../../images/avatar.webp";

const DESKTOP_MQ = "@media (min-width: 56.25em)";

interface Props {}

const Portrait = (props: Props) => {
    return (
        <BackgroundImage
            src={portraitBackground}
            sx={(theme) => ({
                position: "relative",
                height: "30vh",
                [DESKTOP_MQ]: {
                    height: "50vh",
                },
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
                        width: "50%",
                        [DESKTOP_MQ]: {
                            width: "80%",
                        },
                    })}
                >
                    <Image w={350} src={avatar} fit="cover" alt="Steven Peng's portrait image" />
                </Box>
            </Stack>
        </BackgroundImage>
    );
};

export default Portrait;
