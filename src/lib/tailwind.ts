import plugin from "tailwindcss/plugin"

export const pluginTypography = (config: Record<string, string>) =>
  plugin(({ addComponents }) => {
    for (const key in config) {
      addComponents({
        [`.${key}`]: {
          [`@apply ${config[key]}`]: {},
        },
      })
    }
  })