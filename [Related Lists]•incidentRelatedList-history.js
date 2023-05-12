// 1. All > System Definition > Relationships > New
// 2. The Relationships form opens up:
//   a. Name: History 4 Incident
//   b. Applies to table: Incident
//   c.Queries from table: History [sys_history_line]
//   d. Query with:

(function refineQuery(current, parent) { //Parent = Incident table

        current.addQuery('set.id', parent.sys_id);

})(current, parent);

// 3. Open an incident form
// 4. R-C Form context menu (FCM) > Configure > Related Lists
// 5. Move “History 4 Incident” to right
