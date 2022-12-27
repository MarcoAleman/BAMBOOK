<script setup>

</script>

<template>
  <div>
    <div class="preloader" id="preloader">
      <div class="tree-body-1">
        <div class="tree-shadow"></div>
      </div>
      <div class="tree-body-2">
        <div class="tree-shadow"></div>
      </div>
      <div class="tree-body-3">
        <div class="tree-shadow"></div>
        <div class="trunk"></div>
      </div>
    </div>
  </div>
  <div class="boton">
    <router-link to="/home" class="d-flex justify-content-center "><button
        class="btn btn-success">Start</button></router-link>
  </div>
</template>

<style scoped>
.boton {
  margin-top: 40vh;
  margin-left: 5vw;
}


.preloader {
  position: relative;
}

.tree-shadow {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 19px solid transparent;
  border-right: 19px solid transparent;
  border-bottom: 30px solid #000;
  left: -19.6px;
  top: -3px;
  z-index: -10;
}

.tree-body-1 {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  border-bottom: 25px solid #007C00;
  left: 49vw;
  margin-top: 20vh;
  -webkit-animation: grow-top 5s infinite;
  -moz-animation: grow-top 5s infinite;
  -o-animation: grow-top 5s infinite;
  animation: grow-top 5s infinite;
}

.tree-body-2 {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  border-bottom: 25px solid #007C00;
  left: 49vw;
  margin-top: 20vh;
  -webkit-animation: grow-middle 5s infinite;
  -moz-animation: grow-middle 5s infinite;
  -o-animation: grow-middle 5s infinite;
  animation: grow-middle 5s infinite;
}

.tree-body-3 {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  border-bottom: 25px solid #007C00;
  left: 49vw;
  margin-top: 20vh;
}

.trunk {
  position: absolute;
  width: 8px;
  height: 15px;
  background: #9A6447;
  left: -6px;
  margin-top: 18px;
  z-index: -1;
  border: 2px solid #000;
  box-shadow: 1px 2px 15px 1px #333;
}

.trunk::after {
  content: "BambooK";
  position: relative;
  left: -46px;
  top: 25px;
  font-family: "Arial Black", Gadget, sans-serif;
  font-size: 1.2em;
  text-align: center;
  letter-spacing: 2px;
  color: #007C00;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}

/** Mozilla Animation Keyframes ***/
@-moz-keyframes grow-middle {
  0% {
    top: 0;
  }

  20% {
    top: 0;
  }

  50% {
    top: -15px;
  }

  100% {
    top: -15px;
  }
}

@-moz-keyframes grow-top {
  0% {
    top: 0px;
    border-color: transparent;
  }

  20% {
    top: 0;
  }

  50% {
    top: -15px;
  }

  100% {
    top: -30px;
  }
}

/* Safari Animation Keyframes */
@-webkit-keyframes grow-middle {
  0% {
    top: 0;
  }

  20% {
    top: 0;
  }

  50% {
    top: -15px;
  }

  100% {
    top: -15px;
  }
}

@-webkit-keyframes grow-top {
  0% {
    top: 0px;
    border-color: transparent;
  }

  20% {
    top: 0;
  }

  50% {
    top: -15px;
  }

  100% {
    top: -30px;
  }
}

/* Opera Animation Keyframes */
@-o-keyframes grow-middle {
  0% {
    top: 0;
  }

  20% {
    top: 0;
  }

  50% {
    top: -15px;
  }

  100% {
    top: -15px;
  }
}

@-o-keyframes grow-top {
  0% {
    top: 0px;
    border-color: transparent;
  }

  20% {
    top: 0;
  }

  50% {
    top: -15px;
  }

  100% {
    top: -30px;
  }
}

/* Standard Animation Keyframes */
@keyframes grow-middle {
  0% {
    top: 0;
  }

  20% {
    top: 0;
  }

  50% {
    top: -15px;
  }

  100% {
    top: -15px;
  }
}

@keyframes grow-top {
  0% {
    top: 0px;
    border-color: transparent;
  }

  20% {
    top: 0;
  }

  50% {
    top: -15px;
  }

  80% {
    top: -30;
  }

  100% {
    top: -30px;
  }
}
</style>