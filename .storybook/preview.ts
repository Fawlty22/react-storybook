import type { Preview } from "@storybook/react";
import { handlers } from '../src/mocks/handlers';
import { initialize, mswDecorator, mswLoader } from 'msw-storybook-addon';

// Initialize MSW
initialize();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    msw: {
      handlers,
    },
    decorators: [mswDecorator]
  },
};

export const loaders = [mswLoader]

export default preview;
