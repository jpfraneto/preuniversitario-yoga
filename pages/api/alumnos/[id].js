import { ObjectId } from 'mongodb';
import { connectToDatabase } from '../../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { db } = await connectToDatabase();
    const alumno = await db
      .collection('alumnos')
      .findOne({ _id: ObjectId(req.query.id) });
    res.json({ alumno });
  }
}
