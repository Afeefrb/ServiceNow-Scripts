/**
[Client Script: onLoad]
When an incident state is Resolved, disable the attachments icon on the form
**/

// 1. All > System Definition > Client Scripts : New, OR
// 2. Incident List > List context menu > Configure > Client Scripts 
// 3. Table: [incident], Type: onLoad
// 4. Script:

function onLoad() {
   var state = g_form.getValue('state');
    if (state === '6') {
        g_form.disableAttachments();
    }
}

// 5. All > Incident > All/Open. Open an old incident
// 6. Change the State field to Resolved which is 6
// 7. Save the record. The attachment icon will disappear. 
