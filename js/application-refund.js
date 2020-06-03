var refund_btn = document.getElementById("product_refund");
var change_btn = document.getElementById("product_change");
var member_account=document.getElementById("member_account");
var status= refund_btn.value ;
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
    var time = Date.now();
    console.log(time)
    debugger
    var orderid=document.querySelector('.application_refund_item_status_all h4').getAttribute('value');
    var JosnData = {
        Status: status,
        OrderID: parseInt(orderid),
        Reason: $('#reason').val(),
    
    };
})

