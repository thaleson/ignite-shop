# Ignite Shop

Ignite Shop é um projeto de e-commerce desenvolvido com Next.js e TypeScript. Este projeto utiliza a biblioteca Stitches para estilização e integra com a API do Stripe para processar pagamentos.

## Estrutura do Projeto

O projeto possui a seguinte estrutura de diretórios:

```
ignite-shop/
├── .next/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   │   └── logo.svg
│   ├── lib/
│   │   └── stripe.ts
│   ├── pages/
│   │   ├── api/
│   │   │   └── checkout.ts
│   │   ├── product/
│   │   │   ├── [id].tsx
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   ├── index.tsx
│   │   └── success.tsx
│   ├── styles/
│   │   ├── app.ts
│   │   ├── home.ts
│   │   ├── product.ts
│   │   ├── success.ts
│   │   ├── globals.ts
│   │   └── index.ts
├── .env.local
├── .eslintrc.json
└── .gitignore
```

## Tecnologias Utilizadas

- **Next.js**: Framework React para desenvolvimento de aplicações web.
- **TypeScript**: Superset JavaScript que adiciona tipagem estática ao JavaScript.
- **Stitches**: Biblioteca CSS-in-JS para estilização.
- **Stripe**: API de pagamentos online.

## Instalação

Para instalar e executar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/ignite-shop.git
```

2. Navegue até o diretório do projeto:

```bash
cd ignite-shop
```

3. Instale as dependências:

```bash
npm install
```

ou

```bash
yarn install
```

4. Crie um arquivo `.env.local` na raiz do projeto e adicione as suas variáveis de ambiente:

```
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your-stripe-public-key
STRIPE_SECRET_KEY=your-stripe-secret-key
```

5. Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
```

ou

```bash
yarn dev
```

6. Abra o navegador e acesse `http://localhost:3000`.

## Estilização

O projeto utiliza a biblioteca Stitches para estilização. Os estilos globais e os componentes estilizados estão localizados na pasta `src/styles`.

## Páginas

- **Home (`src/pages/index.tsx`)**: Página inicial da loja.
- **Produto (`src/pages/product/[id].tsx`)**: Página de detalhes do produto.
- **Sucesso (`src/pages/success.tsx`)**: Página exibida após uma compra bem-sucedida.

## API

O projeto possui uma API para processar pagamentos utilizando Stripe:

- **Checkout (`src/pages/api/checkout.ts`)**: Endpoint para criar uma sessão de checkout no Stripe.

## Contribuição

Se você quiser contribuir com este projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para obter mais informações.

---

Feito com ❤️ por [Thaleson](https://github.com/thaleson)

