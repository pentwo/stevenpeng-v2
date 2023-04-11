import { createStyles, Container, Group, ActionIcon, rem, Title } from "@mantine/core";
import {
    IconBrandTwitter,
    IconBrandYoutube,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandGithub,
    IconBrandTwitterFilled,
} from "@tabler/icons-react";
// import { MantineLogo } from "@mantine/ds";
import React from "react";

const useStyles = createStyles((theme) => ({
    footer: {
        // marginTop: rem(10),
        borderTop: `${rem(1)} solid ${
            theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
        }`,
    },

    inner: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,

        [theme.fn.smallerThan("xs")]: {
            flexDirection: "column",
        },
    },

    links: {
        [theme.fn.smallerThan("xs")]: {
            marginTop: theme.spacing.md,
        },
    },
}));

function Footer() {
    const { classes } = useStyles();

    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
                {/* <MantineLogo size={28} /> */}
                <Title order={4}>Steven Peng's Portfolio</Title>
                <Group spacing={0} className={classes.links} position="right" noWrap>
                    <ActionIcon
                        component="a"
                        aria-label="Link to Steven Peng's LinkedIn profile"
                        size="lg"
                        href="https://www.linkedin.com/in/steven-peng/"
                        target="_blank"
                    >
                        <IconBrandLinkedin size="1.05rem" stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon
                        component="a"
                        aria-label="Link to Steven Peng's Github profile"
                        size="lg"
                        href="https://github.com/pentwo/"
                        target="_blank"
                    >
                        <IconBrandGithub size="1.05rem" stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon
                        component="a"
                        aria-label="Link to Steven Peng's Twitter profile"
                        size="lg"
                        href="https://twitter.com/pentwo/"
                        target="_blank"
                    >
                        <IconBrandTwitter size="1.05rem" stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Container>
        </div>
    );
}

export default Footer;
