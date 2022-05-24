import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyD8DU3ziRtea-7Rspws_FBPBGFDOK-6wbg',
  authDomain: 'collabo-stock-photo.firebaseapp.com',
  projectId: 'collabo-stock-photo',
  storageBucket: 'collabo-stock-photo.appspot.com',
  messagingSenderId: '809224689260',
  appId: '1:809224689260:web:c30fce54d0b36512ae6a49',
}

// Initialize firebase instance
firebase.initializeApp(firebaseConfig)

// Initialize firestore and authentication
const auth = firebase.auth()
const storage = firebase.storage()
const db = firebase.firestore()
const timestamp = firebase.firestore.Timestamp

export { db, auth, storage, timestamp }
