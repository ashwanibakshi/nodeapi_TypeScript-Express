"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var body_parser_1 = __importDefault(require("body-parser"));
var demoRoute_1 = require("./routes/demoRoute");
var App = /** @class */ (function () {
    function App() {
        this.app = express_1.default();
        this.initialise();
    }
    App.prototype.initialise = function () {
        mongoose_1.default.connect('mongodb://localhost:27017/apii', { useNewUrlParser: true })
            .then(function () { return console.log('connected to db'); }).catch(function (err) { return console.log(err); });
        this.app.use(body_parser_1.default.json());
        this.app.use('/user', demoRoute_1.routes);
        this.ports = process.env.PORT || 3000;
    };
    App.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.ports, function () { return console.log('server run at port ' + _this.ports); });
    };
    return App;
}());
exports.App = App;
