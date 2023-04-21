/**
[Business Rule]
Query records where the caller is Abel Tutor & state is New (1) & display incident numbers on the incident form
**/

// 1. All > System Definition > Business Rules : New
// 2. Table: incident
// 3. Tabs:
// 	When to run: after - update
// 	Action: none
// 	Advanced script:

(function executeRule(current, previous /*null when async*/) {


    var gr = new GlideRecord("incident");
    gr.addEncodedQuery('caller_id=62826bf03710200044e0bfc8bcbe5df1^state=1');
    gr.query();
   
    while(gr.next()) { //selects the first incident record with state 1
        gs.addInfoMessage('The incident where caller is Abel and state is New(1) ' + gr.number);
    }


})(current, previous);

// 4. In the system:
// Incidents - Caller = Abel Tutor, State = 1 (New) : 2
// Incidents - Caller = Abel Tutor, State = 1 (Progress) : 1
// 5. Open old Incident form, change and Update

// Output: 2 Blue info box messages:
// The incident where caller is Abel and state is New(1) INC0010002
// The incident where caller is Abel and state is New(1) INC0010001
