import React from 'react'
import toast from 'react-hot-toast'

const Home = () => {

const proList=[
    {
        name:"MackBook",
        price:120000,
        imgSrc:"https://imgs.search.brave.com/BRVI8Xzn4eK58_JWCfCTitX8vKVK14x29B1uIawOdmo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MzEyOTc0ODQwMDEt/ODAwMjIxMzFmNWEx/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRWOGZH/eGhjSFJ2Y0h4bGJu/d3dmSHd3Zkh4OE1B/PT0.jpeg",
        id:'1'
    },
    {
        name:"Hp",
        price:55000,
        imgSrc:"https://imgs.search.brave.com/HL0j5mBIHLgfiQNMHvD15NXo9qHGJ2BUQXzmXkDcY4Y/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NDIzOTM1NDUtMTBm/NWNkZTJjODEwP3E9/ODAmdz0xMDAwJmF1/dG89Zm9ybWF0JmZp/dD1jcm9wJml4bGli/PXJiLTQuMC4zJml4/aWQ9TTN3eE1qQTNm/REI4TUh4elpXRnlZ/Mmg4TVRCOGZHeGhj/SFJ2Y0NVeU1HTnZi/WEIxZEdWeWZHVnVm/REI4ZkRCOGZId3c.jpeg",
        id:'2'
    },
    {
        name:"Boat Headphone",
        price:3500,
        imgSrc:"https://imgs.search.brave.com/a2d7uqt_7GJUeLrl2n5GE3Rm8O7MCJsUepwtK4kdGiU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dmh2LnJzL2Rwbmcv/ZC80MTYtNDE2MTEz/M19oZWFkcGhvbmUt/cG5nLXBob3RvLWlt/YWdlLWJvYXQtaGVh/ZHBob25lcy1ibHVl/dG9vdGgtdHJhbnNw/YXJlbnQucG5n",
        id:'3'
    },
    {
        name:"Realme",
        price:9000,
        imgSrc:"https://imgs.search.brave.com/ORrTMLIsIc76PyZ1KD2W9SKyZoW9xfaKQAs6mHaXSik/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/NTg4NTEzNjI0ODYt/OThhNWQ1ODMyNDIy/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRaOGZI/SmxZV3h0WlNVeU1I/Qm9iMjVsZkdWdWZE/QjhmREI4Zkh3dw.jpeg",
        id:'4'
    }, {
        name:"Laptop Screen",
        price:5700,
        imgSrc:"https://imgs.search.brave.com/M51_b34GAeKg6SB0nMVGtz_L-cZcSiEbJsyTWJPFQzY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NzgwOTE4Nzk5MTUt/MzNlZTg2OWUyY2Q3/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRWOGZH/TnZiWEIxZEdWeUpU/SXdjMk55WldWdWZH/VnVmREI4ZkRCOGZI/d3c.jpeg",
        id:'5'
    },
]


const addToCart=(data)=>{
console.log(data)
toast.success("Added To Cart")
}
  return (
    <div className='home'> 
     
   {
    proList.map((el)=>(
        <ProductCart key ={el.id} imgSrc={el.imgSrc} name={el.name} price={el.price} id={el.id} handler={addToCart}/>
        )
    )
   }
    
    </div>
  )
}



const ProductCart=({name,id,price,handler,imgSrc})=>(
<div className='productCard'>
    <img src={imgSrc}/>
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={()=>handler({name,price,id,quantity:1,imgSrc})}>Add to Cart</button>
</div>
)
export default Home





