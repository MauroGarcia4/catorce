import site from '../lib/siteConfig';

export default function Header(){
  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-sm z-40 border-b border-gray-100 shadow-soft">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold tracking-tight text-black">Catorce</div>
          <div className="hidden sm:block h-6 w-px bg-gray-200"></div>
          <div className="hidden sm:block text-sm font-medium text-gray-600">{site.slogan}</div>
        </div>
        <nav className="hidden md:flex gap-8 text-sm">
          <a href="#menu" className="text-gray-700 hover:text-black font-medium transition-colors">Menú</a>
          <a href="#gallery" className="text-gray-700 hover:text-black font-medium transition-colors">Galería</a>
          <a href="#location" className="text-gray-700 hover:text-black font-medium transition-colors">Ubicación</a>
          <a href="#hours" className="text-gray-700 hover:text-black font-medium transition-colors">Horarios</a>
        </nav>
        <div className="md:hidden text-sm font-medium text-gray-600">{site.address.city}</div>
      </div>
    </header>
  );
}
