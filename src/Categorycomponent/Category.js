import React from "react";
import './Category.css';

const Category = () => {
    return ( 
        <>
        <div className="image">
            <img src="/Category/lotus 1.png" alt="error" className="lot-img"/>
            <div className="texts">
                <h3>Top Categories</h3>
                <h2>Our Categories</h2>
            </div>
           
        </div>
        
        <div className="makeup-img">
            <div className="makeup-img1">
                <h2></h2>
                <p>Makeup &<br/> Cosmetic</p>
                <div className="line1"></div>

                <img src="/Category/image 61.png" alt="error" />

            </div>
            <div className="makeup-img2">
                <h2></h2>
                <p>Skin Care <br />Collection</p>
                <div className="line2"></div>
                <img src="/Category/image 62.png" alt="error" />

            </div>
            <div className="makeup-img3">
                <h2></h2>
                <p>Cosmetic <br />Collection</p>
                <div className="line3"></div>
                <img src="/Category/image 63.png" alt="error" />

            </div>
        </div>
        </>
     );
}
 
export default Category;
