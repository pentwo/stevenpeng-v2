import React from "react";
import { renderToString } from "react-dom/server";
import type { GatsbySSR } from "gatsby";
import { createStylesServer, ServerStyles } from "@mantine/ssr";

// Must use the same @mantine/styles (v6) emotion cache as MantineProvider,
// otherwise no component styles are extracted and the first paint is unstyled.
const stylesServer = createStylesServer();

export const replaceRenderer: GatsbySSR["replaceRenderer"] = ({
    bodyComponent,
    replaceBodyHTMLString,
    setHeadComponents,
}) => {
    const html = renderToString(bodyComponent as React.ReactElement);
    setHeadComponents([<ServerStyles html={html} server={stylesServer} key="mantine-styles" />]);
    replaceBodyHTMLString(html);
};
