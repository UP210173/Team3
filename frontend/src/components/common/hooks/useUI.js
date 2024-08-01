import { useSelector } from "react-redux"

export const useUI = () => {

  const { message } = useSelector( store => store.ui );

  return {
    message
  }

}