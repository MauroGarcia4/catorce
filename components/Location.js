import site from '../lib/siteConfig';

export default function Location(){
  const addressQuery = encodeURIComponent(`${site.address.street}, ${site.address.city}, ${site.address.region}, ${site.address.country}`);
  const iframeSrc = `https://www.google.com/maps?q=${addressQuery}&output=embed`;
  const googleMapsUrl = `https://www.google.com/maps/search/${addressQuery}`;
  
  return (
    <section id="location" className="py-12">
      <h2 className="text-3xl font-bold mb-8">Ubicación</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="card">
          <div className="flex items-start gap-3 mb-4">
            <span className="text-2xl">📍</span>
            <div>
              <h3 className="font-semibold text-lg">Catorce Takeaway</h3>
              <p className="text-sm text-gray-500 mt-1">San Nicolás, Buenos Aires</p>
            </div>
          </div>
          <p className="text-gray-700 font-medium mb-1">{site.address.street}</p>
          <p className="text-gray-600 text-sm mb-4">{site.address.city}, {site.address.region}, {site.address.country}</p>
          <a href={googleMapsUrl} target="_blank" rel="noreferrer" className="btn-secondary text-sm">
            Abrir en Google Maps
          </a>
        </div>
        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-soft h-full">
          <iframe src={iframeSrc} width="100%" height="320" loading="lazy" title="Mapa de Catorce Takeaway" />
        </div>
      </div>
    </section>
  );
}
