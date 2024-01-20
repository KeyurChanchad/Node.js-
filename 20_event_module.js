const EventEmmiter = require('events');
const event = new EventEmmiter();

// const events = require('events')
// const event = new events.EventEmitter();

event.on('myOwnEvent', ()=> {
    console.log("This is my own event which i have created");
});

event.on('myOwnEvent', ()=> {
    console.log("this one create animation.");
});

event.on('myOwnEvent', ()=> {
    console.log("this one read data from server.");
});

// event.on() is discribe and declare function
event.on('watchOnScreen', (app, show)=> {
    console.log(`You are watching live ${show} show on ${app}`);
});

//Emit event is like call a function
event.emit('watchOnScreen', 'Hotstart', 'Hanuman'); // with args
event.emit('myOwnEvent');