export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ct: {
          primary: '#1D3557',
          accent: '#00B5C5',
          secondary: '#A8C0D6',
          neutral: '#F2F2F2',
          text: '#333333',
        },
        fr: {
          yellow: '#F5A800',
          black: '#0D0D0D',
        }
      },
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        script: ['"Pacifico"', 'cursive'],
      }
    }
  },
  plugins: []
}
