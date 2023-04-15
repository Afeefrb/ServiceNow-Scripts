/**
[Business Rule]
After you create  a story, 5 standard tasks must be created
**/

// 1. All > Agile Development > Stories
// 2. Story (t: rm_story) => Scrum Task (t: rm_scrum_task)
// 3. All > System Definition > Business Rules : New
// 4. Table: rm_story
// 5. Tabs: 
// When to run: before - query
// Action: None
// Advanced Script:

(function executeRule(current, previous /*null when async*/) {


    var numOfTasks = 3;
   
    for(var i = 0; i < numOfTasks; i++){
        var task = new GlideRecord("rm_scrum_task");
        task.initialize();
        task.short_description = "Task No. " + (i+1);
        task.parent = current.sys_id;
        task.insert();
    }


})(current, previous);

// 6. All > Agile Development > Stories OR rm_story.list
// 7. Create a story

// Output: 3 scrum tasks will be created
