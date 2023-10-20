pre=document.getElementById("sk");
pre.classList.remove("hide");
cur=0;
preh=document.getElementById("skh");
document.getElementById("skh").classList.add("active");
curh=0;
function vis(desc){
    cur=document.getElementById(desc);
    curh=document.getElementById(desc+'h');
     if(cur!=0 && cur==pre)return;
     pre.classList.add("hide");
     cur.classList.remove("hide");
     pre=cur;
     preh.classList.remove("active");
     curh.classList.add("active");
     preh=curh;
}