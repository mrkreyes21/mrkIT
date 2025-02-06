import React from 'react';

const Contact = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Connect with Me</h2>
      <div className="mt-4 flex space-x-4">
        <div className="buttons-container flex space-x-4">
          <a href="https://www.linkedin.com/in/markandreireyes" target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-2 bg-blue-600 text-white rounded dark:bg-blue-500">
              <i className="fab fa-linkedin"></i>
            </button>
          </a>

          <a href="https://www.instagram.com/_mrkreyes/" target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-2 bg-purple-600 text-white rounded dark:bg-purple-500">
              <i className="fab fa-instagram"></i>
            </button>
          </a>

          <a href="https://web.facebook.com/markandrei.reyes.5/" target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-2 bg-blue-700 text-white rounded dark:bg-blue-600">
              <i className="fab fa-facebook"></i>
            </button>
          </a>
        </div>
      </div>

      {/* Contact form */}
      <form
        className="mt-4"
        action="mailto:mmreyes22@up.edu.ph"
        method="POST"
        enctype="multipart/form-data"
      >
        <div className="mb-4">
          <label className="block text-gray-800 dark:text-gray-300" htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-800 dark:text-gray-300" htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-800 dark:text-gray-300" htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white"
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-gray-800 text-white rounded dark:bg-gray-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
