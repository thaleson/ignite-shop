import { globalCss } from ".";

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box', // Adiciona box-sizing para consistência no layout
    },

    body: {
        backgroundColor: "$gray900",
        color: "$gray100",
        '-webkit-font-smoothing': 'antialiased',
        fontFamily: 'Roboto, sans-serif', // Garante que a fonte seja aplicada ao body
        fontWeight: 400,
        lineHeight: 1.5, // Adiciona line-height para melhor legibilidade
    },

    'body, input, textarea, button': {
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 400,
    },

    a: {
        textDecoration: 'none', // Remove a sublinha padrão dos links
        color: 'inherit', // Garante que os links herdem a cor do texto
    },

    button: {
        cursor: 'pointer', // Garante que o cursor mude para pointer em botões
    },

    '@media (max-width: 768px)': {
        body: {
            fontSize: '14px', // Ajusta o tamanho da fonte para telas menores
        },
    },

    '@media (max-width: 480px)': {
        body: {
            fontSize: '12px', // Ajusta o tamanho da fonte para telas muito pequenas
        },
    },
});
