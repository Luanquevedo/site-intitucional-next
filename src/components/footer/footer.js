import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className='Footer'>
      <div className='Footer__Container'>

        {/* Contatos */}
        <div className='Footer__Container__Itens'>

          <div className='Footer__Container__Itens__Dados'>
            <Image src='/images/phone.svg' alt='Telefone' width={24} height={24} />
            <a>+55 11 9999-9999</a>
          </div>

          <Link href="https://wa.me/551199999999" target="_blank" rel="noopener noreferrer" className='Footer__Container__Itens__Dados'>
            <Image src='/images/wpp.svg' alt='WhatsApp' width={24} height={24} />
            <p>+55 11 9999-9999</p>
          </Link>

          <Link href="mailto:contato@temperodagrazzy.com.br" className='Footer__Container__Itens__Dados'>
            <Image src='/images/email.svg' alt='Email' width={24} height={24} />
            <p>contato@temperodagrazzy.com.br</p>
          </Link>

        </div>

        {/* Redes Sociais */}
        <div className='Footer__Container__Redes'>
          <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <Image src='/images/yt.svg' alt='YouTube' width={24} height={24} />
          </Link>

          <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <Image src='/images/fb.svg' alt='Facebook' width={24} height={24} />
          </Link>

          <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <Image src='/images/ig.svg' alt='Instagram' width={24} height={24} />
          </Link>
        </div>

      </div>

      {/* Copyright */}
      <div className='Footer__Cop'>
        <p>Copyright © {new Date().getFullYear()} Tempero da Grazzy. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
