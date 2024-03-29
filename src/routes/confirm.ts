import app from '../src/lib/firebase';
import { getFirestore, collection, addDoc, serverTimestamp, connectFirestoreEmulator } from 'firebase/firestore';
import {isEmpty} from 'validator';
import sendMail from '../lib/send-mail';

connectFirestoreEmulator(db, '127.0.0.1', 8083);


export default async function handler(request, response) {
  try{
    if(request.method == "PUT") {
      // const resp = await sendMail()
      const resp:string = 'test';
      // console.log(resp)
      return response.status(200).json({status: resp});
    } else {
      return response.status(405).json({status: 'failed', error: 'Method not allowed'})
    }
  } catch(err) {
    return response.status(500).json({status: 'failed', error: err.message})
  }
}

