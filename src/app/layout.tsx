import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { PurchaseNotification } from '@/components/landing/PurchaseNotification';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'El Gran Recetario Saludable',
  description: 'La página de ventas del e-book de recetas de postres sin culpa.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-ES">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&family=Belleza&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1144197554338153');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript><img height="1" width="1" style={{display: 'none'}}
        src="https://www.facebook.com/tr?id=1144197554338153&ev=PageView&noscript=1"
        /></noscript>
        {children}
        <Toaster />
        <PurchaseNotification />
      </body>
    </html>
  );
}
