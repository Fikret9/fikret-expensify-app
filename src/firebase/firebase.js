import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };
  firebase.initializeApp(config);
  const database = firebase.database();      
  
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); 
  export  {firebase, googleAuthProvider, database as default};


//  database.ref('expenses').on('child_removed',(snapshot)=>{
//    console.log(snapshot.key, snapshot.val());
//  })

//  database.ref('expenses').on('child_changed',(snapshot)=>{
//   console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_added',(snapshot)=>{
//   console.log(snapshot.key, snapshot.val());
// })

//   // database.ref('expenses').on('value', (snapshot) => {    
  //   const expenses = [];
  //           snapshot.forEach((childSnapshot) => {
  //                    expenses.push({
  //                     id: childSnapshot.key,
  //                     ...childSnapshot.val()
  //                    }
  //                    );
  //           });            
  //   console.log(snapshot.val());    
  // })   


  
  // database.ref('expenses')
  //         .once('value')
  //         .then((snapshot)=>{
  //           const expenses = [];
  //           snapshot.forEach((childSnapshot) => {
  //                    expenses.push({
  //                     id: childSnapshot.key,
  //                     ...childsnapshot.val()
  //                    }
  //                    );
  //                  });
  //           console.log(expenses);
  //         });

  // database.ref('notes/-LGAvkM1adegY34-PPK_').update({
  //   body: 'BUY FOOD'
  // })

  // database.ref('notes/-LGAvkM1adegY34-PPK_').remove();
  // const onValueChange = database.ref().on('value', (snapshot) => {
  //   const data = snapshot.val();
  //   console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
  // }) 

// database.ref('expenses').push({    
//     description: 'UDEMY COURSE',
//     amount: 11,
//     createdAt: 12345
// })

// database.ref('expenses').push({    
//   description: 'CHICAGO TRIP PLANE TICKET',
//   amount: 75,
//   createdAt: 34567
// })


  // database.ref('notes').push({    
  //       title: 'course topics',
  //       body: 'React course'
  // })
  
  // database.ref('job/company').set('Google');
  


  // setTimeout(()=>{
  //   database.ref().off(onValueChange);
  // },7000)

  
  // setTimeout(()=>{
  //   database.ref('age').set(48);
  // },10500)




//   database.ref('location')
//           .once('value')
//           .then((snapshot)=>{
//             const val = snapshot.val();
//             console.log(val);
//           })
//           .catch((e) =>{
//             console.log('Error fetching data ',e) ; 
//           })

//   database.ref().set({
//       name: 'Fikret Tokyay',
//       age: 26,
//       stresslevel: 6,
//       job: {
//           title: 'Software developer', 
//           company: 'Google'     
//       },
//       location: {
//           city: 'fairfield',
//           country: 'united states'
//       }
//   }).then(()=>{
//       console.log('data is saved');
//      }).catch((e)=>{
//         console.log('failed',e);
//      })

//      database.ref().update({   
//          stresslevel: 9,
//          'job/company': "Amazon",
//          'location/city': "Seattle"                  
//      })

     
