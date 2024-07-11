import { styled } from "..";

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    justifyContent: 'center',
    padding: '1rem', // Adicionei padding para espaços em telas pequenas

    '@media (max-width: 768px)': {
        padding: '0.5rem', // Ajuste o padding para telas menores
    },
    '@media (max-width: 480px)': {
        padding: '0.25rem', // Ajuste o padding para telas muito pequenas
    },
});

export const Header = styled('header', {
    padding: '2rem 0',
    width: '100%',
    maxWidth: 1100,
    margin: '0 auto',

    '@media (max-width: 768px)': {
        padding: '1.5rem 0', // Ajuste o padding para telas menores
        maxWidth: '90%', // Utilize porcentagens para um layout mais fluido
    },
    '@media (max-width: 480px)': {
        padding: '1rem 0', // Ajuste o padding para telas muito pequenas
        maxWidth: '95%', // Utilize porcentagens para um layout mais fluido
    },
});
