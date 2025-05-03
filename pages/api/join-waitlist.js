// pages/api/join-waitlist.js
export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();
  
    const { email } = req.body;
    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Invalid email' });
    }
  
    try {
      const response = await fetch(process.env.SHEET_DB_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: [{ email }] }),
      });
  
      if (response.ok) {
        return res.status(200).json({ success: true });
      } else {
        return res.status(500).json({ error: 'Failed to save email' });
      }
    } catch (error) {
      return res.status(500).json({ error: 'Server error' });
    }
  }