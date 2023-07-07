import React from 'react';

function HomePage() {
    return (
        <>
            <h2>Welcome to my Web Application</h2>
            <>
                <h3>The build and technologies</h3>
                <p>
                When creating a React single-page web application, MongoDB, JavaScript/JSX, React, Express, Node, and Mongoose 
                are commonly used together. MongoDB serves as a flexible and scalable NoSQL database for storing data. 
                JavaScript and JSX are essential for building React components and handling dynamic data rendering. React 
                provides a component-based architecture for creating reusable and declarative user interfaces. Express and 
                Node handle server-side operations, such as routing and API development. Mongoose simplifies MongoDB interactions 
                in a Node.js environment, making it easier to define data models and perform database operations. Together, 
                these technologies form a powerful stack that enables efficient development of React single-page web applications.
                </p>
            </>
        </>        
    );
}

export default HomePage;