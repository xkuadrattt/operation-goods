import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import { RouteLayout } from "../layout";
import {
  Beranda,
  InputBarang,
  MutasiBarang,
  NotFound,
  Persediaan,
  RiwayatBarang,
} from "../pages";

export const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RouteLayout />}>
    <Route path="/" element={<Navigate replace to='beranda' />} />
    <Route path="beranda" element={<Beranda />} />
    <Route path="inputbarang" element={<InputBarang />} />
    <Route path="mutasibarang" element={<MutasiBarang />} />
    <Route path="persediaan" element={<Persediaan />} />
    <Route path="riwayatbarang" element={<RiwayatBarang />} />
    <Route path="*" element={<NotFound />} />
  </Route>,
));
