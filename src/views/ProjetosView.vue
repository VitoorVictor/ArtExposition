<template>
    <div class="body-projects container-fluid col-md-12">
        <div class="card container col-md-12">
            <div class="card-body">
                <h3 class="card-title">PROJETOS EM ANDAMENTO</h3>
            </div>
            <BasedCarousel class="card-img-bottom"/>
        </div>
        <div class="carad ">
            <h3 class="card-title offset-2">PROJETOS EM FINALIZADOS</h3>
            <div class="container d-flex flex-column"> 
                <div class="row justify-content-center">
                    <div class="col"><BasedCardProject :card="obj1"/></div>
                    <div class="col"><BasedCardProject :card="obj2"/></div>
                    <div class="col"><BasedCardProject :card="obj3"/></div>
                    <div class="col"><BasedCardProject :card="obj4"/></div>
                </div>
                <div class="row">
                    <div class="col"><BasedCardProject :card="obj5"/></div>
                    <div class="col"><BasedCardProject :card="obj6"/></div>
                    <div class="col"><BasedCardProject :card="obj7"/></div>
                    <div class="col"><BasedCardProject :card="obj8"/></div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

import BasedCardProject from "../components/BasedCardProject.vue"
import BasedCarousel from "../components/BasedCarousel.vue"
export default {

    name:'ProjetosView',
    components:{
        BasedCarousel,
        BasedCardProject
    },
    data(){
        return{
            obj1:{
                image:'/img/project-5.png',
                title:'Arte nas ruas',
                text: 'Transformando espaços urbanos em galerias a céu aberto, promovendo expressão criativa e inclusão social por meio de murais e intervenções artísticas.',

            },
            obj2:{
                image:'/img/project-6.png',
                title:'Pintura Solidária',
                text: 'Reunindo artistas voluntários para criar murais em espaços comunitários, proporcionando beleza e solidariedade às comunidades locais.',

            },
            obj3:{
                image:'/img/project-7.png',
                title:'Oficinas de Graffiti',
                text: 'Capacitando jovens em áreas urbanas por meio de oficinas de graffiti, promovendo aprendizado, expressão artística e conscientização social.',

            },
            obj4:{
                image:'/img/project-8.png',
                title:'Projeto Cores da Esperança',
                text: 'Utilizando a arte como terapia em hospitais e abrigos, oferecendo atividades de pintura para pessoas em situação de vulnerabilidade.',

            },
            obj5:{
                image:'/img/project-9.png',
                title:'Muros Coloridos',
                text: 'Paisagens urbanas transformadas em galerias de arte vibrantes, onde murais pintados à mão contam histórias e refletem a diversidade cultural da cidade.',

            },
            obj6:{
                image:'/img/project-10.png',
                title:'Arte em Favelas',
                text: 'Revitalizando favelas com murais e instalações artísticas criadas pelos próprios moradores, refletindo suas histórias e identidades.',

            },
            obj7:{
                image:'/img/project-11.png',
                title:'Arte do Cotidiano',
                text: 'Grafites que capturam a essência do cotidiano urbano, revelando a beleza e a complexidade da vida nas cidades através de imagens cativantes.',

            },
            obj8:{
                image:'/img/project-12.png',
                title:'Pintura Solidária',
                text: 'Murais efêmeros que transformam espaços urbanos temporariamente, criando experiências visuais únicas que se desvanecem com o tempo.',

            }
        };
    }
}
</script> 
<style scoped>
    .card{
        margin-bottom: 6rem;
        margin-top: 6rem;
        -webkit-box-shadow: 3px 6px 25px 2px rgba(150,150,150,1);
        -moz-box-shadow: 3px 6px 25px 2px rgba(150,150,150,1);
        box-shadow: 3px 6px 25px 2px rgba(150,150,150,1);
    }
    .BasedCarousel{
        z-index: 1;
    }
</style>