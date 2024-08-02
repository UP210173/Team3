import { useSelector } from "react-redux"

export const useUI = () => {

    const { aside } = useSelector( store => store.ui );

    return {
        aside
    }
}