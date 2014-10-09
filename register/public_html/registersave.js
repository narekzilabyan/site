/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var pah = new Array();

function inf(obj)
{
    this.name = obj.name.value;
    this.surname = obj.surname.value;
    this.mail = obj.mail.value;
    this.login = obj.login.value;
    this.password = obj.password.value;
}

function st()
{
    var l = new inf(form2);
    if (pah[0] === undefined)
        ha();
    else {
        for (var i = 0; i < pah.length; i++)
            if (l.login === pah[i].login || l.password === pah[i].password)
            {
                alert("This login or password already used, please try again");
                form2.login.focus();
                return (false);
            }
        ha();
       // document.getElementById('f2').reset();
                //document.getElementsByName(form2).reset();
    }
}

function ha() 
{   
    var f = new inf(form2);
    document.getElementById('f2').reset();
    for(var i=0; i<pah.length+1;i++)   
        if(pah[i] === undefined)
            { pah[i] = f;
              break;
            }
}

function inlet()
{  var l = form1.login.value;
   var p = form1.password.value;
   for(var i=0; i<pah.length+1;i++)
   {if(pah[i].login === l && pah[i].password === p)
        alert(pah[i].name + " " + pah[i].surname);}
    
}