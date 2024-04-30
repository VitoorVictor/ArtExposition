<template>
    <div class="Home-View">
      <MainBanner/>
      <div class="container text-center">
        <h2 class="highlights">Artes em Destaque</h2>
      </div>
      <div class="container">
        <div class="row">
            <div class="col-12 col-md-6">
              <ImageComponent imagem="imagem-3" title="Arte de Rua em São Paulo- Capital" born="Realizada em 13/09/2022"/>
            </div>
            <div class="col-12 col-md-6">
              <ImageComponent imagem="imagem-4" title="Pintura no Muro feito no Brooklyn" born="Realizada em 01/10/2018"/>
            </div>
            <div class="col-12 col-md-6">
              <ImageComponent imagem="imagem-5" title="Arte de Rua em Melbourne Laneways" born="Realizada em 11/11/2019"/>
            </div>
            <div class="col-12 col-md-6">
              <ImageComponent imagem="imagem-6" title="Arte de Rua em Londres" born="Realizada em 17/02/2021"/>
            </div>
          </div>
      </div>
    </div>
</template>
<script>
  import MainBanner from '../components/MainBanner.vue'
  import ImageComponent from '../components/ImageComponent.vue'
  export default{
    name: 'HomeView',
    components:{
      MainBanner,
      ImageComponent
    }
  }
</script>
<style scoped>
h2{
  margin-top: 20px;
}
</style>
