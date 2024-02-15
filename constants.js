// API keys should not be stored locally
// const SECRET_API_USER_KEY = '45edd802e0addc8a920a4b1791a6';

export const API = {
    URL: {
        GET: () =>
            `https://candidate.hubteam.com/candidateTest/v3/problem/dataset?userKey=${SECRET_API_USER_KEY}`,
        POST: () =>
            `https://candidate.hubteam.com/candidateTest/v3/problem/result?userKey=${SECRET_API_USER_KEY}`,
    },
};

export const MILLISECONDS_IN_ONE_DAY = 24 * 60 * 60 * 1000;

export const GET_DATA = {
    events: [
        {
            url: '/pages/a-big-river',
            visitorId: 'd1177368-2310-11e8-9e2a-9b860a0d9039',
            timestamp: 1512754583000,
        },
        {
            url: '/pages/a-small-dog',
            visitorId: 'd1177368-2310-11e8-9e2a-9b860a0d9039',
            timestamp: 1512754631000,
        },
        {
            url: '/pages/a-big-talk',
            visitorId: 'f877b96c-9969-4abc-bbe2-54b17d030f8b',
            timestamp: 1512709065294,
        },
        {
            url: '/pages/a-sad-story',
            visitorId: 'f877b96c-9969-4abc-bbe2-54b17d030f8b',
            timestamp: 1512711000000,
        },
        {
            url: '/pages/a-big-river',
            visitorId: 'd1177368-2310-11e8-9e2a-9b860a0d9039',
            timestamp: 1512754436000,
        },
        {
            url: '/pages/a-sad-story',
            visitorId: 'f877b96c-9969-4abc-bbe2-54b17d030f8b',
            timestamp: 1512709024000,
        },
    ],
};
