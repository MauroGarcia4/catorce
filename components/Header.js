import site from '../lib/siteConfig';

export default function Header(){
  return (
    <header className="sticky top-0 bg-white/90 backdrop-blur z-40 border-b">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-semibold">Catorce</div>
          <div className="text-sm text-gray-500">{site.slogan}</div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-gray-700">
          <a href="#menu" className="hover:underline">Menú</a>
          <a href="#gallery" className="hover:underline">Galería</a>
          <a href="#location" className="hover:underline">Ubicación</a>
          <a href="#hours" className="hover:underline">Horarios</a>
        </nav>
        <div className="md:hidden text-sm text-gray-700">{site.address.city}</div>
      </div>
    </header>
  );
}
