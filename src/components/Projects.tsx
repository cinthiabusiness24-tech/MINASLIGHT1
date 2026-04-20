import { useScrollReveal } from '../hooks/useScrollReveal';

const projects = [
  {
    title: 'Teto Iluminado',
    category: 'Comercial',
    image: 'https://i.imgur.com/JtwBKBf.jpeg',
    span: 'tall',
  },
  {
    title: 'Painel Luminoso',
    category: 'Academia',
    image: 'https://i.imgur.com/d3tNJxn.jpeg',
    span: 'normal',
  },
  {
    title: 'Interior Portaria',
    category: 'Prédio Condominial',
    image: 'https://i.imgur.com/eZQT6RC.jpeg',
    span: 'normal',
  },
  {
    title: 'Suíte',
    category: 'Residencial',
    image: 'https://i.imgur.com/lQr4Q0K.jpeg',
    span: 'normal',
  },
  {
    title: 'Loja',
    category: 'Varejo',
    image: 'https://i.imgur.com/Yqvnacc.jpeg',
    span: 'normal',
  },
];

export default function Projects() {
  const headerRef = useScrollReveal('reveal');
  const gridRef   = useScrollReveal('reveal', 120);

  return (
    <section id="projetos" style={{ backgroundColor: '#F5F1EB' }} className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        <div ref={headerRef as React.RefObject<HTMLDivElement>} className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <span className="gold-bar" />
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-brown-400">
              Galeria
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink leading-snug max-w-sm">
              Veja como fica na prática
            </h2>
            <p className="text-ink/50 text-[14px] leading-relaxed font-light max-w-xs md:text-right">
              Projetos em residências, comércios e espaços corporativos com acabamento impecável.
            </p>
          </div>
        </div>

        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-2 md:grid-cols-3 gap-3"
        >
          <div className="col-span-2 md:col-span-1 row-span-2">
            <GalleryItem project={projects[0]} tall />
          </div>
          <div><GalleryItem project={projects[1]} /></div>
          <div><GalleryItem project={projects[2]} /></div>
          <div><GalleryItem project={projects[3]} /></div>
          <div><GalleryItem project={projects[4]} /></div>
        </div>
      </div>
    </section>
  );
}

function GalleryItem({
  project,
  tall = false,
}: {
  project: (typeof projects)[number];
  tall?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden group cursor-pointer ${
        tall ? 'h-full min-h-[360px] md:min-h-[530px]' : 'h-60 md:h-64'
      }`}
      style={{ borderRadius: '6px' }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        loading="lazy"
      />
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{ background: 'linear-gradient(to top, rgba(30,30,30,0.75) 0%, rgba(30,30,30,0.05) 55%)', opacity: 0.9 }}
      />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <span
          className="text-[10px] font-medium tracking-[0.18em] uppercase"
          style={{ color: '#C6A96B' }}
        >
          {project.category}
        </span>
        <p className="text-[13px] font-medium mt-1" style={{ color: '#F5F1EB' }}>
          {project.title}
        </p>
      </div>
    </div>
  );
}
