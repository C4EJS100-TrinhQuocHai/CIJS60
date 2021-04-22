let $answer = document.getElementById('answer');

let $no = document.getElementById('no');
let count = 0;
$no.addEventListener('mouseenter', function(){
    $answer.classList.toggle('reverse');
    count++;
    if(count > 5) {
        $answer.style.display = "none";
    }
})

import {helloByFrench, helloByVietbamese} from "../bai giang 2/hello.js"
helloByFrench();
helloByVietbamese()

