const heading=React.createElement("div",{id:"Parent"},React.createElement("div",{id:"child"},
    [React.createElement("h1",{id:"heading"},"hi welcome"),React.createElement("h2",{},"h2 tag")]
));
        const root=ReactDOM.createRoot(document.getElementById('root'));
        root.render(heading);