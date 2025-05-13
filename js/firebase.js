

    import {initializeApp} from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
    import {getAnalytics} from "https://www.gstatic.com/firebasejs/11.7.1/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app

    // For Firebase JS SDK v7

    const firebaseConfig = {
    apiKey: "AIzaSyCbw8b_ag8QyunuIJIXl24SCepm439uzVU",
    authDomain: "coop-pro.firebaseapp.com",
    projectId: "coop-pro",
    storageBucket: "coop-pro.firebasestorage.app",
    messagingSenderId: "770543345465",
    appId: "1:770543345465:web:33089459f3d6eba9b992e8",
    measurementId: "G-T4463ZST23"
};

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
