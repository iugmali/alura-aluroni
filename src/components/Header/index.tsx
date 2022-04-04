import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__text}>
        Casa do código e da massa
      </div>
    </header>
  );
}