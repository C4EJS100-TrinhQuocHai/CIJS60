class Memes {
    id;
    name;
    image;
    dateModified;
    constructor(id, name, image, dateModified) {
        this.id = id
        this.name = name
        this.image = image
        this.dateModified = dateModified
    }
    show() {
        let meme = document.getElementById("container")
        meme.innerHTML = meme.innerHTML +
            `<div id ="meme">
            <div class="id">
            ID : ${this.id}
        </div>
        <div class="name">
            Name : ${this.name}
        </div>
        <div class="image">
            Image : <img src="${this.image}" alt="">
        </div>
        <div class="date">
            Date : ${this.dateModified}
        </div>
        <hr>        
        </div>`
    }
    update(data) {
        this.id = data.id
        this.name = data.name
        this.image = image
        this.dateModified = data.dateModified
    }
}

class memeCollection extends Memes {
    owner;
    memes;
    constructor(id, name, owner, memes) {
        super(id, name)
        this.owner = owner
        this.memes = memes
    }
    add(meme) {
       if (meme instanceof Memes) {
            this.memes.push(meme);
            console.log(this.memes);
        } else {
            console.log("wrong meme");
        }
    }
    update(id, data) {
        for (let i = 0; i < this.memes.length; i++) {
            if (this.memes[i].id == id) {
                this.memes[i].name = data.name;
                this.memes[i].image = data.image;
                this.memes[i].dateModified = data.dateModified;
            } else {
                continue;
            }
        }
    }
    delete(id) {
        for (let i = 0; i < this.memes.length; i++) {
            if (this.memes[i].id == id) {
                this.memes.splice(i, 1);
            } else {
                console.log("remove wrong id");
            }
        }
    }
    show() {
        let meme = document.getElementById("container")
        meme.innerHTML = meme.innerHTML +
            `<div id ="meme">
            <div class="id">
            ID : ${this.id}
        </div>
        <div class="name">
            Name : ${this.name}
        </div>
        <div class="owner">
            Owner : ${this.owner}
        </div>
        <div class="listmeme">
            List Meme :ID:${this.memes[0].id}, Tên: ${this.memes[0].name},Image:<img src="${this.memes[0].image}">,DateModified:${this.memes[0].dateModified}
            <br>
            List Meme :ID:${this.memes[1].id}, Tên: ${this.memes[1].name},Image:<img src="${this.memes[1].image}">,DateModified:${this.memes[1].dateModified}
        </div>
        <hr>
        
        </div>`
    }
}

let meme1 = new Memes(1, "???", "page 1.jpg", "13/04/2021") 
let meme2 = new Memes(2, "lll", "page 2.jpg", "14/04/2021")
meme1.show()
meme2.show()