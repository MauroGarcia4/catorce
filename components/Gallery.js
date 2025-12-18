import Image from 'next/image';

export default function Gallery(){
  const imgs = ['/gallery/1.svg','/gallery/2.svg','/gallery/3.svg','/gallery/4.svg','/gallery/5.svg','/gallery/6.svg'];
  return (
    <section id="gallery" className="py-12">
      <h2 className="text-3xl font-bold mb-8">Galería</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {imgs.map((src,i) => (
          <div key={i} className="rounded-2xl overflow-hidden shadow-soft border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <Image src={src} alt={`Galería Catorce ${i+1}`} width={600} height={400} className="w-full h-48 object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
