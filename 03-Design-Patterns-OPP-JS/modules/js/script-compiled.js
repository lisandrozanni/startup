"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Actor = exports.Actor = function Actor(name, age) {
    _classCallCheck(this, Actor);

    this.name = name;
    this.age = age;
};
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = exports.EventEmitter = function () {
    function EventEmitter() {
        _classCallCheck(this, EventEmitter);

        this.events = new Map();
    }

    _createClass(EventEmitter, [{
        key: 'on',
        value: function on(eventName, listener) {
            if (this.events.has(eventName)) {
                this.events.get(eventName).push(listener);
            } else {
                this.events.set(eventName, [listener]);
            }
        }
    }, {
        key: 'emit',
        value: function emit(eventName) {
            var listeners = this.events.get(eventName);
            for (var i = 0; i < listeners.length; i++) {
                listeners[i](console.log('The ' + eventName + ' has been emited'));
            }
        }
    }, {
        key: 'off',
        value: function off(eventName) {
            this.events.delete(eventName);
        }
    }]);

    return EventEmitter;
}();
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = exports.Logger = function () {
    function Logger() {
        _classCallCheck(this, Logger);
    }

    _createClass(Logger, [{
        key: "log",
        value: function log(info) {
            console.log(info);
        }
    }]);

    return Logger;
}();
'use strict';

var _Logger = require('Logger.js');

var _Movie = require('Movie.js');

var _Actor = require('Actor.js');

var social = {
    share: share,
    like: like
};

function share(friendName) {
    var log = new _Logger.Logger();
    console.log('Name: ' + friendName + '\n' + 'Shared movie: ' + this.title);
}

function like(friendName) {
    var log = new _Logger.Logger();
    console.log('Name: ' + friendName + '\n' + 'Likes: ' + this.title);
}

var logger = new _Logger.Logger();

var iron_man = new _Movie.Movie('Iron Man', 2008, 126),
    tony_stark = new _Actor.Actor('Tony Stark', 53);
Object.assign(iron_man, social);
iron_man.addCast(tony_stark);
iron_man.on("play", logger.log);

var the_godfather = new _Movie.Movie('The Godfather', 1972, 178),
    al_pacino = new _Actor.Actor('Al Pacino', 78);
Object.assign(the_godfather, social);
the_godfather.addCast(al_pacino);
the_godfather.on("play", logger.log);

var actors = [new _Actor.Actor('Jim Carrey', 56), new _Actor.Actor('Adam Sandler', 51), new _Actor.Actor('Jennifer Aniston', 49)];

var bruce_almighty = new _Movie.Movie('Bruce Almighty', 2003, 101);
Object.assign(bruce_almighty, social);
bruce_almighty.addCast(actors[0]);
bruce_almighty.on("play", logger.log);

var click = new _Movie.Movie('Click', 2006, 107);
Object.assign(click, social);
click.addCast(actors[1]);
click.on("play", logger.log);

var the_break_up = new _Movie.Movie('The Break-Up', 2006, 106);
Object.assign(the_break_up, social);
the_break_up.addCast(actors[2]);
the_break_up.on("play", logger.log);
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Movie = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _EventEmitter2 = require('EventEmitter.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Movie = exports.Movie = function (_EventEmitter) {
    _inherits(Movie, _EventEmitter);

    function Movie(title, year, duration) {
        _classCallCheck(this, Movie);

        var _this = _possibleConstructorReturn(this, (Movie.__proto__ || Object.getPrototypeOf(Movie)).call(this));

        _this.title = title;
        _this.year = year;
        _this.duration = duration;
        _this.cast = [];
        return _this;
    }

    _createClass(Movie, [{
        key: 'play',
        value: function play() {
            _get(Movie.prototype.__proto__ || Object.getPrototypeOf(Movie.prototype), 'emit', this).call(this, 'play');
        }
    }, {
        key: 'pause',
        value: function pause() {
            _get(Movie.prototype.__proto__ || Object.getPrototypeOf(Movie.prototype), 'emit', this).call(this, 'pause');
        }
    }, {
        key: 'resume',
        value: function resume() {
            _get(Movie.prototype.__proto__ || Object.getPrototypeOf(Movie.prototype), 'emit', this).call(this, 'resume');
        }
    }, {
        key: 'addCast',
        value: function addCast(actor) {
            this.cast = this.cast.concat(actor);
        }
    }]);

    return Movie;
}(_EventEmitter2.EventEmitter);
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Actor = exports.Actor = function Actor(name, age) {
    _classCallCheck(this, Actor);

    this.name = name;
    this.age = age;
};
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var EventEmitter = exports.EventEmitter = function () {
    function EventEmitter() {
        _classCallCheck(this, EventEmitter);

        this.events = new Map();
    }

    _createClass(EventEmitter, [{
        key: 'on',
        value: function on(eventName, listener) {
            if (this.events.has(eventName)) {
                this.events.get(eventName).push(listener);
            } else {
                this.events.set(eventName, [listener]);
            }
        }
    }, {
        key: 'emit',
        value: function emit(eventName) {
            var listeners = this.events.get(eventName);
            for (var i = 0; i < listeners.length; i++) {
                listeners[i](console.log('The ' + eventName + ' has been emited'));
            }
        }
    }, {
        key: 'off',
        value: function off(eventName) {
            this.events.delete(eventName);
        }
    }]);

    return EventEmitter;
}();
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Logger = exports.Logger = function () {
    function Logger() {
        _classCallCheck(this, Logger);
    }

    _createClass(Logger, [{
        key: "log",
        value: function log(info) {
            console.log(info);
        }
    }]);

    return Logger;
}();
'use strict';

