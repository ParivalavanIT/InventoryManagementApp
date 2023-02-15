import {React,useState} from 'react';
import "./card.css"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom';

export default function Card(props){
    const [counter ,setCounter] =useState(0)

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
                <div className='lastLine'>
                <h4>{props.year}</h4>    
                <Link to='/' className='Link' ><p>View details</p>< KeyboardArrowRightIcon /></Link>
                </div>
            </div>
        </div>
    )
}