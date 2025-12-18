export default function Hours(){
  return (
    <section id="hours" className="mt-10">
      <h2 className="text-xl font-semibold mb-4">Horarios</h2>
      <div className="card">
        <table className="w-full text-sm">
          <tbody>
            <tr className="border-b">
              <td className="py-2">Lunes a Viernes</td>
              <td className="py-2 text-right">8:00–12:00 y 17:00–21:00</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">Sábados</td>
              <td className="py-2 text-right">9:00–12:30 y 17:00–21:00</td>
            </tr>
            <tr>
              <td className="py-2">Domingos</td>
              <td className="py-2 text-right">Cerrado</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
