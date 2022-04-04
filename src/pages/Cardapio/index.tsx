import styles from './Cardapio.module.scss';
import stylesTheme from 'styles/Theme.module.scss';
import Buscador from './Buscador';
import {useState} from 'react';
import Filtros from './Filtros';
import Ordenador, {OpcoesOrdenador} from './Ordenador';
import Itens from './Itens';

export default function Cardapio() {
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState<OpcoesOrdenador>('');
  return (
    <section>
      <h3 className={stylesTheme.titulo}>Cardápio</h3>
      <Buscador busca={busca} setBusca={setBusca}/>
      <div className={styles.cardapio__filtros}>
        <Filtros filtro={filtro} setFiltro={setFiltro}/>
        <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
      </div>
      <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
    </section>
  );
}