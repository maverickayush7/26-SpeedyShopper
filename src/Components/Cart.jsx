import React from 'react'
import "./Cart.css";
import { Card } from './Card';

export default function Cart() {
  return (
    <div>
        <h1 className='font-bold text-5xl text-slate-400 p-3'>My Cart</h1>
        
        <div className="Cart">
            <div className="col">
                <Card
                imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Dunzo_Logo.svg/2560px-Dunzo_Logo.svg.png"
                imgAlt="Card Image 2"
                // title="Cheapest Price"
                buttonText="Go to Website"
                link="https://www.dunzo.com/bangalore"
                name="Item1"
                />
                <Card
                imgSrc="https://upload.wikimedia.org/wikipedia/commons/a/a2/BigBasket_Logo.png"
                imgAlt="Card Image 3"
                buttonText="Go to Website"
                link="https://www.bigbasket.com/"
                />
            </div>
        </div>
    </div>    
  );
}
