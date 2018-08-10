import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  
};

export default !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();
