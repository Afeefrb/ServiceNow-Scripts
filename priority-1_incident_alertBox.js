/**
[Client Script] 
When any incident record is opened or created, when the priority of the incident is changed to 1, show an alert box.
**/

1. All > System Definition > Client Scripts : New, OR
2. Incident List > List context menu > Configure > Client Scripts 
3. Table: [incident], Type: onChange, Field name Priority
4. Script:

function onChange(control, oldValue, newValue, isLoading, isTemplate){
   if(isLoading || newValue === ""){
      return;
   }
   //control = field value to be changed
   var priority = g_form.getValue('priority');
   if( (priority === newValue) && (newValue === "1") && (priority === "1") ) {
      alert("This is a P1 incident!");
   }
}

5. All > Incident > All : Click on an Incident Form
6. Output: Alert box pops up => "This is a P1 incident!"
Note: The alert box pops up before the priority value is changed. When “Ok” is clicked and the box is closed, then the priority value changes
