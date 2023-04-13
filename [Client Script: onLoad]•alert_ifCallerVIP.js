/**
[Client Script: onLoad]
Alert user if the caller is VIP using g_formGetReference
**/

// 1. All > System Definition > Client Scripts : New, OR
// 2. Incident List > List context menu > Configure > Client Scripts 
// 3. Table: [incident], Type: onLoad
// 4. Script:


function onLoad() {
    var caller = g_form.getReference('caller_id', alertCaller);
   
    function alertCaller(caller){
        if(caller.vip == 'true'){
            alert("This is a VIP caller!")
        }
    }
}

// 5. Open a incident record where the caller is a VIP

// Output:
// When the closer is VIP, the alert box will appear saying: "This is a VIP caller!"
