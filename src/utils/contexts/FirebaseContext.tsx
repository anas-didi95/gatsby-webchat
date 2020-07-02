import React, { createContext, ReactNode } from "react"
import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

if (typeof window !== "undefined") {
  firebase.initializeApp({
    apiKey: process.env.GATSBY_FIREBASE_API_KEY,
    authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
    projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
    storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.GATSBY_FIREBASE_APP_ID,
    measurementId: process.env.GATSBY_FIREBASE_MEASUREMENT_ID,
  })
}

const googleProvider = new firebase.auth.GoogleAuthProvider()
const FirebaseContext = createContext<{
  auth: () => firebase.auth.Auth
  firestore: () => firebase.firestore.Firestore
  googleProvider: () => firebase.auth.GoogleAuthProvider
}>({
  auth: () => firebase.auth(),
  firestore: () => firebase.firestore(),
  googleProvider: () => googleProvider,
})

const FirebaseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <FirebaseContext.Provider
      value={{
        auth: () => firebase.auth(),
        firestore: () => firebase.firestore(),
        googleProvider: () => googleProvider,
      }}>
      {children}
    </FirebaseContext.Provider>
  )
}

export default FirebaseContext
export { FirebaseProvider }
