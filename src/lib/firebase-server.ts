const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

const serviceAccount = "/Users/richard/Applications/R_GIT/Richard-hotline-server/src/credentials/richardhotline-7e1d2-firebase-adminsdk-u6rem-ec3bcb2d85.json"
const app = initializeApp({
  credential: cert(serviceAccount)
});

export const db = getFirestore(app);

export const userExists = async (user:string) => {
  const userRef = db.collection('users').doc(user);
  const doc = await userRef.get();
  return doc.exists
}

export default app

