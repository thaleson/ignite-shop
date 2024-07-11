import { styled } from "..";

export const ProductContainer = styled('main', {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'stretch',
    gap: '4rem',

    maxWidth: 1180,
    margin: '0 auto',

    '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr', // Ajusta para uma coluna em telas menores
        gap: '2rem', // Ajusta o espaço entre os itens
        padding: '0 1rem', // Adiciona padding para espaços internos
    },
});

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: 576,
    height: 656,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    padding: '0.25rem',
    borderRadius: 8,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    img: {
        objectFit: 'cover',
    },

    '@media (max-width: 768px)': {
        maxWidth: '100%', // Ajusta para ocupar toda a largura disponível
        height: 'auto', // Ajusta a altura para ser automática
    },
});

export const ProductDetails = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    h1: {
        fontSize: '$2xl',
        color: '$gray300',
    },

    span: {
        marginTop: '1rem',
        display: 'block',
        fontSize: '$2xl',
        color: '$green300',
    },

    p: {
        marginTop: '2.5rem',
        fontSize: '$md',
        lineHeight: 1.6,
        color: '$gray300',
    },

    button: {
        marginTop: 'auto',
        backgroundColor: '$green500',
        border: 0,
        color: '$white',
        borderRadius: 8,
        padding: '1.25rem',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '$md',

        '&:disabled': {
            opacity: 0.6,
            cursor: 'not-allowed', // Corrigido a ortografia
        },

        '&:not(:disabled):hover': {
            backgroundColor: '$green300',
        },
    },

    '@media (max-width: 768px)': {
        padding: '0 1rem', // Adiciona padding para espaços internos
        h1: {
            fontSize: '$xl', // Ajusta o tamanho da fonte para telas menores
        },
        span: {
            fontSize: '$xl', // Ajusta o tamanho da fonte para telas menores
        },
        p: {
            fontSize: '$sm', // Ajusta o tamanho da fonte para telas menores
            marginTop: '1.5rem', // Ajusta o espaçamento superior para telas menores
        },
        button: {
            padding: '1rem', // Ajusta o padding para telas menores
            fontSize: '$sm', // Ajusta o tamanho da fonte para telas menores
        },
    },
});
