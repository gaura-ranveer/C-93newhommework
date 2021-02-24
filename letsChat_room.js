
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyC0gMwcQREagrZzo6U-Qukpd-QklFBm_fM",
      authDomain: "lets-chat-8efd2.firebaseapp.com",
      databaseURL: "https://lets-chat-8efd2-default-rtdb.firebaseio.com",
      projectId: "lets-chat-8efd2",
      storageBucket: "lets-chat-8efd2.appspot.com",
      messagingSenderId: "1024001182436",
      appId: "1:1024001182436:web:80b8841e4b24ac4ccd3af1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localstorage.getitem("user_name")

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function adduser(){
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose:"adding user"
      });
  }
