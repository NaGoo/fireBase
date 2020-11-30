
function onSubmit(){
    x=document.getElementById("dName").value;
   var currentTime = new Date().toLocaleTimeString();
   var currentDate = new Date().toLocaleDateString();
   
   firebase.firestore().collection('Data').doc(x).set({
       Name:document.getElementById("name").value ,
       LastSync : currentDate +"____" +currentTime,
   })
document.getElementById("details").reset();

}
document.addEventListener("DOMContentLoaded", event =>{      
   
    const app = firebase.app();

 
firebase.firestore().collection('Data').get()
 .then(users=>{
     users.forEach(doc=>{
         data = doc.data()
        console.log(data)
    let frag = document.createDocumentFragment();
    let tr = document.createElement('tr');
      let td1 = document.createElement('td');
       let td2 = document.createElement('td');
       let td3 = document.createElement('td');
       let btn1 = document.createElement('td');
       btn1.innerHTML = '<i type="button" class="btn btn-danger" >Delete</i>';

       let btn2 = document.createElement('td');
       btn2.innerHTML = '<i type="button" class="btn btn-primary" >Edit</i>';


        td1.appendChild(document.createTextNode(data.Name));
        td2.appendChild(document.createTextNode(data.LastSync));
        td3.appendChild(document.createTextNode(doc.id));

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(btn1);
            tr.appendChild(btn2);
            frag.appendChild(tr);
            view.appendChild(frag);

            btn1.addEventListener ("click", function() {

                firebase.firestore().collection("Data").doc(doc.id).delete().then(function() {
                    alert("Document successfully deleted!");
                }).catch(function(error) {
                    console.error("Error removing document: ", error);
                });

              });
 })

 })
 

});
 