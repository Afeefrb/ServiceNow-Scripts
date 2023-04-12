/**
[Client Script: onLoad]
When an Incident form loads, old or new, add a new option for Contact Type field called "Portal"
**/

// 1. All > System Definition > Client Scripts : New, OR
// 2. Incident List > List context menu > Configure > Client Scripts 
// 3. Table: [incident], Type: onLoad
// 4. Script:

function onLoad() {
   g_form.addOption('contact_type','portal','Portal');
}

// 5. Old Incident or New Incident

// Output:
// Channel (ref: contact_type) : <Options>…, Portal
