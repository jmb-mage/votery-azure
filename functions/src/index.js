import * as functions from "firebase-functions";
import { logger } from "./log";
import { ElectionApi } from "./api/elections";
import { CandidateApi } from "./api/candidates";
import { PhoneApi } from "./api/phones";
import { VoteApi } from "./api/votes";
import { VoterApi } from "./api/voters";
import FirebaseQueue from "./firebase/queue";
import admin from "./firebase/firebaseAdmin-provider";
const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
// Basic Express Setup with middleware
const app = express();
app.use(cors({ credentials: true, origin: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    if (!req.headers.authorization) {
        return res.status(403).json({ error: "No credentials sent!" });
    }
    next();
});
app.get("/", function (req, res) {
    return res.json({ hi: "there" });
});
logger.debug("API loading...");
// Setup Endpoints
PhoneApi.createEndpoints(app);
CandidateApi.createEndpoints(app);
ElectionApi.createEndpoints(app);
VoteApi.createEndpoints(app);
VoterApi.createEndpoints(app);
admin.auth();
VoteApi.blockchainQueue = new FirebaseQueue(admin);
// Export App for use with Firebase Functions
exports.voterifyApi = functions.https.onRequest(app);
logger.debug("API loaded");
//# sourceMappingURL=index.js.map