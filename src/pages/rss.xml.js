import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');
  
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.data.publishedDate).getTime() - new Date(a.data.publishedDate).getTime()
  );

  return rss({
    title: 'Parenting Journey Blog',
    description: 'Expert advice and practical tips for every stage of your parenting journey. From pre-pregnancy planning to raising happy, healthy children.',
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.publishedDate),
      description: post.data.description,
      author: post.data.author,
      categories: [post.data.category, ...post.data.tags],
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
    stylesheet: '/rss/styles.xsl',
  });
}
