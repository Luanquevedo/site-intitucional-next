"use client";

import React, { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import Image from "next/image";
import Footer from "../footer/footer";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Sobre nós" },
  { href: "#services", label: "Serviços" },
  { href: "#atendimento", label: "Área de atendimento" }
];

const Navbar = () => {
  // Estado para controlar a seção ativa no menu
  const [activeSection, setActiveSection] = useState("");

  // Estado para verificar se a tela é mobile
  const [isMobile, setIsMobile] = useState(false);

  // Estado para controlar a abertura/fechamento do menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Hook useEffect para verificar o tamanho da tela e ajustar o estado 'isMobile'
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 768);
    checkScreenSize(); // Executa a verificação no carregamento inicial
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Hook useEffect para controlar a seção ativa no menu durante o scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.1; // Ajuste da posição do scroll
      NAV_LINKS.forEach(({ href }) => {
        const section = document.querySelector(href);
        if (section) {
          const { offsetTop, offsetHeight } = section;

          // Verifica se a posição do scroll está dentro da seção e define a seção ativa
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(href.replace("#", "")); // Remove o '#' do href
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav className="navbar">
        {/* Logo da Navbar com link para a página inicial */}
        <div className="navbar__Logo">
          <Link href="/" aria-label="Página inicial">
            <Image src="/logo.svg" alt="Logo" width={120} height={40} priority />
          </Link>
        </div>

        {/* Navbar para mobile: Menu Hamburguer */}
        {isMobile ? (
          <Menu
            noTransition
            isOpen={isMenuOpen}
            onStateChange={({ isOpen }) => setIsMenuOpen(isOpen)} // Atualiza o estado ao abrir/fechar o menu
          >
            <div className="Container">
              <button className="menu__close-btn" onClick={() => setIsMenuOpen(false)}>
                ✕
              </button>

              {/* Logo dentro do menu mobile */}
              <div className="navbar__Logo">
                <Link href="/" aria-label="Página inicial">
                  <Image src="/logo.svg" alt="Logo" width={120} height={40} priority />
                </Link>
              </div>
            </div>

            {/* Links de navegação */}
            <ul className="navbar__Itens">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`navbar__Itens__Link ${activeSection === href.replace("#", "") ? "active" : ""}`}
                    onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar no link
                  >
                    {label}
                  </Link>
                </li>
              ))}
              {/* Formulário de orçamento */}
              <div className="navbar__Form">
                <Link href="/form" prefetch={false}>
                  <button aria-label="Solicite um orçamento">Faça seu orçamento aqui</button>
                </Link>
              </div>
            </ul>
            <Footer />
          </Menu>
        ) : (
          // Navbar para Desktop - Menu Tradicional
          <ul className="navbar__Itens">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`navbar__Itens__Link ${activeSection === href.replace("#", "") ? "active" : ""}`}
                >
                  {label}
                </Link>
              </li>
            ))}
            {/* Formulário de orçamento */}
            <div className="navbar__Form">
              <Link href="/form" prefetch={false}>
                <button aria-label="Solicite um orçamento">Faça seu orçamento aqui</button>
              </Link>
            </div>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;