// 1. All > System Definition > Relationships > New
// 2. The Relationships form opens up:
//   a. Name: Tasks Opened by me
//   b. Applies to table: User
//   c.Queries from table: Task [task]
//   d. Query with:

(function refineQuery(current, parent) {

	var vals = "";
	var gr = new GlideRecord('task');
	gr.addQuery('opened_by', parent.sys_id);
	gr.orderByDesc('sys_created_on');
	gr.setLimit(5);
	gr.query();
	
	while(gr.next()){
		vals += gr.number + ",";
	}
	
	current.addQuery('number','IN',vals.toString());

})(current, parent);


// 3. Open your user form (User profile)
// 4. R-C Form context menu (FCM) > Configure > Related Lists
// 5. Move “Tasks Opened by me” to right
