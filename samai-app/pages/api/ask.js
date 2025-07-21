
import { askChatGPT } from '../../lib/openai'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  const { prompt } = req.body
  try {
    const answer = await askChatGPT(prompt)
    res.status(200).json({ answer })
  } catch (err) {
    res.status(500).json({ error: 'OpenAI request failed' })
  }
}
