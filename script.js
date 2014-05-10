var pdfObj = {};
function  gid(id){return  document.getElementById(id);}
 
var essentialIds = ["Name","Email","Phone","Roll"];
var essentialIdsopts = ["Room", "Hostel"];
  
function isBlank(str) 
{
    return (!str || /^\s*$/.test(str));
}
function isEmpty(str) 
{
    return (!str || 0 === str.length);
}

function checkEssentials(ids)
{
    for(var i = 0; i<ids.length;i++)
    {
        //console.log(ids[i]);
        if(isEmpty(gid(ids[i]).value) || isBlank(gid(ids[i]).value))
        {
            //console.log(ids[i]);
            return false;
        }
    }
    return true;
}
function appendEssentials()
{

    if(checkEssentials(essentialIds))
    {
      pdfObj["Name"] = gid("Name").value;
      pdfObj["Email"] = gid("Email").value;
      pdfObj["Phone"] = gid("Phone").value;
      pdfObj["Roll"] = gid("Roll").value;
      gid("essentials").style.display = "None";
      gid("SeteditEssentials").style.display = "block";
    }
    else
    {
        alert("Please complete essential fields");
        return false;
    }
}
function showEssentials()
{
    gid("essentials").style.display = "Block";
    this.style.display = "None";
}
function setBinds()
{
    document.getElementById("SetEssentials").onclick = appendEssentials;
    gid("SeteditEssentials").onclick = showEssentials;
}
window.onload = setBinds;

