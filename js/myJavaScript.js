var shoppingCart = [
    {
        url:"img/bag.png",
        productName:"Blandit Blandit",
        model:"Product1",
        quantity:2,
        unitPrice:80
    },
    
    {
        url:"img/bag2.png",
        productName:"Deliver Wide",
        model:"Product2",
        quantity:3,
        unitPrice:100
    },
    
    {
        url:"img/hat.png",
        productName:"Hat",
        model:"Product3",
        quantity:1,
        unitPrice:50
    }              
];

var temp;

$(document).ready(function(){

    $(".td1").append("<img src='img/bag.png'>");
    $(".td2").append(shoppingCart[0].productName);
    $(".td3").append(shoppingCart[0].model);
    document.getElementById("inp1").value=shoppingCart[0].quantity;
    $(".td5").append(shoppingCart[0].unitPrice);
    var td6 = document.getElementById("td6");
    total1=shoppingCart[0].quantity*shoppingCart[0].unitPrice;
    td6.innerHTML=total1;
   
    
    $(".td7").append("<img src='img/bag2.png'>");
    $(".td8").append(shoppingCart[1].productName);
    $(".td9").append(shoppingCart[1].model);
    document.getElementById("inp2").value=shoppingCart[1].quantity;
    $(".td11").append(shoppingCart[1].unitPrice);
    var td12 = document.getElementById("td12");
    var total2=shoppingCart[1].quantity*shoppingCart[1].unitPrice;
    td12.innerHTML=total2;
    
    $(".td13").append("<img src='img/hat.png'>");
    $(".td14").append(shoppingCart[2].productName);
    $(".td15").append(shoppingCart[2].model);
    document.getElementById("inp3").value=shoppingCart[2].quantity;
    $(".td17").append(shoppingCart[2].unitPrice);
    var td18 = document.getElementById("td18");
    var total3=shoppingCart[2].quantity*shoppingCart[2].unitPrice;
    td18.innerHTML=total3;
    var total=0;
    var i;
    for(i=0 ; i < shoppingCart.length ; i++)
    {
        total += shoppingCart[i].quantity*shoppingCart[i].unitPrice;
    }
    
    $(".span1").append(total);
    $(".span2").append(20);
    $(".span3").append(total-20);
    $(".span4").append(shoppingCart[0].quantity+shoppingCart[1].quantity+shoppingCart[2].quantity);
    $(".span5").append(total);
    temp=total;

});

$("button.btn1").click(function(){
    var input1=document.getElementById("inp1").value;
    shoppingCart[0].quantity=input1;

    var td6 = document.getElementById("td6");
    total1=shoppingCart[0].quantity*shoppingCart[0].unitPrice;
    td6.innerHTML=total1;
    
    var total2=shoppingCart[1].quantity*shoppingCart[1].unitPrice;
    td12.innerHTML=total2;

    var td18 = document.getElementById("td18");
    var total3=shoppingCart[2].quantity*shoppingCart[2].unitPrice;
    td18.innerHTML=total3;
    
    var total=0;
    var i;
    for(i=0 ; i < shoppingCart.length ; i++)
    {
        total += shoppingCart[i].quantity*shoppingCart[i].unitPrice;
    }
    var sp1=document.getElementById("sp1");
    sp1.innerHTML=total;
    
    var sp2=document.getElementById("sp2");
    sp2.innerHTML=20;
    
    var sp3=document.getElementById("sp3");
    sp3.innerHTML=total-20;
    temp=total;

});

$("button.btn2_1").click(function(){
    var input2=document.getElementById("inp2").value;
    shoppingCart[1].quantity=input2;

    var td6 = document.getElementById("td6");
    total1=shoppingCart[0].quantity*shoppingCart[0].unitPrice;
    td6.innerHTML=total1;
    
    var total2=shoppingCart[1].quantity*shoppingCart[1].unitPrice;
    td12.innerHTML=total2;

    var td18 = document.getElementById("td18");
    var total3=shoppingCart[2].quantity*shoppingCart[2].unitPrice;
    td18.innerHTML=total3;
    
    var total=0;
    var i;
    for(i=0 ; i < shoppingCart.length ; i++)
    {
        total += shoppingCart[i].quantity*shoppingCart[i].unitPrice;
    }
    var sp1=document.getElementById("sp1");
    sp1.innerHTML=total;
    
    var sp2=document.getElementById("sp2");
    sp2.innerHTML=20;
    
    var sp3=document.getElementById("sp3");
    sp3.innerHTML=total-20;
    temp=total;
});

$("button.btn3_1").click(function(){
    var input3=document.getElementById("inp3").value;
    shoppingCart[2].quantity=input3;

    var td6 = document.getElementById("td6");
    total1=shoppingCart[0].quantity*shoppingCart[0].unitPrice;
    td6.innerHTML=total1;
    
    var total2=shoppingCart[1].quantity*shoppingCart[1].unitPrice;
    td12.innerHTML=total2;

    var td18 = document.getElementById("td18");
    var total3=(shoppingCart[2].quantity*shoppingCart[2].unitPrice);
    td18.innerHTML=total3;
    
    var total=0;
    var i;
    for(i=0 ; i < shoppingCart.length ; i++)
    {
        total += shoppingCart[i].quantity*shoppingCart[i].unitPrice;
    }
    var sp1=document.getElementById("sp1");
    sp1.innerHTML=total;
    
    var sp2=document.getElementById("sp2");
    sp2.innerHTML=20;
    
    var sp3=document.getElementById("sp3");
    sp3.innerHTML=total-20;
    temp=total;
   
});

$("button.btn1_2").click(function(){
    $("tr").remove(".tr1");
    total1=shoppingCart[0].quantity*shoppingCart[0].unitPrice;
    temp=temp-total1;
    
    var sp1=document.getElementById("sp1");
    sp1.innerHTML=temp;
    
    var sp2=document.getElementById("sp2");
    sp2.innerHTML=20;
    
    var sp3=document.getElementById("sp3");
    sp3.innerHTML=temp-20;   
});

$("button.btn2_2").click(function(){
    $("tr").remove(".tr2");
    total2=shoppingCart[1].quantity*shoppingCart[1].unitPrice;
    temp=temp-total2;
    
    var sp1=document.getElementById("sp1");
    sp1.innerHTML=temp;
    
    var sp2=document.getElementById("sp2");
    sp2.innerHTML=20;
    
    var sp3=document.getElementById("sp3");
    sp3.innerHTML=temp-20;   
});

$("button.btn3_2").click(function(){
    $("tr").remove(".tr3");
    total3=shoppingCart[2].quantity*shoppingCart[2].unitPrice;
    temp=temp-total3;
    
    var sp1=document.getElementById("sp1");
    sp1.innerHTML=temp;
    
    var sp2=document.getElementById("sp2");
    sp2.innerHTML=20;
    
    var sp3=document.getElementById("sp3");
    sp3.innerHTML=temp-20;    
});   
