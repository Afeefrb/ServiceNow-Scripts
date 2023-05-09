/**
[Script Include (Classful) + Client Script]
On incident form, when the caller field is selected, alert the caller’s full name 
**/

//**SCRIPT INCLUDE
// 1. System Definition > Script Includes > New
// a. Name: SI_incCallerFieldSelected_alertCallerName
// b. Client callable: Tick
// c. Script:

var SI_incCallerFieldSelected_alertCallerName = Class.create();
SI_incCallerFieldSelected_alertCallerName.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    SI_incCallerFieldSelected_alertCallerName_Func: function(){
        var userID = this.getParameter('sysparm_user');
        var gr = new GlideRecord('sys_user');
        gr.addQuery('sys_id', userID);
        gr.query();
        if(gr.next()){
            var name = gr.first_name + " " + gr.last_name;
            return name;
        }
    },
   
    type: 'ScriptIncludeGlideAjax_PrintCallerName'
});

//**CLIENT SCRIPT
// 2. System Definition > Client Scripts > New
// a. Name: SI_incCallerFieldSelected_alertCallerName
// b. Table: Incident
// c. Type: onChange
// d. FieldName: Caller

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }
    var ga = new GlideAjax('SI_incCallerFieldSelected_alertCallerName'); //script include name
    ga.addParam('sysparm_name', 'SI_incCallerFieldSelected_alertCallerName_Func'); //script include func
    ga.addParam('sysparm_user', newValue); //passing this param to server
    ga.getXML(callbackFunc);


    function callbackFunc(response) {
        var answer = response.responseXML.documentElement.getAttribute('answer');
        alert(answer);
    }

}

// 3. Open old or new form
// 4. Select a Caller

// OUTPUT
// Upon selection itself, alert box will show up with the caller’s full name
