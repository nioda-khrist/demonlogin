import { useDispatch, useSelector } from 'react-redux';
import { auth } from '@/firebase/firebase';
import { logout, selectUser } from '@/redux/userSlice';

const Main = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.user.email);

  const logoutOfApp = () => {
    // dispatch to the store with the logout action
    dispatch(logout());
    // sign out function from firebase
    auth.signOut();
  };

  return (
    <div className='main'>
      <div>
        <h1>
          Welcome <span>{email}</span>
        </h1>
        <button onClick={logoutOfApp}>Logout</button>
      </div>
    </div>
  );
};

export default Main;
