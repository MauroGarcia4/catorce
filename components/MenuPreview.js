const sample = [
  { name: 'Café Cortado', desc: 'Espresso con leche', price: '$200', icon: '☕' },
  { name: 'Latte', desc: 'Cremoso y suave', price: '$250', icon: '☕' },
  { name: 'Flat White', desc: 'Intenso y velvety', price: '$260', icon: '☕' },
  { name: 'Tostado Jamón', desc: 'Pan artesanal', price: '$420', icon: '🥐' },
  { name: 'Cheesecake', desc: 'Porción individual', price: '$320', icon: '🍰' },
  { name: 'Muffin Limón', desc: 'Casero y fresco', price: '$180', icon: '🍰' },
  { name: 'Medialuna', desc: 'Crujiente diaria', price: '$120', icon: '🥐' },
  { name: 'Sándwich Veg', desc: 'Hummus y vegetales', price: '$450', icon: '🥗' }
];

export default function MenuPreview(){
  return (
    <section id="menu" className="py-12">
      <h2 className="text-3xl font-bold mb-2">Menú</h2>
      <p className="text-gray-600 mb-8">Nuestras opciones más pedidas. Precios/stock pueden variar.</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
        {sample.map((it, i) => (
          <div key={i} className="card">
            <div className="text-2xl mb-2">{it.icon}</div>
            <h4 className="font-semibold text-sm">{it.name}</h4>
            <p className="text-xs text-gray-600 mt-1">{it.desc}</p>
            <p className="text-coffee font-bold text-base mt-3">{it.price}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 p-4 bg-cream rounded-xl border border-gray-200 text-center">
        <p className="text-sm text-gray-700 mb-4">Estos son ejemplos. Consultá disponibilidad en PedidosYa.</p>
        <a href="https://www.pedidosya.com.ar/restaurantes/san-nicolas/catorce-9fbc5c1f-c03b-4086-85db-a1138b956572-menu" target="_blank" rel="noreferrer" className="btn-primary text-sm">
          Ver menú completo en PedidosYa
        </a>
      </div>
    </section>
  );
}
