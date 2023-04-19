/**
[Business Rule]
In any incident form, when you update/save it. All the records who have “test1” or “test2” as their short description, will have their incident number printed on the form
**/

// 1. All > System Definition > Business Rules : New
// 2. Table: incident
// 3. Tabs:
// 	When to run: after - update
// 	Action: none
// 	Advanced script:

(function executeRule(current, previous /*null when async*/) {


    var gr = new GlideRecord("incident");
    var cond1 = gr.addQuery('short_description','test1');
    cond1.addOrCondition('short_description', 'test2');
    gr.query();
   
    while(gr.next()) { //selects the first incident record with state 1
        gs.addInfoMessage('The incident with short desc with test1 or test2 is: ' + gr.number);
    }


})(current, previous);

// 4. Open a old form, change something, update it

// Output: Blue info message box at the top of the form saying:
// The incident with short desc with test1 or test2 is: INC0010033
