import { configureStore } from "@reduxjs/toolkit";
import appFormSlice from "./Slices/appFormSlice";
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

 const store = configureStore({
    reducer:{
        appform:appFormSlice
    }
})
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector