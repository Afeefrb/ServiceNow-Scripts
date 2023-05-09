/**
[Script Include - Classless]
When the incident is updated, log the sub of two numbers a & b in the system logs
**/


//Script Include
1. All > System Definition > Script Includes > New
a. Name: ScriptInclude_Add
b. Script:
function ScriptInclude_Add(a,b){
	var c = a + b;
	gs.log("The sum of a + b is = " + c);
}

//Business Rule
2. All > System Definition > Business Rules : New
a. Table: incident
b. Tabs:
        When to run: after - update
        Action: none
        Advanced script:

(function executeRule(current, previous /*null when async*/) {

	var a = 5;
	var b = 5;
	ScriptInclude_Add(a,b);

})(current, previous);

3. Update an incident
4. All > System Log > All

Output:
Level: Information, Message: The sum of a + b is = 10
