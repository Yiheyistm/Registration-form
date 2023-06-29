
    var username="Yiheyis Tamir";
    var password="deshet";

document.querySelector('.btn-signin').addEventListener('click',function(){
  
    var name=document.getElementById('username').value;
    var pass=document.getElementById('password').value;
    if(name===username && pass===password)
    location.href=("main browser/index.html");
    else{
        document.getElementById("fail").innerHTML="Username and Password doesn't match";
}
});