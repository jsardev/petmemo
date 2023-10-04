import { defineConfig, presetUno, presetIcons } from 'unocss'
import { colors } from 'unocss/preset-wind'

export default defineConfig({
  presets: [presetUno(), presetIcons()],
  theme: {
    colors: {
      primary: colors.indigo,
    },
  },
})
