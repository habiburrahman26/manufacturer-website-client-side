import React from 'react';

const Blogs = () => {
  return (
    <div className="px-3 lg:px-32 mt-10">
      <div className="border-2 mt-4 rounded-md p-4">
        <h3 className="text-base lg:text-lg font-semibold">
          How will you improve the performance of a React Application?
        </h3>
        <p>
          I can improve performance of a React application Memoizing React
          components to prevent unnecessary re-renders, Keeping component state
          local where necessary, Windowing or list virtualization in React and
          Lazy loading images in React.
        </p>
      </div>
      <div className="border-2 mt-4 rounded-md p-4">
        <h3 className="text-base lg:text-lg font-semibold">
          What are the different ways to manage a state in a React application?
        </h3>
        <p>
          There are lots of ways to manage state in a React application such as
          useState, useReducer, ContextApi, Redux, Redux toolkit, Recoil and
          Jotai etc.
        </p>
      </div>
      <div className="border-2 mt-4 rounded-md p-4">
        <h3 className="text-base lg:text-lg font-semibold">
          How does prototypical inheritance work?
        </h3>
        <p>
          JavaScript is a prototype-based, Object Oriented programming language.
          After the ES6 updates, JavaScript allowed for “prototypal
          inheritance”, meaning that objects and methods can be shared,
          extended, and copied.prototypical inheritance refers to the ability to
          access object properties from another object. We use a JavaScript
          prototype to add new properties and methods to an existing object
          constructor. We can then essentially tell our JS code to inherit
          properties from a prototype.
        </p>
      </div>
      <div className="border-2 mt-4 rounded-md p-4">
        <h3 className="text-base lg:text-lg font-semibold">
          You have an array of products. Each product has a name, price,
          description, etc. How will you implement a search to find products by
          name?
        </h3>
        <p>
          //search input text <br />
          const [search, setSearch] = useState(null); <br />
          const searchProducts = products.filter((p) =>
          p.name.toLowerCase().includes(search.toLowerCase()) );
        </p>
      </div>
      <div className="border-2 mt-4 rounded-md p-4">
        <h3 className="text-base lg:text-lg font-semibold">
          What is a unit test? Why should write unit tests?
        </h3>
        <p>
          Unit testing, a testing technique using which individual modules are
          tested to determine if there are any issues by the developer himself.
          It is concerned with functional correctness of the standalone modules.
          We use Unit testing to reduces Defects in the Newly developed features
          or reduces bugs when changing the existing functionality and Improves
          design and allows better refactoring of code.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
