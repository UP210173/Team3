import { useDispatch, useSelector } from "react-redux"
import { setMessage } from "../store/ui/ui.slice";

export const useUI = () => {

  const dispatch = useDispatch();
  const { message } = useSelector( store => store.ui );

  const showAlert = ( content = '', type = '' ) => {
    dispatch( setMessage({ 
      isOpen: true, 
      content: content,
      type: type
    }));
  }

  const closeAlert = () => {
    dispatch( setMessage({
      isOpen: false,
      content: '',
      type: ''
    }))
  }
    
  return {
    message,

    showAlert,
    closeAlert,
  }

}