import { createAsyncThunk } from "@reduxjs/toolkit";
import {REST_ADDR, REST_RESOURCES} from '../config/config';

export const loadResources = createAsyncThunk(
    "resources/loadResources", 
    async () => {
        const i = fetch(`${REST_ADDR}${REST_RESOURCES.images}`);
        const m = fetch(`${REST_ADDR}${REST_RESOURCES.memes}`);
        const all = await Promise.all([i,m]);
        return { images: await all[0].json(), memes: await all[1].json()};
    });