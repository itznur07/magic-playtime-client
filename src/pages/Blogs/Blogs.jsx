import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";

const Blogs = () => {
  useTitle("Blogs");

  return (
    <div className='container mx-auto py-8'>
      <div className='max-w-3xl mx-auto'>
        <h2 className='text-3xl font-bold mb-4'>Blogs</h2>
        <div className='mb-8'>
          <h3 className='text-2xl font-bold mb-2'>
            What is an access token and refresh token?
          </h3>
          <p>
            An access token is a credential that is used to access protected
            resources on a server. It is typically short-lived and is issued by
            an authentication server after a user successfully logs in. Refresh
            tokens, on the other hand, are long-lived tokens that are used to
            obtain new access tokens without requiring the user to
            re-authenticate.
          </p>
          <p>
            Access tokens are usually stored in the client-side application's
            memory or local storage, while refresh tokens should be securely
            stored in an HTTP-only cookie to prevent cross-site scripting (XSS)
            attacks.
          </p>
        </div>
        <div className='mb-8'>
          <h3 className='text-2xl font-bold mb-2'>
            Compare SQL and NoSQL databases
          </h3>
          <p>
            SQL (Structured Query Language) databases are relational databases
            that store data in tables with predefined schemas. They provide a
            structured way to organize and relate data, making them suitable for
            complex queries and transactions.
          </p>
          <p>
            NoSQL (Not Only SQL) databases, on the other hand, are
            non-relational databases that store data in flexible, schema-less
            formats like key-value pairs, documents, or graphs. They are
            designed for scalability, high performance, and handling large
            amounts of unstructured or semi-structured data.
          </p>
        </div>
        <div className='mb-8'>
          <h3 className='text-2xl font-bold mb-2'>What is Express.js?</h3>
          <p>
            Express.js is a popular Node.js web application framework that
            simplifies the development of server-side web applications. It
            provides a set of robust features and middleware to handle routing,
            request/response handling, and other common web application tasks.
          </p>
        </div>
        <div className='mb-8'>
          <h3 className='text-2xl font-bold mb-2'>What is Nest.js?</h3>
          <p>
            Nest.js is a progressive Node.js framework for building efficient,
            scalable, and maintainable server-side applications. It is built on
            top of Express.js and provides additional features such as
            dependency injection, modular architecture, and strong typing using
            TypeScript. Nest.js promotes the use of best practices and enables
            developers to create well-structured and testable code.
          </p>
        </div>
        <div className='mb-8'>
          <h3 className='text-2xl font-bold mb-2'>
            What is MongoDB aggregate?
          </h3>
          <p>
            MongoDB aggregate is a powerful feature in MongoDB that allows you
            to perform advanced data aggregation operations on collections. It
            provides a way to process and analyze data using pipelines, where
            you can perform various stages like filtering, grouping, sorting,
            projecting, and applying complex calculations.
          </p>
          <p>
            The aggregate framework in MongoDB allows you to run sophisticated
            queries and generate customized reports based on your data
            requirements. It provides powerful tools for data analysis and
            manipulation within the database itself.
          </p>
        </div>
        <div className='text-center'>
          <Link
            to='/'
            className='border border-[#434142] px-4 py-2 rounded-sm mt-8 text-gray-800 hover:text-slate-500'
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
