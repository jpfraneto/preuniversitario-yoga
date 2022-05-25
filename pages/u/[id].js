import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const AlumnoPage = () => {
  const router = useRouter();
  const [alumno, setAlumno] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getAlumno = async () => {
      if (!router.query.id) return;
      const response = await fetch(`/api/alumnos/${router.query.id}`);
      const data = await response.json();
      setAlumno(data.alumno);
      setLoading(false);
    };
    getAlumno();
  }, [router]);
  return (
    <>
      {!loading ? (
        <>
          {alumno ? (
            <>
              <p>{alumno.nombre}</p>
              <button onClick={() => router.back()}>Atrás</button>
            </>
          ) : (
            <>
              <p>There is no alumno with that ID</p>
              <button onClick={() => router.back()}>Atrás</button>
            </>
          )}
        </>
      ) : (
        <>Cargando...</>
      )}
    </>
  );
};

export default AlumnoPage;
