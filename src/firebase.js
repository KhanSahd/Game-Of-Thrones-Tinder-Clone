import { initializeApp } from 'firebase/app';
import { 
  getFirestore
} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyC9gpQfMCC1GwjCt-Pe44ng2fQUflNgO8k",
    authDomain: "tinder-15dec.firebaseapp.com",
    projectId: "tinder-15dec",
    storageBucket: "tinder-15dec.appspot.com",
    messagingSenderId: "749146466164",
    appId: "1:749146466164:web:f073ec809c4ae430416e21"
  };

const firebaseApp = initializeApp(firebaseConfig);
const database = getFirestore(firebaseApp);


export default database;