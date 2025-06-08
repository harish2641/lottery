let b=document.getElementById("gifts")
let c=document.getElementById("bu")
let d=document.getElementById("fr")
let v=document.getElementById("pandu")
tick=new Audio("tap.wav")
winni=new Audio("winni.wav")
let a=[
    "₹100 cash",
    "Toy car",
    "choclate box",
    "₹0 cash","smart cover","book","headphones","₹10 cash","gift vocher",
    "₹60 cash","Bottle","Keboard","Fan","₹50 cash","gift vocher",
    "1watch","teddy bear","iphone","bulb","maggi",'jilebi',"pen","pencil","eraser","barisi","jiophone",
    "match box",'cycle',"₹5000 cash","gold","silvar","beer","Travel Bag","Wireless Mouse","KeyChain","Wallet"
    ,"Toy Robot","piggy Bag","Laptop Bag","Perfume","Sunglasses","DigitaPhotoFrame"
    ,"Shampoo","Bunny","Kurkure","Jocket","Helmat","Brush","candle","Fridge"
]

c.addEventListener("click",function(){
    for(let i=1;i<50;i++){
        document.getElementById(i).classList.remove("winnigbox")
    }
    d.textContent="Please Wait..."
    let count=0
    let intid=setInterval(function(){
        tick.pause()
        tick.currentTime=0
        tick.play()
        count++
        let random=Math.floor(Math.random()*50)+1
        console.log(random)
        for(let i=1;i<=50;i++){
            if(i==random){
                document.getElementById(i).classList.add("jira")
            }else{
                document.getElementById(i).classList.remove("jira")
            }
        }
        document.getElementById(random).classList.add("jira")
        if(count==5){
            let k=Math.random()*50
            let hs=Math.floor(k+1)
            let gju=a[hs-1]
            d.textContent=`you pick a number ${hs} you won   "${gju}"`
            document.getElementById(random).classList.remove("jira")
            document.getElementById(hs).classList.add("winnigbox")
            winni.pause()
            winni.currentTime=0
            winni.play()
            clearInterval(intid)
        }
    },1000)
   
})
a.forEach(function(value,i){
    let box=`<div class="sf" id=${i+1}>${i+1}. ${value}</div>`
    v.insertAdjacentHTML("beforeend",box)
    console.log(box)
})