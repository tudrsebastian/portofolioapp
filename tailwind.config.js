module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 5s linear infinite",
        "ping-slow": "ping 5s cubic-bezier(1, 1, 0.2, 1) infinite",
        "bounce-slow": "bounce 5s cubic-bezier(1, 1,0.001, 1) infinite",
      },
      keyframes: {
        spin: {
          to: {
            transform: "rotate(-360deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
