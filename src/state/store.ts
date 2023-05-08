import { configureStore } from '@reduxjs/toolkit'

import reducers from "./reducers/index";
import { bankcruptMoney, depositMoney, withdrawMoney } from "./action-creators";

 const store = configureStore({reducer:reducers})

 export default store