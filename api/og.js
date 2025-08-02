
const products = [
    {
        id: 1,
        name: 'Molfix',
        image: '/images/productImages/molfix.png',
        description: 'lorem ipsum dolor',
        price: 89,
        countInStock: 3,
        rating: 4,
        numReviews: 4,
        category: 'Diapers',
        featured: true,

    },
    {
        id: 2,
        name: 'Huggies',
        image: '/images/productImages/huggies.jpg',
        description: 'lorem ipsum dolor',
        price: 89,
        countInStock: 3,
        rating: 4,
        numReviews: 4,
        category: 'Diapers',
        featured: true,

    },
    {
        id: 3,
        name: 'Kisskids',
        image: '/images/productImages/kisskids.png',
        description: 'lorem ipsum dolor',
        price: 89,
        countInStock: 3,
        rating: 4,
        numReviews: 4,
        category: 'Diapers'
    },
    {
        id: 4,
        name: 'Virony',
        image: '/images/productImages/virony.jpg',
        description: 'lorem ipsum dolor',
        price: 89,
        countInStock: 3,
        rating: 4,
        numReviews: 4,
        category: 'Diapers'
    },
    {
        id: 5,
        name: 'Softrux',
        image: '/images/productImages/softrux.jpg',
        description: 'lorem ipsum dolor',
        price: 89,
        countInStock: 3,
        rating: 4,
        numReviews: 4,
        category: 'Diapers',
    },
    {
        id: 6,
        name: 'Bebem',
        image: '/images/productImages/bebem.jpg',
        description: 'lorem ipsum dolor',
        price: 89,
        countInStock: 3,
        rating: 4,
        numReviews: 4,
        category: 'Diapers'
    },
    {
        id: 7,
        name: 'Anion Sanitory Napkin',
        image: '/images/productImages/anion-sanitary-napkin.jpg',
        description: 'lorem ipsum dolor',
        price: 89,
        countInStock: 3,
        rating: 4,
        numReviews: 4,
        category: 'Norland'
    },
    {
        id: 8,
        name: 'Sunlit Kitchen Oil Cleaner',
        image: '/images/productImages/sunlit-kitchen.jpg',
        description: 'lorem ipsum dolor',
        price: 89,
        countInStock: 3,
        rating: 4,
        numReviews: 4,
        category: 'Sunlit'
    },
    {
        id: 9,
        name: 'Sunlit Body Lotion',
        image: '/images/productImages/sunlit-body-lotion.png',
        description: 'lorem ipsum dolor',
        price: 89,
        countInStock: 3,
        rating: 4,
        numReviews: 4,
        category: 'Sunlit'
    },
    {
        id: 10,
        name: 'Sunlit Body Wash & Shampoo',
        image: '/images/productImages/body-wash-and-shampoo.png',
        description: 'lorem ipsum dolor',
        price: 89,
        countInStock: 3,
        rating: 4,
        numReviews: 4,
        category: 'Sunlit'
    },
    {
        id: 11,
        name: 'Norland Skin Rejuvenating & Smoothing Toner',
        image: '/images/productImages/norland-skin.png',
        description: 'lorem ipsum dolor',
        price: 89,
        countInStock: 3,
        rating: 4,
        numReviews: 4,
        category: 'Norland',
        featured: true,

    },
    {
        id: 12,
        name: 'Norland Skin Rejuvenating & Moisturizing Milk',
        image: '/images/productImages/moisturizing-milk.png',
        description: 'lorem ipsum dolor',
        price: 89,
        countInStock: 3,
        rating: 4,
        numReviews: 4,
        category: 'Norland'
    },
    {
        id: 13,
        name: 'Norland Sunlit Antibacterial Ge',
        image: '/images/productImages/sunlit-antibacterial-ge.png',
        description: 'lorem ipsum dolor',
        price: 5000.00,
        countInStock: 3,
        rating: 4,
        numReviews: 4,
        category: 'Norland'
    },
    {
        id: 14,
        name: 'Norland Non-Linear D-Machine',
        image: '/images/productImages/norland-non-linear-d-machine.png',
        description: 'lorem ipsum dolor',
        price: 2300.00,
        countInStock: 3,
        rating: 4,
        numReviews: 4,
        category: 'Norland'
    },
    {
        id: 15,
        name: 'Norland Power Bank',
        image: '/images/productImages/norland-power-bank.png',
        description: 'lorem ipsum dolor',
        price: 15000.00,
        countInStock: 3,
        rating: 4,
        numReviews: 4,
        category: 'Norland'
    },


]


export default function handler(req, res) {
    const { url } = req.query;
    const userAgent = req.headers['user-agent'] || '';
    
    // Check if it's a social media crawler
    const isCrawler = /facebookexternalhit|twitterbot|linkedinbot|whatsapp|telegrambot/i.test(userAgent);
    
    if (!isCrawler) {
        // If it's not a crawler, redirect to the React app
        return res.redirect(302, url || '/');
    }
    
    // Parse the URL to get product ID
    const urlParts = url ? url.split('/') : [];
    const productsIndex = urlParts.indexOf('products');
    const productId = productsIndex !== -1 && urlParts[productsIndex + 1] 
        ? parseInt(urlParts[productsIndex + 1]) 
        : null;
    
    let title = 'Kojohwo Global — Affordable Gifts & Everyday Essentials';
    let description = 'Discover a variety of quality products from gifts, kiddies items, to school and home essentials at Kojohwo Global. Enjoy the best prices and fast delivery with excellent customer service.';
    let image = 'https://kojohwoglobal.vercel.app/og/homepage-preview.jpg';
    let pageUrl = 'https://kojohwoglobal.vercel.app';
    let type = 'website';
    
    // If it's a product page, use product-specific data
    if (productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            title = `${product.name} - Kojohwo Global`;
            description = `Buy ${product.name} for ₦${product.price} at Kojohwo Global. ${product.description}. Available now with fast delivery and excellent customer service.`;
            image = `https://kojohwoglobal.vercel.app${product.image}`;
            pageUrl = `https://kojohwoglobal.vercel.app/products/${product.id}`;
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
            
            <!-- Redirect non-crawlers to React app -->
            <script>
                if (!/facebookexternalhit|twitterbot|linkedinbot|whatsapp|telegrambot/i.test(navigator.userAgent)) {
                    window.location.href = '${pageUrl}';
                }
            </script>
        </head>
        <body>
            <div id="root">
                <div style="display: flex; justify-content: center; align-items: center; height: 100vh; font-family: Arial, sans-serif;">
                    <p>Loading Kojohwo Global...</p>
                </div>
            </div>
            <script type="module" src="/src/main.jsx"></script>
        </body>
        </html>
    `);
}
