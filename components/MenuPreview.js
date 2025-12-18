const sample = [
  { name: 'Café cortado', desc: 'Espresso + leche', price: '$200' },
  { name: 'Latte', desc: 'Espresso y leche espumosa', price: '$250' },
  { name: 'Flat White', desc: 'Sabor intenso y crema', price: '$260' },
  { name: 'Tostado de jamón', desc: 'Pan artesanal', price: '$420' },
  { name: 'Cheesecito', desc: 'Porción individual', price: '$320' },
  { name: 'Muffin de limón', desc: 'Casero', price: '$180' },
  { name: 'Medialuna', desc: 'Fresca diaria', price: '$120' },
  { name: 'Sándwich veg', desc: 'Hummus y vegetales', price: '$450' }
];

export default function MenuPreview(){
  return (
    <section id="menu" className="mt-10">
      <h2 className="text-xl font-semibold mb-4">Menú (ejemplo)</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {sample.map((it, i) => (
          <div key={i} className="card">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium">{it.name}</h4>
                <p className="text-sm text-gray-600">{it.desc}</p>
              </div>
              <div className="text-sm font-semibold">{it.price}</div>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-gray-500">Precios/stock pueden variar. Pedí directamente por PedidosYa.</p>
    </section>
  );
}
