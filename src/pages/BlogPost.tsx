
import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blogPosts';
import { BlogPost as BlogPostType } from '@/types/blog';
import BlogContent from '@/components/BlogContent';
import TableOfContents from '@/components/TableOfContents';
import SocialShare from '@/components/SocialShare';
import ReadingProgress from '@/components/ReadingProgress';
import Comments from '@/components/Comments';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import Newsletter from '@/components/Newsletter';
import AuthorProfile from '@/components/AuthorProfile';
import PostReactions from '@/components/PostReactions';
import ReadingTime from '@/components/ReadingTime';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Find the post with the matching slug
    const foundPost = blogPosts.find(post => post.slug === slug);
    
    if (foundPost) {
      setPost(foundPost);
      
      // Find related posts (posts with similar tags)
      const related = blogPosts
        .filter(p => 
          p.id !== foundPost.id && // Not the current post
          p.tags.some(tag => foundPost.tags.includes(tag)) // Has at least one common tag
        )
        .sort(() => Math.random() - 0.5) // Simple random shuffle
        .slice(0, 3); // Get at most 3 posts
      
      setRelatedPosts(related);
    } else {
      // If no post found, redirect to blog listing
      navigate('/blog', { replace: true });
    }
  }, [slug, navigate]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Loading...</h2>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Enhance author object with additional information
  const enhancedAuthor = {
    ...post.author,
    bio: "Tech writer and software engineer passionate about emerging technologies and their impact on development.",
    social: {
      twitter: "https://twitter.com/example",
      github: "https://github.com/example",
      linkedin: "https://linkedin.com/in/example",
      website: "https://example.com"
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <ReadingProgress />
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <article className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-3/4">
              <Link to="/blog" className="inline-flex items-center mb-6 text-sm font-medium hover:text-secondary transition-colors">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to all posts
              </Link>

              <div className="mb-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="bg-muted px-3 py-1 rounded-full text-sm font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{post.title}</h1>
                <div className="flex items-center flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-muted">
                      {post.author.avatar ? (
                        <img src={post.author.avatar} alt={post.author.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-sm font-medium">
                          {post.author.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="font-medium">{post.author.name}</div>
                      <div className="text-xs text-muted-foreground">Author</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span>{post.publishedAt}</span>
                    <span>•</span>
                    <ReadingTime text={post.content} />
                  </div>
                </div>
              </div>

              {post.coverImage && (
                <div className="mb-8 rounded-lg overflow-hidden">
                  <img 
                    src={post.coverImage} 
                    alt={post.title} 
                    className="w-full h-auto object-cover max-h-96" 
                  />
                </div>
              )}

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <BlogContent content={post.content} />
              </div>

              <div className="mt-8 pt-4 border-t">
                <PostReactions postId={post.id} />
              </div>
              
              <div className="mt-8 pt-4 border-t">
                <SocialShare 
                  title={post.title} 
                  url={window.location.href} 
                />
              </div>

              <div className="mt-8 pt-4 border-t">
                <AuthorProfile author={enhancedAuthor} />
              </div>
              
              <div className="mt-8">
                <Newsletter />
              </div>

              <Comments />
            </div>

            <div className="lg:w-1/4">
              <TableOfContents content={post.content} />
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8">
            <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
            
            {relatedPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map(relatedPost => (
                  <div key={relatedPost.id} className="border border-border rounded-lg p-4 hover:border-secondary transition-colors">
                    <Link to={`/blog/${relatedPost.slug}`} className="block">
                      <h4 className="font-bold mb-2 line-clamp-2 hover:text-secondary transition-colors">
                        {relatedPost.title}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {relatedPost.excerpt}
                      </p>
                      <div className="text-xs text-muted-foreground">
                        {relatedPost.publishedAt} • {relatedPost.readTime} read
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">No related articles found.</p>
            )}
            
            <div className="mt-8 text-center">
              <Button asChild>
                <Link to="/blog">View All Articles</Link>
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
