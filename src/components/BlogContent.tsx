
import React from 'react';

interface BlogContentProps {
  content: string;
}

const BlogContent: React.FC<BlogContentProps> = ({ content }) => {
  const lines = content.split('\n');
  const processedContent = [];
  let inCodeBlock = false;
  let codeBlockContent = [];
  let codeBlockLanguage = '';
  let inBlockquote = false;
  let blockquoteContent = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Handle code block start/end
    if (line.startsWith('```')) {
      if (!inCodeBlock) {
        inCodeBlock = true;
        codeBlockLanguage = line.slice(3).trim();
        continue;
      } else {
        inCodeBlock = false;
        processedContent.push(
          <pre key={`code-${i}`} className="bg-muted p-4 rounded-md my-4 overflow-auto">
            <code className={`language-${codeBlockLanguage}`}>
              {codeBlockContent.join('\n')}
            </code>
          </pre>
        );
        codeBlockContent = [];
        codeBlockLanguage = '';
        continue;
      }
    }
    
    // If we're in a code block, collect the lines
    if (inCodeBlock) {
      codeBlockContent.push(line);
      continue;
    }

    // Handle blockquotes
    if (line.startsWith('> ')) {
      if (!inBlockquote) {
        inBlockquote = true;
      }
      blockquoteContent.push(line.slice(2));
      continue;
    } else if (inBlockquote && line.trim() === '') {
      inBlockquote = false;
      processedContent.push(
        <blockquote key={`quote-${i}`} className="border-l-4 border-muted pl-4 my-4 italic">
          {blockquoteContent.join('\n')}
        </blockquote>
      );
      blockquoteContent = [];
    }
    
    // Regular markdown processing
    if (line.startsWith('# ')) {
      const headingIndex = processedContent.length;
      processedContent.push(
        <h1 key={i} id={`heading-${headingIndex}`} className="text-3xl font-bold mt-8 mb-4 scroll-mt-24">
          {line.substring(2)}
        </h1>
      );
    } else if (line.startsWith('## ')) {
      const headingIndex = processedContent.length;
      processedContent.push(
        <h2 key={i} id={`heading-${headingIndex}`} className="text-2xl font-bold mt-6 mb-3 scroll-mt-24">
          {line.substring(3)}
        </h2>
      );
    } else if (line.startsWith('### ')) {
      const headingIndex = processedContent.length;
      processedContent.push(
        <h3 key={i} id={`heading-${headingIndex}`} className="text-xl font-bold mt-5 mb-2 scroll-mt-24">
          {line.substring(4)}
        </h3>
      );
    } else if (line.startsWith('#### ')) {
      const headingIndex = processedContent.length;
      processedContent.push(
        <h4 key={i} id={`heading-${headingIndex}`} className="text-lg font-bold mt-4 mb-2 scroll-mt-24">
          {line.substring(5)}
        </h4>
      );
    } else if (line.startsWith('- ')) {
      processedContent.push(<li key={i} className="ml-5 mb-1">{line.substring(2)}</li>);
    } else if (line.trim() === '') {
      processedContent.push(<br key={i} />);
    } else {
      processedContent.push(<p key={i} className="mb-4">{line}</p>);
    }
  }
  
  // Handle any remaining blockquote content
  if (inBlockquote && blockquoteContent.length > 0) {
    processedContent.push(
      <blockquote key="quote-end" className="border-l-4 border-muted pl-4 my-4 italic">
        {blockquoteContent.join('\n')}
      </blockquote>
    );
  }
  
  return <div className="prose prose-lg dark:prose-invert max-w-none">{processedContent}</div>;
};

export default BlogContent;
