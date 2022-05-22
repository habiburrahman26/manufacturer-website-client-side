module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#7950f2',
          secondary: '#46B2E0',
          accent: '#120E43',
          neutral: '#3d4451',
          'base-100': '#ffffff',
        },
      },
      // 'dark',
      // 'cupcake',
    ],
  },

  plugins: [require('daisyui')],
};
