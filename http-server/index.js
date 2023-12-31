const http = require("http");
const fs = require("fs");
const {port} = require("minimist")(process.argv.slice(2));
// var port = 3000;
// const myArgs = process.argv[2] ?? port;
// console.log(process.argv[2]);


// port = process.env.PORT || myArgs;

// console.log(port);

let HomeContent = "";
let RegistrationContent = "";
let projectContent = "";
let scriptContent = "";
// let styleContent = "";
fs.readFile("home.html", (err, home) => {
    if (err) {
        throw err;
    }
    HomeContent = home;
});
fs.readFile("registration.html", (err, Registration) => {
    if (err) {
        throw err;
    }
    RegistrationContent = Registration;
});
fs.readFile("project.html", (err, project) => {
    if (err) {
        throw err;
    }
    projectContent = project;
});
fs.readFile("script.js", (err, script) => {
    if (err) {
        throw err;
    }
    scriptContent = script;
});
// fs.readFile("style.css", (err, style) => {
//     if (err) {
//         throw err;
//     }
//     styleContent = style;
// });
const server = http.createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "content-type": "text/html" });
    switch (url) {
        case "/project":
            response.write(projectContent);
            response.end();
            break;
        case "/registration":
            response.write(RegistrationContent);
            response.end();
            break;
        case "/script":
            response.writeHeader(200, { "content-type": "text/js" });
            response.write(scriptContent);
            response.end();
            break;
        // case "/style":
        //     response.writeHeader(200, { "content-type": "text/css" });
        //     response.write(styleContent);
        //     response.end();
        //     break;
        default:
            response.write(HomeContent);
            response.end();
            break;
    }
});
    // .listen(port);
    server.listen(port, "127.0.0.1", () => {
  console.log(`litening at port ${port}`);
    });