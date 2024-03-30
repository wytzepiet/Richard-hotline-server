# Richard Hotline Server
### Dependencies
- Vercel CLI (if you're gonna deploy on Vercel)
- Firebase CLI
- Node
### Get started
1. Install packages: `yarn`
2. Install firebase CLI: `yarn global add firebase-tools`.
3. Create `.env` file with all the service credentials.
```js
# Transactional mails
SENDPULSE_ID=
SENDPULSE_SECRET=

# Cloudinary
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# Firebase admin server SDK
FIREBASE_ADMIN_TYPE=
FIREBASE_ADMIN_PROJECT_ID=
FIREBASE_ADMIN_PRIVATE_KEY_ID=
FIREBASE_ADMIN_PRIVATE_KEY=
FIREBASE_ADMIN_CLIENT_EMAIL=
FIREBASE_ADMIN_CLIENT_ID=
FIREBASE_ADMIN_AUTH_URI=
FIREBASE_ADMIN_TOKEN_URI=
FIREBASE_ADMIN_AUTH_PROVIDER=
FIREBASE_ADMIN_CLIENT_CERT=
FIREBASE_ADMIN_UNIVERSE_DOMAIN=
```

4. Start dev server with one of the following options:
- Vercel emulator: `yarn vercel`
- Regular dev server: `yarn dev`
5. Start the Firestore emulator to interface with the database:
```
yarn db
```

Happy hacking!