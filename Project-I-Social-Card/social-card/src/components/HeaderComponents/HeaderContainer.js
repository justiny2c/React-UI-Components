import React from 'react';
import './Header.css';
import ImageThumbnail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";

function HeaderContainer(){
    return (
        <div class = "header-wrapper">
            <div class = "block1">
                <ImageThumbnail />
            </div>
            <div class = "block2">
                <HeaderTitle />
                <HeaderContent />
            </div>
        </div>
    )
};



export default HeaderContainer