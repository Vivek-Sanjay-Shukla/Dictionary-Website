const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const result = document.getElementById("result");
const sound = document.getElementById("sound");

const btn = document.getElementById("search-btn");

btn.addEventListener("click",() => {
    let inpWord = document.getElementById("inp-word").value;
    fetch(`${url}${inpWord}`)
    .then((res) => res.json()).then((data) => {

      let arr = data[0].meanings[0].definitions;
      let example1;
      for (let i = 0; i < arr.length; i++) {
         if (arr[i].example) {
           example1 = arr1[i].example;
           break;
         }
       }

      

      let arr1 = data[0].phonetics;
      let audio1;
      for (let i = 0; i < arr1.length; i++) {
         if (arr1[i].audio) {
           audio1 = arr1[i].audio;
           break;
         }
       }

      

        // console.log(data);

        result.innerHTML = `
            <div class="word">
            <h3>${inpWord} </h3>
            <button onclick="playSound()"><i class="fas fa-volume-up"></i></button>
            </div>

            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p></p>
            </div>

            <p class="word-meaning">
               ${data[0].meanings[0].definitions[0].definition}
            </p>

            <p class="word-example">
            ${example1 || ""}
            </p>
        `;

        sound.setAttribute("src",`${audio1}`);
        // console.log(sound);
    }).catch(()=>{
        result.innerHTML = `
          <h3 class = "error">Word Not Found</h3>
        `;
    })
});

function playSound(){
    sound.play();
}