/**
[Client Script: onCellEdit] 
In the Incident list view, change the value of Short description on any record, the alert box appears and shows the value of Short description that is about to be changed.
**/

// 1. All > System Definition > Client Scripts : New, OR
// 2. Incident List > List context menu > Configure > Client Scripts 
// 3. Table: [incident], Type: onCellEdit, Field name: Short description
// 4. Script:

function onCellEdit(sysIDs, table, oldValues, newValue, callback) {
   var saveAndClose = true;
   alert("You have changed the short description to: " + newValue + ".\nThe sysID is: " + sysIDs + ".\nThe table is: " + table);
   
  callback(saveAndClose); //This keeps the next onCellEdits going
 }

// 5. App nav > Filter nav: Incident.list
// 6. On any record, change the Short description value. First the alert box will show, then you will be allowed to save it by clicking on ✓

// Output:
// You have changed the short description to: Server on fire
// The SysID is: cf0241…
// The table is: incident
