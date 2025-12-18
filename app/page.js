import Header from '../components/Header';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import MenuPreview from '../components/MenuPreview';
import HowToOrder from '../components/HowToOrder';
import Gallery from '../components/Gallery';
import Location from '../components/Location';
import Hours from '../components/Hours';
import Footer from '../components/Footer';
import MobileCTA from '../components/MobileCTA';
import site from '../lib/siteConfig';

export const metadata = {
  title: 'Catorce Takeaway — Unidos por el sabor',
  description: 'Café y takeaway en San Nicolás. Pedidos por PedidosYa. Instagram: catorce.takeaway',
  openGraph: {
    title: 'Catorce Takeaway',
    description: 'Unidos por el sabor — Café, pastelería y takeaway en San Nicolás',
  },
  robots: {
    index: true,
    follow: true
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CafeOrCoffeeShop',
  'name': site.name,
  'url': site.url,
  'sameAs': [site.instagram],
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': site.address.street,
    'addressLocality': site.address.city,
    'addressRegion': site.address.region,
    'addressCountry': site.address.country
  },
  'openingHours': [
    'Mo-Fr 08:00-12:00',
    'Mo-Fr 17:00-21:00',
    'Sa 09:00-12:30',
    'Sa 17:00-21:00'
  ]
};

export default function Page(){
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <div className="max-w-6xl mx-auto px-6">
        <Highlights />
        <div className="py-2"></div>
        <MenuPreview />
        <div className="py-2"></div>
        <HowToOrder />
        <div className="py-2"></div>
        <Gallery />
        <div className="py-2"></div>
        <Location />
        <div className="py-2"></div>
        <Hours />
      </div>
      <Footer />

      <MobileCTA />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
}
