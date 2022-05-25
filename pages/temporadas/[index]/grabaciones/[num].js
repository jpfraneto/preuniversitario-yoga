import React from 'react';
import { useRouter } from 'next/router';

const Grabacion = () => {
  const router = useRouter();
  return (
    <div>
      Grabacion por número {router.query.num}
      <span onClick={() => router.back()}>Atrás</span>
    </div>
  );
};

export default Grabacion;
