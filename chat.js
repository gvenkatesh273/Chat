// import OpenAI from 'openai';

var modeStatus = 1;
var search = document.getElementById("search");
var response = document.getElementById("responseCont");
var replyText = "";


const API_URL = "https://api.openai.com/v1/chat/completions";
const openai = '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';

  
async function txtSearch(){
    try {
        // Fetch the response from the OpenAI API with the signal from AbortController
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer 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`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: search.value }],
            stream: true
          }),
        });
    
        const data = await response.json();
        console.log(data.choices[0].message.content);
        replyText = data.choices[0].message.content;
      } catch (error) {
        console.error("Error:", error);
      //   resultText.innerText = "Error occurred while generating.";
      }
    // try {
    //     await fetch("https://reqres.in/api/users?page=1")
    //     .then(function(res) {
    //         if (res.status === 200) {
    //             return res.json()
    //         }else {
    //             console.error("failed to fetch ");
    //         }

    //     })
    //     .then(function(data){
    //         console.log(data);
    //     })
    //     .catch(function(err){
    //         console.log(err.message);
    //     });;
    // } catch (e) {
    //     console.log("Failed to fetch + " , e);
    // }

    var div2 = document.createElement("div");
    var profileImg2 = document.createElement("img");
    var replyCont = document.createElement("div");
    var reply = document.createElement("p");

    var div = document.createElement("div");
    var profileImg = document.createElement("img");
    var questionCont = document.createElement("div");
    var question = document.createElement("p");

    div.setAttribute("id","question");
    question.innerHTML = search.value;
    questionCont.setAttribute("class", "questionTxt");
    profileImg.src = "/assets/profile.jpg";
    profileImg.setAttribute("id", "chatprofile");

    div2.setAttribute("id","reply");
    reply.innerHTML = replyText;
    replyCont.setAttribute("class", "replyTxt");
    profileImg2.src = "/assets/chatbot.png";
    profileImg2.setAttribute("id", "replyProfile");
     
    div.appendChild(questionCont);
    response.appendChild(profileImg);
    response.appendChild(div);
    questionCont.appendChild(question);

    div2.appendChild(replyCont);
    response.appendChild(profileImg2);
    response.appendChild(div2);
    replyCont.appendChild(reply);

    search.value = "";
}

search.addEventListener("keypress", function(event) {
    if(search.value.length > 0){
        if (event.key === "Enter") {
        console.log("Enter pressed " + search.value);
        txtSearch();
        
        // console.log(searchText);
    }}
    else {
        console.log("Please enter a search text");
    }
})

function generate(){
    async () => {
        try {
          // Fetch the response from the OpenAI API with the signal from AbortController
          const response = await fetch(API_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer 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`,
            },
            body: JSON.stringify({
              model: "gpt-3.5-turbo",
              messages: [{ role: "user", content: search.value }],
            }),
          });
      
          const data = await response.json();
          console.log(data.choices[0].messages.content);
        //   resultText.innerText = data.choices[0].message.content;
        } catch (error) {
          console.error("Error:", error);
        //   resultText.innerText = "Error occurred while generating.";
        }
    };

}




function changemode(mode){
    var body = document.querySelector("body");
    body.classList.toggle("darkmode"); 
    
    if(modeStatus == 1){
        mode.src = "/assets/lightmode.png"; //Change to darkmode
        modeStatus = 0;

    }else{
        mode.src = "/assets/darkmode.png"; //Change to lightmode
        modeStatus = 1;
    }

    
}

