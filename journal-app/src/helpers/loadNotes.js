import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadNotesHelper = async (uid = '') => {
    if(!uid) throw new Error("The UID of user doesn't exist");

    const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
    const docs = await getDocs(collectionRef);

    const notes = [];

    docs.forEach(doc => {
        notes.push({ id: doc.id, ...doc.data() });
    });

    return notes;
};