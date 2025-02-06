module.exports = {
  theme: {
    extend: {
      animation: {
        slide: 'slide 100s linear infinite',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
}