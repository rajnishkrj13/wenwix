import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title = "Wenwix Technologies | Technology, Business & Digital Experience Solutions", 
  description = "Wenwix Technologies provides HR software solutions, Tally & accounting support, and 360° interactive virtual tours for modern businesses.",
  keywords = "Wenwix Technologies, technology services company, business software solutions, HR software, Tally services, accounting services, 360 virtual tours",
  canonical = "https://wenwix.com/",
  schemaData = null
}) {
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Wenwix Technologies",
    "url": "https://wenwix.com",
    "logo": "https://wenwix.com/logo.png",
    "description": "Technology, Business & Digital Experience Solutions",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "contact@wenwix.com"
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Wenwix Technologies" />
      <meta property="og:image" content="https://wenwix.com/logo.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="https://wenwix.com/logo.png" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData || defaultSchema)}
      </script>
    </Helmet>
  );
}
