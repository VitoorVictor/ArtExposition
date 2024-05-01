<template>
    <div class="container">
        <div class="row" >
            <div class="row col-md-4 border-end border-secondary mb-5">
                <div class="col-1 m-2">
                    <i class="bi bi-geo-alt-fill text-secondary"></i>
                </div>
                <div class="col mt-2">
                    <h4>Praça Miguel Rossafa - Zona III</h4>
                    <h5 class="secondary-color">Umuarama - PR, 87502-250</h5>
                </div>
            </div>
            <div class="col-md-8 mb-5 m-2">
                <BasedFormComponent/>
            </div>
            <div>
                <iframe  class="col-12" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.677171907489!2d-53.29910588824212!3d-23.758888868791416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f2d15715b4fb73%3A0xa6adf9671b0841b!2sPra%C3%A7a%20Miguel%20Rossafa%20-%20Zona%20III%2C%20Umuarama%20-%20PR%2C%2087502-250!5e0!3m2!1spt-BR!2sbr!4v1714534013118!5m2!1spt-BR!2sbr" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div> 
    </div>
</template>


<script>
import BasedFormComponent from '../components/BasedFormComponent.vue'

export default {
    name:'ContatosView',
    components:{
        BasedFormComponent
    }

}
</script> 
<style scoped>
    i{
        font-size: 40px;
    }
</style>