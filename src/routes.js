import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './pages/Inicio';
import SobreMim from './pages/SobreMim';
import Post from './pages/Post'
import Menu from './components/menu';
import Rodape from "components/Rodape";
import './App.css';
import PaginaPadrao from "components/PaginaPadrao";
import NaoEncontrado from "components/NaoEncontrado";
import ScrollToTop from "components/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>

        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NaoEncontrado />} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
