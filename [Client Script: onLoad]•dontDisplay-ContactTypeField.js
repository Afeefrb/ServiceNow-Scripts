/**
[Client Script: onLoad]
Don't display contact type field
**/

// 1. All > System Definition > Client Scripts : New, OR
// 2. Incident List > List context menu > Configure > Client Scripts 
// 3. Table: [incident], Type: onLoad
// 4. Script:

function onLoad() {
    g_form.setDisplay('contact_type',false);
}

// 5. Open a new or old incident form

// Output:
// The Contact tyoe field will not be displayed
