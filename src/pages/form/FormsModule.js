import React from 'react';
import ControlledForm from './ControlledForm';
import UncontrolledForm from './UncontrolledForm';
import MultipleInputsForm from './MultipleInputsForm';
import FormWithValidation from './FormWithValidation';

function FormsModule() {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-center mb-6">Forms in React</h1>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Controlled Components</h2>
                <ControlledForm />
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Uncontrolled Components</h2>
                <UncontrolledForm />
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Handling Multiple Inputs</h2>
                <MultipleInputsForm />
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Form Validation</h2>
                <FormWithValidation />
            </section>
        </div>
    );
}

export default FormsModule;
