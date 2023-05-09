/**
[Scheduled Job]
On incident form update, get aggregate count of incident records with a state 7
**/

// 1. All > System Def > Scheduled Jobs > New
// 2. Click on “Automatically run a script of your choosing” 
// 3. Run this script:

var gAgg = new GlideAggregate('incident');
gAgg.addAggregate('COUNT');
gAgg.addQuery('state','7');
gAgg.query();
var count = 0;
if(gAgg.next()){
    count = gAgg.getAggregate('COUNT');
}
gs.log("The incident count is: " + count);

// 4. R-C save, then click on “Execute Now”
// 5. System Logs > System Log > All

// Output:
// The incident count is: 27
