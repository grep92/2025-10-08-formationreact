import { createSlice } from '@reduxjs/toolkit';
import type {ImageInterface, MemeInterface} from "orsys-tjs-meme";
import { loadResources } from './asyncCaller';

interface IResourceState{
    memes:Array<MemeInterface>,
    images:Array<ImageInterface>
}

const initialState:IResourceState = {
    memes: [],
    images: []
};

const resources = createSlice({
    name: 'resources',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(
            loadResources.fulfilled,
            (state, payload) => {
                state.memes = payload.payload.memes;
                state.images = payload.payload.images;
            }
        );
    },
})

const resourceReducer = resources.reducer
export default resourceReducer