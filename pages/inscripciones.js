import React, { useState } from 'react';
import styles from '../styles/Inscripcion.module.css';
import ciudades from '../src/data/regionesyciudades';
import Link from 'next/link';

const Inscripcion = () => {
  const [comunas, setComunas] = useState([]);
  const [region, setRegion] = useState('');
  const [loading, setLoading] = useState(false);
  const [serverResponse, setServerResponse] = useState('');
  const handleFormSubmit = async e => {
    // setLoading(true);
    e.preventDefault();
    alert('Lo lamento, pero las inscripciones ya se cerraron.');
    const reqParams = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nombre: e.target.nombre.value,
        email: e.target.email.value,
        region: e.target.region.value,
        comuna: e.target.comuna.value,
        relacion: e.target.relacion.value,
        carrera: e.target.carrera.value,
        telefono: e.target.telefono.value,
        date: new Date(),
      }),
    };
    const response = await fetch(`/api/inscripcion`, reqParams);
    const data = await response.json();
    setLoading(false);
    setServerResponse(data.message);
  };
  const buscarComuna = e => {
    setRegion(e.target.value);
    setComunas(ciudades[e.target.value]);
  };
  return (
    <div className={styles.container}>
      <p>Las inscripciones para este ciclo ya se cerraron.</p>
    </div>
  );
  return (
    <div className={styles.container}>
      <h1>Inscríbete!</h1>
      {serverResponse ? (
        <>
          <p>{serverResponse}</p>
          <Link href='/'>
            <a>Volver</a>
          </Link>
        </>
      ) : (
        <>
          {!loading ? (
            <form
              onSubmit={handleFormSubmit}
              className={styles.inscripcionForm}
            >
              <div>
                <label>Nombre Completo:</label>
                <input
                  type='text'
                  name='nombre'
                  placeholder='Nombre Completo'
                  required
                />
              </div>
              <div>
                <label>Correo Electrónico:</label>
                <input
                  type='email'
                  name='email'
                  placeholder='Correo Electrónico'
                  required
                />
              </div>
              <div>
                <label>Teléfono Celular:</label>
                <input
                  type='tel'
                  name='telefono'
                  placeholder='Celular'
                  required
                />
              </div>
              <div>
                <label>
                  ¿En qué parte del país vives?
                  <br />
                  <select
                    name='region'
                    id='region'
                    value={region}
                    onChange={e => {
                      setRegion(e.target.value);
                      buscarComuna(e);
                    }}
                  >
                    <option value='0'>Regiones</option>
                    <option value='tarapaca'>1 - Tarapaca</option>
                    <option value='antofagasta'>2 - Antofagasta</option>
                    <option value='atacama'>3 - Atacama</option>
                    <option value='coquimbo'>4 - Coquimbo</option>
                    <option value='valparaiso'>5 - Valparaiso</option>
                    <option value='ohiggins'>6 - O&aposHiggins</option>
                    <option value='maule'>7 - Maule</option>
                    <option value='bio_bio'>8 - Bio - Bio</option>
                    <option value='araucania'>9 - Araucania</option>
                    <option value='los_lagos'>10 - Los Lagos</option>
                    <option value='aisen'>11 - Aisen</option>
                    <option value='magallanes_y_antartica'>
                      12 - Magallanes Y Antartica
                    </option>
                    <option value='metropolitana'>13 - Metropolitana</option>
                    <option value='los_rios'>14 - Los Rios</option>
                    <option value='arica_y_parinacota'>
                      15 - Arica y Parinacota
                    </option>
                  </select>
                  <br />
                  {comunas && (
                    <select name='comuna' id='comuna'>
                      <option value='0' defaultValue>
                        Comunas por Region
                      </option>
                      {comunas.map((comuna, index) => {
                        return (
                          <option
                            key={index}
                            value={comuna.replace(' ', '_').toLowerCase()}
                          >
                            {comuna}
                          </option>
                        );
                      })}
                    </select>
                  )}
                </label>
              </div>

              <div>
                <label>¿Cuál es tu relación con el yoga?</label>
                <textarea name='relacion' />
              </div>
              <div>
                <label>
                  ¿Cómo te sientes con respecto a la decisión de qué carrera
                  estudiar?
                </label>
                <textarea name='carrera' />
              </div>

              <button type='submit'>Enviar Inscripción</button>
            </form>
          ) : (
            <p>Enviando tu información...</p>
          )}
        </>
      )}
    </div>
  );
};

export default Inscripcion;
