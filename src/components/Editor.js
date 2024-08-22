import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import './Editor.css';

const CodeEditor = () => {
    const [html, setHtml] = useState('');
    const [css, setCss] = useState('');
    const [js, setJs] = useState('');
    const [srcDoc, setSrcDoc] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
                <html>
                    <head>
                        <style>
                            body {
                                margin: 0;
                                padding: 0;
                            }
                            ${css}
                        </style>
                    </head>
                    <body>
                        ${html}
                        <script>
                            ${js}
                        </script>
                    </body>
                </html>
            `);
        }, 250);

        return () => clearTimeout(timeout);
    }, [html, css, js]);

    return (
        <div className="container">
            <div className="editors">
                <div className="editor-pane">
                    <h3>HTML</h3>
                    <Editor
                        height="350px"
                        defaultLanguage="html"
                        value={html}
                        onChange={(value) => setHtml(value)}
                        theme="vs-dark"
                    />
                </div>
                <div className="editor-pane">
                    <h3>CSS</h3>
                    <Editor
                        height="350px"
                        defaultLanguage="css"
                        value={css}
                        onChange={(value) => setCss(value)}
                        theme="vs-dark"
                    />
                </div>
                <div className="editor-pane">
                    <h3>JavaScript</h3>
                    <Editor
                        height="350px"
                        defaultLanguage="javascript"
                        value={js}
                        onChange={(value) => setJs(value)}
                        theme="vs-dark"
                    />
                </div>
            </div>
            <div className="output-pane">
                <iframe
                    id="output"
                    srcDoc={srcDoc}
                    title="output"
                    sandbox="allow-scripts"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                ></iframe>
            </div>
        </div>
    );
};

export default CodeEditor;
