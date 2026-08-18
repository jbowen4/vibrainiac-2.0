import type { Preview } from "@storybook/nextjs-vite";
import { Afacad_Flux } from "next/font/google";
import React from "react";

import "../src/app/globals.css";

const afacadFlux = Afacad_Flux({
  variable: "--font-afacad-flux",
  subsets: ["latin"],
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    backgrounds: {
      default: "vibrainiac-dark",
      values: [{ name: "vibrainiac-dark", value: "#0b0b0b" }],
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },

  decorators: [
    (Story) =>
      React.createElement(
        "div",
        { className: afacadFlux.variable },
        React.createElement(Story)
      ),
  ],
};

export default preview;
