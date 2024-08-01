import { useDispatch, useSelector } from 'react-redux';
import { startLoggingUser, startRegisteringUser } from '../../common/store/auth/auth.thunk';
import { logout } from '../../common/store/auth/auth.slice';
import { setMessage } from '../../common/store/ui/ui.slice';

export const useLogin = () => {
    
  const dispatch = useDispatch();
  const { status, user } = useSelector( store => store.auth );

  const registerUser = ( userInformation = {} ) => {
    dispatch( startRegisteringUser( userInformation ) );
  }

  const loginUser = ( userCredentials = {} ) => {
    dispatch( startLoggingUser( userCredentials ) )
  }

  const logoutUser = () => {
    dispatch( logout() );
    dispatch( setMessage({
      isOpen: true,
      content: 'Hasta la próxima',
      type: 'success'
    }) );
    localStorage.removeItem('cms');
  }

  return {
    status, 
    user,

    registerUser,
    loginUser,
    logoutUser,
  }

}