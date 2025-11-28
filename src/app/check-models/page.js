'use client'
import { useEffect, useState } from 'react';

export default function CheckModels() {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkModels = async () => {
      try {
        const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models?key=' + process.env.NEXT_PUBLIC_GEMINI_API_KEY);
        const data = await response.json();
        
        if (data.models) {
          setModels(data.models);
          console.log('Available models:', data.models);
        } else {
          setError('No models found or invalid API key');
        }
      } catch (err) {
        setError('Error: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    checkModels();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Available Gemini Models for Your API Key</h1>
      
      {loading && <p>Loading models...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      
      {models.length > 0 && (
        <div>
          <p>Found {models.length} models:</p>
          <ul>
            {models.map((model) => (
              <li key={model.name}>
                <strong>{model.displayName}</strong>
                <br />
                Name: <code>{model.name}</code>
                <br />
                Input tokens: {model.inputTokenLimit}
                <br />
                Output tokens: {model.outputTokenLimit}
                <br />
                Supported methods: {model.supportedGenerationMethods?.join(', ')}
                <hr />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
