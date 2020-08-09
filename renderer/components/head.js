import React from 'react';
import { Head } from 'next/document';
import theme from '../theme/palette';
import brand from '../static/text/brand';

const HeadComponent = () => (
  <Head>
    <meta charSet="utf-8" />
    {/* Use minimum-scale=1 to enable GPU rasterization */}
    <meta
      name="description"
      content={brand.crypto.desc}
    />
    <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
    />
    {/* Favicon */}
    <link rel="shortcut icon" href="/static/favicons/favicon.ico" />
    <link rel="apple-touch-icon" sizes="57x57" href="/static/favicons/apple-icon-57x57.png" />
    <link rel="apple-touch-icon" sizes="60x60" href="/static/favicons/apple-icon-60x60.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/static/favicons/apple-icon-72x72.png" />
    <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-icon-76x76.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/static/favicons/apple-icon-114x114.png" />
    <link rel="apple-touch-icon" sizes="120x120" href="/static/favicons/apple-icon-120x120.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/static/favicons/apple-icon-144x144.png" />
    <link rel="apple-touch-icon" sizes="152x152" href="/static/favicons/apple-icon-152x152.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-icon-180x180.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="/static/favicons/android-icon-192x192.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="/static/favicons/favicon-96x96.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
    <link rel="manifest" href="/static/favicons/manifest.json" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="msapplication-TileImage" content="/static/favicons/ms-icon-144x144.png" />
    {/* PWA primary color */}
    <meta name="theme-color" content={theme.money.palette.primary.main} />
    <link href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <link href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet" />
    {/*  Facebook */}
    <meta property="author" content="luxi" />
    <meta property="og:site_name" content="luxi.ux-maestro.com" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    {/*  Twitter */}
    <meta property="twitter:site" content="luxi.ux-maestro.com" />
    <meta property="twitter:domain" content="luxi.ux-maestro.com" />
    <meta property="twitter:creator" content="luxi" />
    <meta property="twitter:card" content="summary" />
    <meta property="twitter:image:src" content="/static/images/crypto-logo.png" />
    <meta property="og:url" content={brand.crypto.url} />
    <meta property="og:title" content={brand.crypto.desc} />
    <meta
      property="og:description"
      content={brand.crypto.desc}
    />
    <meta name="twitter:site" content={brand.crypto.url} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={brand.crypto.img} />
    <meta property="og:image" content={brand.crypto.img} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </Head>
);

export default HeadComponent;
