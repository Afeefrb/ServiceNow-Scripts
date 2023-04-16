/**
[Business Rule]
If Catalog tasks (sc_task) are closed, close the requested item (sc_req_item)
**/

// Request (sc_request)
// Requested item (sc_req_item) {Service catalog > item}
// Catalog task (sc_task)

// 1. All > System Definition > Business Rules : New
// 2. Table: sc_task
// 3. Tabs:
// 	When to run: after - update
// 	Action: none
// 	Advanced script:

(function executeRule(current, previous /*null when async*/) {


    var gr = new GlideRecord('sc_task');
    gr.addActiveQuery();
    gr.addQuery('request_item', current.request_item);
    gr.query();
    if(!gr.next()){
        var gri = new GlideRecord('sc_req_item');
        gri.addQuery('sys_id', current.request_item);
        gri.query();
        if(gri.next()){
            gri.state = '3'; //Closed Complete, Complete = 3
            gri.update();
        }
    }


})(current, previous);

// 4. Make a Catalog item request:
//   a. All > Service Catalog > Catalog (OR) All > Self-Service > Service Catalog (OR) App nav: catalog
//   b. Service Catalog > Hardware > Macbook Pro : Order now
//   c. Request number is generated (t:sc_request)
//   d. In related list, click on Requested item (t: sc_req_item) which is Macbook Pro
//   e. In related list, create 3 catalog tasks (sc_task)
//   f. Close the 3 catalog tasks by changing their state from ‘open’ to ‘closed complete’
//   g. The requested item record will also change its state from ‘open’ to ‘closed complete’
