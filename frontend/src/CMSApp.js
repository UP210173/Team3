import { Provider } from "react-redux"
import { RouterApp } from "./RouterApp"
import { store } from "./components/common"
import { Aside } from "./components/common/components/Aside"

export const CMSApp = () => {
  return (
    <Provider store={store}>
      <div className="cms">
        <RouterApp />
      </div>
      <Aside />
    </Provider>
  )
}
