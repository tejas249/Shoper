import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    // State to manage the cart addition message
    const [itemAdded, setItemAdded] = useState(false);

    // State to manage the selected size
    const [selectedSize, setSelectedSize] = useState('');

    const handleAddToCart = () => {
        addToCart(product.id);
        setItemAdded(true);
        // Hide the message after a few seconds
        setTimeout(() => setItemAdded(false), 3000);
    };

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old"> ₹{product.old_price}</div>
                    <div className="productdisplay-right-price-new"> ₹{product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    A lightweight, usually knitted, pullover shirt, close-fitting and with
                    a round neckline and short sleeves, worn as an undershirt or outer
                    garment.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                            <div
                                key={size}
                                onClick={() => handleSizeClick(size)}
                                className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                            >
                                {size}
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={handleAddToCart} className='add-cart'>ADD TO CART</button>
                {itemAdded && <p className='item-added-message'> Item added to cart!</p>}
                <p className='productdisplay-right-category'><span>Category :</span>Women , T-Shirt, Crop Top</p>
                <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>
            </div>
        </div>
    );
};

export default ProductDisplay;
