export class EventEmitter {
    constructor() {
        this.events = new Map();
    }

    on(eventName, listener) {
        if (this.events.has(eventName)) {
            this.events.get(eventName).push(listener);
        }
        else {
            this.events.set(eventName, [listener]);
        }
    }

    emit(eventName) {
        let listeners = this.events.get(eventName);
        for (let i = 0; i < listeners.length; i++) {   
            listeners[i](console.log('The ' + eventName + ' has been emited'));    
        }
    }

    off(eventName) {
        this.events.delete(eventName);
    }
}