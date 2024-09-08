import React from 'react';
import PropTypes from 'prop-types';

const PassingProps = ({ message = 'Default message', sendData }) => {
    const handleClick = () => {
        const dataToSend = "Data from Child";
        sendData(dataToSend);
    };
    return (
        <div className="p-4 border border-gray-300 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-2">Passing Props Example</h2>
            <p>{message}</p>

            <button
                onClick={handleClick}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Send Data to Parent
            </button>
        </div>
    );
};

PassingProps.propTypes = {
    message: PropTypes.string.isRequired,
};

// To be removed from upcoming version of React
// PassingProps.defaultProps = {
//     message: 'Default message',
// };

export default PassingProps;
