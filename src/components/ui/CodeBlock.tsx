import React from 'react';

interface CodeBlockProps {
  children: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children, language = 'text' }) => {
  return (
    <div className="relative">
      <div className="absolute top-0 right-0 bg-gray-700 text-xs font-mono text-gray-300 rounded-bl rounded-tr px-2 py-1">
        {language}
      </div>
      <pre className="bg-gray-800 text-gray-100 rounded-lg p-4 pt-8 overflow-x-auto">
        <code className="font-mono text-sm">{children}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;