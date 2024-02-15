import { GET_DATA } from './constants.js';

try {
    const events = GET_DATA.events;
    const eventsByUser = getEventsByUser(events);
    const response = getResponse(eventsByUser);

    console.log(
        Object.keys(response).forEach((key) => console.log(response[key]))
    );
} catch (error) {
    console.error(error);
}

function getResponse(allEventsByUser) {
    let result = {};

    Object.keys(allEventsByUser).forEach((user) => {
        const events = allEventsByUser[user].sort(
            (a, b) => a.timestamp - b.timestamp
        );

        let sessions = [];
        let session = [events[0]];

        for (let i = 1; i < events.length; i++) {
            const latestTimestamp = session[session.length - 1].timestamp;

            if (events[i].timestamp - latestTimestamp <= 10 * 60 * 1000) {
                session.push(events[i]);
            } else {
                sessions.push(session);
                session = [events[i]];
            }
        }

        result[user] = [...sessions, session].map((item) => ({
            duration: item[item.length - 1].timestamp - item[0].timestamp,
            startTime: item[0].timestamp,
            pages: item.reduce((pages, event) => [...pages, event.url], []),
        }));
    });

    return result;
}

function getEventsByUser(allEvents) {
    let result = {};

    allEvents.forEach((event) => {
        if (event.visitorId in result) result[event.visitorId].push(event);
        else result[event.visitorId] = [event];
    });

    return result;
}
