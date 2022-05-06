import { ObjectId } from 'mongodb';
import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') return;
  const { db } = await connectToDatabase();
  try {
    console.log(req.body);
    const response = await db.collection('alumnos').insertOne(req.body);
    res.json({
      message:
        'Tu inscripción fue procesada correctamente! Te contactaré pronto para avanzar! Gracias por confiar en este proyecto.',
      success: true,
    });
  } catch (error) {
    res.json({
      message:
        'Hubo un problema al procesar tu información. Por favor contáctame al +569 85491126 para solucionarlo.',
    });
  }
}
