import { createSlice } from '@reduxjs/toolkit'
import { emptyMeme, type MemeInterface } from 'orsys-tjs-meme';

const initialState = {
    meme:emptyMeme
};

const current = createSlice({
    name: 'current',
    initialState,
    reducers: {
        update: (state, action:{type:string, payload:MemeInterface}) => {
            state.meme=action.payload;
        },
        clear: (state) => {
            state.meme=emptyMeme;
        }
    }
})

export const {update, clear} = current.actions

const currentReducer = current.reducer

export default currentReducer