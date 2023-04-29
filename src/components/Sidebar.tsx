import {NavLink} from 'react-router-dom'
import iconacc from "../assets/img/iconacc.webp";
const Sidebar = () => {
  return (
    <aside className="hidden md:block pr-12 pl-4 pt-8 bg-primary text-white">
      <h3 className="text-xl font-bold">Operation Goods</h3>
      <ul className="flex flex-col gap-4 mt-8 text-white/60 [&>li:hover]:text-white">
        <li><NavLink to='beranda'>Beranda</NavLink></li>
        <li><NavLink to='persediaan'>Persediaan</NavLink></li>
        <li><NavLink to='riwayatbarang'>Riwayat Barang</NavLink></li>
        <li><NavLink to='mutasibarang'>Mutasi Barang</NavLink></li>
        <li><NavLink to='inputbarang'>Input Barang</NavLink></li>
      </ul>
      <div>
        <div className="flex gap-4 items-center mt-8">
          <img src={iconacc} alt="iconacc" className="w-12" />
          <div>
            <p>Taufik</p>
            <p>Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
