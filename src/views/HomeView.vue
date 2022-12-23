<script setup>
</script>
<template>
  <main>
    <div class="d-flex flex-wrap" id="home">
      <div class="d-flex flex-column">
        <div class="d-flex flex-wrap justify-content-center align-item-center p-5">
          <a class="link" href="">B</a>
          <a class="link" href="">a</a>
          <a class="link" href="">m</a>
          <a class="link" href="">b</a>
          <a class="link" href="">o</a>
          <a class="link" href="">o</a>
          <a class="link" href="">K</a>
        </div>
        <div class="p-3" id="bienvenidos">
          <h4> <strong> Bienvenidos</strong> a nuestra red social mundial, destinada a la conexión exclusiva para
            ciudadanos, gobernantes, empresas o instituciones ecologistas.</h4>
        </div>
      </div>
      <div class="d-flex m-auto">
        <div v-if="!user" class="d-flex flex-column justify-content-center align-item-center p-1 gap-1">
          <button class="fb btn">
            <i class="fa fa-facebook fa-fw"></i> Login with Facebook
          </button>
          <button class="twitter btn">
            <i class="fa fa-twitter fa-fw"></i> Login with Twitter
          </button>
          <button class="google btn">
            <i class="fa fa-google fa-fw"></i> Login with Google+
          </button>
        </div>
        <div v-if="user" class="d-flex flex-wrap justify-content-center align-item-center p-1 gap-1">
          <button class="google btn">
            <i class="fa fa-google fa-fw"></i> Logout
          </button>
        </div>
      </div>

      <div>

      </div>
    </div>

  </main>

</template>
<style scoped>

#bienvenidos {
  text-shadow: 1px 1px 1px #afc957;
  display: flex;
  flex-wrap: wrap;
  text-align: center;

}

.link {
  text-decoration: none;
  -webkit-transition: 1s ease;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primario);
 
}

.link:hover {
  text-decoration: none;
  -webkit-transform: scale(1.5);
}

.fb {
  background-color: #3B5998 ;
  color: white;
}
.fb:hover {
  -webkit-transform: scale(1.1);
  transition: .2s;
  background-color: #3B5998 ;
  color: white;
}

.twitter {
  background-color: #55ACEE !important;
  color: white !important;
}
.twitter:hover {
  -webkit-transform: scale(1.1);
  transition: .2s;
  background-color: #55ACEE ;
  color: white;
}

.google {
  background-color: #dd4b39;
  color: white;
}
.google:hover{
  -webkit-transform: scale(1.1);
  transition: .2s;
  background-color: #dd4b39;
  color: white;
}
button{
  margin-top: 2rem;
  width: 17rem;
  height: 3rem;
}
#home {
  /* background-color: #e5e5f7; */
/* opacity: 0.5; */
/* background-image:  linear-gradient(135deg, #a7c957 25%, transparent 25%), linear-gradient(225deg, #a7c957 25%, transparent 25%), linear-gradient(45deg, #a7c957 25%, transparent 25%), linear-gradient(315deg, #a7c957 25%, #e5e5f7 25%);
background-position:  8px 0, 8px 0, 0 0, 0 0;
background-size: 8px 8px;
background-repeat: repeat; */
}
</style>