import React, { useState } from 'react';
import './CheckoutPage.css'; // You can create this CSS file for styling

const CheckoutPage = ({ onClose }) => {
    const [paymentMethod, setPaymentMethod] = useState('');
    const [address, setAddress] = useState('');

    const handlePaymentChange = (e) => setPaymentMethod(e.target.value);
    const handleAddressChange = (e) => setAddress(e.target.value);

    const handleSubmit = () => {
        // Handle form submission logic here
        alert('Order placed successfully!');
        onClose(); // Close the checkout page after submission
    };

    return (
        <div className="checkout-page">
            <button className="close-btn" onClick={onClose}>X</button>
             <div className='heading-div'>
               <h1 className='heading'> Checkout </h1>
             </div>
             <div className="payment-options">
                <h2>Payment Method</h2>
                <label>
                    <input
                        type="radio"
                        value="UPI"
                        checked={paymentMethod === 'UPI'}
                        onChange={handlePaymentChange}
                    />
                    UPI
                </label>
                <label>
                    <input
                        type="radio"
                        value="Card"
                        checked={paymentMethod === 'Card'}
                        onChange={handlePaymentChange}
                    />
                    Credit/Debit Card
                </label>
                <label>
                    <input
                        type="radio"
                        value="Cash"
                        checked={paymentMethod === 'Cash'}
                        onChange={handlePaymentChange}
                    />
                    Cash on Delivery
                </label>
            </div>
            <div className="address-form">
                <h2>Address</h2>
                <textarea
                    value={address}
                    onChange={handleAddressChange}
                    placeholder="Enter your address here"
                />
            </div>
            <button onClick={handleSubmit}>Place Order</button>
        </div>
    );
};

export default CheckoutPage;
