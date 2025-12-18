import Image from 'next/image';

export default function Gallery(){
  const imgs = ['/gallery/1.svg','/gallery/2.svg','/gallery/3.svg','/gallery/4.svg','/gallery/5.svg','/gallery/6.svg'];
  return (
    <section id="gallery" className="mt-10">
      <h2 className="text-xl font-semibold mb-4">Galería</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {imgs.map((src,i) => (
          <div key={i} className="rounded-xl overflow-hidden">
            <Image src={src} alt={`Galería ${i+1}`} width={600} height={400} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
