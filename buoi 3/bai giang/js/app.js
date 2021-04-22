import Navbar from "./Navbar.js";
import ComicContainer from "./ComicContainer.js";
import ComicList from "./comicList.js";
import data from "./data.js";
console.console.log(data);
let json

 =JSON.stringify(data);
let $comicList= document.getElementById('my-list');
$comicList.setAttribute('comics',JSON.stringify(data));

// let $comicContainer = new ComicContainer();
// $comicContainer.setAttribute('name',"naru")
// // document.body.appendChild($comicContainer);
// let $content = document.querySelector('.content');
// $content.appendChild($comicContainer);