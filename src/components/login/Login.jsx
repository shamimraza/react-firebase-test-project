import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase.config";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleButtonSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loginUser = result.user;
        console.log(loginUser);
        setUser(loginUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleGithubButton = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const githubLogin = result.user;
        setUser(githubLogin);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  const signOutButton = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mt-4">
      {user ? (
        <button className="btn btn-error" onClick={signOutButton}>
          Sign Out
        </button>
      ) : (
        <>
          <button onClick={handleButtonSignIn} className="btn btn-primary">
            google login
          </button>
          <button
            onClick={handleGithubButton}
            className="btn btn-secondary ml-4"
          >
            Github Login
          </button>
        </>
      )}
      {user && (
        <div>
          <h2>user: {user.displayName}</h2>
          <h2>Email: {user.email}</h2>
          <h2>
            <img className="flex justify-center" src={user.photoURL} alt="" />
          </h2>
        </div>
      )}
    </div>
  );
};

export default Login;
