export default function Hours(){
  return (
    <section id="hours" className="py-12">
      <h2 className="text-3xl font-bold mb-8">Horarios de Atención</h2>
      <div className="card">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-3">Lunes a Viernes</h3>
            <div className="space-y-1">
              <p className="text-gray-700">🌅 08:00 – 12:00</p>
              <p className="text-gray-700">🌙 17:00 – 21:00</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-3">Sábados</h3>
            <div className="space-y-1">
              <p className="text-gray-700">🌅 09:00 – 12:30</p>
              <p className="text-gray-700">🌙 17:00 – 21:00</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-3">Domingos</h3>
            <p className="text-gray-600 italic">Cerrado</p>
            <p className="text-xs text-gray-500 mt-2">Vuelve el lunes</p>
          </div>
        </div>
      </div>
    </section>
  );
}
