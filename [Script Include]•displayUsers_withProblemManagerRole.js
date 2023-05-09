/**
[Script Include]
Display only the users in user list who have problem_manager role in the field Problem Owner 
**/

// **PROBLEM FORM
// 1. All > Problem > Problem list
// 2. Create a new field/column: “Problem Owner” with reference to sys_user
// a. Problem list> Configure > Form layout
// b. Create new field: Problem Owner, Type: Reference, Table: sys_user
// c. Click on Add, and make sure it is in the form layout

// **SCRIPT INCLUDE
// To filter the users who have the role “problem_manager”
// 3. Get sys_id from roles list (sys_user_role):
// a. Search problem_manager in name
// b. R-C on top of Name “problem_manager” and copy sys_id: b573c1f9538823004247ddeeff7b12e0
// 4.  All > Problem Definition > Script Includes
// a. Name: ScriptInclude_ProblemManager


var ScriptInclude_ProblemManager = Class.create();
ScriptInclude_ProblemManager.prototype = {
    initialize: function() {
    },
    ScriptInclude_ProblemManagerFunc: function(){
        var pmMangers = '';
        var gr = new GlideRecord('sys_user_has_role');
        gr.addQuery('role','b573c1f9538823004247ddeeff7b12e0'); //role sys_id of problem_manager. Finds all users with this role
        gr.query();
        while(gr.next()){
            pmManagers = pmManagers + "," + gr.user; //sys_id of the users who has the role
        }
        var result = "sys_idIN" + pmManagers;
        return result
       
    },


    type: 'ScriptInclude_ProblemManager'
};

// Call Script include from reference qualifier
// **PROBLEM FORM
// 5. All > Problem > Open > Click on record: Form
// a. R-C Problem Owner field > Configure dictionary
// b. Form context menu > View> Advanced view
// c. Reference Specification > Reference Qualifier > Advanced. Enter below:
// javascript:new ScriptInclude_ProblemManager().ScriptInclude_ProblemManagerFunc()
// 6. Open a new or old 
