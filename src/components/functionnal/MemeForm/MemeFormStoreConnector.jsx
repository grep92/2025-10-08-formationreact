import React from 'react';
import UnconnectedMemeForm from './MemeForm'
import {useDispatch, useSelector} from 'react-redux'
import {update} from '../../../store/current'

const MemeForm = (props) => {
    const images=useSelector(storeState => {return storeState.resources.images});
    const meme=useSelector(storeState => {return storeState.current.meme});
    const dispatch=useDispatch();
    return (
        <UnconnectedMemeForm 
            {...props} 
            images={images} 
            meme={meme} 
            onMemeChange={ 
                (newMeme) => 
                {
                    dispatch(update(newMeme));
                }
            }
        />
    )
}

export default MemeForm