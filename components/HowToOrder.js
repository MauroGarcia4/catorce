import site from '../lib/siteConfig';

export default function HowToOrder(){
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold mb-4">Cómo pedir</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="card">
          <div className="font-semibold">1. Elegí tu pedido</div>
          <div className="text-sm text-gray-600 mt-2">Miralo en el menú y elegí lo que quieras.</div>
        </div>
        <div className="card">
          <div className="font-semibold">2. Pedí por PedidosYa</div>
          <div className="text-sm text-gray-600 mt-2">Usá el botón para abrir el menú y completar tu pedido.</div>
        </div>
        <div className="card">
          <div className="font-semibold">3. Retirá o recibí</div>
          <div className="text-sm text-gray-600 mt-2">Elegí takeaway o delivery según prefieras.</div>
        </div>
      </div>
      <div className="mt-4">
        <a aria-label="Pedir por PedidosYa" href={site.pedidosya} target="_blank" rel="noreferrer" className="inline-flex items-center px-5 py-3 bg-black text-white rounded-xl">Pedir por PedidosYa</a>
      </div>
    </section>
  );
}
