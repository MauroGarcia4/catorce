import site from '../lib/siteConfig';

export default function HowToOrder(){
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8">3 pasos para tu pedido</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="card">
          <div className="text-3xl mb-3">🍽️</div>
          <div className="font-semibold text-lg mb-2">1. Mirá el menú</div>
          <div className="text-sm text-gray-600">Conocé nuestras opciones de café, pastelería y más.</div>
        </div>
        <div className="card">
          <div className="text-3xl mb-3">📱</div>
          <div className="font-semibold text-lg mb-2">2. Pedí por PedidosYa</div>
          <div className="text-sm text-gray-600">Completa tu pedido rápidamente en la plataforma.</div>
        </div>
        <div className="card">
          <div className="text-3xl mb-3">✨</div>
          <div className="font-semibold text-lg mb-2">3. Retirá o recibí</div>
          <div className="text-sm text-gray-600">Elige takeaway o delivery según te convenga.</div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a aria-label="Pedir por PedidosYa ahora" href={site.pedidosya} target="_blank" rel="noreferrer" className="btn-primary">
          Pedir por PedidosYa
        </a>
        <a aria-label="Ver menú en Instagram" href={site.instagram} target="_blank" rel="noreferrer" className="btn-secondary">
          Ver en Instagram
        </a>
      </div>
    </section>
  );
}
