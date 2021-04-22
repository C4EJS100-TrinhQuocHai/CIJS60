function check(){
    let $Email = document.getElementById('email')
    let $Password = document.getElementById('password')
    if ($Email.value == ''){
        alert('nhập ngay cái email vào');
    }
    else if($Password.value == ''){
        alert('nhập cái password đi')
    }
    else {
        alert('done')
    }
}