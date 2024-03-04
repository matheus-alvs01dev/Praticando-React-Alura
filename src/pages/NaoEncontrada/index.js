import styles from './NaoEncontrada.module.css';
import Arnold from "./arnold.png"

function NaoEncontrada() {
    return (
        <section className={styles.container}>
            <img className={styles.arnold} src={Arnold} alt="Erro 404"/>
            <h2>Ops!</h2>
            <p>O conteudo que você procura não foi encontrado!</p>
        </section>
    )
}

export default NaoEncontrada;