import React from 'react';
import './Button.css';

function NumberButton(){
    return(
        <div class = "left-content">
            <div class = "clear">
                <p>clear</p>
            </div>
            <div class = "number-buttons">
                <h1>7</h1>
                <h1>8</h1>
                <h1>9</h1>
                <h1>4</h1>
                <h1>5</h1>
                <h1>6</h1>
                <h1>1</h1>
                <h1>2</h1>
                <h1>3</h1>
            </div>
            <div class = "zero">
                <h1>0</h1>
            </div>

        </div>
    )
}

export default NumberButton
