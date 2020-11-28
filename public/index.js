document.addEventListener("DOMContentLoaded", event =>{      
      const app = firebase.app();
  
      const db = firebase.firestore();
    
      const docRef = db.collection('Demo').doc('list');  
      
      docRef.set({
          Name: 'Readyassist',
          place: 'MTM',
      
      });
  
      // const ref = db.collection('customers').doc('list');   
      
      // ref.set({
      //     firstName: 'Alan',
      //     lastName: 'Turing',
      //     born: 1600
      // });
  
  //     const aTuringRef = db.collection('users').doc('');
  
  //     aTuringRef.set({
  //         'firstName': 'Tom',
  //         'middleName': 'Jerry',
  //         'lastName': 'and',
  //         'born': 1998
  // });
  
  const docR = db.collection('Demo');
  docR.get()
  .then(users=>{
      users.forEach(doc=>{
          data = doc.data()
          console.log(data)
      })
  })
  
  
  
  });
  
  function googleLogin(){
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
      .then(result => {
          const user = result.user;
          document.write(`Email : ${user.email}`);
          console.log("output",user)
      })
      .catch(console.log)
  }