import React from "react";

const Blogs = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-3 content-center">
      <div className="max-w-md  overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
        <article className="">
          <h2 className="text-xl font-bold">
            Difference between SQL and NoSQL
          </h2>
          <p className="mt-4 dark:text-gray-400">
            SQL is the programming language used to interface with relational
            databases. (Relational databases model data as records in rows and
            tables with logical links between them). NoSQL is a class of DBMs
            that are non-relational and generally do not use SQL.
          </p>
          <div className="flex items-center mt-8 space-x-4">
            <img
              src="https://source.unsplash.com/100x100/?portrait"
              alt=""
              className="w-10 h-10 rounded-full dark:bg-gray-500"
            />
            <div>
              <h3 className="text-sm font-medium">Leroy Jenkins</h3>
              <time
                datetime="2021-02-18"
                className="text-sm dark:text-gray-400"
              >
                Feb 18th 2021
              </time>
            </div>
          </div>
        </article>
      </div>

      <article>
        <h2 className="text-xl font-bold">
          What is JWT, and how does it work?
        </h2>
        <p className="mt-4 dark:text-gray-400">
          JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
          compact and self-contained way for securely transmitting information
          between parties as a JSON object. This information can be verified and
          trusted because it is digitally signed. Information Exchange: JWTs are
          a good way of securely transmitting information between parties
          because they can be signed, which means you can be sure that the
          senders are who they say they are. Additionally, the structure of a
          JWT allows you to verify that the content hasn't been tampered with.
        </p>
        <div className="flex items-center mt-8 space-x-4">
          <img
            src="https://source.unsplash.com/100x100/?portrait"
            alt=""
            className="w-10 h-10 rounded-full dark:bg-gray-500"
          />
          <div>
            <h3 className="text-sm font-medium">Leroy Jenkins</h3>
            <time datetime="2021-02-18" className="text-sm dark:text-gray-400">
              Feb 18th 2021
            </time>
          </div>
        </div>
      </article>

      <article>
        <h2 className="text-xl font-bold">
        What is the difference between javascript and NodeJS?
        </h2>
        <p className="mt-4 dark:text-gray-400">
        JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
        </p>
        <div className="flex items-center mt-8 space-x-4">
          <img
            src="https://source.unsplash.com/100x100/?portrait"
            alt=""
            className="w-10 h-10 rounded-full dark:bg-gray-500"
          />
          <div>
            <h3 className="text-sm font-medium">Leroy Jenkins</h3>
            <time datetime="2021-02-18" className="text-sm dark:text-gray-400">
              Feb 18th 2021
            </time>
          </div>
        </div>
      </article>
      <article>
        <h2 className="text-xl font-bold">
        How does NodeJS handle multiple requests at the same time?
        </h2>
        <p className="mt-4 dark:text-gray-400">
        How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
        </p>
        <div className="flex items-center mt-8 space-x-4">
          <img
            src="https://source.unsplash.com/100x100/?portrait"
            alt=""
            className="w-10 h-10 rounded-full dark:bg-gray-500"
          />
          <div>
            <h3 className="text-sm font-medium">Leroy Jenkins</h3>
            <time datetime="2021-02-18" className="text-sm dark:text-gray-400">
              Feb 18th 2021
            </time>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Blogs;
