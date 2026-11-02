import Image from "next/image";
import styles from "./page.module.css";
import Banner from "../../public/banner.png"

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <Image src={Banner} alt="banner"/>
        <h1>Restaurant</h1>
        <p>De pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sobres refinados</p>
        
      </header>
    </>
  );
}
