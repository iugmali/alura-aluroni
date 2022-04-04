import styles from './Prato.module.scss';
import { useNavigate, useParams} from 'react-router-dom';
import cardapio from 'data/cardapio.json';
import TagsPrato from 'components/TagsPrato';
import NotFound from '../NotFound';
import {Routes, Route} from 'react-router-dom';
import DefaultPage from 'patterns/DefaultPage';

export default function Prato() {
  const navigate = useNavigate();
  const { id } = useParams();
  const prato = cardapio.find(item => item.id === Number(id)) || null;
  if (!prato) {
    return <NotFound />;
  }
  return (
    <Routes>
      <Route path='*' element={<DefaultPage />}>
        <Route index element={
          <>
            <button className={styles.voltar} onClick={() => navigate(-1)}>
              {'< Voltar'}
            </button>
            <section className={styles.container}>
              <h1 className={styles.titulo}>
                {prato.title}
              </h1>
              <div className={styles.imagem}>
                <img src={prato.photo} alt={prato.title} />
              </div>
              <div className={styles.conteudo}>
                <p className={styles.conteudo__descricao}>
                  {prato.description}
                </p>
                <TagsPrato {...prato} />
              </div>
            </section>
          </>
        } />
      </Route>
    </Routes>
  );
}