/**
[Client Script: onChange]
If the priority changes to 1, show an error box right below the Priority field.
**/

// 1. All > System Definition > Client Scripts : New, OR
// 2. Incident List > List context menu > Configure > Client Scripts 
// 3. Table: [incident], Type: onLoad
// 4. Script:


function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
       return;
    }
 
     var priority = g_form.getValue("priority");
 
     // If the value of the "priority" field is 1, show an error message
     if (priority == 1) {
         g_form.showErrorBox("priority", "Priority cannot be 1.");
     }
   
 }

// 5. Open a new or old record
// 6. Change the Priority to 1

// Output: Right below the Priority field there will be an red error box
