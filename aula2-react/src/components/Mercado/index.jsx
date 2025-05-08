import styles from './style.module.css';
import image from '../../../public/sou-colleger.png';
import work from '../../../public/college-icon-1-100x100.png';
import opportunity from '../../../public/empregos-100x100.png';
import remuneration from '../../../public/salario-100x100.png';

export default function Mercado() {
    return (
        <div className={styles.container}>
            <div className={styles.data}>
                <div className={styles.work}>
                    <img src={work} alt="mercado" />
                    <h2>Mercado em ascenção</h2>
                </div>

                <div className={styles.opportunity}>
                    <img src={opportunity} alt="opportunity" />
                    <h2>Mais de 400 mil vagas disponíveis</h2>
                </div>

                <div className={styles.remuneration}>
                    <img src={remuneration} alt="remuneration" />
                    <h2>Salários robustos de até R$ 35 mil</h2>
                </div>
            </div>
            <div className={styles.image}>
                <img src={image} alt="mercado" />
            </div>
        </div>
    )
}