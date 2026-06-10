import styles from "../css/Video.module.css";
import Video1 from "../assets/Funcionalidades/Video.mp4";

function Video() {
  return (
    <section className={styles.sec_funcionalidades}>
      <div className={styles.video_f}>
        <video autoPlay loop muted>
          <source src={Video1} />
        </video>
      </div>
    </section>
  );
}

export default Video;
