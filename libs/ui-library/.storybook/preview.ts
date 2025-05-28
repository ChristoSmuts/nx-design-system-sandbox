import { Preview, applicationConfig } from "@storybook/angular";
import { providerUiLibrary } from "../src/lib/providers/ui-library.provider";
import "./storybook.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: { disable: true },
    docs: {},
  },
  decorators: [
    applicationConfig({
      providers: [
        ...providerUiLibrary()
      ],
    }),
  ],
  tags: ["autodocs"]
};

export default preview;