import { configureStore } from '@reduxjs/toolkit'
import reactionSlice from '../features/reactionSlice'

export const store = configureStore({
    reducer: {
        genReaction: reactionSlice
    }
})
