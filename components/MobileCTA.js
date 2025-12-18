import site from '../lib/siteConfig';

export default function MobileCTA(){
  return (
    <div className="mobile-cta md:hidden">
      <div className="w-full max-w-2xl">
        <a aria-label="Pedir por PedidosYa" href={site.pedidosya} target="_blank" rel="noreferrer" className="w-full inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-xl">Pedir por PedidosYa</a>
      </div>
    </div>
  );
}
