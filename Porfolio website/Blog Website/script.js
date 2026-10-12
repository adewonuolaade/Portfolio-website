// Welcome Message

window.onload = function(){

    alert("🌸 Welcome to Prisca's Stories! Happy Reading ✨");

};


// Read Full Poem Button

document.getElementById("poemBtn").onclick = function(){

    alert("📖 Thank you for reading 'The Letter'. More poems are coming soon! 🌷");

};


// Blog Buttons

let buttons = document.querySelectorAll(".blog-card button");

buttons.forEach(function(button){

    button.onclick = function(){

        alert("✨ This article will be available soon. Stay tuned! 💕");

    };

});


// Greeting Based on Time

let hour = new Date().getHours();

if(hour < 12){

    console.log("Good Morning ☀️");

}

else if(hour < 18){

    console.log("Good Afternoon 🌸");

}

else{

    console.log("Good Evening 🌙");

}