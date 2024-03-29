const { initializeApp, cert } = require('firebase-admin/app');

var serviceAccount = {
  type:  process.env.FIREBASE_ADMIN_TYPE,
  project_id:  process.env.FIREBASE_ADMIN_PROJECT_ID,
  private_key_id:  process.env.FIREBASE_ADMIN_PRIVATE_KEY_ID,
  private_key:  process.env.FIREBASE_ADMIN_PRIVATE_KEY,
  client_email:  process.env.FIREBASE_ADMIN_EMAIL,
  client_id: process.env.FIREBASE_ADMIN_ID,
  auth_uri: process.env.FIREBASE_ADMIN_AUTH_URI,
  token_uri: process.env.FIREBASE_ADMIN_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.FIREBASE_ADMIN_AUTH_PROVIDER,
  client_x509_cert_url: process.env.FIREBASE_ADMIN_CERT,
  universe_domain: process.env.FIREBASE_ADMIN_DOMAIN
}

const app = initializeApp({
  credential: cert(serviceAccount)
});

console.log(app);

export default app

