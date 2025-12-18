import site from '../lib/siteConfig';
import Image from 'next/image';

export default function Hero(){
  return (
    <section className="bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold">Catorce Takeaway</h1>
          <p className="mt-3 text-gray-600">{site.slogan} — Café, pastelería y pedidos para llevar en San Nicolás.</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a aria-label="Pedir por PedidosYa" href={site.pedidosya} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-5 py-3 bg-black text-white rounded-xl shadow hover:opacity-95">Pedir por PedidosYa</a>
            <a aria-label="Ver Instagram" href={site.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-5 py-3 border rounded-xl text-gray-700">Ver Instagram</a>
          </div>

          <div className="mt-4 flex gap-2 text-xs text-gray-600">
            <span className="px-2 py-1 bg-gray-100 rounded-full">Takeaway</span>
            <span className="px-2 py-1 bg-gray-100 rounded-full">Café</span>
            <span className="px-2 py-1 bg-gray-100 rounded-full">San Nicolás</span>
          </div>
        </div>

        <div className="w-full md:w-80 relative">
          <Image src="/gallery/1.svg" alt="Imagen hero" width={420} height={360} className="rounded-2xl" />
        </div>
      </div>
    </section>
  );
}
