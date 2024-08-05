import { useSelector } from "react-redux"

export const useAuth = () => {

  const { status, user } = useSelector( store => store.auth );

  return {
    status,
    user
  }

}