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
    const { nome, email, telefone, tipoEvento, informacoesDesejados, mensagem } = formData;

    const message = `Olá, gostaria de solicitar um orçamento!
      Nome: ${nome}
      E-mail: ${email}
      Telefone: ${telefone}
      Tipo de Evento: ${tipoEvento}
      Informaçoes Desejadas: ${informacoesDesejados}
      Mensagem: ${mensagem}
    `;

    // 🔹 Envio para WhatsApp
    const phoneNumber = "5511974801320"; // Seu número com DDD e código do Brasil
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");

    // 🔹 Envio para E-mail
    const emailDestino = "eventoscukacomercial@gmail.com";
    const emailSubject = encodeURIComponent("Solicitação de Contato - Evento");
    const emailBody = encodeURIComponent(message);
    const mailtoLink = `mailto:${emailDestino}?subject=${emailSubject}&body=${emailBody}`;
    window.open(mailtoLink, "_blank");

    // Feedback para o usuário após envio
    alert("Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.");
  };

  return (
    <section className="Mensage" aria-labelledby="form-title">
      <h2 id="form-title">Preencha seus dados e solicite um orçamento</h2>
      <form onSubmit={handleSubmit} aria-describedby="form-description">

        <div className="Mensage__Form__itens">
          <label htmlFor="nome">Nome Completo*</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            placeholder="Informe seu nome completo"
            aria-label="Nome completo"
          />
        </div>

        <div className="Mensage__Form__itens">
          <label htmlFor="email">E-mail*</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Informe seu e-mail"
            aria-label="E-mail"
          />
        </div>

        <div className="Mensage__Form__itens">
          <label htmlFor="telefone">Telefone*</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            required
            placeholder="Informe seu telefone"
            aria-label="Número de telefone"
          />
        </div>

        <div className="Mensage__Form__itens">
          <label htmlFor="tipoEvento">Tipo de Evento*</label>
          <select
            id="tipoEvento"
            name="tipoEvento"
            value={formData.tipoEvento}
            onChange={handleChange}
            required
            aria-label="Tipo de evento"
          >
            <option value="" disabled>Selecione o tipo de evento</option>
            <option value="Noivado">Noivado</option>
            <option value="Casamento">Casamento</option>
            <option value="Bodas">Bodas</option>
            <option value="Jantar">Jantar</option>
            <option value="Almoço Empresarial">Almoço Empresarial</option>
          </select>
        </div>

        <div className="Mensage__Form__itens">
          <label htmlFor="dadosDesejados">Informações Desejadas</label>
          <input
            type="text"
            id="dadosDesejados"
            name="dadosDesejados" // Alterado para "dadosDesejados"
            value={formData.informacoesDesejados}
            onChange={handleChange}
            placeholder="O que deseja em seu evento?"
            aria-label="Informações desejadas"
          />
        </div>

        <div className="Mensage__Form__itens">
          <label htmlFor="mensagem">Mensagem*</label>
          <textarea
            id="mensagem"
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            rows="4"
            placeholder="Deixe sua mensagem ou dúvida aqui"
            aria-label="Mensagem adicional"
            required
          ></textarea>
        </div>

        <button className='bt' type="submit" aria-label="Enviar solicitação de orçamento">
          Enviar Mensagem
        </button>
      </form>
    </section>
  );
};

export default FormContato;
