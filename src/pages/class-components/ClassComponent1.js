import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ClassComponent1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        console.log('Constructor: Component is being created');
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('Get derived state from props: Syncing state with props');
        if (nextProps.someValue !== prevState.someValue) {
            return { someValue: nextProps.someValue };
        }
        return null;
    }

    componentDidMount() {
        console.log('Component did mount: Component is now in the DOM');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Should component update: Deciding whether to re-render');
        return nextState;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Get snapshot before update: Capturing some information before changes are applied');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Component did update: Component was updated');
        console.log('Previous Props:', prevProps);
        console.log('Previous State:', prevState);
    }

    componentWillUnmount() {
        console.log('Component will unmount: Component is about to be removed from the DOM');
    }

    componentDidCatch(error, info) {
        console.log('Component did catch an error:', error);
        console.log('Error information:', info);
    }


    handleDataFromChild = (data) => {
        console.log('Data received from child:', data);
        // You can update the parent component state or perform other actions here
    };

    render() {
        return (

            < div className="flex flex-col items-center p-4 bg-gray-100" >
                <div className="text-center mb-4">
                    <h1 className="text-3xl font-bold text-blue-600">Count: {this.state.count}</h1>
                    <button
                        onClick={this.increment}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        Increment
                    </button>
                    {/* <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button> */}
                </div>
                <ChildComponent
                    message="Hello from Parent!"
                    sendData={this.handleDataFromChild}
                />
            </div >
        );
    }
}

export default ClassComponent1;
