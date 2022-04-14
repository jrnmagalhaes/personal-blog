import Head from 'next/head';
import { homePageDocs } from '../lib/docs';

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Ricardo Nogueira - Blog Pessoal</title>
        <meta name="description" content="Esse é o meu blog pessoal, onde compartilho meus últimos estudos e projetos pessoais." />
      </Head>
      <main>
        <h1>Blog Pessoal</h1>
        {posts.map(post => post.meta.title)}
      </main>
    </>
  )
}

export async function getStaticProps() {
  const posts = homePageDocs();
  return {
    props: {
      posts: posts
    }
  }
}
