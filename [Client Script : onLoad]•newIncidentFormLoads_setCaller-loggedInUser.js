/**
[Client Script : onLoad]
When incident record is new & the form loads, set the value of caller field with current logged in user
**/

// 1. All > System Definition > Client Scripts : New, OR
// 2. Incident List > List context menu > Configure > Client Scripts 
// 3. Table: [incident], Type: onLoad
// 4. Script:

function onLoad() {
   var userID = g_user.userID;
   if (g_form.isNewRecord()) {
       g_form.setValue('caller_id', userID);
   }
}

// 5. All > Incident > Create New

// Output:
// Caller : System Administrator
