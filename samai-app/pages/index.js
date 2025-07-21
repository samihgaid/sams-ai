
import { useState } from 'react'

export default function Home() {
  const [prompt, setPrompt] = useState('')
  const [answer, setAnswer] = useState('')
  const [loading, setLoading] = useState(false)

  const ask = async () => {
    setLoading(true)
    const res = await fetch('/api/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    })
    const data = await res.json()
    setAnswer(data.answer)
    setLoading(false)
  }

  return (
    <div style={{ padding: 40, fontFamily: 'Arial' }}>
      <h1>SamAI - Brutal Truth Bot</h1>
      <textarea
        placeholder="Ask a brutal truth about business, life, or success"
        rows={4}
        style={{ width: '100%', marginBottom: 10 }}
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
      />
      <br />
      <button onClick={ask} disabled={loading}>
        {loading ? 'Thinking...' : 'Ask SamAI'}
      </button>
      <div style={{ marginTop: 20 }}>
        <strong>Answer:</strong>
        <p>{answer}</p>
      </div>
    </div>
  )
}
