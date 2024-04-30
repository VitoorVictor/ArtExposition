<template>
    <div class="container" id="main">
        <div class="row" id="row">   
            <div class="col-12 border border-black bg-success container-fluid">
                <i class="bi bi-whatsapp col-1 offset-1 text-light"></i>
                <span class="col-10 text-light">ICONE DO WHATSAPP</span>
            </div>
            <div class="col-12 border border-black bg-danger container-fluid">                    
                <i class="bi bi-twitch col-1 offset-1 text-light "></i>
                <span class="col-10 text-light">ICONE DO TWITCH</span>
            </div>
            <div class="col-12 border border-black bg-primary container-fluid">                    
                <i class="bi bi-facebook col-1 offset-1 text-light"></i>
                <span class="col-10 text-light">ICONE DO FACEBOOK</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'gridBootstrap'
    }
</script>
<style scoped>
    #row,
    .container-fluid{
        height: 140px;
    }
    .container{
        margin-top: 30px;
    }
    i{
        font-size: 40px;
    }
    .col-12{
        align-items: center;
        
    }
</style>