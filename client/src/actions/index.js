import {FETCH_USER, NOTES} from "./types";
import axios from 'axios';

export const getUser =  (history) => async (dispatch) =>{
    const user = await axios.get('/api/currentUser');
    if(user.data){
        history.push('/notes');
    }
    dispatch({
        type : FETCH_USER,
        payload : user.data
    })
}

export const saveNote = ({title, body}, history) => async(dispatch)=>{
    const notes = await axios.post('/api/save', {title, body});
    if(notes.data){
        history.push('/notes');
    }
    dispatch({
        type : NOTES,
        payload : notes.data
    })

}

export const getNotes = () => async (dispatch) =>{
    const notes = await axios.get('/api/getNotes');
    dispatch({
        type:NOTES,
        payload:notes.data
    })
}

export const deleteNote = (id) => async (dispatch) =>{
    const notes = await axios.post(`/api/deleteNote/`, {id});
    dispatch({
        type: NOTES,
        payload : notes.data
    })
}

export const editNote = ({title, body}, id, history) =>async (dispatch) =>{
    const notes = await axios.put('/api/updateNote', {title, body, id});
    if(notes.data){
        history.push('/notes');
    }
    dispatch({
        type:NOTES,
        payload:notes.data
    })
}