import { useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NavB = () => {
  const [isActive, setIsActive] = useState(false);

  const handleHamburguerClick = useCallback(() => {
    setIsActive((prev) => !prev);
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleHamburguerClick();
    } else if (event.key === 'Escape' && isActive) {
      setIsActive(false);
    }
  };

  // Função para fechar o menu ao clicar em um link
  const closeMenu = () => {
    if (isActive) {
      setIsActive(false);
    }
  };

  return (
    <div className="Header">
      <header>
        <nav className={`nav ${isActive ? 'active' : ''}`} role="navigation" aria-label="Menu principal">
          <Link href="/" aria-label="Página inicial">
            <Image
              className="logo"
              src="/logo.svg"
              alt="Logo da empresa"
              width={100}
              height={50}
              priority
            />
          </Link>

          {/* Botão hamburguer */}
          <button
            className="hamburguer"
            onClick={handleHamburguerClick}
            onKeyDown={handleKeyDown}
            aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isActive}
            aria-controls="menu"
          ></button>

          {/* Menu de navegação */}
          <ul id="menu" className="nav-list" aria-hidden={!isActive}>
            <li>
              <Link href="/#home" aria-label="Ir para a página inicial" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/#about" aria-label="Saber mais sobre nós" onClick={closeMenu}>
                Sobre nós
              </Link>
            </li>
            <li>
              <Link href="/#services" aria-label="Ver serviços oferecidos" onClick={closeMenu}>
                Serviços
              </Link>
            </li>
            <li>
              <Link href="/#atendimento" aria-label="Ver área de atendimento" onClick={closeMenu}>
                Área de atendimento
              </Link>
            </li>
            <div className="navbar__Form">
              <Link href="/form" prefetch={false} aria-label="Solicitar um orçamento">
                <button aria-label="Faça seu orçamento agora" onClick={closeMenu}>
                  Faça seu orçamento aqui
                </button>
              </Link>
            </div>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavB;
