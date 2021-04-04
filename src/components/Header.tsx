import { FC } from 'react';
import { Link } from 'react-router-dom';
import Navmenu from './Navmenu';

const Header: FC = () => (
  <header className="px-4 border-b border-gray-200 py-4 bg-white">
    <div className="max-w-6xl mx-auto flex justify-between">
      <Link to="/">
        <h1 className="text-blue-500 text-2xl">twimove</h1>
      </Link>
      <Navmenu />
    </div>
  </header>
);

export default Header;
