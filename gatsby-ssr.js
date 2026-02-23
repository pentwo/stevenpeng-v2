const React = require('react');
const { renderToString } = require('react-dom/server');
const createEmotionServer = require('@emotion/server/create-instance').default;
const { defaultMantineEmotionCache } = require('@mantine/styles');

const emotionServer = createEmotionServer(defaultMantineEmotionCache);

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  const html = renderToString(bodyComponent);
  const chunks = emotionServer.extractCriticalToChunks(html);
  const styles = emotionServer.constructStyleTagsFromChunks(chunks);

  setHeadComponents([
    React.createElement('div', {
      key: 'mantine-styles',
      dangerouslySetInnerHTML: { __html: styles },
    }),
  ]);
  replaceBodyHTMLString(html);
};
