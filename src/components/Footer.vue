<template>
    <div class="container">
        <div class="row row-cols-1 text-center">
            <div class="col">
                <h2 class="footer-description">Nos encontre nas redes sociais:</h2>
            </div>
            <div class="col">
                <i class="bi bi-facebook"></i>
                <a href="https://www.instagram.com/vitor.victor/"><i class="bi bi-instagram"></i></a>
                <i class="bi bi-twitter"></i>
            </div>
            <div class="col">
                <h2>Art © 2021</h2>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Footer'
}
</script>
<style scoped>
    .container{
        border-top: 1px solid #ccc;;
    }
    h2{
        font-size: 16px;
        color: #9c9c9c;
        font-style: bold;
        margin-bottom: 20px;
        margin-top: 40px;

    }
    i{
        font-size: 24px;
        color: #707070;
        margin: 0px 25px;
        cursor: pointer;
    }
    i:hover{
        color: #3a3a3a;
    }
</style>