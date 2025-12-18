import site from '../lib/siteConfig';

export default function MobileCTA(){
  return (
    <div className="mobile-cta">
      <div className="w-full max-w-sm">
        <a aria-label="Pedir por PedidosYa ahora" href={site.pedidosya} target="_blank" rel="noreferrer" className="btn-primary w-full justify-center shadow-lg">
          Pedir Ahora 🛒
        </a>
      </div>
    </div>
  );
}
