const { initializeApp, cert } = require('firebase-admin/app');

const serviceAccount = "/Users/richard/Applications/R_GIT/Richard-hotline-server/src/credentials/richardhotline-7e1d2-firebase-adminsdk-u6rem-ec3bcb2d85.json"
const app = initializeApp({
  credential: cert(serviceAccount)
});

export default app

