<template>
    <div class="menuF d-flex align-items-center justify-content-center">
        <div class="d-flex flex-wrap optionFooter align-items-center ">
            <router-link to="/homePosts"><font-awesome-icon class="icon"  icon="fa-solid fa-house" /></router-link>
            <router-link to="/createpost"><font-awesome-icon class="icon" icon="fa-solid fa-circle-plus" /></router-link>
            <router-link to="/perfil"><font-awesome-icon class="icon" icon="fa-solid fa-user" /></router-link>
        </div>
    </div>
</template>
<style scoped>
    .icon{
        height: 1.5rem;
        color: var(--primario);
    }
    .menuF{
        height: 2.7rem;
        width: 100%;
        background-color: black;
        bottom: 0;
        position: fixed;
    }
    .optionFooter{
        display: flex;
        justify-content: space-around;
        width: 100%;
    }
</style>