/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from './home.module.scss'
import { GetStaticProps } from 'next';
import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from '../lib/stripe'

// Client side
// Server Side
// Static Site Generation

interface HomeProps {
  product: {
    priceId: string,
    amount: number
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>for {Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(product.amount)} month</span>
          </p>

          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src="/images/avatar.svg" alt="Girl Coding" />
      </main>
    </>
  )
}

/* This code will be executed in the Node server. If 1.000.000 users access this page,
every time the Next will executed this process. */ 

/* Static Site Generation (SSG) 
  The server saves a copy of the STATIC HTML in the server
*/
export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1LHdOmBdWgh7JzbWGhLZOnAo')

  const product = {
    priceId: price.id,
    amount: (price.unit_amount / 100),
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}