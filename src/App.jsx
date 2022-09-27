import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from '@/redux/userSlice';
import { auth, onAuthStateChanged } from '@/firebase/firebase';
import { Register, LoginComp, ImageSlider, Header } from '@/components/';
import Main from '@/components/Main';
import './app.scss';

function App() {
  const user = useSelector(selectUser);
  const [currentLogin, setCurrentLogin] = useState(false);
  const dispatch = useDispatch();
  const wWidth = window.innerWidth;
  console.log('wWidth:', wWidth);

  // check at page load if a user is authenticated
  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // user is logged in, send the user's details to redux, store the current user in the state
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  const toggleLogin = () => {
    setCurrentLogin(!currentLogin);
  };

  return (
    <div className='App'>
      {!user ? (
        <React.Fragment>
          <div className='form-container'>
            <Header />
            {!currentLogin ? (
              <Register toggleLogin={toggleLogin} />
            ) : (
              <LoginComp toggleLogin={toggleLogin} />
            )}
          </div>
          {wWidth > 992 ? (
            <div className='slider-container'>
              <div>
                <ImageSlider />
              </div>
            </div>
          ) : (
            ''
          )}
        </React.Fragment>
      ) : (
        <Main />
      )}
    </div>
  );
}

export default App;
