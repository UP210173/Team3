import { useDispatch, useSelector } from 'react-redux';
import { startRegisteringUser } from '../../common/store/auth/auth.thunk';

export const useLogin = () => {
    
  const dispatch = useDispatch();
  const { status, user } = useSelector( store => store.auth );

  const registerUser = ( userInformation = {} ) => {
    dispatch( startRegisteringUser( userInformation ) );
  }

  const loginUser = ( userCredentials = {} ) => {

  }

  return {
    status, 
    user,

    registerUser,
    loginUser,
  }

}