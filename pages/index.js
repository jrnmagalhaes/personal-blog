import Head from 'next/head';
import { PostSummary } from '../components';
import { getAllDocsSorteByDate } from '../lib/docs';
import { formatDate } from '../lib/utils';

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Ricardo Nogueira - Blog Pessoal</title>
        <meta name="description" content="Esse é o meu blog pessoal, onde compartilho meus últimos estudos e projetos pessoais." />
      </Head>
      <main>
        <h1>Blog Pessoal</h1>
        <div className='posts'>
          {posts.map(post =>
            <PostSummary
              key={`post-home-${post.meta.title}`}
              title={post.meta.title}
              description={post.meta.description}
              image={post.meta.image}
              time={formatDate(post.time)}
              link={`/${post.slug}`}
            />
          )}
        </div>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const posts = getAllDocsSorteByDate();
  return {
    props: {
      posts: posts
    }
  }
}
