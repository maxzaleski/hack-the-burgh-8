import firebase from 'firebase/app';

// @Docs: https://firebase.google.com/docs/web/setup?sdk_version=v8
//
// These credentials are OK to be exposed, but you can replace them with environment variables.
// Read the full thread here:
// https://stackoverflow.com/questions/37482366/is-it-safe-to-expose-firebase-apikey-to-the-public/37484053#37484053
export const cfg = {
  apiKey: 'AIzaSyCtvuGqyCSkjFi2pzzr2gNm5J-wsns63so',
  authDomain: 'htb8-matching-app.firebaseapp.com',
  projectId: 'htb8-matching-app',
  storageBucket: 'htb8-matching-app.appspot.com',
  messagingSenderId: '366808960610',
  appId: '1:366808960610:web:a404c5ab8415398d384b3b',
  measurementId: 'G-D5V6TLDCQX',
};
if (!firebase.apps.length) firebase.initializeApp(cfg);

function initAuth() {
  const auth = firebase.auth();
  const emulatorHost = process.env.FIREBASE_AUTH_EMULATOR_HOST;
  if (emulatorHost) auth.useEmulator(emulatorHost);
  return auth;
}
export const auth = initAuth();
