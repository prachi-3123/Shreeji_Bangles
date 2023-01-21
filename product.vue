<template>
  <div style="width: 700px;height: 400px;">
    <header class=x>
      
        <button style="padding-right: 0px;right: auto;left: 400px;" v-on:click="navigateTo('products')">View Product</button>

     <div style="right: 150px; color:black"> {{cart.length}} in cart</div>
    
      <button style="right: auto;left: 400px;" v-on:click="navigateTo('cart')">view cart</button>

    </header>




<div v-if="page ==='cart'">
 
 

  <div>total: {{total}} </div>
    <h1 style="font-size:50px">Your Cart</h1>
    <div class="products">
      <div v-for="(product, index) in cart" :key="index">
        <h3>{{product.name}}</h3>
        <div class="cost">{{product.cost}}</div>
        <div class="context">{{product.context}}</div>
        <img :src="product.image" />
        <button v-on:click="removedItemFromCart(product)">Removed from cart</button>
      </div>

    </div>
 
 <div> <button style="color: green"><a href="/payment" type="button"> checkout</a></button></div>
</div>

<div v-if="page ==='products'">
     <h1 style="font-size:10px;">
      <br>
     </h1>
    <div class="products">
     <div v-for="(product, index) in products" :key="index">
        <h3>{{product.name}}</h3>
        <div class="cost">{{product.cost}}</div>
        <div class="context">{{product.context}}</div>
        <img :src="product.image" />
        <button v-on:click="addItemToCart(product)">Add to cart</button>
      </div>
    </div>
  </div>
  </div>


</template>

<script>
export default {
  data: () => {
    return {
      page:"products",
      cart:[],
      products: [
        {
          name: "Design_No: 007846",
          cost: "Cost: ₹8000",
          context:"Details: Classic with 18 cart of gold",
          image:
            "https://th.bing.com/th/id/OIP.Tt-raGkFWdb7GLW0YAv-pgHaHB?pid=ImgDet&rs=1"
        },
        
        {
          name: "Design_No: 009985",
          cost: "Cost: ₹12000",
          context:"Details: classic with 18 cart of gold",
          image:
            "https://5.imimg.com/data5/GE/AH/PY/SELLER-84633020/designer-gold-bangles--250x250.jpg"
        },
        {name: "Design_No: 008765",
          cost: "Cost: ₹19000",
          context:"Details: classic with 18 cart of gold",
          image:
            "https://savoryjewellery.com/wp-content/uploads/2018/05/SJBA068-Traditional-Gold-Bangles.jpg"
        },
        {name: "Design_No: 005433",
          cost: "Cost: ₹22000",
          context:"Details: classic with 18 cart of gold",
          image:
            "https://www.dhanalakshmijewellers.com/wp-content/uploads/2020/03/HollowGoldBangles3.jpg"
        },
        {name: "Design_No: 006722",
          cost: "Cost: ₹17000",
          context:"Details: classic with 18 cart of gold",
          image:
            "https://image.ejohri.com/catalog/product/145/4CHU15-1.jpg"
        },
        {name: "Design_No: 002267",
          cost: "Cost: ₹12000",
          context:"Details: classic with 18 cart of gold",
          image:
            "http://3.bp.blogspot.com/-0V9jYT6cCGY/UOf5H_Lpq7I/AAAAAAAAHuc/MYd5p33VKvM/s1600/Gold-Bangle-Collection.jpg"
        },
        {name: "Design_No: 008742",
          cost: "Cost: ₹21000",
          context:"Details: classic with 18 cart of gold",
          image:
            "https://kinclimg1.bluestone.com/f_jpg,c_scale,w_515,b_rgb:f0f0f0/giproduct/BIDG0086B41_YAA18DIG6XXXXXXXX_ABCD00-PICS-00002-1024-33626.png"
        },
        {name: "Design_No: 006731",
          cost: "Cost: ₹20100",
          context:"Details: classic with 18 cart of gold",
          image:
            "https://5.imimg.com/data5/PS/YF/UL/SELLER-27282183/gold-bangles-500x500.jpg"
        },
        
      ]
    };
  },
  methods: {
    addItemToCart(product) {
      this.cart.push(product);
    },
    removedItemFromCart(product){
      this.cart.splice(this.cart.indexOf(product));
    },
    navigateTo(page){
      this.page=page;
    },
    
  },
  components: {}
};
</script>




<style >
  body{
    margin:0;
    overflow: hidden;
  }

</style>


<style scoped>
.products{
  display:grid;
  width: 130%;
  grid-template-columns:1fr 1fr 1fr ;
  grid-gap: 20px;
  color:#212121;
  background-color: peachpuff;
}

.x{
  height: 100px;
  width: 130%;
  background-color:peachpuff;
  box-shadow: 2px 2px 5px #999;
  text-align: center;
  font-size: 25px;
  height: 100px;
  padding-top: 30px;
}

button{
    width: 200px;
    padding: 10px 0;
    text-align: center;
    margin: 10px 05px;
    border-radius: 20px;
    font-weight: bold;
    border: 2px solid #009688;
    background: transparent;
    color: #212121;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}


</style>