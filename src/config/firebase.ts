import firebase from 'firebase/app';
import '@firebase/firestore';
// import 'firebase/auth';
import ReduxSagaFirebase from 'redux-saga-firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'odonto-clean-react.firebaseapp.com',
  databaseURL: 'https://odonto-clean-react.firebaseio.com',
  projectId: 'odonto-clean-react',
  storageBucket: '',
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const reduxSagaFirebase = new ReduxSagaFirebase(firebaseApp);

export default reduxSagaFirebase;
