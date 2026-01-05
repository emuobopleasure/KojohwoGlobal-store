export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, name } = req.body;

    // Validation
    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Please enter a valid email address' });
    }

    // Check environment variables
    if (!process.env.BREVO_API_KEY || !process.env.BREVO_LIST_ID) {
      console.error('Missing environment variables');
      return res.status(500).json({ error: 'Server configuration error' });
    }

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
        updateEnabled: true
      })
    });

    // Handle 204 (No Content) - means contact already exists and was updated
    if (response.status === 204) {
      return res.status(200).json({ 
        success: true, 
        message: 'You\'re already subscribed to our newsletter!' 
      });
    }

    // Handle 201 (Created) - new contact
    if (response.status === 201) {
      return res.status(200).json({ 
        success: true, 
        message: 'Successfully subscribed! Check your inbox for confirmation.' 
      });
    }

    // For other status codes, try to parse JSON
    let data;
    try {
      data = await response.json();
    } catch (e) {
      // If JSON parsing fails, return generic error
      console.error('Failed to parse Brevo response:', response.status);
      return res.status(400).json({ 
        error: 'Subscription failed. Please try again.' 
      });
    }

    // Handle 200 (OK) - contact updated
    if (response.status === 200) {
      return res.status(200).json({ 
        success: true, 
        message: 'Successfully subscribed! Check your inbox for confirmation.' 
      });
    }

    // Handle duplicate parameter error
    if (data.code === 'duplicate_parameter') {
      return res.status(200).json({ 
        success: true, 
        message: 'You\'re already subscribed to our newsletter!' 
      });
    }

    // Other errors
    console.error('Brevo error:', response.status, data);
    return res.status(400).json({ 
      error: 'Subscription failed. Please try again.' 
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return res.status(500).json({ 
      error: 'Server error. Please try again later.' 
    });
  }
}