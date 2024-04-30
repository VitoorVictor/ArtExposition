<template>
    <div class="container">
        <div class="row" >
            <BasedComponentProfile class="col-12  col-md-4"/>
            <BasedComponentProfile class="col-12  col-md-4"/>
            <BasedComponentProfile class="col-12  col-md-4"/>
            <BasedComponentProfile class="col-12  col-md-4"/>
            <BasedComponentProfile class="col-12  col-md-4"/>
            <BasedComponentProfile class="col-12  col-md-4"/>
        </div> 
    </div>
</template>


<script>
import BasedComponentProfile from '@/components/BasedComponentProfile.vue'

export default {

    

    name:'ArtistasView',
    components:{
        BasedComponentProfile
    }

}
</script> 