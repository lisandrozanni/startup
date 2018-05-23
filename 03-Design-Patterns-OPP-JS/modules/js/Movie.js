import {EventEmitter} from 'EventEmitter.js';

export class Movie extends EventEmitter {
    constructor(title, year, duration) {
        super();
        this.title = title;
        this.year = year;
        this.duration = duration;
        this.cast = [];
    }

    play() {
        super.emit('play');
    }

    pause() {
        super.emit('pause');

    }
    resume() {
        super.emit('resume');
    }

    addCast(actor) {
        this.cast = this.cast.concat(actor);
    }
}