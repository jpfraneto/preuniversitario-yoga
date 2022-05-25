import React from 'react';
import Link from 'next/link';

const Temporadas = () => {
  return (
    <div>
      Temporadas
      <Link href='/temporadas/1'>
        <a>Ir a la primera temporada</a>
      </Link>
    </div>
  );
};

export default Temporadas;
