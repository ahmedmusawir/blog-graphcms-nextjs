import Head from 'next/head';
import { getPosts } from '../services';
import { Categories, PostCard, PostWidget } from '../components';
import FeaturedPosts from '../sections/FeaturedPosts';

export default function Home({ posts }) {
  console.log('Posts:', posts);
  return (
    <div className='container mx-auto px-0 sm:px-10 mb-8'>
      <Head>
        <title>GraphCMS Blog</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <FeaturedPosts />
      <div className='grid grid-cols-6 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-12'>
          {posts.map((post, index) => (
            <div key={index}>
              <PostCard post={post.node} key={post.node.title} />
            </div>
          ))}
        </div>
        <div className='lg:col-span-4 col-span-12'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
