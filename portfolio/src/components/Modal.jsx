import React from 'react';

const Modal = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 transition-all duration-300 ease-in-out"
      onClick={onClose}
    >
      <div
        className="bg-[#292926] text-white p-6 rounded-lg shadow-lg w-96 md:w-[32rem] lg:w-2/5 xl:w-1/3 max-w-2xl transition-all duration-300 ease-in-out transform scale-95 hover:scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold text-center mb-4 text-[#ade87a] font-['Playfair_Display']">
         Under Construction
        </h2>
        <p className="text-base mb-4 leading-relaxed">
          <span className="block mb-2">Hey there! 👋</span>
          This portfolio is still a work in progress, but I wanted to give you a sneak peek. 
          I'm currently building out the individual project pages and optimizing for different screen sizes. 
          My goal is to have everything polished up by the end of the semester.
          <br /><br />
          In the meantime, feel free to explore and get a feel for my projects and design experiments. 
          <br /><br />
          Thanks for visiting! 😊
        </p>
        <button
          className="w-full bg-[#ade87a] text-black py-2 rounded-md hover:bg-[#434242] focus:outline-none transition-all duration-300 ease-in-out"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
