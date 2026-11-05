import styles from "./categorias.module.css"
import Image from "next/image"
import iconeEntradas from "../../../../public/entrada.png"
import iconeMassas from "../../../../public/massa.png"
import iconeCarnes from "../../../../public/carne.png"
import iconeBebidas from "../../../../public/bebidas.png"
import iconeSaladas from "../../../../public/salada.png"
import iconeSobremesas from "../../../../public/sobremesa.png"

export default function Categorias() {
    return(
        <section className={styles.categorias}>
            <div className={styles.categorias_botoes}>
                <button>
                    <Image src={iconeEntradas} alt="icone" />
                    <span>Entradas</span>
                </button>
                <button>
                    <Image src={iconeMassas} alt="icone" />
                    <span>Massas</span>
                </button>
                <button>
                    <Image src={iconeCarnes} alt="icone" />
                    <span>Carnes</span>
                </button>
                <button>
                    <Image src={iconeBebidas} alt="icone" />
                    <span>Bebidas</span>
                </button>
                <button>
                    <Image src={iconeSaladas} alt="icone" />
                    <span>Saladas</span>
                </button>
                <button>
                    <Image src={iconeSobremesas} alt="icone" />
                    <span>Sobremesas</span>
                </button>
            </div>
        </section>
    )
}