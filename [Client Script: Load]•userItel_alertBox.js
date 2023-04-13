/**
[Client Script: onLoad]
If the current logged in user has the ITIL role, show an alert box.
**/

// 1. All > System Definition > Client Scripts : New, OR
// 2. Incident List > List context menu > Configure > Client Scripts 
// 3. Table: [incident], Type: onLoad
// 4. Script:

function onLoad() {
   
    var isRoleItil = g_user.hasRole('itil') // `knowledge`
    var fullName = g_user.userName;
   
    if(isRoleItil == true){
        alert("The user " + fullName + " has the ITIL role.");
    }
}

// 5. Open a new or old record form

// Output:
// If the current logged in user has the ITIL role, the alert box will show up:
// “The user admin has the ITIL role”
