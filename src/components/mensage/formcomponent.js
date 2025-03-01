import { useState } from "react";

const FormContato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    tipoEvento: "",
    dadosDesejados: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nome, email, telefone, tipoEvento, dadosDesejados, mensagem } = formData;

    const message = `Olá, gostaria de mais informações!
      Nome: ${nome}
      E-mail: ${email}
      Telefone: ${telefone}
      Tipo de Evento: ${tipoEvento}
      Dados Desejados: ${dadosDesejados}
      Mensagem: ${mensagem}
    `;

    // 🔹 Envio para WhatsApp
    const phoneNumber = "5511974801320"; // Seu número com DDD e código do Brasil
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");

    // 🔹 Envio para E-mail
    const emailDestino = "luan.quevedo@hotmail.com";
    const emailSubject = encodeURIComponent("Solicitação de Contato - Evento");
    const emailBody = encodeURIComponent(message);
    const mailtoLink = `mailto:${emailDestino}?subject=${emailSubject}&body=${emailBody}`;
    window.open(mailtoLink, "_blank");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Entre em Contato</h2>

      <label htmlFor="nome">Nome Completo</label>
      <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />

      <label htmlFor="email">E-mail</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

      <label htmlFor="telefone">Telefone</label>
      <input type="tel" id="telefone" name="telefone" value={formData.telefone} onChange={handleChange} required />

      <label htmlFor="tipoEvento">Tipo de Evento</label>
      <input type="text" id="tipoEvento" name="tipoEvento" value={formData.tipoEvento} onChange={handleChange} required />

      <label htmlFor="dadosDesejados">Dados Desejados</label>
      <input type="text" id="dadosDesejados" name="dadosDesejados" value={formData.dadosDesejados} onChange={handleChange} required />

      <label htmlFor="mensagem">Mensagem</label>
      <textarea id="mensagem" name="mensagem" value={formData.mensagem} onChange={handleChange} rows="4" required></textarea>

      <button type="submit">Enviar Mensagem</button>
    </form>
  );
};

export default FormContato;
