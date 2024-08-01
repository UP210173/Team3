import cmsApi from "../../api/cmsApi"
import { setIsLoading, setMessage } from "../ui/ui.slice"
import { login } from "./auth.slice"

export const startRegisteringUser = ( userInformation = {} ) => {
  return async ( dispatch ) => {
    
    dispatch( setIsLoading( true ) )

    try {

      const { data } = await cmsApi.post('/auth/register', userInformation )
      const { user } = data;

      dispatch( login( user ) );
      dispatch( setMessage('Usuario creado correctamente') )

    } catch (error) {
      
      console.log(error);

    }

    dispatch( setIsLoading( false ) )

  }
}