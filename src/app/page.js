import Image from "next/image";
import styles from "./page.module.css";
import Banner from "../../public/banner.png"
import Categorias from "./components/categorias/page";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <Image className={styles.banner} src={Banner} alt="banner"/>
        <div>
          <h1>Restaurant</h1>
          <p>De pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sobres refinados</p>
        </div>
      </header>
      <main className={styles.main_container}>
        <Categorias />
      </main>
    </>
  );
}
