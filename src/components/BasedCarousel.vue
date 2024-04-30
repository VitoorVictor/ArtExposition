<template>
  <div class="container col-12 col-md-7 ">
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-touch="true" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <h5>Graffiti HeArt:</h5>
          <p class="card-text">Um projeto que busca trazer a arte do graffiti para comunidades carentes, oferecendo oportunidades de expressão artística para jovens em situação de vulnerabilidade.</p>
          <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
          <img src="/img/project-1.png" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <h5>Muros de Esperança:</h5>
          <p class="card-text">Este projeto visa transformar espaços urbanos através da arte, utilizando murais e intervenções artísticas para transmitir mensagens positivas, promover a inclusão social e inspirar a comunidade local.</p>
          <p class="card-text"><small class="text-body-secondary">Last updated 4 weakys ago</small></p>
          <img src="/img/project-2.png" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <h5>Colorindo Vidas:</h5>
          <p class="card-text">Um programa que utiliza a pintura mural como ferramenta para promover a conscientização sobre questões sociais e ambientais, além de proporcionar oportunidades de aprendizado e desenvolvimento pessoal para crianças e adolescentes.</p>
          <p class="card-text"><small class="text-body-secondary">Last updated 3 hours ago</small></p>
          <img src="/img/project-3.png" class="d-block w-100" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
        <i class="bi bi-caret-left-fill"></i>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next">
        <i class="bi bi-caret-right-fill"></i>
      </button>
    </div>
 </div>
</template>
<script>
export default {
    name:'BasedCarousel'
}
</script>
<style scoped>
  .carousel{
    margin-bottom: 30px;
  }
  .carousel-item{
    max-height: 900px;
  }
  i{
    color: #ffffff;
    font-size: 50px;
  }

</style>