import site from '../lib/siteConfig';

export default function Footer(){
  return (
    <footer className="border-t border-gray-100 bg-gray-50/50 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-black mb-2">Catorce</h3>
            <p className="text-sm text-gray-600">{site.slogan}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Ubicación</h4>
            <p className="text-sm text-gray-600">{site.address.street}</p>
            <p className="text-sm text-gray-600">{site.address.city}, {site.address.region}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Síguenos</h4>
            <div className="flex gap-4">
              <a href={site.instagram} target="_blank" rel="noreferrer" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">Instagram</a>
              <a href={site.pedidosya} target="_blank" rel="noreferrer" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">PedidosYa</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-6 text-center">
          <p className="text-xs text-gray-600">© {new Date().getFullYear()} Catorce Takeaway. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
