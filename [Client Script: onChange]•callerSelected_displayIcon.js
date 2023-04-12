/**
[Client Script: onChange]
On incident form, when caller is selected, display an icon
**/

// 1. All > System Definition > Client Scripts : New, OR
// 2. Incident List > List context menu > Configure > Client Scripts 
// 3. Table: [incident], Type: onChange, Field name: Caller
// 4. Script:

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
   if (isLoading || newValue === '') {
      return;
   }
   
   if(newValue != ""){
      g_form.addDecoration('caller_id', 'icon-user-selected');
   }
   
}

// 5. All > Incident > Create New 
// 6. Select the Caller field

// Output:
// On the left side of the Caller field (caller_id), an icon will appear. 

// Note: This will happen for new records. All old records will not automatically have the icon, but once you open the old record AND THEN change the Caller, the icon will appear.
