import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title> NEXT JS BLOG </title>
      </Head>
      <main>
        <hr />
        <p align="center"> <strong> INTRODUCE YOURSELF. WHAT ARE YOUR HOBBIES, FAVOURITE MUSIC, FAVOURITE FOOD,
        AND OTHER THINGS YOU CAN TELL ME ABOUT YOURSELF?</strong> </p>
        <p align="center"> My name is Kimberly Guevarra Manaloto and I am 20 years old. I love editing and photography. <br /> </p>

        <hr />

        <p align="center"> <strong> WHY DID YOU TAKE UP IT? </strong> </p>
        <p align="center"> I chose IT because technology has always fascinated me, and I want to create things that makes people lives eeasier. <br /> </p>

        <hr />

        <p align="center"> <strong> WHAT CAREER DO YOU SEE YOURSELF EXPLORING AFTER GRADUATION? </strong> </p>
        <p align="center">I hope to become a software developer and work on projects that help businesses or individuals. <br /> </p>
        
        <hr />

        <p align="center"> <strong> WHAT DO YOU EXPECT TO LEARN IN THIS SUBJECT? </strong> </p>
        <p align="center"> expect to gain a deeper understanding of programming languages and tools for building better software. <br /> </p>

        <hr />

      <p align="center"> <strong> WHAT TOPICS DO YOU WANT TO BE DISCUSSED IN THIS SUBJECT? </strong> </p>
      <p align="center"> I would love to learn more about front-end design, user experience, and cloud technologies. <br /> </p>

      <hr />

        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </main>
    </Layout>
  );
}
