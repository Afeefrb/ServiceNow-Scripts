**
[Business Rule]
On incident form update, show an info message with the incident number & incident state
**/

// 1. All > System Definition > Business Rules : New
// 2. Table: incident
// 3. Tabs:
// 	When to run: after - update
// 	Action: none
// 	Advanced script:

(function executeRule(current, previous /*null when async*/ ) {


    var gr = new GlideRecord("incident");
    gr.get(current.sys_id); //The form’s incident sysId is looked up in incident records
    gs.addInfoMessage('The incident number: ' + gr.number + ". The incident state: " + gr.state.getDisplayValue());




})(current, previous);

// 4. Open old Incident form, change and Update

// Output: Blue info box in the top of the form
// The incident number: INC0010003. The incident state: In Progress
