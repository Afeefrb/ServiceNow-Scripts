/**
[Email Notification - Event]
When the incident short description is changed & updated, Notify the caller.
**/


// 1. System Policy > Events > Registry > New
// Event registration form opens up
// a. Event name: ER_incident.shortd.updated
// b. Table name: incident
// c. Fired by: Business rule
// 2. Click on Submit

// **BUSINESS RULE**
// 3. System definition > Business rules > B.R List
// 4. Check search for any events with *events in Name column. Click on “incident events”
// 5. Add this in the script:

if(current.short_description.changes()){
    //gs.eventQueue(“<event_name>”, object, param1, param2);
    gs.eventQueue('incident.shortd.updated', current, current.caller_id, current.short_description);
}
// 6. Click on Save or Submit

// **NOTIFICATION**
// 7. System notifications > Notifications > New
// a. Name: N_incident-shortDescChanged
// b. Table: incident
// c. When to Send: Send when - event is fired, event name: ER_incident.shortd.updated
// d. Advanced: ✅
// 8. Click on SAVE
// 9. In “Who will receive” tab, check the “Event parm 1 contains recipient”

// 10. Check if notification is enabled. System Mailboxes > Email properties
// a. Send all email to this test email: afeef.rabbani@gmail.com

// **UPDATE INCIDENT**
// 11. Open an incident and update it
// 12. System Logs  > Emails

// //SCRIPT ACTIONS
// 13. All > System policy > Events > Script Actions > New
// a. Name: Sys Log a message with gs.log when the incident shortDesc is changed
// b. Event name: ER_incident.shortd.updated
// c. Script:
var newSD = event.param2;
gs.log("The new inc SD is: " + newSD);
// 14. Check the logs: System logs > All/Emails/Events
// 15. Check the event log: System policy > events> Event log

