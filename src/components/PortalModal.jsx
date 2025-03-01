import React from "react";
import ReactDOM from "react-dom";

const PortalModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full relative">
                <button
                    className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded"
                    onClick={onClose}
                >
                    ✕
                </button>
                {children}
            </div>
        </div>,
        document.getElementById("portal-root")
    );
};

export default PortalModal;
