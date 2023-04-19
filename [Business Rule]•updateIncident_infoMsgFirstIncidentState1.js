/**
[Business Rule]
In any incident form, when you update/save it. The first incident record whose state is ‘1’ will be printed in the form
**/

// 1. All > System Definition > Business Rules : New
// 2. Table: incident
// 3. Tabs:
// 	When to run: after - update
// 	Action: none
// 	Advanced script:

(function executeRule(current, previous /*null when async*/) {


    var gr = new GlideRecord("incident");
    gr.addQuery('state','1');
    gr.query();
   
    if(gr.next()) { //selects the first incident record with state 1
        gs.addInfoMessage('The first incident record with the state 1 is: ' + gs.number);
    }


})(current, previous);


// 4. All > Incident > Open/All
// 5. Now when you open any incident form, change a field-value, update it, a blue message will display on the top of the form:
// “The first incident record with the state 1 is: INC000555”
