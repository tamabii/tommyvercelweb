import { cert, getApps, initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';

const GOOGLE_APPLICATION_CREDENTIALS = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
)

if (!getApps().length) initializeApp({
  credential: cert(GOOGLE_APPLICATION_CREDENTIALS),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  storageBucket: process.env.FIREBASE_STORAGE_URL
})

export const databaseClient = getFirestore()
export const firebaseStorage = getStorage()
export const auth = getAuth()