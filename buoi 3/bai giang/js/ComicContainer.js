const $template = document.createElement('template');
$template.innerHTML = `
    <div class="comic-container">
        <div class="comic-image">
            <div class="comic-release">1 phút</div>
            <div class="comic-hot">Hot</div>
        </div>

        <div class="comic-info">
            <div class="comic-name">Attack on titan</div>
            <div class="comic-new-chapter">Chap 139</div>
        </div>
    </div>
`;

export default class ComicContainer extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$name=this.querySelector('.comic-name');
        this.$newChapter=this.querySelector('.comic-new-chapter');
        this.$image=this.querySelector('.comic-image');
        this.$release=this.querySelector('.comic-release');
        this.$hot=this.querySelector('.comic-hot');

    }

    // định nghĩa thuộc tính cho thẻ
    static get observedAttributes() {
        return ['name', 'new-chapter', 'release', 'image', 'hot'];
    }
    // chạy khi gia trị của thuộc tính được định ngĩa ở trên thay đổi
    attributeChangedCallback(attrName, newValue) {
        if (attrName == 'name') {
            this.$name.innerHTML = newValue;
        } else if (attrName == 'new-chapter') {
            this.$newChapter.innerHTML = newValue;
        } else if (attrName == 'hot') {
            console.log(newValue);
            if (newValue == 'true') {
                this.$hot.style.display = "inline-block";
            } else if (newValue == 'false') {
                this.$hot.style.display = "none";
            }
        }

    }
    // được chạy khi lần đầu xuất hiện trong app
    connectedCallback(){
        console.log("Lần đầu xuất hiện")
    }
    disconnectedCallback(){
        console.log("component đã bị xóa");
    }
}

window.customElements.define('comic-container', ComicContainer);