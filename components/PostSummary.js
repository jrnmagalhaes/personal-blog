import Link from 'next/link';
import React from 'react';

const PostSummary = ({ title, description, image, time, link }) => {
  return (
    <Link href={link} passHref>
      <a title={title}>
        <div className='post-summary'>
          <article>
            <div className='info'>
              <h4>{time}</h4>
              <h2>{title}</h2>
              <h3>{description}</h3>
            </div>
            {image && <div className='image-container'>
              <img alt={`${title} | Image cover`} src={image} />
            </div>
            }
          </article>
        </div>
      </a >
    </Link >
  )
}

export { PostSummary }