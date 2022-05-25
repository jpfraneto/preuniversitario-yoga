import React from 'react';
import { allPosts } from 'contentlayer/generated';
import Link from 'next/link';

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}

const Blog = ({ posts }) => {
  return (
    <div>
      Acá va el blog
      {posts &&
        posts.map((x, index) => (
          <Link key={index} href={`/blog${x.url}`}>
            <a>{x.title}</a>
          </Link>
        ))}
    </div>
  );
};

export default Blog;
