document.addEventListener("DOMContentLoaded", event =>{      
      const app = firebase.app();
  
    
  });

  


    function onSubmit(){

    var currentTime = new Date().toLocaleTimeString();
    var currentDate = new Date().toLocaleDateString();
    const db = firebase.firestore();
    const docRef = db.collection('Data').doc(document.getElementById("dName").value);  
    
    docRef.set({
        Name: document.getElementById("name").value,
        LastSync : currentDate +"____" +currentTime,

    });
const docR = db.collection('Data');
docR.get()
 .then(users=>{
     users.forEach(doc=>{
         data = doc.data()
        console.log(data)
    })
 })
  }
  
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
  