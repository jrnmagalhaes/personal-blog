import React from 'react';
import Head from 'next/head';
import { getAllDocs, getDocBySlug } from '../lib/docs';
import markdownToHtml from '../lib/markdown';
import { formatDate } from '../lib/utils';

const PostPage = ({ meta, date, content }) => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Head>
      <main>
        <article className='post'>
          <h1>{meta.title} <br /> <small>{meta.description}</small> </h1>
          <h6 className='date'>{date}</h6>
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
  console.log(content);
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