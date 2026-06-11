const inputE1=document.getElementById("input");
const infotechE1=document.getElementById("info-tech");
const meaningcontainerE1=document.getElementById("meaning-container");
const titleE1=document.getElementById("title");
const meaningE1=document.getElementById("Meaning");
const audioE1=document.getElementById("audio");
async function fetchAPI(word) {
    try{
        infotechE1.style.display="block";
        meaningcontainerE1.style.display="none";
        infotechE1.innerText=`searching the meaning of"${word}" `;
        const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const result=await fetch(url).then((res)=>res.json());
        if(result.title)
        {
            infotechE1.style.display="none"
            meaningcontainerE1.style.display="block";
            titleE1.innerText=word;
            meaningE1.innerText="N/A";
            audioE1.style.display="none";

        }
        else{
            infotechE1.style.display="none";
            meaningcontainerE1.style.display="block";

            titleE1.innerText=result[0].word;
            meaningE1.innerText=result[0].meanings[0].definitions[0].definition;

            if(result[0].phonetics.length > 0 && result[0].phonetics[0].audio){
                audioE1.style.display="inline-flex";
                audioE1.src=result[0].phonetics[0].audio;
    }
    else{
        audioE1.style.display="none";
    }
}
}
        catch(error){
            console.log(error);
            infotechE1.innerText=`an error happened,try again later`;

        }
}
        inputE1.addEventListener("keyup",(e)=>{
           if(e.target.value && e.key =="Enter"){
            fetchAPI(e.target.value);
           }
        
        })