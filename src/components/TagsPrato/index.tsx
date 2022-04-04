import styles from './TagsPrato.module.scss';
import classNames from 'classnames';
import {Prato} from '../../types/Prato';

export default function TagsPrato(props: Prato) {
  return (
    <div className={styles.tags}>
      <div
        className={classNames(
          styles.tags__tipo,
          styles[`tags__tipo__${props.category.label.toLowerCase()}`]
        )}
      >
        {props.category.label}
      </div>
      <div className={styles.tags__porcao}>{props.size}g</div>
      <div className={styles.tags__qtdpessoas}>Serve {props.serving} pessoa{props.serving === 1 ? '' : 's'}</div>
      <div className={styles.tags__valor}>R$ {props.price.toFixed(2)}</div>
    </div>
  );
}