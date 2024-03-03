//let url = 'https://poetrydb.org/random,linecount/1;10/title,author,lines.json'
//let url = 'https://poetrydb.org/author,title/Shakespeare;Sonnet'
let url = 'https://poetrydb.org/author/Amy Levy'
let url2 = 'https://poetrydb.org/authors'

const button = document.getElementById('button');
const poemZone = document.getElementById('poem');
let poemHolder = [];




async function requestPoem(url) {
    
    //REQUEST POEMS FROM API
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);



    //RANDOM POEM SELECT AND DISPLAY
    // const randomIndex = Math.floor(Math.random() * data.length);
    // console.log(randomIndex);
    // const poem = data[randomIndex]["lines"].join(' <br> ');
    // poemZone.innerHTML = poem;
   
   
   
    poemHolder = data;


    poemLister(data);


}

async function requestAuthors(url) {
    
    //REQUEST AUTHORS FROM API
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

}

requestPoem(url);
requestAuthors(url2)




// REPLACE RANDOM POEM WITH A DIFFERENT RANDOM POEM
function newPoem(data) {

    const randomIndex = Math.floor(Math.random() * data.length);
    const poem = data[randomIndex]["lines"].join(' <br> ');
    poemZone.innerHTML = poem;
}



function selectPoem(data, index) {

    const poem = data[index]["lines"].join(' <br> ');
    poemZone.innerHTML = poem;
    console.log(index);
}


//LIST ALL THE POEMS
function poemLister(data) {
const listOfTitles = data.map((poem, index) => {
   // console.log(poem.title);
    const node = document.createElement("option");
    node.innerHTML = `${poem.title}`;
   node.value = index;
   // node.innerText = poem.title;
   //node.setAttribute("onclick", "")
document.getElementById('poem-picker').appendChild(node);

})
//console.log(listOfTitles);
document.getElementById('poem-count').innerText= `${listOfTitles.length} poems available`
}



// setInterval(newPoem(poemHolder), 5000);    // how often reloads


// button.onclick = () => {
//     body.innerHTML = requestPoem(url)
// }