import React from 'react';
import myImage from '../images/1580080759014.jpg';
import MERN from '../images/320px-MERN-logo.png';

function HomePage() {
    return (
        <>
            <h2>From Accounting Ledgers to Coding Editors</h2>
            <article>
                <figure id="profile-pic"><img src={myImage}  alt="Profile Pic" /></figure>
                <p>With a foundation in finance and accounting, my professional journey has been marked by a dedication to precision and a keen analytical mindset. Eager to expand my horizons and align my skills with the evolving demands of the digital era, I am currently pursuing my second bachelor's degree in computer science. This educational pursuit represents not just a career shift but a passionate commitment to becoming a proficient software engineer. I am driven by the prospect of merging my financial acumen with technical expertise, leveraging my analytical skills to contribute to the dynamic field of software development. <strong>My goal is to bring a unique perspective to software engineering, combining a deep understanding of business processes with the creativity and problem-solving mindset inherent in coding. Through this transition, I aim to contribute to innovative solutions, embracing the challenges and opportunities that the world of technology offers.</strong></p>
                
                <p>This site utilizes the latest in technology:</p>
                <figure id="mern"><img src={MERN} alt="MERN stack"></img>
                    <figcaption>Image from Wikimedia Commons. <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.en">License.</a></figcaption>
                </figure>
                <dl>
                    <dt>HTML</dt>
                    <dd>The standard markup language for creating web pages, defining the structure and content using elements and tags</dd>

                    <dt>CSS</dt>
                    <dd>Stylesheet language that enhances the presentation of HTML documents, allowing for styling, layout, and design customization</dd>

                    <dt>JavaScript</dt>
                    <dd>Versatile programming language primarily used for web development, enabling dynamic content, interactivity, and client-side scripting</dd>

                    <dt>DOM Manipulation</dt>
                    <dd>Involves dynamically changing the content and structure of a web page using JavaScript, enabling interactive and responsive user experiences</dd>

                    <dt>React</dt>
                    <dd>JavaScript library for building user interfaces that allows for the creation of reusable UI components and facilitates the efficient updating of the user interface in response to changes</dd>

                    <dt>Asynchronous Programming</dt>
                    <dd>Programming paradigm focused on managing asynchronous operations, allowing tasks to execute independently, enhancing efficiency and responsiveness</dd>

                    <dt>Node.js</dt>
                    <dd>Server-side JavaScript runtime that allows the execution of JavaScript code on the server, facilitating the development of scalable and high-performance web applications</dd>

                    <dt>Express.js</dt>
                    <dd>Minimal and flexible Node.js web application framework that simplifies the development of robust and scalable server-side applications</dd>

                    <dt>MongoDB</dt>
                    <dd>NoSQL database that stores data in flexible, JSON-like documents, providing scalability and agility for handling diverse data types</dd>

                    <dt>Mongoose</dt>
                    <dd>Object Data Modeling (ODM) library for MongoDB and Node.js, simplifying interactions with MongoDB and enabling the creation of structured, schema-based models</dd>
                </dl>
                
            </article>
        </>
    )
}

export default HomePage;