import {ContactStyles} from "./style.jsx";
 
export default function Contact() {
  return (
    <section className={ContactStyles.section}>
 
      {/* Header */}
      <div className={ContactStyles.header}>
        <h2 className={ContactStyles.title}>Fale Conosco</h2>
        <p className={ContactStyles.subtitle}>
          Estamos prontos para atender você! Escolha a forma que mais gosta de falar com a gente:
        </p>
      </div>
 
      {/* Cards */}
      <div className={ContactStyles.grid}>
 
        {/* WhatsApp */}
        <div className={ContactStyles.card}>
          <span className={ContactStyles.cardLabel}>WhatsApp</span>
          <p className={ContactStyles.cardInfo}>(71) 99999-8888</p>
          <a href="#" className={ContactStyles.cardLink}>Fale agora no WhatsApp</a>
        </div>
 
        {/* Instagram */}
        <div className={ContactStyles.card}>
          <span className={ContactStyles.cardLabel}>Instagram</span>
          <p className={ContactStyles.cardInfo}>@sua_pizzaria_bahia</p>
          <a href="#" className={ContactStyles.cardLink}>Ver perfil</a>
        </div>
 
        {/* Facebook */}
        <div className={ContactStyles.card}>
          <span className={ContactStyles.cardLabel}>Facebook</span>
          <p className={ContactStyles.cardInfo}>Sua Pizzaria</p>
          <a href="#" className={ContactStyles.cardLink}>Acessar página</a>
        </div>
 
        {/* iFood */}
        <div className={ContactStyles.card}>
          <span className={ContactStyles.cardLabel}>iFood</span>
          <p className={ContactStyles.cardInfo}>Peça pelo app</p>
          <a href="#" className={ContactStyles.cardLink}>Abrir iFood</a>
        </div>
 
        {/* 99Food */}
        <div className={ContactStyles.card}>
          <span className={ContactStyles.cardLabel}>99Food</span>
          <p className={ContactStyles.cardInfo}>Peça pelo app</p>
          <a href="#" className={ContactStyles.cardLink}>Abrir 99Food</a>
        </div>
 
        {/* Telefone / Loja */}
        <div className={ContactStyles.card}>
          <span className={ContactStyles.cardLabel}>Telefone / Loja</span>
          <p className={ContactStyles.cardInfo}>(71) 3333-2222</p>
          <p className={ContactStyles.cardHours}>Seg a Dom – 18h às 00h</p>
        </div>
 
        {/* Email */}
        <div className={ContactStyles.card}>
          <span className={ContactStyles.cardLabel}>Email</span>
          <p className={ContactStyles.cardInfo}>contato@suapizzaria.com.br</p>
          <a href="#" className={ContactStyles.cardLink}>Enviar mensagem</a>
        </div>
 
      </div>
 
      {/* Redes sociais */}
      <div className={ContactStyles.social}>
        <h3 className={ContactStyles.socialTitle}>Ou nos siga nas redes</h3>
        <div className={ContactStyles.socialLinks}>
          <a href="#" className={ContactStyles.socialLink}>📸 Instagram</a>
          <a href="#" className={ContactStyles.socialLink}>📘 Facebook</a>
          <a href="#" className={ContactStyles.socialLink}>🐦 Twitter / X</a>
          <a href="#" className={ContactStyles.socialLink}>🎵 TikTok</a>
        </div>
      </div>
 
      {/* Endereço */}
      <div className={ContactStyles.footer}>
        <p>Endereço: Rua das Pizzas, 123 – Pituba, Salvador – BA</p>
        <p>Estamos esperando seu pedido!</p>
      </div>
 
    </section>
  );
}
 