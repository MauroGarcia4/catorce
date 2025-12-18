import site from '../lib/siteConfig';
import Image from 'next/image';

export default function Hero(){
  return (
    <section className="bg-gradient-to-br from-white via-gray-50 to-cream pt-16 pb-12 md:pt-24 md:pb-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-3">
            Catorce Takeaway
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-2 font-medium">{site.slogan}</p>
          <p className="text-base text-gray-600 leading-relaxed mb-8">
            Café de especialidad, pastelería fresca y pedidos para llevar en San Nicolás. 
            Hecho con cuidado, listo en minutos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a aria-label="Pedir por PedidosYa ahora" href={site.pedidosya} target="_blank" rel="noreferrer" className="btn-primary shadow-lg hover:shadow-xl">
              Pedir por PedidosYa
            </a>
            <a aria-label="Ver Instagram" href={site.instagram} target="_blank" rel="noreferrer" className="btn-secondary">
              Ver en Instagram
            </a>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-cream text-coffee text-xs font-semibold rounded-full border border-gray-200">☕ Café Especialidad</span>
            <span className="px-3 py-1 bg-cream text-coffee text-xs font-semibold rounded-full border border-gray-200">🥐 Pastelería</span>
            <span className="px-3 py-1 bg-cream text-coffee text-xs font-semibold rounded-full border border-gray-200">📍 San Nicolás</span>
          </div>
        </div>

        <div className="w-full md:w-96 relative">
          <Image 
            src="/gallery/1.svg" 
            alt="Catorce Takeaway - Café y pastelería" 
            width={500} 
            height={420} 
            className="rounded-3xl shadow-lg w-full h-auto" 
            priority
          />
        </div>
      </div>
    </section>
  );
}
