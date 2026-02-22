// REACT IMPORTS

import {
    List,
    Stack,
    Title,
    Text,
    Button,
    Group,
    Badge,
    Paper,
    Image,
    Modal,
    Box,
    Transition,
    SimpleGrid,
    Center,
} from "@mantine/core";
import { IconBrandGithub, IconBrowser } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { IProject } from "../../../data/projects";
import { useDisclosure, useHover, useMediaQuery } from "@mantine/hooks";

const DESKTOP_MQ = "@media (min-width: 56.25em)";

interface Props {
    project: IProject;
}

const ProjectCard = ({ project }: Props) => {
    const [opened, { open, close }] = useDisclosure(false);
    const [currentImage, setCurrentImage] = useState<string>("");

    useEffect(() => {
        if (currentImage !== "") {
            open();
        } else {
            close();
        }
    }, [currentImage]);

    return (
        <>
            <Paper
                px="md"
                py={30}
                radius={5}
                shadow="sm"
                mb={50}
                sx={(theme) => ({
                    position: "relative",
                })}
            >
                <Stack>
                    <Title
                        order={4}
                        sx={(theme) => ({
                            fontSize: "16px",
                            [DESKTOP_MQ]: { fontSize: "20px" },
                            padding: "5px 10px",
                            borderRadius: 5,
                            position: "absolute",
                            top: 0,
                            left: -10,

                            transform: "translateY(-50%)  skewY(-2deg)",

                            background: theme.fn.linearGradient(
                                225,
                                theme.colors.orange[7],
                                theme.colors.orange[9]
                            ),
                        })}
                    >
                        {project.name}
                    </Title>
                    {project.description && (
                        <Text
                            sx={{
                                fontSize: "13px",
                                [DESKTOP_MQ]: { fontSize: "16px" },
                            }}
                        >
                            {project.description}
                        </Text>
                    )}

                    {/* Check Points */}
                    <List
                        withPadding
                        sx={{
                            fontSize: "14px",
                            [DESKTOP_MQ]: { fontSize: "16px" },
                        }}
                    >
                        {project.checkPoints?.map((checkPoint, index) => {
                            return <List.Item key={index}>{checkPoint}</List.Item>;
                        })}
                    </List>

                    {/* TECH */}
                    <Title order={5}>Tech</Title>
                    <Group>
                        {project.techStack.map((tech, index) => {
                            return (
                                <Badge
                                    size="md"
                                    // pl={3}
                                    variant="outline"
                                    key={index}
                                    color="orange.9"
                                >
                                    <Group spacing={8}>
                                        {tech.icon && tech.icon}
                                        {tech.name}
                                    </Group>
                                </Badge>
                            );
                        })}
                    </Group>

                    {/* Images */}
                    {project.images && (
                        <Box
                            sx={(theme) => ({
                                position: "relative",
                            })}
                        >
                            <Title order={5} mb={20}>
                                Screenshots
                            </Title>
                            <SimpleGrid
                                cols={3}
                                breakpoints={[{ minWidth: "56.25em", cols: 6 }]}
                            >
                                {project.images.desktop.map((image, index) => {
                                    return (
                                        <ImageWithHover
                                            alt={`${project.name} screenshot - ${index}`}
                                            key={index}
                                            imageUrl={image}
                                            onClick={() => {
                                                setCurrentImage(image);
                                            }}
                                        />
                                    );
                                })}
                            </SimpleGrid>
                        </Box>
                    )}

                    {/* Links */}
                    {project.links && (
                        <>
                            <Title order={5}>Links</Title>

                            <Group>
                                <Button
                                    component="a"
                                    href={project.links.github}
                                    target="_blank"
                                    color="orange.8"
                                    variant="filled"
                                    leftIcon={<IconBrandGithub />}
                                >
                                    Github
                                </Button>
                                <Button
                                    component="a"
                                    href={project.links.live}
                                    target="_blank"
                                    color="orange.8"
                                    variant="filled"
                                    leftIcon={<IconBrowser />}
                                >
                                    Live
                                </Button>
                            </Group>
                        </>
                    )}
                </Stack>
            </Paper>
            <ScreenshotModal
                title={project.name}
                image={currentImage}
                opened={opened}
                close={() => {
                    close();
                    setCurrentImage("");
                }}
            />
        </>
    );
};

export default ProjectCard;

interface IModalProps {
    title: string;
    image: string;
    opened: boolean;
    close: () => void;
}

const ScreenshotModal = ({ title, image, opened, close }: IModalProps) => {
    const desktop = useMediaQuery("(min-width: 56.25em)");

    return (
        <Modal
            opened={opened}
            onClose={close}
            title={title}
            size={desktop ? "90%" : "100%"}
            centered
        >
            {/* Modal content */}
            <Image src={image} alt={`${title} - Screenshot`} />
        </Modal>
    );
};

const ImageWithHover = ({
    imageUrl,
    alt,
    onClick,
}: {
    imageUrl: string;
    alt: string;
    onClick: () => void;
}) => {
    const { hovered, ref } = useHover();

    return (
        <Box
            sx={(theme) => ({
                position: "relative",
                cursor: "pointer",
            })}
        >
            <Transition mounted={hovered} transition={"fade"} duration={400} timingFunction="ease">
                {(styles) => (
                    <Box
                        style={styles}
                        sx={(theme) => ({
                            position: "absolute",
                            width: "20px",
                            height: "20px",
                            top: -10,
                            left: -10,
                            zIndex: 2,
                            backgroundColor: theme.colors.orange[9],
                            borderRadius: 3,
                        })}
                    ></Box>
                )}
            </Transition>
            <Image
                alt={alt}
                w={100}
                sx={(theme) => ({
                    boxShadow: hovered ? theme.shadows.xl : theme.shadows.xs,
                })}
                ref={ref}
                src={imageUrl}
                onClick={onClick}
            />
        </Box>
    );
};
