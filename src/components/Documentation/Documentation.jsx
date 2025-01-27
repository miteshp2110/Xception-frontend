import './style.css'
import CodeBlock from '../CodeBlock/CodeBlock'
import { useEffect } from 'react';
function Documentation(){
    const installCode = `
    npm install xceptions
      `;

    const initializeCode = `
    const { Client } = require('xceptions');
    const client = new Client("Your Api Key");
    `
    const fielder = `
    const express = require('express');
    const app = express();
    const { Client } = require('xceptions');

    const client = new Client("Your Api Key");

    // Add all other middleware and methods here

    client.connect()
    .then((fielder) => {
        app.use((err, req, res, next) => {
        fielder.field(err, req, res, next); // Reporting and notifying
        });
    })
    .catch((err) => {
        console.error("Error connecting to xceptions:", err);
    });

    app.listen(8888, () => {
    console.log("Server running on port 8888");
    });
    `
    const connectionCode = `
    app.get("/", (req, res, next) => {
    try {
        throw new Error("Some error occurred");
    } catch (err) {
        next(err); // Pass the exception to the middleware
    }
    });
    `

    const completeCode = `
    const express = require('express');
    const { Client } = require('xceptions');

    const app = express();
    const client = new Client("Your Api Key");

    // Your other middleware and route handlers

    client.connect()
    .then((fielder) => {
        app.use((err, req, res, next) => {
        fielder.field(err, req, res, next);
        });
    })
    .catch((err) => {
        console.error("Error connecting to xceptions:", err);
    });

    app.get("/", (req, res, next) => {
    try {
        throw new Error("Some error occurred");
    } catch (err) {
        next(err);
    }
    });

    app.listen(8888, () => {
    console.log("Server running on port 8888");
    });
    
    `
    useEffect(() => {
        // const container = document.querySelector(".documentationContainer");
        // if (container) {
        //   container.scrollTo({ top: 0, behavior: "smooth" });
        // }

        window.scrollTo(0,0)
      }, []);



    return(
        <>
            <div className='documentationContainer'>
                <h1>Lets Go Step By Step</h1>

                <div className='stepBox'>
                    <h2>1. Login or signup in xceptions.</h2>
                    <p>Create a account on xceptions using <a href='https://xceptions.tech/service/oauth/gthub'>Github</a> or <a href='https://xceptions.tech/service/oauth/google'>google</a></p>
                </div>

                <div className='stepBox'>
                    <h2>2. Create a new project.</h2>
                    <p>
                        Click on <a href='/'>add project</a> in home after logging in.
                        <br/>
                        After that you will get a api key for that project.
                    </p>
                </div>

                <div className='stepBox'>
                    <h2>3. Install package.</h2>
                    <p>
                        In your node js project install xceptions package 
                        <br/>
                    </p>
                    <div className='code'>
                        <CodeBlock code={installCode} language='javascript'/>
                    </div>
                </div>

                <div className='stepBox'>
                    <h2>4. Initialize the Client.</h2>
                    <p>
                    Import and initialize the xceptions client with your API key
                        <br/>
                    </p>
                    <div className='code'>
                        <CodeBlock code={initializeCode} language='javascript'/>
                    </div>
                </div>

                <div className='stepBox'>
                    <h2>5. Connect and Use the Middleware.</h2>
                    <p>
                    Add the middleware provided by the fielder object as the last middleware in your application to report and notify exceptions
                        <br/>
                    </p>
                    <div className='code'>
                        <CodeBlock code={fielder} language='javascript'/>
                    </div>
                </div>

                <div className='stepBox'>
                    <h2>6. Pass Exceptions to the Middleware.</h2>
                    <p>
                    In your route handlers or controllers, pass any caught exceptions to the next middleware
                        <br/>
                    </p>
                    <div className='code'>
                        <CodeBlock code={connectionCode} language='javascript'/>
                    </div>
                </div>

                <div className='stepBox'>
                    <h2>Example Application.</h2>
                    <p>
                    Below is an example of a complete Express application setup
                        <br/>
                    </p>
                    <div className='code'>
                        <CodeBlock code={completeCode} language='javascript'/>
                    </div>
                </div>


                <div className='stepBox'>
                    <h2>For more checkout git repo</h2>
                    <a id='repoLink' href='https://github.com/miteshp2110/Xceptions'>Xceptions</a>
                </div>


            </div>
        </>
    )
}

export default Documentation