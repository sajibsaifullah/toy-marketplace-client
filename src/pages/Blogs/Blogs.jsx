const Blogs = () => {
  return (
    <div className="container mx-auto px-6">
      <>
        <h5 className="font-bold mt-4">
          Q1: What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h5>
        <p className="ml-3">
          <span className="font-bold">Ans: </span>An access token is a
          short-lived credential that grants a client access to specific
          resources, while a refresh token is a longer-lived credential used to
          obtain a new access token when it expires. Access tokens are typically
          stored on the client-side in secure storage mechanisms like HTTP-only
          cookies or local storage. Refresh tokens, being more sensitive, should
          ideally be stored securely on the server-side. Implementing secure
          storage and handling of tokens helps protect against unauthorized
          access and mitigates the risk of token leakage, ensuring the integrity
          and security of the authentication and authorization process.
        </p>
      </>
      <>
        <h5 className="font-bold mt-3">Q2: Compare SQL and NoSQL databases?</h5>
        <p className="ml-3">
          <span className="font-bold">Ans: </span>SQL databases follow a
          structured, tabular data model with predefined schemas, offering
          strong consistency, ACID compliance, and SQL query language support.
          They are well-suited for complex transactions and applications with
          structured data. NoSQL databases, on the other hand, have a flexible
          schema and a variety of data models. They prioritize scalability, high
          availability, and performance, making them suitable for handling large
          amounts of unstructured or semi-structured data, distributed systems,
          and applications with evolving requirements. NoSQL databases offer
          horizontal scalability, eventual consistency, and often use non-SQL
          query languages or interfaces tailored to specific data models.
        </p>
      </>
      <>
        <h5 className="font-bold mt-3">Q3: What is express js? What is Nest JS?</h5>
        <p className="ml-3">
          <span className="font-bold">Ans: </span>Express.js is a fast and
          minimalist web application framework for Node.js. It provides a set of
          robust features and middleware to build web applications and APIs.
          Express.js simplifies the process of handling HTTP requests, routing,
          and middleware integration, making it popular for creating lightweight
          and scalable server-side applications.
          <br />
          NestJS, on the other hand, is a progressive, opinionated
          TypeScript-based framework for building efficient and scalable
          server-side applications. It is built on top of Express.js and
          provides a modular and extensible architecture inspired by Angular.
          NestJS offers features like dependency injection, decorators, and
          strong typing, which enhance code maintainability and scalability. It
          also supports other libraries and technologies, making it a powerful
          choice for developing complex and enterprise-level applications.
        </p>
      </>
      <>
        <h5 className="font-bold mt-3">Q4: What is MongoDB aggregate and how does it work?</h5>
        <p className="ml-3 mb-4">
          <span className="font-bold">Ans: </span>MongoDB is aggregate operation is a powerful feature that enables advanced data processing and analysis within the database. It works by applying a series of stages to input documents in a pipeline, allowing for various operations like filtering, grouping, sorting, projecting, and more. Each stage in the pipeline processes the data and passes the results to the next stage, enabling complex data transformations and calculations. By utilizing the aggregate operation, developers can perform sophisticated data manipulations directly in the database, minimizing the need for multiple queries and improving performance.
        </p>
      </>
    </div>
  );
};

export default Blogs;
