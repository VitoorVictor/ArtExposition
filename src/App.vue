<script>

  import Header from './components/Header.vue'
  import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue'
  export default{
    name: 'App',
    components:{
      Header,
      Navbar,
      Footer
    },
    computed: {
      routeNotFound() {
      return this.$route.meta.routeNotFound !== true;
    }
  }
  }
</script>

<template>
  <div>
    <Header v-if="routeNotFound"/>
    <Navbar v-if="routeNotFound"/>
    <router-view class="body"></router-view>
    <Footer v-if="routeNotFound" class="footer"/>
  </div>
</template>

<style>
*{
  color: #25282E;
}
.body{
  width: 100%;
  min-height: 60vh;
  position: relative;
}
a,i{
  transition: 0.5s;
  text-decoration: none;
}
.secondary-color{
  color: #555;
}
.center-image{
  background-size: cover;
  background-position: center;
}
.center-image-main{
  background-size: cover;
  background-position: bottom;
}
.highlights{
  margin-bottom: 30px;
}
.btn-no-border-radius {
    border-radius: 0 ;
    margin-bottom: 15px;
    }
.footer{
  bottom: 30px;
  width: 100%;

}



</style>
