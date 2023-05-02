import {useState, useEffect} from 'react';
import {collection,orderBy, query ,onSnapshot} from "@firebase/firestore";
import { projectFireStore} from '../firebase/config';


const useFirestore = (collection2) => {
    const[docs, setDocs] = useState([]);

    useEffect(()=>{


        const q = query(collection(projectFireStore, 'images'), orderBy('createdAt','desc'));
        const unsub = onSnapshot(q,(snap)=> {
            let documents = [] ;
            snap.forEach(doc => {
            documents.push({...doc.data(),id: doc.id})
         });
            setDocs(documents);
    });

       return() => unsub();
    },[collection2])
    return {docs};
}

export default useFirestore;