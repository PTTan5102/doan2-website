const btnlogin = document.querySelector(".dangxuat");

btnlogin.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "login.html";
})
//------------------------Menu-Slidebar-CARTEGORY --------------
const itemslidebar = document.querySelectorAll(".cartegory-left-li")
itemslidebar.forEach(function(menu,index){
    menu.addEventListener("click",function(){
        menu.classList.toggle("block")    
    })
})
//------------------------Product------------------------
const bigImg = document.querySelector(".product-content-left-big-img img")
const smallImg = document.querySelectorAll(".product-content-left-small-img img")
smallImg.forEach(function(imgItem,x){
    imgItem.addEventListener("click",function(){
        bigImg.src = imgItem.src
    })
})
const baoquan = document.querySelector(".baoquan")
const chitiet = document.querySelector(".chitiet")
const thamkhaosize = document.querySelector(".thamkhaosize")
const button = document.querySelector(".product-content-right-bottom-top")


if (baoquan){
    baoquan.addEventListener("click",function(){
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "none"
        document.querySelector(".product-content-right-bottom-content-thamkhaosize").style.display = "none"
        document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "block"
    })
}
if (chitiet){
    chitiet.addEventListener("click",function(){
        document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "none"
        document.querySelector(".product-content-right-bottom-content-thamkhaosize").style.display = "none"
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "block"
    })
}
if (thamkhaosize){
    thamkhaosize.addEventListener("click",function(){
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "none"
        document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "none"
        document.querySelector(".product-content-right-bottom-content-thamkhaosize").style.display = "block"
    })
}
if(button){
    button.addEventListener("click",function(){
        document.querySelector(".product-content-right-bottom-content-big").classList.toggle("active") 
    })
}
//------------------------Product------------------------
// const paymentbutton = document.querySelector(".payment_button");

// paymentbutton.addEventListener("click", (e) => {
//     e.preventDefault();
//     alert("Mua Hàng Thành Công");
//     window.location.href = "index.html";
//   }
// );
// ------------------------Cartegory------------------------
document.getElementById("showcart").style.display = "none";


const item = document.querySelector(".cartegory-right-content-item");
var cart = new Array(); 
function addcart(x){
       var item = x.parentElement.children;
       var img = item[0].children[0].src;
       var name = item[1].innerText;
       var price = item[2].children[0].innerText;
       var num = parseInt(item[3].value)
       var sp = new Array(img,name,price,num);

       var kt = 0 ;
       for (let i = 0; i <cart.length; i++){
            if (cart[i][1] == name){
                kt =1 ;
                num += parseInt(cart[i][3]);
                cart[i][3]= num;
                break;
            }
        }        
        if (kt == 0)
        {
        cart.push(sp);
        }
        showcountsp();
       sessionStorage.setItem("cart",JSON.stringify(cart));
       alert("Đã đặt hàng thành công");

}  
function showcountsp(){
    document.getElementById("countsp").innerHTML = cart.length;
}
function showmycart(){
    var ttgh="";
    var tong=0;
for (let i = 0; i <cart.length;i++)
{
    var tt = cart[i][2] * cart[i][3];
    tong += tt;
    ttgh+='<tr>' +
    '<td>'+(i+1)+'</td>'+
    '<td><img src= "'+cart[i][0]+'" alt=""></td>'+
    '<td><p>'+cart[i][1]+'</p></td>' +
    '<td><input type="number" value="'+cart[i][3]+'" min="1" max="100"></td>'+
    '<td><p>'+cart[i][2]+'<sup>đ</sup></p></td>'+
    '<td><p>'+tt+'.000'+'<sup>đ</sup></p></td>'+
    '<td><button onclick="xoasp(this)">Xóa</td>'+
    '</tr>';
}
ttgh += '<tr>'+
'<th colspan="6">Tổng đơn hàng </th>'+
'<th>'+
'<div><p>'+tong+'.000'+'<sup>đ</sup></p></div>'+
'</th>'+
'</tr>';
document.getElementById("mycart").innerHTML = ttgh;
}

function showcart(){
    var x = document.getElementById("showcart");
    if(x.style.display == "block"){
        x.style.display = "none";
    }
    else{
        x.style.display = "block"
        showmycart();
    }
}

function showcart_cart() {
    document.getElementById("showcart").style.display = "block";
    var gh = sessionStorage.getItem("cart");
    var cart = JSON.parse(gh);
    var ttgh="";
    var tong = 0;
for (let i = 0; i <cart.length;i++)
{
    var tt = cart[i][2] * cart[i][3];
    tong +=tt;
    ttgh+='<tr>' +
    '<td>'+(i+1)+'</td>'+
    '<td><img src= "'+cart[i][0]+'" alt=""></td>'+
    '<td><p>'+cart[i][1]+'</p></td>' +
    '<td><input type="number" value="'+cart[i][3]+'" min="1" max="100"></td>'+
    '<td><p>'+cart[i][2]+'<sup>đ</sup></p></td>'+
    '<td><p>'+tt+'.000'+'<sup>đ</sup></p></td>'+
    '</tr>';
}
ttgh += '<tr>'+
'<th colspan="5">Tổng đơn hàng </th>'+
'<th>'+
'<div><p>'+tong+'.000'+'<sup>đ</sup></p></div>'+
'</th>'+
'</tr>';
document.getElementById("mycart").innerHTML = ttgh;
}

function xoasp(x){
    var tr = x.parentElement.parentElement;
    var name = tr.children[2].innerText;
    tr.remove();
    alert(name);

    for (let i = 0; i < cart.length; i++){
        if(cart[i][1]== name){
            cart.splice(i,1);
        }
    }
    console.log(cart);
    showmycart();
}

function xoatatca(){
    cart=[];
    showmycart();
    showcountsp();
}