import Head from 'next/head';
import { homePageDocs } from '../lib/docs';
import { IconButton } from '../components';

export default function Home({ posts, toggleNightMode, currentMode }) {
  return (
    <>
      <Head>
        <title>Ricardo Nogueira - Blog Pessoal</title>
        <meta name="description" content="Esse é o meu blog pessoal, onde compartilho meus últimos estudos e projetos pessoais." />
      </Head>
      <main>
        <h1>Blog Pessoal</h1>
        <IconButton onClick={toggleNightMode} iconName='sun' text={currentMode} />
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
