/**
[Server Side - Fix Script]
Use the GlideRecord class to retrieve 5 incident records and log it to the screen
**/


// 1. All > System Definition > Fix Scripts : New
// 2. Script:

var gr = new GlideRecord('incident');
gr.addActiveQuery();
gr.setLimit(5);
gr.query();

while (gr.next()){
   gs.log("The incident number is" + gr.number);
}

// 3. Submit or Save the record
// 4. Click on “Run Fix Script”

// Output: 

// *** Script: The incident number is INC0008001
// *** Script: The incident number is INC0010111
// *** Script: The incident number is INC0010060
// *** Script: The incident number is INC0010039
// *** Script: The incident number is INC0010032
