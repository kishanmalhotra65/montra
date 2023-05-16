import React, { useState } from 'react';

function Popup() {
    const [showPopup, setShowPopup] = useState(false);

    const handleButtonClick = () => {
        setShowPopup(true);
    }

    const handleClosePopup = () => {
        setShowPopup(false);
    }

    return (
        <>
            <button onClick={handleButtonClick}>Click me</button>
            {showPopup && (
                <div>
                    <p>This is a popup!</p>
                    <button onClick={handleClosePopup}>Button 1</button>
                    <button onClick={handleClosePopup}>Button 2</button>
                </div>
            )}
        </>
    );
}

export default Popup;