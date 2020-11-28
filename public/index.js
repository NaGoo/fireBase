document.addEventListener("DOMContentLoaded", event =>{      
      const app = firebase.app();
     y=document.getElementById("name").value
     x=document.getElementById("dName").value;
    var currentTime = new Date().toLocaleTimeString();
    var currentDate = new Date().toLocaleDateString();
    const db = firebase.firestore();
    const docRef = db.collection('Data').doc('x');  
    
    docRef.set({
        Name: y,
        LastSync : currentDate +"____" +currentTime,
    })
const docR = db.collection('Data');
docR.get()
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
 //end

  
  
//   function googleLogin(){
//       const provider = new firebase.auth.GoogleAuthProvider();
//       firebase.auth().signInWithPopup(provider)
//       .then(result => {
//           const user = result.user;
//           document.write(`Email : ${user.email}`);
//           console.log("output",user)
//       })
//       .catch(console.log)
//   }
  