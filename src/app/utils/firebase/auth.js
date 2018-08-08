import Firebase from './firebase';

// Pass the "auth" prop to all methods
function auth(methods) {
  for (let i in methods) {
    methods[i] = new methods[i](Firebase.auth());
  }

  return methods;
}

function simpleAuth(auth) {
  return {
    createUser({ email, user }) {
      return console.log({ auth, email, user });
    },
    signOut() {
      return console.log({ auth });
    }
  }
}

export default auth({ simpleAuth });
// class SimpleAuth {
//   constructor(props) {
//     this.auth = props.auth;
//   }

//   createUser({ email, password }) {
//     return this.auth.createUserWithEmailAndPassword(email, password);
//   }

//   signIn({ email, password}) {
//     return this.auth.signInWithEmailAndPassword(email, password);
//   }

//   signOut() {
//     return this.auth.signOut();
//   }

//   resetPassword({ email }) {
//     return this.auth.sendPasswordResetEmail(email);
//   }

//   updatePassword({ password }) {
//     return this.auth.currentUser.updatePassword(password);
//   }
// }

// export default Auth({
//   simpleAuth: SimpleAuth,
// });
