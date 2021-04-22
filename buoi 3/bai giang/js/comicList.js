import ComicContainer from "./ComicContainer.js";

const $template = document.createElement('template');
$template.innerHTML = `
<div class ="comic-list"></div>
`
export default class ComicList extends  HTMLElement {
    constructor(){
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$list=this.querySelector('.comic-list');
    }
    static get observedAttributes(){
        return['comics'];
    }
    attributeChangedCallback(attrName,oldValue,newValue){
        if(attrName == 'comics'){
            console.log(newValue);
            let data = JSON.parse(newValue);
            for(let comicDate of date){
                let $comicContainer = new ComicContainer();
                $comicContainer.setAttribute('id',comicDate.id);
                $comicContainer.setAttribute('name',comicDate.name);
                $comicContainer.setAttribute('new-chapter',comicDate.newChapter);
                $comicContainer.setAttribute('image',comicDate.image);
                $comicContainer.setAttribute('release',comicDate.release);
                $comicContainer.setAttribute('hot',comicDate.hot);
                this.$list.appendChild($comicContainer);
            }
        }
    }
}
window.customElements.define('comic-list',ComicList)