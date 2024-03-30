const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');
import {isEmpty} from 'validator';
import sendMail from '../lib/send-mail';
import app from '../lib/firebase-server';

export interface ConfirmResponse {
  completed: boolean,
  message?: string | object,
  modified_message?: string
}

export interface ConfirmRequest {
  user: string, 
  messageIds: string[]
}

const confirm = async(user:string, messageId:string): Promise<ConfirmResponse> => {
  try {
    const db = getFirestore(app);
    const resp = await db.collection('Users').doc(user).collection('messages').doc(messageId).update({
      printed: true,
      printed_timestamp: Timestamp.now()
    })
    return {
      completed: true,
      modified_message: messageId,
      message: resp
    }
  } catch (err) {
    console.log(err)
    return {
      completed: false,
      message: err || 'something went wrong'
    }
  }
}

export default confirm

