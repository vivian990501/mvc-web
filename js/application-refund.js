var refund_btn = document.getElementById("product_refund");
var change_btn = document.getElementById("product_change");
var member_account=document.getElementById("member_account");
refund_btn.addEventListener('click',function(){
    member_account.classList.remove('d-none');
    member_account.classList.add('d-block');
})
change_btn.addEventListener('click',function(){
    member_account.classList.remove('d-block');
    member_account.classList.add('d-none');
})

var img= document.getElementById("test");

var btn_send_refund = document.getElementsByClassName("btn_send_refund")[0];
btn_send_refund.addEventListener('click',function(){
    var defect_pic_list = document.getElementById("defect_pic").files[0];
    x = window.URL.createObjectURL(defect_pic_list);
    console.log(x);
    // var fr = new FileReader();
        // fr.readAsDataURL(defect_pic_list)
        // debugger
})

