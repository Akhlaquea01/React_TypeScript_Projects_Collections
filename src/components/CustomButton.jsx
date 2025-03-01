import React, { forwardRef } from "react";

const CustomButton = forwardRef(({ onClick }, ref) => {
    return (
        <button
            ref={ref}
            className="px-4 py-2 bg-green-500 text-white rounded-md"
            onClick={onClick}
        >
            Click Me
        </button>
    );
});

export default CustomButton;
