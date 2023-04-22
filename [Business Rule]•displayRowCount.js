/**
[Business Rule]
On incident form update, display incident row count
**/

// 1. All > System Definition > Business Rules : New
// 2. Table: incident
// 3. Tabs:
// 	When to run: after - update
// 	Action: none
// 	Advanced script:

(function executeRule(current, previous /*null when async*/ ) {


    var gr = new GlideRecord("incident");
    gr.addQuery();
    gr.query();
    var rowCount = gr.getRowCount();
    gs.addInfoMessage("The row count is: " + rowCount);
  
})(current, previous);



// 4. Open an old form & update it

// Output: An blue info box message appears at top of form 
// “The row count is: 52”
