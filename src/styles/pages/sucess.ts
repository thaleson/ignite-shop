import { styled } from "..";

export const SuccessContainer = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    height: 656,

    h1: {
        fontSize: '$2xl',
        color: '$gray100',
    },

    p: {
        fontSize: '$xl',
        color: '$gray300',
        maxWidth: 560,
        textAlign: 'center',
        marginTop: '2rem',
        lineHeight: 1.4,
    },

    a: {
        marginTop: '5rem',
        fontSize: '$lg',
        color: '$green500',
        textDecoration: 'none',
        display: 'block',
        fontWeight: 'bold',

        '&:hover': {
            color: '$green300',
        },
    },

    '@media (max-width: 768px)': {
        padding: '0 1rem', // Adiciona padding para espaços internos

        h1: {
            fontSize: '$xl', // Ajusta o tamanho da fonte para telas menores
        },

        p: {
            fontSize: '$lg', // Ajusta o tamanho da fonte para telas menores
            marginTop: '1.5rem', // Ajusta o espaçamento superior para telas menores
        },

        a: {
            marginTop: '3rem', // Ajusta o espaçamento superior para telas menores
            fontSize: '$md', // Ajusta o tamanho da fonte para telas menores
        },
    },

    '@media (max-width: 480px)': {
        h1: {
            fontSize: '$lg', // Ajusta o tamanho da fonte para telas muito pequenas
        },

        p: {
            fontSize: '$md', // Ajusta o tamanho da fonte para telas muito pequenas
        },

        a: {
            fontSize: '$sm', // Ajusta o tamanho da fonte para telas muito pequenas
        },
    },
});

export const ImageContainer = styled('main', {
    width: '100%',
    maxWidth: 130,
    height: 145,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    padding: '0.25rem',
    marginTop: '4rem',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    img: {
        objectFit: 'cover',
    },

    '@media (max-width: 768px)': {
        maxWidth: 100, // Ajusta a largura máxima para telas menores
        height: 120, // Ajusta a altura para telas menores
        marginTop: '3rem', // Ajusta o espaçamento superior para telas menores
    },

    '@media (max-width: 480px)': {
        maxWidth: 80, // Ajusta a largura máxima para telas muito pequenas
        height: 100, // Ajusta a altura para telas muito pequenas
        marginTop: '2rem', // Ajusta o espaçamento superior para telas muito pequenas
    },
});
