<template>
    <div class="container" id="container-image">
        <div :class=" ['col','image','center-image', {'imagem-3': imagem === 'imagem-3'},{'imagem-4': imagem === 'imagem-4'},{'imagem-5': imagem === 'imagem-5'},{'imagem-6': imagem === 'imagem-6'}]"></div>
        <div class="title-image">
            <h2 class="title">{{title}}</h2>
            <p class="secondary-color">{{ born}}</p>
            <a href="#" class="btn btn-dark btn-no-border-radius" role="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Detalhes</a>
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    </div>
                    <div class="modal-body">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem ipsum fuga, 
                    odio minus suscipit animi rerum quasi eos quaerat incidunt esse quibusdam mollitia magni, 
                    molestiae ea quod error. Cum dicta id ea? Animi et autem temporibus in labore minima, 
                    accusamus sapiente, dolores cum reprehenderit modi, excepturi fugit eaque deserunt? Iure praesentium 
                    placeat exercitationem corrupti autem vitae veritatis sint facilis vero, dolorem aspernatur. 
                    Fugit, harum fuga quas ipsa laborum quasi quibusdam numquam perspiciatis animi cum, 
                    alias, odit quam temporibus! Illum fugiat exercitationem aliquam vero, reiciendis rem vitae 
                    dicta incidunt. Molestiae iure sit animi rerum nisi consequuntur. Maiores quas nulla sed necessitatibus!
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'ImageComponent',
    props:['imagem','title','born']
    
}
</script>
<style scoped>
    .imagem-3{
        height: 390px;
        background-image: url('/img/img-3.jpg');
    }
    .imagem-4{
        height: 390px;
        background-image: url('/img/img-4.png');
    }
    .imagem-5{
        height: 700px;
        background-image: url('/img/img-5.png');
    }
    .imagem-6{
        height: 700px;
        background-image: url('/img/img-6.png');
    }
    .container{
        margin-bottom: 80px;
    }
</style>