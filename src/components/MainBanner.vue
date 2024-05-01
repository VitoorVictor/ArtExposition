<template>
    <div class="container" id="main-image-container">
        <div class="main-image center-image-main">
            <div class="main-image-info">
                <h2>Arte no Muro - de Heitor</h2>
                <p class="secondary-color">Realizada em 21/05/2019</p>
                <a href="#" class="btn btn-dark btn-no-border-radius" data-bs-toggle="modal" data-bs-target="#exampleModal" role="button">Detalhes</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'MainBanner'
}
</script>
<style scoped>

    .main-image{
        height: 480px;
        background-image: url('/img/img-2.png');
        margin-bottom: 30px;
        position: relative;
    }
    .main-image-info{
        background-color: white;
        padding: 25px;
        position: absolute;
        left: 25px;
        bottom: 25px;
    }
    


</style>