/**
[Client Script] 
When any incident record is opened, when the form loads, show an info message about the current incident number and the logged in user
**/

// 1. All > System Definition > Client Scripts : New, OR
// 2. Incident List > List context menu > Configure > Client Scripts 
// 3. Table: [incident], Type: onLoad
// 4. Script:

function onLoad() {
   var recordNumber = g_form.getValue('number');
   var userFullName = g_user.getFullName();
   g_form.addInfoMessage("The incident number is " + recordNumber + " and the logged in user is " + userFullName);
}

// 5. All > Incident > All : Click on an Incident Form
// 6. Output: The incident number is INC0000054 and the logged in user is System Administrator
