import { useState } from 'react';

export default function Home() {
  const [description, setDescription] = useState('');
  const [result, setResult] = useState('');

  const generatePost = async () => {
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description }),
    });
    const data = await res.json();
    setResult(data.text);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Social Post Generator</h1>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Opisz swój projekt" />
      <button onClick={generatePost}>Generuj</button>
      <pre>{result}</pre>
    </div>
  );
}