const schedule = require('node-schedule');
// scheduleJob parameters: second, minute, hour, day of month, month, day of week
const task1 = schedule.scheduleJob('*/5 * 10 * * 5', function () {
    console.log('Running Task 1.', new Date().getSeconds())
});

setTimeout(function () {
    task1.cancel();
    console.log('Task 1 cancelled.');
}, 20000);

const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [new schedule.Range(1, 5)];
rule.hour = 10;
rule.second = 30;

const task2 = schedule.scheduleJob(rule, function () {
    console.log('Running Task 2.', new Date().getSeconds());
})