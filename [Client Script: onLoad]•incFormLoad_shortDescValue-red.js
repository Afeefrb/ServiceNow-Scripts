/**
[Client Script: onLoad]
When the incident form loads, change the colour of Short description value to red
**/

// 1. All > System Definition > Client Scripts : New, OR
// 2. Incident List > List context menu > Configure > Client Scripts 
// 3. Table: [incident], Type: onLoad
// 4. Script:

function onLoad() {
   var callerElement = g_form.getControl('short_description');
   callerElement.style.color = 'red';
}

// 5. Create a new form, save/submit OR Open an old form

// Output:
// The Short description value will be red.
