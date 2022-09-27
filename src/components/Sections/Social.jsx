import {
  getAuth,
  signInWithPopup,
  FacebookAuthProvider,
  TwitterAuthProvider,
} from 'firebase/auth';

const Social = ({ toggleLogin, title, text, link }) => {
  const auth = getAuth();
  const fbLogin = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        console.log('USER:', user);
        console.log('accessToken:', accessToken);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
      });
  };

  const twitterLogin = () => {
    const provider = new TwitterAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
        // You can use these server side with your app's credentials to access the Twitter API.
        const credential = TwitterAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const secret = credential.secret;

        // The signed-in user info.
        const user = result.user;
        console.log('token:', token);
        console.log('secret:', secret);
        console.log('User:', user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = TwitterAuthProvider.credentialFromError(error);
        // ...
        console.log('credential:', credential);
        console.log('email:', email);
        console.log('errorCode:', errorCode);
        console.log('errorMessage:', errorMessage);
      });
  };

  return (
    <div className='alternate'>
      <div className='alternate--title'>
        <span>{title}</span>
      </div>
      <div className='alternate--btn-group'>
        <button onClick={fbLogin}>
          <img src='/src/assets/ig.svg' />
        </button>
        <button onClick={twitterLogin}>
          <img src='/src/assets/twitter.svg' />
        </button>
        <button onClick={fbLogin}>
          <img src='/src/assets/fb.svg' />
        </button>
      </div>
      <p className='alternate--desc'>
        {text} <span onClick={toggleLogin}>{link}</span>
      </p>
    </div>
  );
};

export default Social;
