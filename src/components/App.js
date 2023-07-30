import React, { useState, useEffect } from 'react';
import marked from 'marked';

const App = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    const renderedMarkdown = marked(markdown);
    document.getElementById('preview').innerHTML = renderedMarkdown;
  }, [markdown]);

  const handleMarkdownChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div>
      <div>
        <textarea value={markdown} onChange={handleMarkdownChange} />
      </div>
      <div>
        <div id="preview"></div>
      </div>
    </div>
  );
};

export default App;
