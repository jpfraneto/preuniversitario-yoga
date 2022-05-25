import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { db } = await connectToDatabase();
    console.log('IN HERE!');
    const updatedMessage = await db
      .collection('alumnos')
      .updateMany({}, [{ $set: { season: 1 } }]);
    console.log('the updated message is: ', updatedMessage);
    res.json({ 123: 456 });
  }
}
