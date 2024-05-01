<template>
    <div class="profile-card">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="card">
                        <div class="main-img"><img src="/img/background-1.png" alt="">
                        </div>
                        <div class="profile-img"></div>
                        <div class="main-text">
                            <h2>Personal Profile</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quaerat magni consequatur, soluta mollitia vitae aliquam quam sit voluptatem!</p>
                        </div>
                        <div class="socials">
                            <i class="bi bi-facebook"></i>
                            <i class="bi bi-twitter"></i>
                            <i class="bi bi-dribbble"></i>
                            <i class="bi bi-linkedin"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'BasedComponentProfile'
}
</script>
<style scoped>
    .profile-card{
        padding: 80px 0px;
    }
    .card{
        overflow: hidden;
        box-shadow: 0 0 8px rgba(0,0,0,0.5);
        border-radius: 15px;

    }
    .card:hover{
    transform: scale(1.04);
    }
    .col{
        max-width: 500px;
    }
    .main-img{
        width: 100%;
        height: 200px;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        background-position: center;
        background-size: cover;
        overflow: hidden;
    }
    .profile-img{
       background-image: url('/img/profile-1.png');
       background-position: center;
       background-size: cover;
       display: block;
       overflow: hidden;
       position: relative; 
       margin-left: auto;
       margin-right: auto;
       width: 140px;
       height: 140px;
       z-index: 1;
       border-radius: 50%;
       border: 5px solid #fff;
       margin-top: -80px;
    }

    .main-text{
        text-align: center;
        padding: 30px 0;
    }
    .main-text h2{
        text-transform: uppercase;
        font-weight: 900;
        font-size: 20px;
        padding: 0 0 20px;

    }
    .main-text p{
        font-size: 16px;
        padding: 0 35px;

    }
    .socials{
        text-align: center;
        padding-bottom: 20px;
    }
    .socials i{
        font-size: 20px;
        color: darkcyan;
        padding: 0 10px;
    }
    .socials i:hover {
        cursor: pointer;
        color: rgb(0, 85, 85);
    }
</style>