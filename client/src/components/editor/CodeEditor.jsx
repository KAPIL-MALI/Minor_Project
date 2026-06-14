import React, { useRef, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { useTheme } from '../../context/ThemeContext';

const CodeEditor = ({ language, value, onChange }) => {
  const { theme } = useTheme();
  const editorRef = useRef(null);

  // Map our simple language names to monaco language ids
  const monacoLanguage = language === 'cpp' ? 'cpp' : language === 'java' ? 'java' : 'javascript';
  const monacoTheme = theme === 'dark' ? 'vs-dark' : 'light';

  const handleEditorMount = (editor, monaco) => {
    editorRef.current = editor;
    if (value) {
      editor.setValue(value);
    }
  };

  useEffect(() => {
    if (editorRef.current) {
      const currentValue = editorRef.current.getValue();
      if (currentValue !== value) {
        // Only update if the value actually changed from the outside 
        // (like changing a problem or language, not from typing)
        editorRef.current.setValue(value);
      }
    }
  }, [value]);

  const handleEditorChange = (newValue) => {
    onChange(newValue);
  };

  return (
    <Editor
      height="100%"
      language={monacoLanguage}
      theme={monacoTheme}
      onChange={handleEditorChange}
      onMount={handleEditorMount}
      options={{
        minimap: { enabled: false },
        fontSize: 14,
        fontFamily: "'JetBrains Mono', monospace",
        fontLigatures: true,
        wordWrap: 'on',
        padding: { top: 16, bottom: 16 },
        scrollBeyondLastLine: false,
        smoothScrolling: true,
        cursorBlinking: 'smooth',
        cursorSmoothCaretAnimation: 'on',
        formatOnPaste: true,
      }}
      loading={
        <div className="flex h-full items-center justify-center">
          <span className="loading loading-dots loading-md text-primary"></span>
        </div>
      }
    />
  );
};

export default CodeEditor;
