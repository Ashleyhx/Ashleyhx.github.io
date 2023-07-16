import React from "react";

const ProgramPage = () => {
  // Sample data for the program page
  const program = {
    title: "Sample Program",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultrices odio eu enim placerat, sit amet tristique turpis hendrerit. Nulla facilisi. In at eros ac odio lacinia sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc tincidunt nunc sit amet gravida tristique. Nulla posuere, mi non vulputate porttitor, turpis eros tristique sapien, in pharetra est nisl vel elit. Nulla in blandit elit.",
    images: [
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
    ],
    languages: ["JavaScript", "Python", "Java", "C++"],
  };

  return (
    <div id="ProjectSpaceInvader" className="px-8 md:px-32 pb-32 content-center">
      <h1 className="pt-20 uppercase font-bold text-center text-bold text-4xl">{program.title}</h1>
      <p className="text-lg mb-6">{program.description}</p>


      {/* //<div className="mt-8"> */}
        <h2 className="text-2xl font-bold mb-4">Programming Languages</h2>
        <ul className="list-disc list-inside">
          
        </ul>
      {/* </div> */}
    </div>
  );
};

export default ProgramPage;
