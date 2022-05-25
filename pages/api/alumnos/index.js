import { ObjectId } from 'mongodb';
import { connectToDatabase } from '../../../lib/mongodb';
const crypto = require('crypto');

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    try {
      const { db } = await connectToDatabase();
      console.log('inside the PUT route, for adding a new comment ', req.body);
      const { title, comment, date, alumnoId } = req.body;
      const commentid = crypto.randomBytes(16).toString('hex');
      const dbresponse = await db
        .collection('alumnos')
        .updateOne(
          { _id: ObjectId(req.body.alumnoId) },
          { $push: { comments: { title, comment, date, id: commentid } } }
        );
      res.json({ success: true, id: commentid });
    } catch (error) {
      console.log('there was an error', error);
      res.json({ success: false });
    }
  }
}
