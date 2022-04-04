import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Inicio from './pages/Inicio';
import Cardapio from './pages/Cardapio';
import Menu from './components/Menu';
import DefaultPage from './patterns/DefaultPage';
import Sobre from './pages/Sobre';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Prato from './pages/Prato';
import Admin from './components/Admin';

export default function AppRouter() {
  return (
    <main className='container'>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path={'/'} element={<DefaultPage />}>
            <Route index element={<Inicio />} />
            <Route path={'cardapio'} element={<Cardapio />} />
            <Route path={'sobre'} element={<Sobre />} />
            <Route path={'admin/:user'} element={<Admin />} />
          </Route>
          <Route path={'prato/:id'} element={<Prato />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}