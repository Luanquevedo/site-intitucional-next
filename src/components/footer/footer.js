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
            href="https://wa.me/5511974801320"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Entre em contato pelo WhatsApp"
            className="Footer__Container__Itens__Dados"
          >
            <Image src="/images/wpp.svg" alt="WhatsApp" width={24} height={24} />
            <p>+55 11 97480-1320</p>
          </Link>

          <Link
            href="mailto:email@gmail.com"
            aria-label="Envie um email para Viva Eventos"
            className="Footer__Container__Itens__Dados"
          >
            <Image src="/images/email.svg" alt="Email" width={24} height={24} />
            <p>email@gmail.com</p>
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
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Curta nossa página no Facebook"
          >
            <Image src="/images/fb.svg" alt="Facebook" width={24} height={24} />
          </Link>

          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Siga-nos no Instagram"
          >
            <Image src="/images/ig.svg" alt="Instagram" width={24} height={24} />
          </Link>

          <Link
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Siga-nos no TikTok"
          >
            <Image src="/images/tk.svg" alt="TikTok" width={24} height={24} />
          </Link>

          <Link
            href="https://br.pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Siga-nos no Pinterest"
          >
            <Image src="/images/pr.svg" alt="Pinterest" width={24} height={24} />
          </Link>
        </div>

      </div>

      {/* Copyright */}
      <div className="Footer__Cop">
        <p>Copyright © {new Date().getFullYear()} Luan Quevedo. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
