import React, { useEffect, useState } from 'react';
import DetailUser from '../components/DetailUser/DetailUser';
import { useParams } from 'react-router-dom';
import { db } from '../firebase/firebaseConfig';
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [snowboards, setSnowboards] = useState({});
    let { id } = useParams();
    useEffect(() => {
        const getSnowboards = async() => {
            const snowboardsRef = doc(db, "Snowboard", id);
            const snowboardsDoc = await getDoc(snowboardsRef);
            if (snowboardsDoc.exists()) {
                setSnowboards(snowboardsDoc.data());
            } else {
                console.log("No existe el documento");
            }
        };
        getSnowboards();
    },[id]);
    return (
        <div className=''>
            <div key={snowboards.id}>
                <DetailUser data={snowboards}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer;