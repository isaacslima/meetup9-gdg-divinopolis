import Firebase from 'firebase'

const app = Firebase.initializeApp({
    apiKey: "AIzaSyBIu1fK6IcG8kiQBKwFo-Wn5mpS0Y9EUhI",
    authDomain: "meetup9gdgdivinopolis.firebaseapp.com",
    databaseURL: "https://meetup9gdgdivinopolis.firebaseio.com",
    projectId: "meetup9gdgdivinopolis",
    storageBucket: "",
    messagingSenderId: "1025018530315",
    appId: "1:1025018530315:web:a471d2d367333a73"
})

export const db = app.database()
export const voosRef = db.ref('voos')