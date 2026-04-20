import { Home, ShoppingBag, Heart, Briefcase, Star } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const applications = [
  {
    icon: Home,
    title: 'Residências',
    description: 'Salas, quartos, cozinhas e ambientes de lazer com iluminação elegante e uniforme.',
    image: 'https://i.imgur.com/lJYzfek.jpeg',
  },
  {
    icon: ShoppingBag,
    title: 'Lojas e comércios',
    description: 'Valorize produtos e crie experiências memoráveis para os seus clientes.',
    image: 'https://i.imgur.com/b8q1mno.jpeg',
  },
  {
    icon: Heart,
    title: 'Clínicas',
    description: 'Ambientes que transmitem cuidado, higiene e sofisticação aos pacientes.',
    image: 'https://i.imgur.com/R0HIYLE.jpeg',
  },
  {
    icon: Briefcase,
    title: 'Escritórios',
    description: 'Produtividade e bem-estar com iluminação ergonômica e design limpo.',
    image: 'https://i.imgur.com/3XyFSKF.jpeg',
  },
  
];

export default function Applications() {
  const headerRef = useScrollReveal('reveal');

  return (
    <section id="aplicacoes" style={{ backgroundColor: '#F5F1EB' }} className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        <div ref={headerRef as React.RefObject<HTMLDivElement>} className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="gold-bar" />
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-brown-400">
              Aplicações
            </span>
            <span className="gold-bar" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-4">
            Aplicações
          </h2>
          <p className="text-ink/50 text-[14px] leading-relaxed font-light max-w-md mx-auto">
            Versátil e adaptável, se encaixa perfeitamente em qualquer tipo de espaço.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {applications.map((app, i) => (
            <AppCard key={i} app={app} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AppCard({
  app,
  index,
}: {
  app: (typeof applications)[number];
  index: number;
}) {
  const ref = useScrollReveal('reveal', index * 80);
  const Icon = app.icon;

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="group overflow-hidden transition-all duration-300 hover:shadow-lg"
      style={{ borderRadius: '6px', backgroundColor: '#EDE5D8', border: '1px solid rgba(139,115,85,0.12)' }}
    >
      <div className="h-44 overflow-hidden">
        <img
          src={app.image}
          alt={app.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <div
          className="w-8 h-8 flex items-center justify-center mb-3"
          style={{ backgroundColor: 'rgba(198,169,107,0.18)', borderRadius: '4px' }}
        >
          <Icon size={15} strokeWidth={1.5} style={{ color: '#C6A96B' }} />
        </div>
        <p className="text-[13px] font-semibold text-ink mb-1.5 leading-snug">{app.title}</p>
        <p className="text-[12px] leading-relaxed font-light text-ink/50">{app.description}</p>
      </div>
    </div>
  );
}
