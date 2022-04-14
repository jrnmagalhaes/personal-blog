import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const PostSummary = ({ title, description, image, time, link }) => {
  return (
    <Link href={link} passHref>
      <a title={title}>
        <div className='post-summary'>
          <article>
            <div>
              <h4>{time}</h4>
              <h2>{title}</h2>
              <h3>{description}</h3>
            </div>
            <div className='image-container'>
              {image && <Image alt={`${title} | Image cover`} layout="fill" objectFit='contain' src={image} />}
            </div>
          </article>
        </div>
      </a >
    </Link >
  )
}

export { PostSummary }