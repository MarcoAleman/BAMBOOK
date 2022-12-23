<template>


    <div class="p-2 d-flex flex-column justify-content-center align-item-center" id="about">
      <img class="img1 " src="../assets/img/2020-06-05-día-mundial-del-medio-ambiente-jpg.jpg" alt="">
    
      <div class="accordion p-2" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button class="accordion-button" style="background-color: #a7c957;" type="button" data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne">
           About Us
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne">
            <div class="accordion-body">
              <strong>Somos una organizacion mundial</strong> que entiende que el todo es mas que la suma de las partes(Teoria de la Gestalt). Logramos una comunicacion entre la comunidad ecologista por medio de Bamboo una red social mundial.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button class="accordion-button collapsed" style="background-color: #a7c957;" type="button"
              data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo">
              Mission
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo">
            <div class="accordion-body">
              <strong>Bambook cuenta con varias secciones</strong> <ul>
                <li>Un chat que permite la coneccion entre sus usuarios.</li>
                <li>La seccion marcketplace hace posible las ventas de articulos realizados por reciclado.</li>
                <li>Los posts hace posible el flujo de informacion, ideas y pensamientos entre sus usuarios.</li>
                <li>Una seccion de eventos que brinda informacion de los dias y horarios en los que se llevan a cabo los mismos.</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingThree">
            <button class="accordion-button collapsed" style="background-color: #a7c957;" type="button"
              data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree">
              Vision
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree">
            <div class="accordion-body">
              <strong>Our vision is</strong> incrementar la red de personas ecologistas para unir fuerzas por la lucha por un entorno sano. 
            </div>
          </div>
        </div>
      </div>
  
    </div>
  
  </template>
  
  <style>
  #about {
    min-height: 100vh;  
    background-color: #e5e5f7;
/* opacity: 0.5; */
background-image:  linear-gradient(135deg, #a7c957 25%, transparent 25%), linear-gradient(225deg, #a7c957 25%, transparent 25%), linear-gradient(45deg, #a7c957 25%, transparent 25%), linear-gradient(315deg, #a7c957 25%, #e5e5f7 25%);
background-position:  8px 0, 8px 0, 0 0, 0 0;
background-size: 8px 8px;
background-repeat: repeat;
  }
  .img1 {
    min-height: 100px;
border-radius: 1rem;

  }
  </style>
  