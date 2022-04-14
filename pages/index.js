import Head from 'next/head'
import { homePageDocs } from '../lib/docs'

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Ricardo Nogueira - Blog Pessoal</title>
        <meta name="description" content="Esse é o meu blog pessoal, onde compartilho meus últimos estudos e projetos pessoais." />
      </Head>
      <main>
        <h1>Blog Pessoal</h1>
        <h2>Teste h2</h2>
        <h3>Teste h3</h3>
        <h4>Teste h4</h4>
        <h5>Teste h5</h5>
        <h6>Teste h6</h6>
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
