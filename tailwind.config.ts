import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      objectPosition: {},
      animation: {
        sliding: "sliding 30s linear infinite",
        fadeIn: "fadeIn 0.2s ease-out forwards",
      },
      keyframes: {
        sliding: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
    fontFamily: {
      bison: ["Bison"],
      manrope: ["Manrope"],
    },
  },
};
