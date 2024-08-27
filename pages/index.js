import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <hr />

    <p style="text-align: justify; line-height: 1.6;">
  My name is Kimberly Guevarra Manaloto, and I am 20 years old. I have a passion for editing and photography. 
  I chose to study IT because technology has always fascinated me, and I want to create things that make people's lives easier. 
  After graduation, I hope to become a software developer and work on projects that help businesses or individuals. 
  In this subject, I expect to gain a deeper understanding of programming languages and tools for building better software. 
  I would also love to learn more about front-end design, user experience, and cloud technologies.
</p>
      
       
      <hr />

        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        </section>
    </Layout>
  );
}

