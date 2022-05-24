import React from 'react';
import { Link } from 'react-router-dom';

const MyProtfolio = () => {
  return (
    <div className="lg:w-[900px] mx-auto mt-10 px-3">
      <div className="text-center">
        <h1 className="text-lg lg:text-2xl font-semibold">Md.Habibur Rahman</h1>
        <p>
          <span className="font-bold">Email: </span>rahmanhabibur2266@gmail.com
        </p>
      </div>
      <div>
        {/* SKILLS */}
        <div className="pt-4">
          <h2 className="text-lg lg:text-xl uppercase font-semibold">Skills</h2>
          <ul>
            <li className="ml-8 list-disc">
              <p>
                <span className="font-bold">Expertise: </span>
                <span>
                  JavaScript, React.js, Tailwind, Bootstrap, HTML5 and CSS3
                </span>
              </p>
            </li>
            <li className="ml-8 list-disc">
              <p>
                <span className="font-bold">Comfortable: </span>
                <span>Node JS, Express, MySQL, MongoDB and Sass</span>
              </p>
            </li>
            <li className="ml-8 list-disc">
              <p>
                <span className="font-bold">Familiar: </span>
                <span>PHP, Laravel, Java and C++.</span>
              </p>
            </li>
            <li className="ml-8 list-disc">
              <p>
                <span className="font-bold">Tools & Software: </span>
                <span>
                  Git, GitHub, Firebase, Heroku, Netlify, Figma and Postman
                </span>
              </p>
            </li>
          </ul>
        </div>
        {/* PROJECT */}
        <div className="mt-6">
          <h2 className="text-lg lg:text-xl uppercase font-semibold">
            PROJECTS ACCOMPLISHED
          </h2>
          <div>
            <h3 className="text-lg font-bold">Warehouse management(e-store)</h3>
            <ul>
              <li className="ml-8 list-disc">
                Authenticate with Firebase. After login user get a jwt token.
              </li>
              <li className="ml-8 list-disc">Implement private route.</li>
              <li className="ml-8 list-disc">
                User able to add a new item, manage items, delete an item, and
                show his own added item
              </li>
            </ul>
            <a
              href="https://e-store-aabe5.web.app/"
              target="_blank"
              rel="noreferrer"
              className="underline text-blue-400"
            >
              live site link
            </a>
          </div>
          <div className="mt-3">
            <h3 className="text-lg font-bold">Gym Trainer </h3>
            <ul>
              <li className="ml-8 list-disc">
                In home page: Navbar, Banner, Services, Price and footer
              </li>
              <li className="ml-8 list-disc">
                For Login and registration used firebase.
              </li>
              <li className="ml-8 list-disc">
                When the user clicks to book now button if a user is not logged
                in then redirect user to the login page
              </li>
            </ul>
            <a
              href="https://gym-trainer-bf1b5.web.app/"
              target="_blank"
              rel="noreferrer"
              className="underline text-blue-400"
            >
              live site link
            </a>
          </div>
        </div>
        {/* EDUCATION */}
        <div className="mt-6">
          <h2 className="text-lg lg:text-xl font-semibold">EDUCATION</h2>
          <p className="font-bold">Bachelor of Computer Science: CSE</p>
          <p>
            American International University-Bangladesh{' '}
            <span className="font-bold">(AIUB)</span>{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyProtfolio;
