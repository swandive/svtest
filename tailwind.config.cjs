module.exports = {
  mode: 'jit',
  purge: [
    './src/routes/*.svelte',
    './src/routes/**/*.svelte',
    './src/routes/__error.svelte'
  ],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
