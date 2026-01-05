export default async function handler(req, res) {
  // CORS headers
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
      return res.status(400).json({ 
        error: 'Please enter a valid email address' 
      });
    }

    // Check environment variables
    if (!process.env.BREVO_API_KEY || !process.env.BREVO_LIST_ID) {
      console.error('Missing environment variables');
      return res.status(500).json({ 
        error: 'Server configuration error. Please contact support.' 
      });
    }

    console.log('Making request to Brevo for:', email);

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

    // LOG THE RESPONSE
    console.log('Brevo response status:', response.status);
    
    const data = await response.json();
    console.log('Brevo response data:', JSON.stringify(data, null, 2));

    // Success - new subscriber
    if (response.ok || response.status === 204 || response.status === 201) {
      return res.status(200).json({ 
        success: true, 
        message: 'Successfully subscribed! Check your inbox for confirmation.' 
      });
    } 
    
    // Already subscribed
    if (data.code === 'duplicate_parameter') {
      return res.status(200).json({ 
        success: true, 
        message: 'You\'re already on our list! Keep an eye on your inbox for exclusive deals.' 
      });
    }

    // Contact already exists (alternative Brevo response)
    if (response.status === 400 && data.message && data.message.includes('already exist')) {
      return res.status(200).json({ 
        success: true, 
        message: 'You\'re already subscribed to our newsletter!' 
      });
    }

    // Other errors
    console.error('Unhandled Brevo response:', { status: response.status, data });
    return res.status(400).json({ 
      error: 'Subscription failed. Please try again.',
      debug: data // Temporary - remove in production
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return res.status(500).json({ 
      error: 'Server error. Please try again later.',
      debug: error.message // Temporary - remove in production
    });
  }
}
