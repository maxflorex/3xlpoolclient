import { createSlice } from '@reduxjs/toolkit'

// SLICE
const reactionSlice = createSlice({
    name: 'reacting',
    initialState: '',
    reducers: {
        // FUNCTION
        generateReaction(state, action) {
            const { reaction } = action.payload
            state.push({ reaction })
            console.log(state);
        }
    }
})

// EXPORT REDUCER
export const { generateReaction } = reactionSlice.actions

// EXPORT SLICE
export default reactionSlice.reducer