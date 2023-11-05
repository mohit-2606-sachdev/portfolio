import React from "react";

const Technologies = () => {
  const items = [
    { name: "Html5", logo: "html5" },
    { name: "Html5", logo: "html5" },
    { name: "Html5", logo: "html5" },
    { name: "Html5", logo: "html5" },
    { name: "Html5", logo: "html5" },
    { name: "Html5", logo: "html5" },
    { name: "Html5", logo: "html5" },
    { name: "Html5", logo: "html5" },
    { name: "Html5", logo: "html5" },
    { name: "Html5", logo: "html5" },
    { name: "Html5", logo: "html5" },
    { name: "Html5", logo: "html5" },
    { name: "Html5", logo: "html5" },
    { name: "Html5", logo: "html5" },
  ];

  const showItems = items.map((ele, index) => {
    const logo = `src/assets/technologies/${ele.logo}.png`;

    return (
      <div
        key={index}
        className="flex items-center border shadow-lg px-4 py-2 rounded-lg"
      >
        <img src={logo} alt={ele.name} className="w-8" />
        <span className="ms-2 font-semibold">{ele.name}</span>
      </div>
    );
  });

  return (
    <section className="mx-auto w-11/12 p-4">
      <h2 className="text-4xl">Technologies</h2>
      <div className="grid grid-cols-5 gap-7 mt-6">{showItems}</div>
    </section>
  );
};

export default Technologies;
