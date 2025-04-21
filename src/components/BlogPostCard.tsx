
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { BlogPost } from '@/types/blog';
import { Calendar, Clock } from 'lucide-react';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border-border/50">
      <div className="h-48 overflow-hidden">
        <img 
          src={post.coverImage} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          {post.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="bg-secondary/10 text-secondary px-2 py-0.5 rounded-full text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
        <CardTitle className="text-xl line-clamp-2">
          <Link to={`/blog/${post.slug}`} className="hover:text-secondary transition-colors">
            {post.title}
          </Link>
        </CardTitle>
        <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {post.publishedAt}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {post.readTime}
          </span>
        </div>
      </CardHeader>
      <CardContent className="pb-2 flex-grow">
        <p className="text-sm text-foreground/80 line-clamp-3">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="pt-0 flex items-center justify-between border-t border-border/30 mt-4 pt-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full overflow-hidden bg-muted flex items-center justify-center">
            {post.author.avatar ? (
              <img src={post.author.avatar} alt={post.author.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-xs font-medium bg-secondary text-white">
                {post.author.name.charAt(0)}
              </div>
            )}
          </div>
          <span className="text-xs font-medium">{post.author.name}</span>
        </div>
        <Link 
          to={`/blog/${post.slug}`} 
          className="text-xs font-medium text-secondary hover:text-secondary/80 transition-colors flex items-center"
        >
          Read more
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogPostCard;
