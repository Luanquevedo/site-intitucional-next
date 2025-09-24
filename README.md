Documentação do Projeto 
1. Visão Geral do Projeto
Este projeto de site especializado em eventos. O site foi desenvolvido com foco em usabilidade, performance e otimização para mecanismos de busca (SEO). O principal objetivo é fornecer informações sobre os serviços oferecidos, assim como facilitar o contato entre os clientes e o buffet, incluindo uma funcionalidade de orçamento.

Tecnologias Utilizadas
React & Next: Framework utilizado para a construção do front-end.
HTML5 & Sass: Para estruturação e estilização do site.
JavaScript: Para a lógica interativa do site.

1. Funcionalidades do Projeto
1. Formulário de Contato
O formulário de contato foi criado para facilitar a comunicação entre o cliente e o buffet. Ele contém os seguintes campos:

Nome Completo (Obrigatório)
E-mail (Obrigatório)
Telefone (Obrigatório)
Tipo de Evento (Obrigatório)
Informações Desejadas (Opcional)
Mensagem (Opcional)
Após o envio do formulário, o usuário é redirecionado para um link de WhatsApp com os dados preenchidos, além de uma opção de envio por e-mail.

Objetivos:

Facilitar o contato com clientes potenciais.
Coletar informações relevantes para orçamentos de eventos.

2. Estilização e Responsividade
O site foi desenvolvido para ser visualmente atraente e funcional, utilizando o layout responsivo, para que seja acessível em qualquer dispositivo (desktop, smartphone).

Objetivos:

Tornar o site agradável visualmente e fácil de navegar.
Garantir que o site seja acessível em diferentes tamanhos de tela.

3. SEO e Performance
O site é otimizado para SEO, garantindo que seja bem indexado pelos mecanismos de busca. Também foi otimizado para performance, para garantir tempos de carregamento rápidos e uma experiência de usuário fluida.

Objetivos:

Melhorar o ranking do site nos resultados de busca.
Garantir uma navegação sem interrupções.

4. Como Configurar e Executar o Projeto
Pré-requisitos
Node.js (versão 12 ou superior)
npm (gerenciador de pacotes do Node)

Instalação

Instale as dependências:

npm install
Execute o projeto localmente:

npm start
O site estará disponível em http://localhost:3000/

5. Detalhes de Implementação

1. Formulário de Contato
O formulário foi implementado utilizando React Hooks, mais especificamente o useState para gerenciar os dados inseridos pelo usuário. A função handleSubmit realiza a coleta dos dados e gera uma mensagem formatada, que é enviada via WhatsApp e e-mail.

2. Estilos
Os estilos foram criados utilizando Sass. A arquitetura de estilos segue a metodologia BEM (Block, Element, Modifier) para garantir a organização e manutenção do código.
