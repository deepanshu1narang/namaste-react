// const heading = React.createElement("h1", {id: "heading", abc: "xyz"}, "Hello world from React basics");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// React.createElement(tag, attributesObject, children); single child --> directly insert the child, multiple children (ie siblings of each other --> array of children)
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "I am an h1 tag yo!!!"),
        React.createElement("h2", {}, "Ore wa h2 tag da!!!")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "I am an h1 tag --2 "),
        React.createElement("h2", {}, "Ore wa h2 tag da --2!!!")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=namaste-react.6bd02f5a.js.map
