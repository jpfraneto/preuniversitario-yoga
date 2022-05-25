import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Grabaciones = () => {
  const router = useRouter();
  const grabaciones = [
    {
      title: 'Kriya para equilibrar la mente, el cuerpo y el alma',
      url: 'https://www.loom.com/share/0160ba6c1437435db89049fc4b53935e',
      type: 'clase-ky',
      index: 1,
    },
    {
      title: 'Meditación Para Reencontrarse Con El Niño Interior',
      url: 'https://www.loom.com/share/7c4888236d8747e399ff73d69de5996b',
      type: 'meditacion',
      index: 2,
    },
    {
      title: 'Kriya para la negatividad',
      url: 'https://www.loom.com/share/2983e345d72e427a9612fcca4fa57de8',
      type: 'clase-ky',
      index: 3,
    },
    {
      title: 'Descanso',
      url: 'https://www.loom.com/share/e747cefa2ca547468534350e0fe8b3f3',
      type: 'descanso',
      index: 4,
    },
    {
      title: 'Meditación para comenzar a reconocer las sensaciones del cuerpo',
      url: 'https://www.loom.com/share/328f67f583524d7587b4a56aa96bba1c',
      type: 'meditacion',
      index: 5,
    },
    {
      title: 'Nabhi Kriya Para Prana y Apana',
      url: 'https://www.loom.com/share/398a2ab4dbb94aa0b937511c7c674b24',
      type: 'clase-ky',
      index: 6,
    },
    {
      title: 'Meditación Para La Aceptación de Nuestros Papás',
      url: 'https://www.loom.com/share/897724fc739b431aa9cd1d73dc4fd0c7',
      type: 'meditacion',
      index: 7,
    },
  ];
  return (
    <div>
      Acá van las grabaciones de la temporada {router.query.index}
      <div>
        {grabaciones.map(x => {
          return (
            <div key={x.index}>
              <Link
                href={`/temporadas/${router.query.index}/grabaciones/${x.index}`}
              >
                <h4>
                  {x.index}. {x.title}
                </h4>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Grabaciones;
