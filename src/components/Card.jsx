import {React,useState} from 'react';
import "./card.css"

export default function Card(props){
    const [counter ,setCounter] =useState(999)

    const increase = () => {
    setCounter(count => count + 1);
    };

    const decrease = () => {
    setCounter(count => count - 1);
    };
    return(
        <div className='card_component'>
            <div className='card'>
                <p> <span className="counter__output">{counter}</span> Products</p>
                <h2>{props.name}</h2>
                <a href='/'> view details <i class="fa-regular fa-circle-chevron-right icons"></i></a>
            </div>
        </div>
    )
}