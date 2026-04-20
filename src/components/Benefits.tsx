import { Sun, Sparkles, Ruler, TrendingUp, Award } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const benefits = [
  {
    icon: Sun,
    title: 'Iluminação uniforme e sem imperfeições',
    description: 'A tela tensionada distribui a luz de forma homogênea, sem pontos escuros, sombras ou reflexos.',
  },
  {
    icon: Sparkles,
    title: 'Visual moderno e bem integrado ao ambiente',
    description: 'Acabamento limpo que harmoniza com qualquer estilo, elevando a percepção do espaço.',
  },
  {
    icon: Ruler,
    title: 'Projeto sob medida',
    description: 'Cada solução é desenvolvida especificamente para as dimensões e necessidades do seu espaço.',
  },
  {
    icon: TrendingUp,
    title: 'Valorização do espaço',
    description: 'Um ambiente bem iluminado transmite sofisticação e agrega valor real ao imóvel.',
  },
  {
    icon: Award,
    title: 'Acabamento limpo e sofisticado',
    description: 'Materiais de alta qualidade e instalação profissional para um resultado impecável e duradouro.',
  },
];

export default function Benefits() {
  const leftRef  = useScrollReveal('reveal-left');
  const rightRef = useScrollReveal('reveal-right', 100);

  return (
    <section id="beneficios" style={{ backgroundColor: '#E8DED1' }} className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div ref={leftRef as React.RefObject<HTMLDivElement>}>
            <div className="flex items-center gap-3 mb-6">
              <span className="gold-bar" />
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-brown-400">
                Vantagens
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-5 leading-snug">
              Por que escolher essa solução
            </h2>
            <p className="text-ink/50 text-[14px] leading-relaxed font-light mb-10 max-w-md">
              Tecnologia, estética e funcionalidade unidas para transformar qualquer espaço em um
              ambiente de excelência.
            </p>

            <div className="flex flex-col divide-y" style={{ borderColor: 'rgba(139,115,85,0.15)' }}>
              {benefits.map((b, i) => (
                <BenefitRow key={i} benefit={b} index={i} />
              ))}
            </div>
          </div>

          <div
            ref={rightRef as React.RefObject<HTMLDivElement>}
            className="relative hidden md:block"
          >
            <div
              className="overflow-hidden"
              style={{ borderRadius: '8px', aspectRatio: '4/5' }}
            >
              <img
                src="https://i.imgur.com/X9BLAow.jpeg"
                alt="Ambiente iluminado"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div
              className="absolute -bottom-5 -left-5 w-44 h-44 overflow-hidden shadow-xl"
              style={{ borderRadius: '6px', border: '4px solid #E8DED1' }}
            >
              <img
                src="https://i.imgur.com/yZ5zK16.jpeg"
                alt="Painel luminoso"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div
              className="absolute top-8 -right-5 w-32 h-32 overflow-hidden shadow-lg"
              style={{ borderRadius: '6px', border: '4px solid #E8DED1' }}
            >
              <img
                src="https://i.imgur.com/6wCtjOD.jpeg"
                alt="Sala residencial"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div
              className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(198,169,107,0.08) 0%, transparent 60%)',
                borderRadius: '8px',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitRow({
  benefit,
  index,
}: {
  benefit: (typeof benefits)[number];
  index: number;
}) {
  const ref = useScrollReveal('reveal', index * 70);
  const Icon = benefit.icon;

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="flex items-start gap-4 py-5 group"
    >
      <div
        className="flex-shrink-0 w-9 h-9 flex items-center justify-center transition-colors duration-300"
        style={{ backgroundColor: 'rgba(198,169,107,0.15)', borderRadius: '4px' }}
      >
        <Icon size={16} className="transition-colors duration-300" style={{ color: '#C6A96B' }} strokeWidth={1.5} />
      </div>
      <div>
        <p className="text-[13px] font-semibold text-ink mb-1">{benefit.title}</p>
        <p className="text-[13px] leading-relaxed font-light text-ink/50">{benefit.description}</p>
      </div>
    </div>
  );
}
