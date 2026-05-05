import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        navy: {
          950: "#000d1f",
          900: "#001b3d",
          800: "#0a2851",
          700: "#163764",
          600: "#244878",
          500: "#31476b",
          400: "#495f84",
        },
        royal: {
          700: "#0d4a99",
          600: "#115cb9",
          500: "#1e6fd6",
          400: "#4d8ae6",
          300: "#659dfe",
          200: "#acc7ff",
          100: "#d6e3ff",
        },
        ink: {
          900: "#1b1b1e",
          700: "#303033",
          500: "#44474e",
          400: "#74777f",
          300: "#9ea1a8",
        },
        line: {
          DEFAULT: "#e2e8f0",
          muted: "#c4c6cf",
        },
        surface: {
          DEFAULT: "#ffffff",
          tint: "#faf9fc",
          muted: "#f5f3f6",
          ring: "#efedf1",
        },
      },
      fontFamily: {
        sans: ["var(--font-work-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(3rem, 6vw + 1rem, 5.5rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "display-xl": ["clamp(2.25rem, 4vw + 1rem, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-lg": ["clamp(1.875rem, 2.5vw + 1rem, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      letterSpacing: {
        "label-wide": "0.18em",
      },
      borderRadius: {
        sm: "0.25rem",
        DEFAULT: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(0, 27, 61, 0.05)",
        card: "0 18px 40px -20px rgba(0, 27, 61, 0.18), 0 4px 12px -4px rgba(0, 27, 61, 0.08)",
        "card-hover": "0 32px 60px -24px rgba(0, 27, 61, 0.28), 0 6px 18px -6px rgba(0, 27, 61, 0.12)",
        ring: "inset 0 0 0 1px rgba(196, 198, 207, 0.6)",
      },
      backgroundImage: {
        "navy-gradient": "linear-gradient(135deg, #001b3d 0%, #0a2851 50%, #115cb9 100%)",
        "navy-radial": "radial-gradient(ellipse at top right, rgba(101, 157, 254, 0.18), transparent 60%)",
        "subtle-noise": "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)",
      },
      transitionTimingFunction: {
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1)) forwards",
        "shimmer": "shimmer 6s linear infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
