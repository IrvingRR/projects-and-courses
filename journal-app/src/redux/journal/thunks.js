import { doc, setDoc, collection, deleteDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSaving, updateNote, setPhotosToActiveNote, deleteNoteById } from "./journalSlice";
import { loadNotesHelper } from "../../helpers/loadNotes";
import { fileUpload } from "../../helpers/fileUpload";

export const startNewNoteThunk = () => {
    
    return async (dispatch, getState) => {

        dispatch(savingNewNote());

        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
            imageUrls: []
        };

        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
        await setDoc(newDoc, newNote);

        newNote.id = newDoc.id;

        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));

    };

};

export const startLoadingNotesThunk = () => {

    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        const notes = await loadNotesHelper(uid);

        dispatch(setNotes(notes));

    };

};

export const startSaveNoteThunk = () => {

    return async (dispatch, getState) => {

        dispatch(setSaving());

        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        const noteToFireStore = { ...note };
        delete noteToFireStore.id;

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
        await setDoc(docRef, noteToFireStore, { merge: true });

        dispatch(updateNote(note));
    };

}; 

export const startUploadingFilesThunk = (files = []) => {
    return async (dispatch) => {

        dispatch(setSaving());
        
        const fileUploadPromises = [];

        for(const file of files) {
            fileUploadPromises.push(fileUpload(file));
        };

        const photosUrls = await Promise.all(fileUploadPromises);
        dispatch(setPhotosToActiveNote(photosUrls));

    };
};

export const startDeletingNoteThunk = () => {

    return async (dispatch, getState) => {

        const { uid } = getState().auth;
        const { active: note } = getState().journal;

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
        await deleteDoc(docRef);

        dispatch(deleteNoteById(note.id));

    };

};