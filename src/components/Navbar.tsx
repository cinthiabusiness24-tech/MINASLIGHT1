import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const WA = 'https://wa.me/5535988080999?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.';

const links = [
  { label: 'Projetos',      href: '#projetos' },
  { label: 'Benefícios',    href: '#beneficios' },
  { label: 'Aplicações',    href: '#aplicacoes' },
  { label: 'Como Funciona', href: '#como-funciona' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-100/96 backdrop-blur-md shadow-sm border-b border-cream-300'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-14 flex items-center justify-between h-[70px]">
        
        {/* LOGO */}
        <a href="#" className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center overflow-hidden">
            <img
              src="https://i.imgur.com/IiMVefq.png"
              alt="Minas Light Logo"
              className="w-full h-full object-contain"
            />
          </div>

          <span
            className="font-display text-[17px] font-semibold tracking-wide transition-all duration-300"
            style={{ color: scrolled ? '#1E1E1E' : '#FFFFFF' }}
          >
            Minas <span className="text-gold-300">Light</span>
          </span>
        </a>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[13px] font-medium transition-all duration-300 tracking-wide"
                style={{
                  color: scrolled
                    ? 'rgba(30,30,30,0.6)'
                    : 'rgba(255,255,255,0.7)'
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#C6A96B')}
                onMouseLeave={e =>
                  (e.currentTarget.style.color = scrolled
                    ? 'rgba(30,30,30,0.6)'
                    : 'rgba(255,255,255,0.7)')
                }
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* BOTÃO */}
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center text-[13px] font-medium px-5 py-2.5 transition-all duration-300 hover:shadow-md"
          style={{
            borderRadius: '4px',
            backgroundColor: scrolled ? '#C6A96B' : 'transparent',
            color: scrolled ? '#1E1E1E' : '#FFFFFF',
            border: scrolled ? 'none' : '1px solid rgba(255,255,255,0.4)',
          }}
        >
          Solicitar orçamento
        </a>

        {/* MENU MOBILE */}
        <button
          className="md:hidden p-1.5 transition-colors duration-300"
          style={{ color: scrolled ? '#1E1E1E' : '#FFFFFF' }}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* MENU MOBILE ABERTO */}
      {open && (
        <div className="md:hidden bg-cream-100 border-t border-cream-300 px-6 py-6 flex flex-col gap-5">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[13px] font-medium text-ink/60 hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}

          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center bg-gold-300 hover:bg-gold-400 text-cream-100 text-[13px] font-medium px-5 py-3 transition-all duration-300"
            style={{ borderRadius: '4px' }}
          >
            Solicitar orçamento
          </a>
        </div>
      )}
    </header>
  );
}