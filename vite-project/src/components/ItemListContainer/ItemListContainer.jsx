import React, {useEffect, useState} from 'react';

//FIREBASE
import { db } from '../../firebase/firebaseConfig';
import { collection, query, getDocs } from "firebase/firestore";
//
import CardUser from '../CardUser/CardUser';
import "./ItemListContainer.css";

import {Link} from "react-router-dom";

const ItemListContainer = () => {
    const [snowboard, setSnowboard] = useState([]);
    const q = query(collection(db, "Snowboard"));

    useEffect(() => {
        const getSnowboard = async() => {
            const querySnapshot = await getDocs(q);
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id});
            });
            setSnowboard(docs);
        };
        getSnowboard();
    },[]);
    return (
        <div className="CardUsers">
            {snowboard.map(snowboard => {
                return(
                    <div key={snowboard.id} className="Card">
                        <Link to={`/item/${snowboard.id}`}>
                            <CardUser data = {snowboard}/>
                        </Link>
                    </div>
                )
            })}
        </div>
    );
};

export default ItemListContainer;