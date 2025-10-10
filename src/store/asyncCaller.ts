import { createAsyncThunk } from "@reduxjs/toolkit";
import {REST_ADDR, REST_RESOURCES} from '../config/config';
import type { IMeme } from "orsys-tjs-meme/dist/interfaces/common";

export const loadResources = createAsyncThunk(
    "resources/loadResources", 
    async () => {
        const i = fetch(`${REST_ADDR}${REST_RESOURCES.images}`);
        const m = fetch(`${REST_ADDR}${REST_RESOURCES.memes}`);
        const all = await Promise.all([i,m]);
        return { images: await all[0].json(), memes: await all[1].json()};
    });

export const saveMeme = createAsyncThunk(
    "current/saveMeme", 
    async (memeToSave:IMeme) => {
        let verb:string;
        let url:string;
        if (memeToSave.id) 
        { // Sauvegarde
            verb="PUT";
            url=`${REST_ADDR}${REST_RESOURCES.memes}/${memeToSave.id}`;
        }
        else
        { // Création
            verb="POST";
            url=`${REST_ADDR}${REST_RESOURCES.memes}`;
        }
        const f = await fetch(
            url, 
            {
                method:`${verb}`,
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(memeToSave)
            }
        );

        return await f.json();
    });