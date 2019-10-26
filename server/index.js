const express = require("express");
require("dotenv-flow").config();
const fs = require("fs");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const port = process.env.PORT || 31416;
const resourceFolder = process.env.resourceFolder || "/static";
const logFolder = process.env.logFolder || "/log/";

const options = {
	inflate: true,
	limit: "5Mb",
	type: "application/octet-stream"
};

app.use("/", express.static(path.join(process.cwd(), resourceFolder)));
app.use("/log", express.static(path.join(process.cwd(), logFolder)));
app.use(bodyParser.raw(options));
app.use(function(req, res, next) {
	req.rawBody = "";
	req.setEncoding("utf8");
	req.on("data", function(chunk) { 
		req.rawBody += chunk;
	});
	req.on("end", function() {
		next();
	});
});

app.post("/static/*", function(req, resp) {
	if(req.url.length > 1) {
		const name = req.url.replace(/^\/static/g,"");
		fs.writeFileSync(path.join(process.cwd(), resourceFolder, name), req.rawBody);
		resp.status(201).send("SUCCESS");
	} else {
		resp.status(500).send("ERROR: Not have uri");
	}
});

function formatDate(date) {
	const seconds = date / 1000;
}

app.post("/log/:log", function(req, resp) {
	const log = req.params.log ? req.params.log : "log.txt";
	const logFile = path.join(process.cwd(), logFolder, log);
	const line = "--------------------------------------------------\n";
	fs.appendFileSync(logFile,`\nNEW ENTRY: ${new Date().toISOString()}\n${line}`);
	fs.appendFileSync(logFile, req.rawBody);
	fs.appendFileSync(logFile,`\n${line}`);
	resp.status(200).send("SUCCESS");
});
app.get("/*", (req, resp) => {
	resp.sendFile(path.join(process.cwd(), resourceFolder, "index.html"));
});
console.log(`Start Server in :${port}`);
app.listen(port);