import React from 'react';
import './Card.css';
import CardBanner from "./CardBanner"
import CardContent from "./CardContent"

function CardContainter(){
    return (
        <div class="card-container">
            <CardBanner />
            <CardContent />
        </div>
    )
}

export default CardContainter