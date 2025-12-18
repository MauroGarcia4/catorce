const items = [
  { title: 'Café de especialidad', desc: 'Granos seleccionados y métodos precisos.' },
  { title: 'Pastelería', desc: 'Repostería fresca todos los días.' },
  { title: 'Takeaway rápido', desc: 'Listo para llevar en minutos.' },
  { title: 'Opciones veganas', desc: 'Alternativas sabrosas y equilibradas.' },
  { title: 'Ambiente premium', desc: 'Diseño minimal y atención cuidada.' },
  { title: 'Pedidos online', desc: 'Pedir por PedidosYa con un click.' }
];

export default function Highlights(){
  return (
    <section className="mt-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {items.map((it, idx) => (
          <div key={idx} className="card">
            <h3 className="font-semibold">{it.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
