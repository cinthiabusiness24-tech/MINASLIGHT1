import { useEffect, useState } from 'react';
import { MapPin, Phone, Instagram } from 'lucide-react';

const navLinks = [
  { label: 'Projetos', href: '#projetos' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Aplicações', href: '#aplicacoes' },
  { label: 'Como Funciona', href: '#como-funciona' },
];

export default function Footer() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <footer style={{ backgroundColor: '#1A1714' }} className="py-16 px-6 lg:px-14">
      <div className="max-w-7xl mx-auto">
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12"
          style={{ borderBottom: '1px solid rgba(198,169,107,0.12)' }}
        >
          {/* LOGO */}
          <div>
            <a href="#" className="flex items-center gap-3 mb-5">
              <div
                className="w-8 h-8 flex items-center justify-center overflow-hidden"
                style={{ borderRadius: '4px' }}
              >
                <img
                  src="https://i.imgur.com/IiMVefq.png"
                  alt="Minas Light Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <span
                className="font-display text-[17px] font-semibold transition-all duration-500"
                style={{
                  color: scrolled ? '#F5F1EB' : '#FFFFFF',
                }}
              >
                Minas <span style={{ color: '#C6A96B' }}>Light</span>
              </span>
            </a>

            <p
              className="text-[13px] leading-relaxed font-light max-w-xs"
              style={{ color: 'rgba(232,222,209,0.5)' }}
            >
              Projetos de iluminação em tela tensionada com design sofisticado e acabamento impecável.
            </p>
          </div>

          {/* MENU */}
          <div>
            <p
              className="text-[12px] font-semibold tracking-[0.15em] uppercase mb-5"
              style={{ color: '#C6A96B' }}
            >
              Navegação
            </p>

            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[13px] font-light transition-all duration-300"
                    style={{
                      color: scrolled
                        ? 'rgba(232,222,209,0.5)'
                        : 'rgba(255,255,255,0.7)',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#C6A96B')}
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = scrolled
                        ? 'rgba(232,222,209,0.5)'
                        : 'rgba(255,255,255,0.7)')
                    }
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTATO */}
          <div>
            <p
              className="text-[12px] font-semibold tracking-[0.15em] uppercase mb-5"
              style={{ color: '#C6A96B' }}
            >
              Contato
            </p>

            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3">
                <MapPin size={14} strokeWidth={1.5} style={{ color: '#C6A96B', flexShrink: 0 }} />
                <span className="text-[13px] font-light" style={{ color: 'rgba(232,222,209,0.5)' }}>
                  Pouso Alegre - MG
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={14} strokeWidth={1.5} style={{ color: '#C6A96B', flexShrink: 0 }} />
                <span className="text-[13px] font-light" style={{ color: 'rgba(232,222,209,0.5)' }}>
                  (35) 98808-0999
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={14} strokeWidth={1.5} style={{ color: '#C6A96B', flexShrink: 0 }} />
                <span className="text-[13px] font-light" style={{ color: 'rgba(232,222,209,0.5)' }}>
                  (35) 3422-0999
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Instagram size={14} strokeWidth={1.5} style={{ color: '#C6A96B', flexShrink: 0 }} />
                <a
                  href="https://instagram.com/minas_light"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] font-light transition-colors duration-200"
                  style={{ color: 'rgba(232,222,209,0.5)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C6A96B')}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = 'rgba(232,222,209,0.5)')
                  }
                >
                  @minas_light
                </a>
              </li>
            </ul>

            {/* MAPA */}
            <div className="mt-6 rounded-xl overflow-hidden h-[180px] border border-[#2a241f]">
              <iframe
                src="https://www.google.com/maps?q=Minas+Light+Iluminação&output=embed"
                className="w-full h-full"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* FINAL */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] font-light" style={{ color: 'rgba(232,222,209,0.3)' }}>
            &copy; {new Date().getFullYear()} Minas Light. Todos os direitos reservados.
          </p>

          <p className="text-[12px] font-light" style={{ color: 'rgba(232,222,209,0.3)' }}>
            Iluminação em tela tensionada
          </p>
        </div>
      </div>
    </footer>
  );
}