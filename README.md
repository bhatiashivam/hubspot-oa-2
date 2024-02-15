# Hubspot OA

## Requirements

To run this project, you will need a JavaScript runtime environment

Example:

```bash
  Node.js
```

## Running the script

To execute the script, run the following command from the project directory

```bash
  node app.js
```

## Problem

You're in charge of implementing a new analytics "sessions" view. You're given a set of data that consists of individual web page visits, along with a visitorId which is generated by a tracking cookie that uniquely identifies each visitor. From this data we need to generate a list of sessions for each visitor.

You can get the raw event data from the dataset API at

https://candidate.hubteam.com/candidateTest/v3/problem/dataset?userKey=bc7d8712b664eadc7f9698f9b4a7

The data set looks like this:

{
    "events": [
         {
             "url": "/pages/a-big-river",
             "visitorId": "d1177368-2310-11e8-9e2a-9b860a0d9039",
             "timestamp": 1512754583000
         },
         {
             "url": "/pages/a-small-dog",
             "visitorId": "d1177368-2310-11e8-9e2a-9b860a0d9039",
             "timestamp": 1512754631000
         },
        {
            "url": "/pages/a-big-talk",
            "visitorId": "f877b96c-9969-4abc-bbe2-54b17d030f8b",
            "timestamp": 1512709065294
        },
        {
            "url": "/pages/a-sad-story",
            "visitorId": "f877b96c-9969-4abc-bbe2-54b17d030f8b",
            "timestamp": 1512711000000
        },
        {
            "url": "/pages/a-big-river",
            "visitorId": "d1177368-2310-11e8-9e2a-9b860a0d9039",
            "timestamp": 1512754436000
        },
        {
            "url": "/pages/a-sad-story",
            "visitorId": "f877b96c-9969-4abc-bbe2-54b17d030f8b",
            "timestamp": 1512709024000
        }
    ]
}
Given this input data, we want to create a set of sessions of the incoming data. A sessions is defined as a group of events from a single visitor with no more than 10 minutes between each consecutive event. A visitor can have multiple sessions.

So given the example input data above, we would expect output which looks like:

{
    "sessionsByUser": {
        "f877b96c-9969-4abc-bbe2-54b17d030f8b": [
            {
                "duration": 41294,
                "pages": [
                    "/pages/a-sad-story",
                    "/pages/a-big-talk"
                ],
                "startTime": 1512709024000
            },
            {
                "duration": 0,
                "pages": [
                    "/pages/a-sad-story"
                ],
                "startTime": 1512711000000
            }
        ],
        "d1177368-2310-11e8-9e2a-9b860a0d9039": [
            {
                "duration": 195000,
                "pages": [
                    "/pages/a-big-river",
                    "/pages/a-big-river",
                    "/pages/a-small-dog"
                ],
                "startTime": 1512754436000
            }
        ]
    }
}
Once the event data has been transformed into session, you will need to send the result via an http POST to

https://candidate.hubteam.com/candidateTest/v3/problem/result?userKey=bc7d8712b664eadc7f9698f9b4a7

Notes

Timestamps are in milliseconds.
Events may not be given in chronological order.
The visitors in sessionsByUser can be in any order.
For each visitor, sessions to be in chronological order.
For each session, the URLs should be sorted in chronological order
For a session with only one event the duration should be zero
Each event in a session (except the first event) must have occurred within 10 minutes of the preceding event in the session. This means that there can be more than 10 minutes between the first and the last event in the session.

API Guidelines

If your answer is correct, the API will return 200 OK. If the request is malformatted or incorrect, the API will return 400 along with a message indicating if the response is of the wrong structure or incorrect.

If you get a 5xx response, let us know and we’ll help you out.

The candidate.hubteam.com domain is set up with a permissive cross-origin policy, so you can POST to it from any location in a browser if you choose to implement in an in-browser JS solution.

Evaluation
When you’re done, this page will update with a form to upload your code. We’ll evaluate you based on three things:

First and foremost, if you complete the project within three hours.
Next, the time from when you click the start button below to the time you submit a correct solution.
Finally, the quality of code you submit. We’re looking for simplicity, clarity and readability over cleverness or flexbility.
We think you should be able to complete this project in a single sitting, so try to allocate a single block if you can.
