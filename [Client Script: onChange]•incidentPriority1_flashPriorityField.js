/**
[Client Script: onChange]
When the incident Priority changes to 1, flash the Priority field 5 times using g_form.flash()
**/

// 1. All > System Definition > Client Scripts : New, OR
// 2. Incident List > List context menu > Configure > Client Scripts 
// 3. Table: [incident], Type: onChange, Field name: Priority
// 4. Script:

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
  if (isLoading || newValue === '') {
      return;
  }
  
  if (newValue == '1') {
      g_form.flash('priority', 'red', 5);
  }
}

// 5. Open new or old incident
// 6. Change the Priority to 1

// Output:
// As soon as you change the priority on the form, the Priority field (label only) will be highlighted 5 times by flashing
