import site from '../lib/siteConfig';

export default function Footer(){
  return (
    <footer className="border-t mt-12">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-700">© {new Date().getFullYear()} Catorce Takeaway</div>
        <div className="flex gap-4">
          <a href={site.instagram} target="_blank" rel="noreferrer" className="text-sm text-gray-600">Instagram</a>
          <a href={site.pedidosya} target="_blank" rel="noreferrer" className="text-sm text-gray-600">PedidosYa</a>
        </div>
      </div>
    </footer>
  );
}
