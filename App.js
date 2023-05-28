// Hello world using JS only
const heading = document.createElement("h1");
heading.innerHTML = "Hello world by JS";
const ROOT1 = document.getElementById("root1");
ROOT1.appendChild(heading);



// Hello World using React CDN
const DIV = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "I am a child"),
        React.createElement("h2", {}, "I am second child")]
    ))
const ROOT2 = ReactDOM.createRoot(document.getElementById("root"));
ROOT2.render(DIV);






