import React, { useRef } from "react";
import CustomButton from "../components/CustomButton";

const ForwardRefPage = () => {
    const buttonRef = useRef(null);

    const triggerClick = () => {
        if (buttonRef.current) {
            buttonRef.current.click(); // Programmatically click the button
        }
    };

    return (
        <div className="p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">forwardRef Example</h2>
            <CustomButton ref={buttonRef} onClick={() => alert("Button clicked!")} />
            <button
                className="ml-3 px-4 py-2 bg-red-500 text-white rounded-md"
                onClick={triggerClick}
            >
                Trigger Click
            </button>
        </div>
    );
};

export default ForwardRefPage;
