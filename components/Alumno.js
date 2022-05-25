import React, { useState } from 'react';
import styles from './Alumno.module.css';

const Alumno = ({ alumno }) => {
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(alumno.comments || []);
  const handleAddComment = async () => {
    const now = new Date();

    const reqParams = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        comment,
        title,
        alumnoId: alumno._id,
        date: now,
      }),
    };
    const response = await fetch(`/api/alumnos`, reqParams);
    const data = await response.json();
    if (!data.success)
      return alert('there was a problem adding the comment to the DB');
    setComments(x => [...x, { comment, title, date: now, id: data.id }]);
  };
  return (
    <div key={alumno._id} className={styles.alumnoContainer}>
      <h5>{alumno.nombre}</h5>
      <h6>
        {alumno.region} - {alumno.comuna}
      </h6>
      <p>
        <strong>¿Cuál es tu relación con el yoga?:</strong> {alumno.relacion}
      </p>
      <p>
        <strong>¿Cómo te sientes con la carrera que estudiar? </strong>
        {alumno.carrera}
      </p>
      {comments &&
        comments.map(x => {
          console.log('x', x);
          return (
            <div key={x.id} className={styles.commentContainer}>
              <h2>{x.title}</h2>
              <h5>{new Date(x.date).toString()}</h5>
              <p>{x.comment}</p>
            </div>
          );
        })}
      <div className={styles.newCommentContainer}>
        <input
          type='text'
          name='commenttitle'
          placeholder='Título del comentario'
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          placeholder='Comentario'
          name='comment'
          onChange={e => setComment(e.target.value)}
        />
        <br />
        <button onClick={handleAddComment}>Agregar comentario</button>
      </div>
    </div>
  );
};

export default Alumno;
