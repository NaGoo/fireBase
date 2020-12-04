function setTime(){
    
    var settimein = new Date().toLocaleTimeString();
    document.getElementById("timeIn").value=settimein;
}
function fnExcelReport()
{
    var cells="<table border='2px'><tr bgcolor='#87AFC6'>";
    var j=0;
    tab = document.getElementById('view'); 

    for(j = 0 ; j < tab.rows.length ; j++) 
    {     
        cells=cells+tab.rows[j].innerHTML+"</tr>";
    }

    cells=cells+"</table>";
        sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(cells)); 
}

document.getElementById("timeOut").disabled = true;

function onSubmit(){

   var x=document.getElementById("dName").value;
   var currentTime = new Date().toLocaleTimeString();
   var currentDate = new Date().toLocaleDateString();
firebase.firestore().collection('Data').doc(x).set({

       Name     : document.getElementById("name").value ,
       LastSync : currentTime+" ._."+currentDate,
       TimeIns  : document.getElementById("timeIn").value ,
       TimeOut  : document.getElementById("timeOut").value ,
})
document.getElementById("details").reset();
//location.reload();
}      

document.addEventListener("DOMContentLoaded", event =>{      
    const app = firebase.app();
  
firebase.firestore().collection('Data').get()
 .then(users=>{
     users.forEach(doc=>{
         data = doc.data()
         console.log(data);

      let frag = document.createDocumentFragment(); let tr = document.createElement('tr');
      let user = document.createElement('td');      let documentname = document.createElement('td'); 
      let login = document.createElement('td');    
      let logout = document.createElement('td'); 

      let del = document.createElement('td');    del.innerHTML = '<i type="button" class="btn btn-danger" >Delete</i>'; 
      let edits = document.createElement('td');  edits.innerHTML = '<i type="button" class="btn btn-primary" >update</i>';
      let log = document.createElement('td');    log.innerHTML = '<i type="button" class="btn btn-dark" >LogOut</i>';

       user.appendChild(document.createTextNode(data.Name)); login.appendChild(document.createTextNode(data.TimeIns));
        documentname.appendChild(document.createTextNode(doc.id)); logout.appendChild(document.createTextNode(data.TimeOut)); 

            tr.appendChild(user);  tr.appendChild(documentname); tr.appendChild(login); tr.appendChild(logout);  
            tr.appendChild(edits); tr.appendChild(del); tr.appendChild(log); 
            frag.appendChild(tr); view.appendChild(frag);

            log.addEventListener("click",function (){
                var tim = new Date().toLocaleTimeString();
                //var dat = new Date().toLocaleDateString();
                var rename =data.Name;
                var docs = doc.id;
                var sets= data.TimeIns;

                    document.getElementById("timeOut").value=tim ;      document.getElementById("name").value = rename;
                    document.getElementById("dName").value = docs;      document.getElementById("timeIn").value = sets;
                    document.getElementById("dName").disabled = true;   document.getElementById("timeIn").disabled = true;
                    document.getElementById("timeOut").disabled = true; document.getElementById("in").disabled = true;
                    document.getElementById("name").disabled = true;

            })

             edits.addEventListener("click",function(){

                 alert("you should change name only")
                 var rename = "";
                 var docs = doc.id;
                 var newtimein= data.TimeIns;
                 var newtimeout= data.TimeOut;

                    document.getElementById("name").value = rename;        document.getElementById("dName").value = docs;
                    document.getElementById("timeIn").value = newtimein;   document.getElementById("timeOut").value = newtimeout;
                    document.getElementById("dName").disabled = true;      document.getElementById("timeIn").disabled = true;
                    document.getElementById("timeOut").disabled = true;    document.getElementById("in").disabled = true;
            });
            del.addEventListener ("click", function() {

                firebase.firestore().collection("Data").doc(doc.id).delete().then(function() {
                    alert("Document successfully deleted!");
                }).catch(function(error) {
                    console.error("Error removing document: ", error);
                });
            });
 })
 })
});
 