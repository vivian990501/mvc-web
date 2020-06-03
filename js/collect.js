$.ajax({
    type: "get",
    url: "https://raw.githubusercontent.com/vivian990501/FileStorage/master/Collection_test.json",
    success: function (response) {
        let data= JSON.parse(response)
        create_collection(data)
        heart_click();
    },
});

// var data= [
//     {
//         ProductImage:"img/blog/blog-3.jpg",
//         ProductName:"WF-XB700"
//     },
//     {
//         ProductImage:"img/blog/blog-2.jpg",
//         ProductName:"WI-C600N"
//     },
//     {
//         ProductImage:"img/blog/blog-1.jpg",
//         ProductName:"WF-XB700",
//     },
//     {
//         ProductImage:"img/blog/blog-4.jpg",
//         ProductName:"WF-XB700",
//     },
//     {
//         ProductImage:"img/blog/blog-5.jpg",
//         ProductName:"WF-XB700",
//     },
//     {
//         ProductImage:"img/blog/blog-6.jpg",
//         ProductName:"WF-XB700",
//     }
// ]
var product_cards = document.querySelector('.product-cards');

function create_collection(array){
    array.forEach(el=>{
        let template = document.querySelector('#collect_template');
        let cloneContent = template.content.cloneNode(true);
        let card =cloneContent.querySelector('.card');
        card.setAttribute('value','1');
        let img = cloneContent.querySelector('.card-img');
        let productname = cloneContent.querySelector('.card-text');
        img.setAttribute('src', `${el.ProductImage}`);
        productname.innerText=`${el.ProductName}`;
        
        // let  heart_button= cloneContent.querySelector('.heart_button');
        // heart_button.addEventListener('click',function(){
        //     heart_button.offsetParent.classList.add('d-none');
        // })
        product_cards.appendChild(cloneContent);
        // debugger
    })
}
// create_collection(data);
function heart_click()
{
    let heart_button= document.querySelectorAll('.card .heart_button');
    heart_button.forEach(el=>
        el.addEventListener('click',function(){
        el.offsetParent.classList.add('d-none');
    })
    )
}