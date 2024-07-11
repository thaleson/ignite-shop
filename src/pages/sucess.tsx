import Link from "next/link";
import { SuccessContainer, ImageContainer } from "../styles/pages/sucess";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import Image from "next/image";
import Head from "next/head";

interface SucessProps {
  customerName: string;
  product: {
    name: string;
    imageUrl: string; // Corrigir aqui para usar o mesmo nome que está sendo retornado no getServerSideProps
  };
}

export default function Sucess({ product, customerName }: SucessProps) {
  return (


           
    <>    

             <Head>
             
             <title>Compra Efetuada | Ignite Shop</title>

             <meta  name="robots" content="noindex" />

             </Head>





        <SuccessContainer>
        <h1>Compra efetuada!</h1>
        <ImageContainer>
            <Image src={product.imageUrl} alt={product.name} width={120} height={110} />
        </ImageContainer>
        <p>
            Uhuul
            <strong>{customerName}</strong>,
            sua <strong>{product.name}</strong> já está a caminho da sua casa
        </p>
        <Link href="/">Voltar ao catálogo</Link>
        </SuccessContainer>

    </>    
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {


  
    if(!query.session_id){
        return {
           redirect:{
            destination: '/',
            permanent: false,
        
           }
        }
     }  
    const sessionId = String(query.session_id);



  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details.name;
  const product = session.line_items.data[0].price.product as Stripe.Product;

  return {
    props: {
      customerName,
      product: {
        name: product.name,
        imageUrl: product.images[0], // Certifique-se de que este nome esteja correto
      },
    },
  };
};
