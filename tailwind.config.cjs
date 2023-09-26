/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      zIndex: {
        default: 1,
        header: 10,
        popup: 890, // 系统提示弹出层
        system: 990,
        top: 9999, // 最顶层
      },
    },
  },
  plugins: [],
};
