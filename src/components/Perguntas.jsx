import styles from "../css/Perguntas.module.css";

function Perguntas() {
  return (
    <section className={styles.perguntas_sec}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1>Perguntas Frequentes</h1>
        </div>

        <div className={styles.pergunta}>
          <h2>Como funciona o SinalizaAI?</h2>
          <p>
            O <span>SinalizaAI</span> utiliza inteligência artificial para
            reconhecer e interpretar a Língua Brasileira de Sinais (LIBRAS) em
            tempo real.
          </p>
        </div>

        <div className={`${styles.pergunta} ${styles.pergunta_2}`}>
          <h2>Porque utilizar o SinalizaAI?</h2>
          <p>
            Para <span>facilitar</span> a comunicação entre pessoas{" "}
            <span>surdas</span> e ouvintes, promovendo{" "}
            <span>acessibilidade</span> e <span>inclusão social.</span>
          </p>
        </div>

        <div className={`${styles.pergunta} ${styles.pergunta_3}`}>
          <h2>Haverá versão mobile?</h2>
          <p>
            <span>Sim!</span> Uma versão <span>mobile</span> está <span>em desenvolvimento</span> e será lançada em
            breve para iOS e Android.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Perguntas;
