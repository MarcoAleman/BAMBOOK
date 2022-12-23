<script setup>
</script>
<template>
  <div id="eventos">




    <div class="p-4  d-flex flex-wrap justify-content-center align-item-center gap-1">
      <h1>UPCOMING EVENTS</h1>
      <div class="card" style="width: 18rem;">
        <img
          src="https://cdn.unenvironment.org/s3fs-public/inline-images/trash.jpg"
          class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title ">Limpieza en grupo</h5>
          <p class="card-text">Vamos a salir a limpiar en grupo el dia 12/01/22 desde todas partes del mundo. </p>
          <div class="d-flex flex-wrap justify-content-center gap-1">

            <button type="button" class="btn btn-dark" id="link"><i class="bi bi-suit-heart"></i></button>
            <button type="button" class="btn btn-dark"><i class="bi bi-whatsapp"></i></button>

          </div>
        </div>
      </div>


      <div class="card" style="width: 18rem;">
        <img src="https://eldia.com.do/wp-content/uploads/2019/10/20_Vida-Estilos_09_1p01.jpg?mrf-size=m" class="card-img"
          alt="...">
        <div class="card-body">
          <h5 class="card-title">Jornada de Plantatón</h5>
          <p class="card-text">Nos reunimos a realizar plantaciones en grupos desde todas partes del mundo.</p>
          <div class="d-flex flex-wrap justify-content-center gap-1">
            <button type="button" class="btn btn-dark" id="link"><i class="bi bi-suit-heart"></i></button>
            <button type="button" class="btn btn-dark"><i class="bi bi-whatsapp"></i></button>
          </div>
        </div>
      </div>

      <div class="card" style="width: 18rem;">
        <img
          src="https://conecta.tec.mx/sites/default/files/styles/header_full/public/2022-01/que-puedes-hacer-tu-para-cuidar-el-medio-ambiente.jpg?h=920929c4&itok=jLIvDkBu"
          class="card-img" alt="...">
        <div class="card-body">
          <h5 class="card-title">Preservar el medio ambiente</h5>
          <p class="card-text">Unete a nosotros en directo en zoom el 5/01/23 a 8:00hs </p>
          <div class="d-flex flex-wrap justify-content-center gap-1">
            <button type="button" class="btn btn-dark" id="link"><i class="bi bi-suit-heart"></i></button>
            <button type="button" class="btn btn-dark"><i class="bi bi-whatsapp"></i></button>
          </div>
        </div>
      </div>

      <div class="card" style="width: 18rem;">
        <img src="https://t2.ev.ltmcdn.com/es/posts/5/0/7/actividades_para_cuidar_el_medio_ambiente_1705_orig.jpg" class="card-img" alt="...">
        <div class="card-body">
          <h5 class="card-title">Aprender a reciclar</h5>
          <p class="card-text">El planeta necesita tus cuidados. Aprende a reciclar en el vivo por zoom el dia 15/02/22 a 17hs</p>
          <div class="d-flex flex-wrap justify-content-center gap-1">
            <button type="button" class="btn btn-dark" id="link"><i class="bi bi-suit-heart"></i></button>
            <button type="button" class="btn btn-dark"><i class="bi bi-whatsapp"></i></button>
          </div>
        </div>
      </div>
    </div>


  </div>

</template>
<style scoped>
#link {
  color: #ffffff;
}

#link:hover {
  color: #00FF00;
}
.card {
  border-radius: 23px;
/* background: #e0e0e0; */
/* box-shadow:  34px 34px 67px #5a5a5a, */
             /* -34px -34px 67px #ffffff; */
}
img {
  border-radius: 23px;
}
#eventos {
  background-color: #e5e5f7;
/* opacity: 0.5; */
background-image:  linear-gradient(135deg, #a7c957 25%, transparent 25%), linear-gradient(225deg, #a7c957 25%, transparent 25%), linear-gradient(45deg, #a7c957 25%, transparent 25%), linear-gradient(315deg, #a7c957 25%, #e5e5f7 25%);
background-position:  8px 0, 8px 0, 0 0, 0 0;
background-size: 8px 8px;
background-repeat: repeat;

}

</style>