var _Logger = require('./Logger.js');

var _Movie = require('./Movie.js');

var _Actor = require('./Actor.js');

var social = {
    share: share,
    like: like
};

function share(friendName) {
    var log = new _Logger.Logger();
    console.log('Name: ' + friendName + '\n' + 'Shared movie: ' + this.title);
}

function like(friendName) {
    var log = new _Logger.Logger();
    console.log('Name: ' + friendName + '\n' + 'Likes: ' + this.title);
}

var logger = new _Logger.Logger();

var iron_man = new _Movie.Movie('Iron Man', 2008, 126),
    tony_stark = new _Actor.Actor('Tony Stark', 53);
Object.assign(iron_man, social);
iron_man.addCast(tony_stark);
iron_man.on("play", logger.log);

var the_godfather = new _Movie.Movie('The Godfather', 1972, 178),
    al_pacino = new _Actor.Actor('Al Pacino', 78);
Object.assign(the_godfather, social);
the_godfather.addCast(al_pacino);
the_godfather.on("play", logger.log);

var actors = [new _Actor.Actor('Jim Carrey', 56), new _Actor.Actor('Adam Sandler', 51), new _Actor.Actor('Jennifer Aniston', 49)];

var bruce_almighty = new _Movie.Movie('Bruce Almighty', 2003, 101);
Object.assign(bruce_almighty, social);
bruce_almighty.addCast(actors[0]);
bruce_almighty.on("play", logger.log);

var click = new _Movie.Movie('Click', 2006, 107);
Object.assign(click, social);
click.addCast(actors[1]);
click.on("play", logger.log);

var the_break_up = new _Movie.Movie('The Break-Up', 2006, 106);
Object.assign(the_break_up, social);
the_break_up.addCast(actors[2]);
the_break_up.on("play", logger.log);
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Movie = undefined;

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);if (parent === null) {
            return undefined;
        } else {
            return get(parent, property, receiver);
        }
    } else if ("value" in desc) {
        return desc.value;
    } else {
        var getter = desc.get;if (getter === undefined) {
            return undefined;
        }return getter.call(receiver);
    }
};

var _EventEmitter2 = require('./EventEmitter.js');

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Movie = exports.Movie = function (_EventEmitter) {
    _inherits(Movie, _EventEmitter);

    function Movie(title, year, duration) {
        _classCallCheck(this, Movie);

        var _this = _possibleConstructorReturn(this, (Movie.__proto__ || Object.getPrototypeOf(Movie)).call(this));

        _this.title = title;
        _this.year = year;
        _this.duration = duration;
        _this.cast = [];
        return _this;
    }

    _createClass(Movie, [{
        key: 'play',
        value: function play() {
            _get(Movie.prototype.__proto__ || Object.getPrototypeOf(Movie.prototype), 'emit', this).call(this, 'play');
        }
    }, {
        key: 'pause',
        value: function pause() {
            _get(Movie.prototype.__proto__ || Object.getPrototypeOf(Movie.prototype), 'emit', this).call(this, 'pause');
        }
    }, {
        key: 'resume',
        value: function resume() {
            _get(Movie.prototype.__proto__ || Object.getPrototypeOf(Movie.prototype), 'emit', this).call(this, 'resume');
        }
    }, {
        key: 'addCast',
        value: function addCast(actor) {
            this.cast = this.cast.concat(actor);
        }
    }]);

    return Movie;
}(_EventEmitter2.EventEmitter);
