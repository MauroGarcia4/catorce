import site from '../lib/siteConfig';

export default function Location(){
  const addressQuery = encodeURIComponent(`${site.address.street}, ${site.address.city}, ${site.address.region}, ${site.address.country}`);
  const iframeSrc = `https://www.google.com/maps?q=${addressQuery}&output=embed`;
  return (
    <section id="location" className="mt-10">
      <h2 className="text-xl font-semibold mb-4">Ubicación</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        <div className="card">
          <h3 className="font-medium">Dirección</h3>
          <p className="text-gray-600 mt-2">{site.address.street}, {site.address.city}, {site.address.region}, {site.address.country}</p>
          <a href="#location" className="mt-3 inline-block text-sm text-gray-700">Cómo llegar</a>
        </div>
        <div className="rounded-2xl overflow-hidden border">
          <iframe src={iframeSrc} width="100%" height="280" loading="lazy" title="Mapa de Catorce Takeaway" />
        </div>
      </div>
    </section>
  );
}
