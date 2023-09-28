import { configureStore } from '@reduxjs/toolkit'
import add from './slice';


export const store = configureStore({
  reducer: {
    coter: add,
    
  },
})