<template>
    <div class="container-fluid" id="main">
        <header class="row" id="header">
            <div id="logo-container">
                <i class="bi bi-feather"></i>
                <i id="art">Art</i>
            </div>
            <p>Exibição de Artes Urbanas</p>
        </header>
    </div>
</template>
<script>
    export default{
        name: 'Header'
    }
</script>
<style scoped>
    #header{
        text-align: center;
        padding: 20px;
        border: 1px solid #ccc;
    }
    #header p {
        margin-bottom: 0px;
    }
    #logo-container{
        display: flex;
        justify-content: center;  
    }
    .bi-feather{
        font-size: 36px;
        position: relative;
    }
    #art{
        font-size: 40px;
    }

</style>