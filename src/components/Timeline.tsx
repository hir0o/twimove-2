import { FC } from 'react';
import Move from './Move';

const Timeline: FC = () => (
  <div className="px-4">
    <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 max-w-6xl mx-auto">
      <Move />
      <Move />
      <Move />
      <Move />
      <Move />
      <Move />
      <Move />
      <Move />
    </div>
  </div>
);

export default Timeline;
