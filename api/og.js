const products = [
  {
    id: 1,
    name: 'Molfix',
    category: 'kiddies',
    price: 2500,
    image: '/images/productImages/molfix.png',
    description: 'Ultra-absorbent Molfix diapers with breathable layers keep babies dry for 12+ hours. Hypoallergenic and stretchy for leak-proof comfort during playtime or naps.',
    featured: true,
    slug: 'molfix',
  },
  {
    id: 2,
    name: 'Huggies',
    category: 'kiddies',
    price: 1500,
    image: '/images/productImages/huggies.jpg',
    description: 'Flex-fit Huggies diapers with 12-hour leak protection. Stretchy waistbands move with active toddlers, while wetness indicators help perfect change times',
    featured: true,
    slug: 'huggies',
  },
  {
    id: 3,
    name: 'Kisskids',
    category: 'kiddies',
    price: 800,
    image: '/images/productImages/kisskids.png',
    description: 'Gentle Kisskids diapers with cotton-soft layers for sensitive skin. Breathable core prevents rashes during play or sleep.',
    slug: 'kisskids',
  },
  {
    id: 4,
    name: 'Virony',
    category: 'kiddies',
    price: 4500,
    image: '/images/productImages/virony.jpg',
    description: 'Premium Virony diapers with antibacterial lining for extra protection. Super-absorbent core locks away moisture for overnight dryness.',
    slug: 'virony',
  },
  {
    id: 5,
    name: 'Softrux',
    category: 'kiddies',
    price: 3500,
    image: '/images/productImages/softrux.jpg',
    description: 'Ultra-soft Softrux baby wipes with aloe vera. Thick and durable for gentle cleaning during diaper changes or mealtimes.',
    slug: 'softrux',
  },
  {
    id: 6,
    name: 'Bebem',
    category: 'kiddies',
    price: 1200,
    image: '/images/productImages/bebem.jpg',
    description: 'Bebem organic cotton onesies with envelope necks for easy dressing. Breathable fabric keeps newborns cozy without overheating',
    slug: 'bebem',
  },
  {
    id: 7,
    name: 'Anion Sanitory Napkin',
    category: 'toiletries',
    price: 5500,
    image: '/images/productImages/anion-sanitary-napkin.jpg',
    description: 'Anion pads with cooling gel technology for freshness. Antibacterial layers and wings provide secure, rash-free comfort.',
    slug: 'anion-sanitory-napkin',
  },
  {
    id: 8,
    name: 'Sunlit Kitchen Oil Cleaner',
    category: 'home-articles',
    price: 500,
    image: '/images/productImages/sunlit-kitchen.jpg',
    description: 'Powerful Sunlit degreaser cuts through stubborn oil. Lemon-fresh formula works instantly without harsh scrubbing.',
    slug: 'sunlit-kitchen-oil-cleaner',
  },
  {
    id: 9,
    name: 'Sunlit Body Lotion',
    category: 'toiletries',
    price: 2200,
    image: '/images/productImages/sunlit-body-lotion.png',
    description: '24-hour moisturizing Sunlit lotion with vitamin E. Fast-absorbing and non-greasy for silky-soft skin.',
    slug: 'sunlit-body-lotion',
  },
  {
    id: 10,
    name: 'Sunlit Body Wash & Shampoo',
    category: 'toiletries',
    price: 6000,
    image: '/images/productImages/body-wash-and-shampoo.png',
    description: '2-in-1 Sunlit wash gently cleanses hair and body. pH-balanced with chamomile to soothe baby’s delicate skin.',
    slug: 'sunlit-body-wash-shampoo',
  },
  {
    id: 11,
    name: 'Norland Skin Rejuvenating & Smoothing Toner',
    image: '/images/productImages/norland-skin.png',
    description: 'Alcohol-free Norland toner refines pores and balances pH. Infused with green tea for a refreshed, glowing complexion.',
    price: 89,
    category: 'toiletries',
    featured: true,
    slug: 'norland-skin-rejuvenating-smoothing-toner',
  },
  {
    id: 12,
    name: 'Norland Skin Rejuvenating & Moisturizing Milk',
    image: '/images/productImages/moisturizing-milk.png',
    description: 'Lightweight Norland milk lotion locks in hydration. Contains hyaluronic acid for plump, dewy skin all day.',
    price: 89,
    category: 'toiletries',
    slug: 'norland-skin-rejuvenating-moisturizing-milk',
  },
  {
    id: 13,
    name: 'Norland Sunlit Antibacterial Ge',
    image: '/images/productImages/sunlit-antibacterial-ge.png',
    description: 'Norland gel kills 99.9% germs without drying hands. Aloe-enriched for sanitizing with moisture protection.',
    price: 5000.00,
    category: 'home-articles',
    slug: 'norland-sunlit-antibacterial-ge',
  },
  {
    id: 14,
    name: 'Norland Non-Linear D-Machine',
    image: '/images/productImages/norland-non-linear-d-machine.png',
    description: 'Portable Norland massager relieves muscle tension with heat therapy. Compact design for home or travel use.',
    category: 'home-articles',
    slug: 'norland-non-linear-d-machine',
  },
  {
    id: 15,
    name: 'Norland Power Bank',
    image: '/images/productImages/norland-power-bank.png',
    description: '20,000mAh Norland power bank charges 4 devices simultaneously. Shockproof casing ensures durability on-the-go',
    price: 15000.00,
    category: 'home-articles',
    slug: 'norland-power-bank',
  },
];



