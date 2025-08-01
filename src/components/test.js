import { Helmet } from "react-helmet-async";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Kojohwo Global — Affordable Gifts & Everyday Essentials</title>
        <meta name="description" content="Discover a variety of quality products from gifts, kiddies items, to school and home essentials at Kojohwo Global. Enjoy the best prices and fast delivery." />

        {/* Open Graph */}
        <meta property="og:title" content="Kojohwo Global — Affordable Gifts & Everyday Essentials" />
        <meta property="og:description" content="Discover quality items across gifts, kiddies supplies, and daily needs at amazing prices." />
        <meta property="og:image" content="https://kojo/og/homepage-preview.webp" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:title" content="Kojohwo Global — Affordable Gifts & Essentials" />
        <meta name="twitter:description" content="Your one-stop shop for party supplies, books, toiletries, and more." />
        <meta name="twitter:image" content="https://yourdomain.com/og/homepage-preview.webp" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Your existing homepage content here */}
    </>
  );
}
