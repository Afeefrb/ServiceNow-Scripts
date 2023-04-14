/**
[Business Rule]
Show incident records that are created in the past 3 months
**/

// General filter query: [Created] [after] [Last 3 months]
// Right-Click on breadcrumbs, and click on “Copy query”
// Query: sys_created_on>javascript:gs.beginningOfLast3Months()

// 1. All > System Definition > Business Rules : New
// 2. Table: Incident
// 3. Tabs: 
// When to run: before - query
// Action: None
// 4. Advanced:
// a. Condition: !(gs.hasRole(“admin”))
// b. Script:

(function executeRule(current, previous /*null when async*/) {
current.addEncodedQuery("sys_created_on>javascript:gs.beginningOfLast3Months()");
})(current, previous);

// 4. Impersonate as ITIL User
// 5. Check Incident list.

// Output:
// Only records created in the last 3 months will be displayed.
