const items = [
  { icon: '☕', title: 'Café de especialidad', desc: 'Granos seleccionados y métodos precisos.' },
  { icon: '🥐', title: 'Pastelería fresca', desc: 'Repostería casera todos los días.' },
  { icon: '⚡', title: 'Rápido', desc: 'Listo para llevar en minutos.' },
  { icon: '🌱', title: 'Opciones veganas', desc: 'Deliciosas alternativas equilibradas.' },
  { icon: '✨', title: 'Ambiente premium', desc: 'Diseño minimal y atención cuidada.' },
  { icon: '📱', title: 'Pedidos online', desc: 'Pedir por PedidosYa al instante.' }
];

export default function Highlights(){
  return (
    <section className="py-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
        {items.map((it, idx) => (
          <div key={idx} className="card">
            <div className="text-3xl mb-3">{it.icon}</div>
            <h3 className="font-semibold text-sm md:text-base">{it.title}</h3>
            <p className="mt-2 text-xs md:text-sm text-gray-600">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
