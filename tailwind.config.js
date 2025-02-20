module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        accent: 'var(--accent)',
        neutral: 'var(--neutral)',
        success: 'var(--success)',
        danger: 'var(--danger)',
      },
      fontFamily: {
        rubik: ['Manrope', 'sans-serif'],
        mono: ['monospace'],
      },
    },
  },
  plugins: [],
};
