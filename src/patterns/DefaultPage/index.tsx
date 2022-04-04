import styles from './DefaultPage.module.scss';
import stylesTheme from 'styles/Theme.module.scss';
import Header from 'components/Header';
import { Outlet } from 'react-router-dom';

export default function DefaultPage() {
  return (
    <>
      <Header />
      <div className={stylesTheme.container}><Outlet /></div>
    </>
  );
}