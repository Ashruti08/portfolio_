import React from "react";
import tea from "../../public/logo.png";
import task from "../../public/task.png";
import log from "../../public/logo2.png";
import weather from "../../public/weatherlogo.png";
function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: tea,
      name: "Tea Website",
      name2:"HTML, CSS, Javascript, Tailwindcss, Sass",
      para:"Shows health information of different type of Tea and Coffee Beans Also about ingredient information of different drinks and ice creams.",
    },
    {
      id: 2,
      logo: task,
      name: "Task Management",
      name2:"React.js, Node.js, MongoDB, Express.js",
      para: "By this Webapp User can manage day to day tasks by adding, deleting tasks in to-do list. also Shows Dashboard With Active, Completed and Uncompleted Tasks. Register, Login included.",
    },
    {
      id: 3,
      logo: log,
      name: "Digiart Marketplace",
      name2:"Next.js, MongoDB, Node.js, Typescript, Stripe",
      para: "it is cutting-edge platform that brings together digital artists and art enthusiasts user can sell and buy art works. Login, Register,Cart, Wishlist, Sell your work, Payment and many more features included. ",
      
    },
    {
      id: 4,
      logo: weather,
      name: "Live weather Webapp",
      name2:"React.js, MongoDB, Node.js, Firebase, Tailwindcss",
      para:"Shows current temperature of city by searching city name.",
    },

  ];
  return (
    <div
      name="Portfolio"
      
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name, name2, para }) => (
            <div
              className="md:w-[270px] md:h-[380px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[140px] h-[140px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <br></br>
              <div>

                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <div className="px-2  text-sm mb-2 ">{name2}</div>
              
                <br></br>
                <p className=" text-gray-700 text-xs  space-y-2  text-justify"  >{para} </p>
                
               
              </div>


            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
