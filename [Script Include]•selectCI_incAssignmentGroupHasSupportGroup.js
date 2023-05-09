/**
[Script Include (Classful) + Client Script]
On incident form, when a CI is selected, the Assignment Group field should immediately set the value of Support Group for the CI
**/

// 1. All > Configuration > Base Items > All (t: cmdb_ci_list)
// 2. List > Personalise columns > Show: “Support Group” (Ex: Software, IT Securities)

// **SCRIPT INCLUDE (SERVER)

// 3. All > S.D > Script Include:
// a. Client Callable: Yes
// b. Script:

var ScriptInclude_CI_SupportGroup = Class.create();
ScriptInclude_CI_SupportGroup.prototype = Object.extendsObject(AbstractAjaxProcessor, {
   
    ScriptInclude_CI_SupportGroupFunc: function(){
        var cmdb_ci = this.getParameter("sysparm_ci"); //receives CI’s sys_id from client on incident form
        var gr = new GlideRecord('cmdb_ci');
        gr.addQuery('sys_id', cmdb_ci);
        gr.addNotNullQuery('support_group');
        gr.query();
       
        if(gr.next()){
            return gr.support_group;
        }
    },
    type: 'ScriptInclude_CI_SupportGroup'
});


// **CLIENT SCRIPT (CLIENT)

// 4. Client Scripts - Incident - onChange - Field: Configuration Item
// a. Script: 

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }

    var ga = new GlideAjax('ScriptInclude_CI_SupportGroup'); //script include name
    ga.addParam('sysparm_name','ScriptInclude_CI_SupportGroupFunc'); //script include func
    ga.addParam('sysparm_ci', newValue); //passing CI selected to server
    ga.getXML(callbackFunc);
   
    function callbackFunc(response){
        var answer = response.responseXML.documentElement.getAttribute('answer');
        g_form.setValue('assignment_group', answer);
    }

}


// 5. Open a new or old Incident form
// 6. Select a CI - PS Apache03 (Don’t click on Save, Submit, Update)

// Output:
// Automatically the Assignment Group will be set to “IT Securities”
