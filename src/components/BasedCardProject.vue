<template>
    <div class="card" style="width: 18rem;">
        <img :src="card.image" class="card-img-top">
        <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{card.title}}</h5>
            <p class="card-text">{{ card.text }}</p>
            <a href="#" class="btn btn-primary mt-auto" role="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver mais.</a>
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
    name:'BasedCardProject',
    props: {
    card: {
      type: Object,
      required: true
    }
  }
    
}
</script>
<style scoped>
 .card-img-top{
    min-height: 230px;
    max-height: 230px;
 }
 .card{
    min-height: 470px;
 }
</style>