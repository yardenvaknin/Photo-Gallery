import { useState, useEffect } from 'react';
import { projectStorage, projectFireStore, timestamp} from '../firebase/config';
import { collection, doc, setDoc} from "@firebase/firestore";
import { ref, uploadBytesResumable ,getDownloadURL } from "firebase/storage";

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

   

    useEffect(() => {
        // create reference
        console.log(projectStorage);
        const storageRef = ref(projectStorage, file.name);
        console.log(storageRef);
        //const collectionRef = collection(projectFireStore,'images');
        const docOfimages = doc(collection(projectFireStore,"images"));
       // const collectionRef2 = projectFireStore.collection('images');
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                let percentage =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(percentage);
            },
            (err) => {
                setError(err);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async(url) => {     
                    const createdAt = timestamp;
                   // collectionRef.firestore.add(url);
                     await setDoc(docOfimages,{url, createdAt});
                   // collectionRef.add({url, createdAt}) ;
                    setUrl(url);}
                    
          
                );
            }
        );
    }, [file]);
    
   
    return {progress, url, error};
}

export default useStorage;