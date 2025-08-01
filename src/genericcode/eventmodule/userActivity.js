const EventHandle = require("events");


let event = new EventHandle();

//use either on or addListener

// 1 - user - login
// 2 - user - logout
// 3 - profile - update

class EventTracker {
    static eventCount = {
        "user-login": 0,
        "user-logout": 0,
        "profile-update": 0
    };
}

event.on("user-login",(data)=>{
    EventTracker.eventCount["profile-update"]++
})
event.on("user-logout",(fileReadData)=>{
    EventTracker.eventCount["user-logout"]++
})

event.on("profile-update",(data)=>{
    EventTracker.eventCount["user-login"]++
})

event.on("summary",(data)=>{
    console.log(EventTracker.eventCount)
})

event.emit("profile-update","called")

event.emit("user-logout","called")
event.emit("user-login","called")

event.emit("summary","called")