export default function handler(req, res) {
    const { url } = req.query;
    const userAgent = req.headers['user-agent'] || '';

    // Check if it's a social media crawler
    const isCrawler = /facebookexternalhit|twitterbot|linkedinbot|whatsapp|telegrambot/i.test(userAgent);

    // Parse the URL to get product ID
    const urlParts = url ? url.split('/') : [];
    const productsIndex = urlParts.indexOf('products');
    let productId = null
    let productSlug = ''

    if (productsIndex !== -1 && urlParts[productsIndex +1]) {
        const [idPart, ...slugParts] = urlParts[productsIndex + 1].split('-')
        productId = parseInt(idPart)
        productSlug = slugParts.join('-') //keep slug incase i need it later
    }

    // const productId = productsIndex !== -1 && urlParts[productsIndex + 1]
    //     ? parseInt(urlParts[productsIndex + 1])
    //     : null;

    let title = 'Kojohwo Global — Affordable Gifts & Everyday Essentials';
    let description = 'Discover a variety of quality products from gifts, kiddies items, to school and home essentials at Kojohwo Global. Enjoy the best prices and fast delivery with excellent customer service.';
    let image = 'https://kojohwoglobal.vercel.app/og/homepage-preview.jpg';
    let pageUrl = 'https://kojohwoglobal.vercel.app';
    let type = 'website';

    // If it's a product page, use product-specific data
    if (productId) {
        const product = products.find(p => p.id === productId && p.slug === productSlug);
        if (product) {
            title = `${product.name} - Kojohwo Global`;
            description = `Buy ${product.name} for ₦${product.price} at Kojohwo Global. ${product.description}. Available now with fast delivery and excellent customer service.`;
            image = `https://kojohwoglobal.vercel.app${product.image}`;
            pageUrl = `https://kojohwoglobal.vercel.app/products/${product.id}-${product.slug}`;
            type = 'product';
        }
    }

    // Return HTML with meta tags
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(`
        <!doctype html>
        <html lang="en" data-theme="myTheme">
        <head>
            <meta charset="UTF-8" />
            <link rel="icon" type="image/svg+xml" href="/vite.svg" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>${title}</title>
            <meta name="theme-color" content="#8c3f27" />
            
            <!-- SEO Meta Tags -->
            <meta name="description" content="${description}" />
            
            <!-- Open Graph Meta Tags -->
            <meta property="og:title" content="${title}" />
            <meta property="og:description" content="${description}" />
            <meta property="og:image" content="${image}" />
            <meta property="og:image:width" content="1290" />
            <meta property="og:image:height" content="630" />
            <meta property="og:url" content="${pageUrl}" />
            <meta property="og:type" content="${type}" />
            
            <!-- Twitter Card Meta Tags -->
            <meta name="twitter:title" content="${title}" />
            <meta name="twitter:description" content="${description}" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content="${image}" />
            
            <!-- Logo font link -->
            <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@612&family=Dosis:wght@300&family=Londrina+Sketch&family=Modak&family=Moo+Lah+Lah&family=Rampart+One&family=Ubuntu+Mono:wght@700&display=swap" rel="stylesheet">
            
            ${!isCrawler ? `<script type="module" src="/src/main.jsx"></script>` : ''}
        </head>
        <body>
            <div id="root">
                ${isCrawler ? `
                    <div style="display: flex; justify-content: center; align-items: center; height: 100vh; font-family: Arial, sans-serif;">
                        <div style="text-align: center;">
                            <h1>${title}</h1>
                            <p>${description}</p>
                            <img src="${image}" alt="${title}" style="max-width: 300px; height: auto;" />
                        </div>
                    </div>
                ` : ''}
            </div>
        </body>
        </html>
    `);
}