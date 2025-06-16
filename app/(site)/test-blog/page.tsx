import ReactMarkdown from 'react-markdown';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Test Blog',
  description: 'Explore our test blog section featuring experimental content, development updates, and technical insights from our development team.',
};

const TestBlog = () => {
  return (
    <div className='medium-markdown'>
      <ReactMarkdown>
        {`
# Can we use React Native for web application development? 💻🌐

Here's an example of a simple React component:

\`\`\`jsx
import React from 'react';

const HelloWorld = () => {
  return <h1>Hello, World!</h1>;
};

export default HelloWorld;
\`\`\`

## Conclusion: Is it viable? ❓
While React Native for Web offers advantages, it's not a direct replacement for dedicated web frameworks. However, if cross-platform development and code reusability are crucial, it can be a viable option. 🌐📱
        `}
      </ReactMarkdown>
    </div>
  );
};

export default TestBlog;