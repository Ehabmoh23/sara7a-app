import React from 'react';
import styles from './SendMessage.module.css'
import { useParams } from 'react-router-dom';
export default function SendMessage()  {
   let x = useParams();
   console.log(x)
    return (
        <div>
            SendMessage
        </div>
    );
}
