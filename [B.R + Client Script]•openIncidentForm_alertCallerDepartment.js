/**
[Business Rule + Client Script]
When you open an incident form, show an alert about the caller’s department. Use g_scratchpad.
**/

// i) We will use B.R + Client Script with the help of g_scratchpad object which fetches data from the server and stores on the client.

// Business Rule:

// 1. All > System Definition > Business Rules : New
// 2. Table: incident
// 3. Tabs:
// 	When to run: display
// 	Action: none
// 	Advanced script:

(function executeRule(current, previous /*null when async*/) {


    g_scratchpad.callerDepartment = current.caller_id.department.getDisplayValue();


})(current, previous);

Client Script:

// 4. All > System Definition > Client Scripts : New, OR
// 5. Incident List > List context menu > Configure > Client Scripts 
// 6. Table: [incident], Type: onLoad
// 7. Script:

function onLoad() {
    var callerDepartment = g_scratchpad.callerDepartment;
    alert("The caller's department is: "  + callerDepartment)


}

// 8. Open an incident form.

// Output: An alert box shows up saying - “The caller department is: Project Management”
