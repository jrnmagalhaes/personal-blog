import React from 'react';
import Head from 'next/head';
import { useRouter } from "next/router"
import { getAllDocs, getDocBySlug } from '../lib/docs';
import markdownToHtml from '../lib/markdown';
import { formatDate } from '../lib/utils';
import { IconButton } from '../components';

const PostPage = ({ meta, date, content }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Head>
      <main>
        <IconButton iconName='back' onClick={() => router.back()} />
        <article className='post'>
          <h1>{meta.title} <br /> <small>{meta.description}</small> </h1>
          <h6 className='date'>{date}</h6>
          {meta.image && <figure className='imageContainer'>
            <img src={meta.image} alt="Imagem do post" />
            {meta.image_caption && <figcaption>{meta.image_caption}</figcaption>}
          </figure>}
          <div className='content' dangerouslySetInnerHTML={{ __html: content }}></div>
        </article>
      </main>
    </>
  )
}

export async function getStaticPaths() {
  const files = getAllDocs();

  const paths = files.map((file) => ({
    params: {
      slug: file.slug,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const file = getDocBySlug(slug);
  const content = await markdownToHtml(file.content);
  return {
    props: {
      slug,
      meta: file.meta,
      date: formatDate(file.time),
      content: content
    },
  }
}

export default PostPage