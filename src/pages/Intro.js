import React from 'react';

const Intro = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-4xl font-bold mb-6 text-gray-900">Introduction to React</h2>

      <section className="mb-8">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">What is React?</h3>
        <p className="text-lg text-gray-700">
          React is a JavaScript library developed by Facebook for building user interfaces. It allows developers to create reusable UI components that manage their own state, and efficiently update and render the right components when data changes.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">History and Background</h3>
        <p className="text-lg text-gray-700">
          React was first released by Facebook in 2013. It was designed to address the complexities of building interactive user interfaces by introducing a component-based architecture and a virtual DOM for efficient updates. React has evolved significantly over the years and has become one of the most popular libraries for building modern web applications.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Why React?</h3>
        <p className="text-lg text-gray-700">
          React offers several advantages that make it a popular choice for developers:
        </p>
        <ul className="list-disc pl-5 text-lg text-gray-700">
          <li><strong>Component-Based Architecture:</strong> Components are reusable and encapsulate their own logic, making development more modular and manageable.</li>
          <li><strong>Virtual DOM:</strong> React uses a virtual DOM to efficiently update and render components, improving performance.</li>
          <li><strong>Declarative Syntax:</strong> React’s declarative approach makes it easier to understand and debug code.</li>
          <li><strong>Strong Community and Ecosystem:</strong> React has a large community, extensive documentation, and a rich ecosystem of libraries and tools.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">React Ecosystem Overview</h3>
        <p className="text-lg text-gray-700">
          The React ecosystem includes a variety of tools and libraries that enhance the development experience:
        </p>
        <ul className="list-disc pl-5 text-lg text-gray-700">
          <li><strong>React Router:</strong> For handling routing in single-page applications.</li>
          <li><strong>Redux:</strong> For state management in complex applications.</li>
          <li><strong>React Query:</strong> For data fetching and synchronization.</li>
          <li><strong>Styled Components:</strong> For styling components using a CSS-in-JS approach.</li>
          <li><strong>Next.js:</strong> For server-side rendering and static site generation with React.</li>
        </ul>
      </section>
    </div>
  );
};

export default Intro;
