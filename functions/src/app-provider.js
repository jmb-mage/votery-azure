const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
class AppProvider {
    constructor() {
        this.expressApp = express();
    }
    init() {
        this.expressApp.use(cors({ credentials: true, origin: true }));
        this.expressApp.use(bodyParser.json());
        // middleware
        this.expressApp.use(function (req, res, next) {
            if (!req.headers.authorization) {
                return res.status(403).json({ error: "No credentials sent!" });
            }
            next();
        });
        this.expressApp.get("/", function (req, res) {
            return res.json({ hi: "there" });
        });
    }
    app() {
        return this.expressApp;
    }
}
export { AppProvider };
//# sourceMappingURL=app-provider.js.map