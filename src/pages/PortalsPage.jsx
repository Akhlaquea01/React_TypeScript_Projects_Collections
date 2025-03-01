import React, { useState } from "react";
import PortalModal from "../components/PortalModal";

const PortalsPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">React Portals Example</h2>
            <button
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                onClick={() => setIsOpen(true)}
            >
                Open Modal
            </button>

            <PortalModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <h3 className="text-lg font-semibold">This is a modal using React Portals!</h3>
                <p className="text-gray-600 mt-2">It renders outside the normal DOM hierarchy.</p>
            </PortalModal>
        </div>
    );
};

export default PortalsPage;
