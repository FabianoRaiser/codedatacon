import { createTheme } from "@mantine/core";

export const theme = createTheme({
    fontFamily: "Inter, system-ui, -apple-system, sans-serif",
    fontFamilyMonospace: "JetBrains Mono, Monaco, Courier, monospace",
    primaryColor: "violet",
    primaryShade: 6,
    colors: {
        // Paleta principal - tons de violeta e roxo
        violet: [
            "#f3e8ff", "#e9d5ff", "#d8b4fe", "#c084fc", "#a855f7", 
            "#9333ea", "#7c3aed", "#6d28d9", "#5b21b6", "#4c1d95"
        ],
        // Paleta secundária - tons de ciano/azul
        cyan: [
            "#ecfeff", "#cffafe", "#a5f3fc", "#67e8f9", "#22d3ee",
            "#06b6d4", "#0891b2", "#0e7490", "#155e75", "#164e63"
        ],
        // Paleta de sucesso - tons de verde
        green: [
            "#f0fdf4", "#dcfce7", "#bbf7d0", "#86efac", "#4ade80",
            "#22c55e", "#16a34a", "#15803d", "#166534", "#14532d"
        ],
        // Paleta de alerta - tons de laranja
        orange: [
            "#fff7ed", "#ffedd5", "#fed7aa", "#fdba74", "#fb923c",
            "#f97316", "#ea580c", "#c2410c", "#9a3412", "#7c2d12"
        ],
        // Paleta neutra - tons de cinza
        gray: [
            "#f8fafc", "#f1f5f9", "#e2e8f0", "#cbd5e1", "#94a3b8",
            "#64748b", "#475569", "#334155", "#1e293b", "#0f172a"
        ],
    },
    shadows: {
        xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    },
    radius: {
        xs: '0.375rem',
        sm: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
    },
    spacing: {
        xs: '0.5rem',
        sm: '0.75rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
    },
    components: {
        Card: {
            defaultProps: {
                shadow: 'lg',
                radius: 'xl',
                withBorder: false,
            },
            styles: {
                root: {
                    background: 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.3)',
                }
            }
        },
        Title: {
            styles: {
                root: {
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                }
            }
        }
    }
})  