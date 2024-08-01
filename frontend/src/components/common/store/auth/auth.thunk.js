import cmsApi from "../../api/cmsApi"
import { setIsLoading, setMessage } from "../ui/ui.slice"
import { login } from "./auth.slice"

export const startRegisteringUser = ( userInformation = {} ) => {
  return async ( dispatch ) => {
    
    dispatch( setIsLoading( true ) )

    try {

      await cmsApi.post('/auth/register', userInformation )

      dispatch( setMessage({
        isOpen: true,
        content: 'Usuario creado correctamente',
        type: 'success'
      }))

    } catch (error) {
      
      const { error: errorMessage } = error.response.data;

      dispatch( setMessage({
        isOpen: true,
        content: errorMessage,
        type: 'error'
      }))
    }

    dispatch( setIsLoading( false ) )

  }
}