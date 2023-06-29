const pino = require('pino');

module.exports = pino({});


// import pino from "pino";

// export const pinoTest = () => {


//     const logger = pino({
//         transport: {
//             target: "pino-sentry-transport",
//             options: {
//                 sentry: {
//                     dsn: "https://e40788cc54834eda95fdaf21c3edac89@o4505430930620416.ingest.sentry.io/4505442435596288",
//                     // additional options for sentry
//                 },
//                 withLogRecord: true, // default false - send the log record to sentry as a context.(if its more then 8Kb Sentry will throw an error)
//                 tags: ['id'], // sentry tags to add to the event, uses lodash.get to get the value from the log record
//                 context: ['hostname'], // sentry context to add to the event, uses lodash.get to get the value from the log record,
//                 minLevel: 40, // which level to send to sentry
//             }
//         },
//     })

//     return logger;

// }

