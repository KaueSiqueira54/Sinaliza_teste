import styles from "../css/Fale.module.css";

function Fale() {
  return (
    <section className={styles.fale_sec}>
      <h1>Fale conosco</h1>

      <div className={styles.container}>
        <div className={styles.div1}>
          <div className={styles.texts}>
            <h2>Endereço</h2>
            <p>Rua Tito 54, Lapa, São Paulo</p>
          </div>

          <div className={styles.texts}>
            <h2>Telefone</h2>
            <p>11 9578963541</p>
          </div>

          <div className={styles.texts}>
            <h2>E-mail</h2>
            <p>Sinalizaai@gmail.com</p>
          </div>
          <div className={styles.mapa}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1227833051876!2d-46.69433512489202!3d-23.52808587882268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8775663b04f%3A0x923835e9005f8309!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-BR!2sbr!4v1778101152979!5m2!1spt-BR!2sbr"></iframe>
          </div>
        </div>

        <div className={styles.div2}>
          <h2>Entre em contato</h2>

          <form className={styles.container_div2}>
            <div className={styles.container_form}>
              <label htmlFor="nome">Seu nome</label>
              <input
                id="nome"
                type="text"
                name="nome"
                placeholder=" "
                required
              />
            </div>

            <div className={styles.container_form}>
              <label htmlFor="telefone">Seu telefone</label>
              <input
                id="telefone"
                type="tel"
                name="telefone"
                placeholder=" "
                required
              />
            </div>

            <div className={styles.container_form}>
              <label htmlFor="email">Seu e-mail</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder=" "
                required
              />
            </div>

            <div className={styles.container_form}>
              <label htmlFor="mensagem">Mensagem</label>
              <textarea id="mensagem" name="mensagem" rows={6} required />
            </div>

            <div className={styles.btn}>
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Fale;
