// main function that hold the submit button
function dataSubmit(){
    var firstName=document.getElementById('firstname').value; //first name input
    var lastName=document.getElementById('lastname').value; //last name input
    gender();
    department();
    contact();
    contactList();
    if(localStorage.getItem('first')==null || localStorage.getItem('last')==null)
    {
        localStorage.setItem('first','[]');
        localStorage.setItem('last','[]');
    }
    var flag=true; 
    var firstData=JSON.parse(localStorage.getItem('first'));
    var lastData=JSON.parse(localStorage.getItem('last'));
 
        for(var i=1;i<firstData.length;i++){
        if(firstName===firstData[i]){
          
           if(lastName===lastData[i]){
         
            console.log(firstName+" "+lastName+" is already saved on database!");
            flag=false;
            break; }}
        }
        if(flag){
                firstData.push(firstName);
                lastData.push(lastName);
            }
      
     localStorage.setItem('first',JSON.stringify(firstData));   // stringfy the data add before
     localStorage.setItem('last',JSON.stringify(lastData));    // stringfy the data add before
    
 }
 // function of gender selection
function gender(){
   
    var genderSelect=document.getElementsByName('inlineRadioOptions'); //gender select
    if(localStorage.getItem('gender')==null)
    {
        localStorage.setItem('gender','[]');
    }

    var genderData=JSON.parse(localStorage.getItem('gender'));    
    for (i = 0; i < genderSelect.length; i++) {
        if (genderSelect[i].checked){genderData.push(genderSelect[i].value);}
            
    }
    localStorage.setItem('gender',JSON.stringify(genderData));// stringfy the data add before

}

//function of deprtment selection
function department(){

    var data1=document.getElementById('depart').value; //department selection

if(localStorage.getItem('departm')==null)
{
  localStorage.setItem('departm','[]');
}

var departBox=JSON.parse(localStorage.getItem('departm'));
departBox.push(data1);
  localStorage.setItem('departm',JSON.stringify(departBox));  // stringfy the data add before

}
// contact list like id, date, phone number, book name
 function contactList(){
    var phoneNum=document.getElementById('phoneNumber').value; //phone number
    var bookName=document.getElementById('book').value; //book name
    if(localStorage.getItem('phone')==null || localStorage.getItem('book')==null)
    {
        localStorage.setItem('phone','[]');
        localStorage.setItem('book','[]');
    }
    // access localStorage on phone number
    var phoneData=JSON.parse(localStorage.getItem('phone'));
    phoneData.push(phoneNum);
    localStorage.setItem('phone',JSON.stringify(phoneData));// stringfy the data add before
    

    // About Book 
    var bookData=JSON.parse(localStorage.getItem('book'));
    bookData.push(bookName);
    localStorage.setItem('book',JSON.stringify(bookData));// stringfy the data add before
    
    
    
 }
 function contact(){
    var idNum=document.getElementById('id').value; //id number input
    var shareDate=document.getElementById('date').value; //date
    if(localStorage.getItem('id')==null || localStorage.getItem('date')==null){
        localStorage.setItem('id','[]');
        localStorage.setItem('date','[]');
    }
    // Id input data
    var idData=JSON.parse(localStorage.getItem('id'));
    idData.push(idNum);
    localStorage.setItem('id',JSON.stringify(idData));
  // Date of share
    var dateData=JSON.parse(localStorage.getItem('date'));
    dateData.push(shareDate);
    localStorage.setItem('date',JSON.stringify(dateData));
}
var input=document.getElementById('searchInput').value;
var lastName=JSON.parse(localStorage.getItem('last'));
var firstName=JSON.parse(localStorage.getItem('first'));
var idNum=JSON.parse(localStorage.getItem('id'));
var genderData=JSON.parse(localStorage.getItem('gender'));
var bookData=JSON.parse(localStorage.getItem('book'));
var dateData=JSON.parse(localStorage.getItem('date'));
var phoneNum=JSON.parse(localStorage.getItem('phone'));
var depmt=JSON.parse(localStorage.getItem('departm'));
var flag=true;
function searchBar(){
var input=document.getElementById('searchInput').value;

 for( var i=0;i<=firstName.length;i++){
    
    if(input===(firstName[i] + " " + lastName[i]) || input===idNum[i]){
        
        document.getElementById('card2').style.display="block";
        document.getElementById('card1').style.display="none";
        document.getElementById('row_firstname').innerHTML=(firstName[i]);
        document.getElementById('row_lastname').innerHTML=(lastName[i]);
        document.getElementById('row_phone').innerHTML=(phoneNum[i]);
        document.getElementById('row_id').innerHTML=(idNum[i]);
        document.getElementById('row_book').innerHTML=(bookData[i]);
        document.getElementById('row_depart').innerHTML=(depmt[i]);
        document.getElementById('row_gender').innerHTML=(genderData[i]);
        document.getElementById('row_date').innerHTML=(dateData[i]);
        flag=false; 
        var date=new Date(dateData[i]);
        let nowDate= new Date();
       
        var totalCost;
        if(date.getMonth()-nowDate.getMonth()===0)
        {  var dateDiff=nowDate.getDate()- date.getDate();
            
            if(dateDiff>=20){totalCost=dateDiff*3+(dateDiff-7)*3;}
            else if(dateDiff>=12 && dateDiff<20){totalCost=dateDiff*3+(dateDiff-7)*2;}
            else if(dateDiff>7 && dateDiff<12){totalCost=dateDiff*3+(dateDiff-7);}
            else{totalCost=dateDiff*3;}
            
        }
        else if((nowDate.getMonth()-date.getMonth())===1)
        {    
           var dateDiff=30-date.getDate()+nowDate.getDate();
            if(dateDiff>=20)totalCost=(dateDiff*3+(dateDiff-7)*3);
            else if(dateDiff>=12 && dateDiff<20)totalCost=dateDiff*3+(dateDiff-7)*2;
            else if(dateDiff>7 && dateDiff<12)totalCost=dateDiff*3+(dateDiff-7);
            else{totalCost=dateDiff*3;}
        }
        document.getElementById('cost').innerText=("Total Cost = "+(totalCost)+" Birr");
      
        
      
    }


 }
 if(flag)document.getElementById('notfound').innerHTML=("Sorry "+ input+" is not found");  
}

document.querySelector(".btn3").addEventListener("click",function(){
var input=document.getElementById('searchInput').value;
 if(flag==false){
    for(var i=0;i<firstName.length;i++){
   if(input===(firstName[i]+" "+lastName[i]) || input===idNum[i]){
    firstName.splice(i,1);
    lastName.splice(i,1);
    genderData.splice(i,1);
    idNum.splice(i,1);
    phoneNum.splice(i,1);
    bookData.splice(i,1);
    dateData.splice(i,1);
    depmt.splice(i,1);
   
localStorage.setItem('first',JSON.stringify(firstName));
localStorage.setItem('last',JSON.stringify(lastName));
localStorage.setItem('gender',JSON.stringify(genderData));
localStorage.setItem('id',JSON.stringify(idNum));
localStorage.setItem('phone',JSON.stringify(phoneNum));
localStorage.setItem('book',JSON.stringify(bookData));
localStorage.setItem('date',JSON.stringify(dateData));
localStorage.setItem('departm',JSON.stringify(depmt));
document.querySelector(".btn3").innerHTML="Paid" ;
}}}
});
