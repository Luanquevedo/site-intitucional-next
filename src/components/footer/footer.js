import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer__Container">

        {/* Contatos */}
        <div className="Footer__Container__Itens">
          <Link
            href="https://wa.me/5511963080656"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Entre em contato pelo WhatsApp"
            className="Footer__Container__Itens__Dados"
          >
            <Image src="/images/wpp.svg" alt="WhatsApp" width={24} height={24} />
            <p>+55 11 96308-0656</p>
          </Link>

          <Link
            href="mailto:temperodagrazii@gmail.com"
            aria-label="Envie um email para Tempero da Grazzy"
            className="Footer__Container__Itens__Dados"
          >
            <Image src="/images/email.svg" alt="Email" width={24} height={24} />
            <p>temperodagrazii@gmail.com</p>
          </Link>
        </div>

        {/* Redes Sociais */}
        <div className="Footer__Container__Redes">
          <Link
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Assista ao nosso canal no YouTube"
          >
            <Image src="/images/yt.svg" alt="YouTube" width={24} height={24} />
          </Link>

          <Link
            href="https://www.facebook.com/temperodagrazzy?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Curta nossa página no Facebook"
          >
            <Image src="/images/fb.svg" alt="Facebook" width={24} height={24} />
          </Link>

          <Link
            href="https://www.instagram.com/temperodagrazzi?igsh=M21wYTM1MmFxZHd1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Siga-nos no Instagram"
          >
            <Image src="/images/ig.svg" alt="Instagram" width={24} height={24} />
          </Link>
        </div>

      </div>

      {/* Copyright */}
      <div className="Footer__Cop">
        <p>Copyright © {new Date().getFullYear()} Cuka Eventos. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
