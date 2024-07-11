import { styled } from "..";

export const HomeContainer = styled('main', {
    display: 'flex',
    width: '100%',
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
    marginLeft: 'auto',
    minHeight: 656,

    '@media (max-width: 768px)': {
        flexDirection: 'grid',
        alignItems: 'center',
        maxWidth: '100%', // Ajuste para ocupar toda a largura da tela em dispositivos menores
        padding: '0 1rem', // Adicione padding para espaços internos
    },
});

export const Product = styled('div', {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    cursor: 'pointer',
    position: 'relative',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover',
    },

    footer: {
        position: 'absolute',
        bottom: '0.25rem',
        left: '0.25rem',
        right: '0.25rem',
        padding: '2rem',
        overflow: 'hidden',

        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',

        transform: 'translateY(110%)',
        opacity: 0,
        transition: 'all 0.2s ease-in-out',

        strong: {
            fontSize: '$lg',
            color: '$gray100',
        },

        span: {
            fontSize: '$xl',
            fontWeight: 'bold',
            color: '$green300',
        },
    },

    '&:hover': {
        footer: {
            transform: 'translateY(0%)',
            opacity: 1,
        },
    },

    '@media (max-width: 768px)': {
        flexDirection: 'column', // Ajuste a direção do flex para coluna em dispositivos menores
        img: {
            width: '100%', // Garanta que a imagem ocupe toda a largura do contêiner
        },
        footer: {
            padding: '1rem', // Ajuste o padding do footer para dispositivos menores
        },
    },

    '@media (max-width: 480px)': {
        borderRadius: 4, // Reduza o border radius para dispositivos menores
        footer: {
            padding: '0.5rem', // Reduza o padding do footer para dispositivos menores
            strong: {
                fontSize: '$md', // Ajuste o tamanho da fonte para dispositivos menores
            },
            span: {
                fontSize: '$lg', // Ajuste o tamanho da fonte para dispositivos menores
            },
        },
    },
});
