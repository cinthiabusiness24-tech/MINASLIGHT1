import { MessageCircle, ScanLine, PencilRuler, Hammer } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const steps = [
  {
    icon: MessageCircle,
    number: '01',
    title: 'Nosso primeiro contato',
    description: 'Fale com nossa equipe pelo WhatsApp para iniciar o processo sem compromisso.',
  },
  {
    icon: ScanLine,
    number: '02',
    title: 'Entendemos seu espaço',
    description: 'Realizamos uma análise técnica para conhecer as características do ambiente.',
  },
  {
    icon: PencilRuler,
    number: '03',
    title: 'Desenvolvemos o projeto',
    description: 'Criamos uma solução personalizada com dimensões, materiais e especificações.',
  },
  {
    icon: Hammer,
    number: '04',
    title: 'Realizamos a instalação',
    description: 'Nossa equipe executa com precisão e cuidado para um resultado impecável.',
  },
];

export default function HowItWorks() {
  const headerRef = useScrollReveal('reveal');

  return (
    <section id="como-funciona" style={{ backgroundColor: '#E8DED1' }} className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        <div ref={headerRef as React.RefObject<HTMLDivElement>} className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="gold-bar" />
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-brown-400">
              Processo
            </span>
            <span className="gold-bar" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-4">
            Como funciona
          </h2>
          <p className="text-ink/50 text-[14px] leading-relaxed font-light max-w-sm mx-auto">
            Um processo claro e transparente, do primeiro contato até a entrega final.
          </p>
        </div>

        <div className="relative">
          <div
            className="hidden lg:block absolute z-0"
            style={{
              top: '44px',
              left: 'calc(12.5% + 44px)',
              right: 'calc(12.5% + 44px)',
              height: '1px',
              backgroundColor: 'rgba(139,115,85,0.2)',
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 relative z-10">
            {steps.map((step, i) => (
              <StepCard key={i} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({
  step,
  index,
}: {
  step: (typeof steps)[number];
  index: number;
}) {
  const ref  = useScrollReveal('reveal', index * 100);
  const Icon = step.icon;

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="flex flex-col items-center text-center"
    >
      <div className="relative mb-6">
        <div
          className="w-[88px] h-[88px] flex items-center justify-center"
          style={{ backgroundColor: '#DDD0BC', borderRadius: '6px' }}
        >
          <Icon size={26} strokeWidth={1.5} style={{ color: '#C6A96B' }} />
        </div>
        <div
          className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center"
          style={{ backgroundColor: '#C6A96B', borderRadius: '3px' }}
        >
          <span className="text-[10px] font-bold" style={{ color: '#1E1E1E' }}>
            {step.number}
          </span>
        </div>
      </div>
      <p className="text-[13px] font-semibold text-ink mb-2 leading-snug">{step.title}</p>
      <p className="text-[12px] leading-relaxed font-light text-ink/50 max-w-[190px]">
        {step.description}
      </p>
    </div>
  );
}
