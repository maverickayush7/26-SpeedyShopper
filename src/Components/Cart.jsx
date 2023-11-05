import React from 'react'
import "./Cart.css";
import { Card } from './Card';

export default function Cart() {
  return (
    <div>
        <h1 className='font-bold text-5xl text-slate-400 p-3'>My Cart</h1>
        
        <div className="Cart">
            <div className="col">
                <pre>
                <Card
                imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Dunzo_Logo.svg/2560px-Dunzo_Logo.svg.png"
                imgAlt="Card Image 2"
                // title="Cheapest Price"
                description={"1. Potato Rs 30\n2. Tomato Rs 16\n3. Cucumber Rs 20\n4. Apple Rs 100\n\nTOTAL Rs 166\n\n\n\nCheaper!"}           
                buttonText="Go to Website"
                link="https://www.dunzo.com/bangalore"
                name="Item1"
                />
                </pre>
                <pre>
                <Card
                imgSrc="https://upload.wikimedia.org/wikipedia/commons/a/a2/BigBasket_Logo.png"
                imgAlt="Card Image 3"
                description={"1. Potato Rs 34\n2. Tomato Rs 22\n3. Cucumber Rs 21\n4. Apple Rs 120\n\nTOTAL Rs 197"}
                buttonText="Go to Website"
                link="https://www.bigbasket.com/"
                />
                </pre>
            </div>
        </div>
    </div>    
  );
}
