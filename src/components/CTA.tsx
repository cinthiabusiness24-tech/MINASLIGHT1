import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const WA = 'https://wa.me/5535988080999?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.';

export default function CTA() {
  const ref = useScrollReveal('reveal');

  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{ backgroundColor: '#1E1E1E' }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      />
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(30,30,30,0.82)' }} />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, rgba(198,169,107,0.06) 0%, transparent 60%)' }}
      />

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="relative z-10 max-w-2xl mx-auto px-6 lg:px-14 text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="gold-bar" />
          <span
            className="text-[11px] font-medium tracking-[0.2em] uppercase"
            style={{ color: '#C6A96B' }}
          >
            Orçamento gratuito
          </span>
          <span className="gold-bar" />
        </div>

        <h2
          className="font-display text-3xl md:text-[3rem] font-semibold leading-tight mb-5 text-balance"
          style={{ color: '#F5F1EB' }}
        >
          Solicite seu orçamento
        </h2>
        <p
          className="text-[15px] leading-relaxed font-light mb-12 max-w-lg mx-auto"
          style={{ color: '#E8DED1', opacity: 0.75 }}
        >
          Fale com nossa equipe e descubra a melhor solução para o seu ambiente
        </p>

        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-3 text-[14px] font-semibold px-9 py-4 transition-all duration-300 hover:shadow-2xl hover:-translate-y-px"
          style={{ backgroundColor: '#25D366', color: '#fff', borderRadius: '4px' }}
        >
          <WaIcon />
          Falar no WhatsApp
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}

function WaIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
