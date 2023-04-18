import { collection, deleteDoc, getDocs } from "firebase/firestore/lite";
import { addNewEmptyNote, savingNewNote, setActiveNote } from "../../../src/redux/journal/journalSlice";
import { startNewNoteThunk } from "../../../src/redux/journal/thunks";
import { FirebaseDB } from "../../../src/firebase/config";

describe('journalThunks Test', () => {

    const dispatch = jest.fn();
    const getState = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('Should to create a new empty note', async () => {
        
        const uid = 'TEST-UID';
        getState.mockReturnValue({ auth: { uid: uid } });

        await startNewNoteThunk()(dispatch, getState);

        expect(dispatch).toHaveBeenCalledWith(savingNewNote());
        expect(dispatch).toHaveBeenCalledWith(addNewEmptyNote({
            body: '',
            title: '',
            id: expect.any(String),
            date: expect.any(Number),
            imageUrls: []
        }));

        expect(dispatch).toHaveBeenCalledWith(setActiveNote({
            body: '',
            title: '',
            id: expect.any(String),
            date: expect.any(Number),
            imageUrls: []
        }));


        // Delete from firebase
        const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
        const docs = await getDocs(collectionRef);

        const deletePromises = [];
        docs.forEach(doc => deletePromises.push(deleteDoc(doc.ref)));
        await Promise.all(deletePromises);

    });

});