import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title,
  description,
  image,
  url,
  type = 'website',
  keywords,
  author = 'Kojohwo Global',
  siteName = 'Kojohwo Global',
  twitterHandle = '@kojohwoglobal'
}) => {
  // Default fallbacks
  const defaultTitle = 'Kojohwo Global - Premium Products & Global Shopping Experience';
  const defaultDescription = 'Discover premium products from around the world at Kojohwo Global. Shop quality items with excellent customer service and global shipping.';
  const defaultImage = '/images/og-default.jpg'; // You'll need to create this
  const defaultUrl = 'https://kojohwoglobal.com';

  // Use provided values or fallback to defaults
  const metaTitle = title || defaultTitle;
  const metaDescription = description || defaultDescription;
  const metaImage = image || defaultImage;
  const metaUrl = url || defaultUrl;
  const fullTitle = title ? `${title} | ${siteName}` : defaultTitle;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={metaUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      {/* Additional Meta for E-commerce */}
      <meta name="theme-color" content="#ae2c00" />
      <meta name="msapplication-TileColor" content="#ae2c00" />
      
      {/* Structured Data for E-commerce */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": siteName,
          "url": defaultUrl,
          "logo": `${defaultUrl}/images/logo.png`,
          "description": metaDescription,
          "sameAs": [
            "https://facebook.com/kojohwoglobal",
            "https://twitter.com/kojohwoglobal",
            "https://instagram.com/kojohwoglobal"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;