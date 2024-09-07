import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

class ChildComponent extends Component {
    constructor(props) {
        super(props);
        this.inputRef = createRef();
    }

    focusInput = () => {
        this.inputRef.current.focus();
    };

    handleClick = () => {
        this.props.sendData(this.inputRef.current.value); // Call the callback function passed from parent
    };

    render() {
        return (
            <div className="p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto mt-6">
                <p className="text-lg font-semibold text-gray-800 mb-4">{this.props.message}</p>
                <div className="flex flex-col gap-4">
                    <input
                        type="text"
                        ref={this.inputRef}
                        className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        onClick={this.focusInput}
                        className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        Focus Input
                    </button>
                    <button
                        onClick={this.handleClick}
                        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Send Data to Parent
                    </button>
                </div>
            </div>
        );
    }
}
ChildComponent.propTypes = {
    message: PropTypes.string
};

ChildComponent.defaultProps = {
    message: 'Greetings'
};
export default ChildComponent;