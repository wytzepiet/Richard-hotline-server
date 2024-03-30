import { Request, Response } from 'express';
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

import validator, { escape, isEmpty, isEmail } from 'validator';
import { inputValidationConfig } from '../lib/validatorContext';
import app from '../lib/firebase-server';
import sendMail from '../lib/send-mail';
export const config = {
  runtime: 'nodejs',
};

const key = process.env.DB_KEY;

interface Message {
  name: string,
  email: string,
  message: string,
  images: string[],
  user: string
}

export default async function add_message(messageObject: Message) {
  // console.log(serviceAccount)
  const db = getFirestore(app);
  const { name, email, message, images, user }: Message = messageObject;
  const { maxLength } = inputValidationConfig;

  try {
    [name, email, message].forEach((value: string) => {
      if (isEmpty(value)) {
        throw new Error(`${value} is empty`);
      }
      if (
        (Object.keys(value).includes('email') && value.length > maxLength.input) ||
        (Object.keys(value).includes('name') && value.length > maxLength.input)
      ) {
        throw new Error(`${Object.keys(value)} cannot be greater than ${maxLength.input} characters.`);
      }
    });

    if (!isEmail(email)) throw new Error('Please fill in a valid e-mail.');
    if (images.length > maxLength.images) throw new Error(`You can't send more than ${maxLength.images} images.`);
  } catch (error) {
    console.error({ error });
    return {
      success: false,
      code: 402,
      error: error
    }
  }

  try {
    if (!user) {
      throw new Error('User id not provided.');
    }
    const post = {
      name: escape(name),
      email: escape(email),
      message: escape(message),
      images: images,
      timestamp: Timestamp.now(),
      printed: false
    };
    const resp = await db.collection('Users').doc(user).collection('messages').add(post);
    console.log(resp.id)
    return { success: true, id: resp.id };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      code: 500,
      error: error
    };
  }
}
