<template>
    <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Seu nome</span>
        <input type="text" class="form-control" placeholder="Nome completo" aria-label="Username" aria-describedby="basic-addon1">
    </div>
    <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Seu email" aria-label="Recipient's username" aria-describedby="basic-addon2">
        <span class="input-group-text" id="basic-addon2">@example.com</span>
    </div>
    <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="+55" aria-label="Username">
        <span class="input-group-text">Número para contato</span>
    </div>
    <div class="input-group mb-3">
        <span class="input-group-text">Seu comentário</span>
        <textarea class="form-control" aria-label="With textarea"></textarea>
    </div>
    <div class="input-group">
        <button type="submit" class="btn btn-dark mt-auto">Enviar</button>
    </div>
</template>
<script>
    export default{
        name: 'BasedFormComponent'
    }
</script>