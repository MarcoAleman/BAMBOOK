<script setup>
</script>
<template>
  <div id="">




    <div class="p-4  d-flex flex-wrap justify-content-center align-item-center gap-1">
      <div class="card" style="width: 18rem;">
        <img
          src="https://cdn.unenvironment.org/s3fs-public/inline-images/trash.jpg"
          class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title ">Limpieza en grupo</h5>
          <p class="card-text"> </p>
          <div class="d-flex flex-wrap justify-content-center gap-1">

            <button type="button" class="btn btn-dark" id="link"><i class="bi bi-suit-heart"></i></button>
            <button type="button" class="btn btn-dark"><i class="bi bi-whatsapp"></i></button>

          </div>
        </div>
      </div>


      <div class="card" style="width: 18rem;">
        <img src="https://cdn.plainconcepts.com/wp-content/uploads/2020/02/Dise%C3%B1o-UX-UI.jpg" class="card-img"
          alt="...">
        <div class="card-body">
          <h5 class="card-title">UX/UI</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
          <div class="d-flex flex-wrap justify-content-center gap-1">
            <button type="button" class="btn btn-dark" id="link"><i class="bi bi-suit-heart"></i></button>
            <button type="button" class="btn btn-dark"><i class="bi bi-whatsapp"></i></button>
          </div>
        </div>
      </div>

      <div class="card" style="width: 18rem;">
        <img
          src="data:image/png;base64,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"
          class="card-img" alt="...">
        <div class="card-body">
          <h5 class="card-title">Desarrollo Web Front End</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
          <div class="d-flex flex-wrap justify-content-center gap-1">
            <button type="button" class="btn btn-dark" id="link"><i class="bi bi-suit-heart"></i></button>
            <button type="button" class="btn btn-dark"><i class="bi bi-whatsapp"></i></button>
          </div>
        </div>
      </div>

      <div class="card" style="width: 18rem;">
        <img src="https://www.enter.co/wp-content/uploads/2021/02/4401280-768x432.jpg" class="card-img" alt="...">
        <div class="card-body">
          <h5 class="card-title">Full Stack</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
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
</style>