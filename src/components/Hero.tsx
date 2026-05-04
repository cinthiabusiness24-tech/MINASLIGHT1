import { ArrowRight } from 'lucide-react';

const WA = 'https://wa.me/553534220999?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden" style={{ backgroundColor: '#1E1E1E' }}>
      
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://i.imgur.com/t9AHJIa.jpeg)',
        }}
      />

      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(30,30,30,0.88) 40%, rgba(30,30,30,0.3) 100%)' }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(30,30,30,0.6) 0%, transparent 60%)' }} />

      {/* LOGO MOBILE DESTACADA */}
<div className="md:hidden absolute top-11 left-2 z-40">
  <img
    src="https://i.imgur.com/sX5mhJw.png"
    alt="Minas Light"
    className="w-[120px] object-contain"
  />
</div>

      {/* CONTEÚDO */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-14 pb-28 pt-40">
        <div className="max-w-[600px]">

          <div className="flex items-center gap-3 mb-8">
            <span className="gold-bar" />
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase" style={{ color: '#C6A96B' }}>
              Iluminação em Tela Tensionada
            </span>
          </div>

          <h1 className="font-display text-[2.6rem] md:text-[3.4rem] lg:text-[4rem] font-semibold leading-[1.12] mb-6 text-balance" style={{ color: '#F5F1EB' }}>
            TRANSFORME SEU AMBIENTE COM{' '}
            <em className="not-italic" style={{ color: '#C6A96B' }}>ILUMINAÇÃO EM TELA TENSIONADA</em>
          </h1>

          <p className="text-[15px] md:text-[16px] leading-relaxed mb-10 font-light" style={{ color: '#E8DED1', opacity: 0.85 }}>
            Soluções modernas que valorizam o espaço com iluminação uniforme e acabamento elegante
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 text-[13px] font-semibold px-7 py-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-px"
              style={{ background: '#C6A96B', color: '#1E1E1E', borderRadius: '4px' }}
            >
              Solicitar orçamento
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#projetos"
              className="inline-flex items-center justify-center text-[13px] font-medium px-7 py-4 transition-all duration-300 border"
              style={{ borderColor: 'rgba(198,169,107,0.45)', color: '#F5F1EB', borderRadius: '4px' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#C6A96B')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(198,169,107,0.45)')}
            >
              Ver projetos
            </a>
          </div>
        </div>
      </div>

      {/* FADE FINAL */}
      <div
        className="absolute bottom-0 inset-x-0 h-28"
        style={{ background: 'linear-gradient(to top, #F5F1EB, transparent)' }}
      />
    </section>
  );
}
