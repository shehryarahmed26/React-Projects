  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
  import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
  import { getStorage, ref, uploadBytes, getDownloadURL    } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-storage.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDwO-NYtDZkUgk1k4CYqIAn5e_YNYzqu-o",
    authDomain: "image-gallery-159a1.firebaseapp.com",
    projectId: "image-gallery-159a1",
    storageBucket: "image-gallery-159a1.appspot.com",
    messagingSenderId: "165985268010",
    appId: "1:165985268010:web:1a38751af54d03381cee53"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const Storage = getStorage(app)
  const imagesRef = ref(Storage, 'images');
export {
    app,
    db,
    Storage,
    ref,
    uploadBytes,
    getDownloadURL,
     collection, 
     addDoc, 
     getDocs 
    // imagesRef
}

