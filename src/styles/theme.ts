import { defaultConfig, defineConfig } from "@chakra-ui/react";
import { tokens } from "@chakra-ui/react/theme";

export const themeConfig = defineConfig({
  globalCss: {
    "html, body": {
      backgroundColor: "gray.500",
    }
  },
    theme: {
      tokens: {
        colors: {},
      },
  },
})
