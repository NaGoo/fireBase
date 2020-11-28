
function onSubmit(){
    docName=document.getElementById("dName").value;
   var currentTime = new Date().toLocaleTimeString();
   var currentDate = new Date().toLocaleDateString();
   
   firebase.firestore().collection('Data').doc(docName).set({
       Name:document.getElementById("name").value ,
       LastSync : currentDate +"____" +currentTime,
   })
document.getElementById("details").reset();
location.reload();

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

        td1.appendChild(document.createTextNode(data.Name));
        td2.appendChild(document.createTextNode(data.LastSync));

            tr.appendChild(td1);
            tr.appendChild(td2);
            frag.appendChild(tr);
            view.appendChild(frag);

 })

 })
 

});
 