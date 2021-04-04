import { FC } from 'react';
import { Link } from 'react-router-dom';

const Namumenu: FC = () => (
  <nav>
    <ul className="flex">
      <li className="ml-3">
        <Link to="/get">保存</Link>
      </li>
      <li className="ml-3">
        <Link to="/ranking">ランキング</Link>
      </li>
      <li className="ml-3">
        <Link to="/">フィード</Link>
      </li>
    </ul>
  </nav>
);

export default Namumenu;
