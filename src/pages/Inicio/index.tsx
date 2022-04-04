import styles from './Inicio.module.scss';
import stylesTheme from 'styles/Theme.module.scss';
import cardapio from 'data/cardapio.json';
import NossaCasa from 'assets/nossa_casa.png';
import {useNavigate} from 'react-router-dom';
import {Prato} from 'types/Prato';

export default function Inicio() {
  const pratosRecomendados = [...cardapio].sort(() => 0.5 - Math.random()).splice(0,3);
  const navigate = useNavigate();
  function redirecionarParaDetalhes(prato: Prato) {
    navigate(`prato/${prato.id}`);
  }
  return (
    <section>
      <h3 className={stylesTheme.titulo}>Recomendações da casa</h3>
      <div className={styles.recomendados}>
        {pratosRecomendados.map(item => (
          <div className={styles.recomendado} key={item.id} >
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button className={styles.recomendado__botao} onClick={() => redirecionarParaDetalhes(item)}>
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={stylesTheme.titulo}> Nossa casa </h3>
      <div className={styles.nossaCasa}>
        <img src={NossaCasa} alt="Casa do aluroni" />
        <div className={styles.nossaCasa__endereco}>
          Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
        </div>
      </div>
    </section>
  );
}