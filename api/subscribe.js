export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, name } = req.body;

  // Validation
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email is required' });
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': process.env.BREVO_API_KEY,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        email: email.toLowerCase().trim(),
        attributes: {
          FIRSTNAME: name || '',
          SOURCE: 'Website'
        },
        listIds: [parseInt(process.env.BREVO_LIST_ID)],
        updateEnabled: true // Update if contact already exists
      })
    });

    const data = await response.json();

    if (response.ok || response.status === 204) {
      return res.status(200).json({ 
        success: true, 
        message: 'Successfully subscribed!' 
      });
    } else if (data.code === 'duplicate_parameter') {
      return res.status(200).json({ 
        success: true, 
        message: 'You are already subscribed!' 
      });
    } else {
      return res.status(400).json({ 
        error: 'Subscription failed. Please try again.' 
      });
    }
  } catch (error) {
    console.error('Newsletter error:', error);
    return res.status(500).json({ 
      error: 'Server error. Please try again later.' 
    });
  }
}