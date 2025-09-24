// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    // IMPORTANT: Tell Tailwind where to look for classes to generate CSS for.
    // This ensures your styles work on all files in your project.
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      // Add any other paths you need here
    ],
    // This ensures shadcn/ui components work with your custom theme
    presets: [], // You might not need this line, but it's safe to include. If you get an error, remove it.
    theme: {
      extend: {
        // This section is where you define your customizations
        colors: {
          // These are the core colors for your theme.
          // Classes like 'bg-primary', 'text-accent' will use these values.
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "hsl(220, 80%, 30%)",  // Slightly more saturated deep blue
            foreground: "hsl(0, 0%, 100%)", // White text on blue
          },
          secondary: {
            DEFAULT: "hsl(200, 60%, 90%)",  // Lighter, more energetic blue
            foreground: "hsl(222, 84%, 25%)",
          },
          destructive: {
            DEFAULT: "hsl(0, 84%, 45%)",
            foreground: "hsl(0, 0%, 100%)",
          },
          muted: {
            DEFAULT: "hsl(210, 40%, 96%)",
            foreground: "hsl(215, 16%, 47%)",
          },
          accent: {
            DEFAULT: "hsl(182, 91%, 45%)",  // Vibrant cyan
            foreground: "hsl(0, 0%, 100%)", // White text on cyan
          },
          popover: {
            DEFAULT: "hsl(0, 0%, 100%)",
            foreground: "hsl(222, 84%, 5%)",
          },
          card: {
            DEFAULT: "hsl(0, 0%, 100%)",
            foreground: "hsl(222, 84%, 5%)",
          },
        },
        // You can also add custom fonts, borderRadius, etc. here later.
        // fontFamily: {
        //   sans: ['var(--font-inter)'],
        //   serif: ['var(--font-newsreader)'],
        // },
      },
    },
    plugins: [],
  }