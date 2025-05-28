import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

/**
 * Get all published blog posts sorted by date (newest first)
 */
export async function getAllPosts(): Promise<BlogPost[]> {
  const posts = await getCollection('blog', ({ data }) => {
    return !data.draft;
  });
  
  return posts.sort((a, b) => 
    new Date(b.data.publishedDate).getTime() - new Date(a.data.publishedDate).getTime()
  );
}

/**
 * Get posts by category
 */
export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter(post => 
    post.data.category.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Get featured posts
 */
export async function getFeaturedPosts(): Promise<BlogPost[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter(post => post.data.featured);
}

/**
 * Get recent posts with optional limit
 */
export async function getRecentPosts(limit: number = 5): Promise<BlogPost[]> {
  const allPosts = await getAllPosts();
  return allPosts.slice(0, limit);
}

/**
 * Get posts by tag
 */
export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter(post => 
    post.data.tags.some(postTag => 
      postTag.toLowerCase() === tag.toLowerCase()
    )
  );
}

/**
 * Get related posts based on category and tags
 */
export async function getRelatedPosts(
  currentPost: BlogPost, 
  limit: number = 3
): Promise<BlogPost[]> {
  const allPosts = await getAllPosts();
  
  // Exclude current post
  const otherPosts = allPosts.filter(post => post.slug !== currentPost.slug);
  
  // Score posts based on category and tag matches
  const scoredPosts = otherPosts.map(post => {
    let score = 0;
    
    // Same category gets higher score
    if (post.data.category === currentPost.data.category) {
      score += 10;
    }
    
    // Common tags increase score
    const commonTags = post.data.tags.filter(tag => 
      currentPost.data.tags.includes(tag)
    );
    score += commonTags.length * 2;
    
    return { post, score };
  });
  
  // Sort by score and return top results
  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post);
}

/**
 * Get all unique categories
 */
export async function getAllCategories(): Promise<string[]> {
  const allPosts = await getAllPosts();
  const categories = new Set(allPosts.map(post => post.data.category));
  return Array.from(categories).sort();
}

/**
 * Get all unique tags
 */
export async function getAllTags(): Promise<string[]> {
  const allPosts = await getAllPosts();
  const tags = new Set(allPosts.flatMap(post => post.data.tags));
  return Array.from(tags).sort();
}

/**
 * Search posts by title, description, or content
 */
export async function searchPosts(query: string): Promise<BlogPost[]> {
  if (!query.trim()) return [];
  
  const allPosts = await getAllPosts();
  const lowerQuery = query.toLowerCase();
  
  return allPosts.filter(post => {
    const titleMatch = post.data.title.toLowerCase().includes(lowerQuery);
    const descriptionMatch = post.data.description.toLowerCase().includes(lowerQuery);
    const categoryMatch = post.data.category.toLowerCase().includes(lowerQuery);
    const tagMatch = post.data.tags.some(tag => 
      tag.toLowerCase().includes(lowerQuery)
    );
    
    return titleMatch || descriptionMatch || categoryMatch || tagMatch;
  });
}

/**
 * Get posts with pagination
 */
export async function getPaginatedPosts(
  page: number = 1, 
  pageSize: number = 10
): Promise<{
  posts: BlogPost[];
  totalPages: number;
  currentPage: number;
  totalPosts: number;
}> {
  const allPosts = await getAllPosts();
  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / pageSize);
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const posts = allPosts.slice(startIndex, endIndex);
  
  return {
    posts,
    totalPages,
    currentPage: page,
    totalPosts
  };
}

/**
 * Get post statistics
 */
export async function getPostStats(): Promise<{
  totalPosts: number;
  postsByCategory: Record<string, number>;
  postsByMonth: Record<string, number>;
  totalTags: number;
}> {
  const allPosts = await getAllPosts();
  
  // Posts by category
  const postsByCategory: Record<string, number> = {};
  allPosts.forEach(post => {
    const category = post.data.category;
    postsByCategory[category] = (postsByCategory[category] || 0) + 1;
  });
  
  // Posts by month
  const postsByMonth: Record<string, number> = {};
  allPosts.forEach(post => {
    const date = new Date(post.data.publishedDate);
    const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    postsByMonth[monthKey] = (postsByMonth[monthKey] || 0) + 1;
  });
  
  // Total unique tags
  const allTags = await getAllTags();
  
  return {
    totalPosts: allPosts.length,
    postsByCategory,
    postsByMonth,
    totalTags: allTags.length
  };
}

/**
 * Calculate estimated reading time
 */
export function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

/**
 * Generate post excerpt from content
 */
export function generateExcerpt(content: string, maxLength: number = 160): string {
  // Remove markdown formatting
  const plainText = content
    .replace(/#{1,6}\s+/g, '') // Remove headers
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
    .replace(/\*(.*?)\*/g, '$1') // Remove italic
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links, keep text
    .replace(/`([^`]+)`/g, '$1') // Remove inline code
    .replace(/\n/g, ' ') // Replace newlines with spaces
    .trim();
  
  if (plainText.length <= maxLength) {
    return plainText;
  }
  
  return plainText.substr(0, maxLength - 3).trim() + '...';
}

/**
 * Format date for display
 */
export function formatDate(date: Date | string, format: 'short' | 'long' = 'long'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  if (format === 'short') {
    return dateObj.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }
  
  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Generate slug from title
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/**
 * Check if post is recently published (within last 7 days)
 */
export function isRecentPost(publishedDate: Date | string): boolean {
  const date = typeof publishedDate === 'string' ? new Date(publishedDate) : publishedDate;
  const now = new Date();
  const diffInDays = (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24);
  return diffInDays <= 7;
}
