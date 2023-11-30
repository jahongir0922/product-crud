<template>
  <div ref="block" class="block">
    <div id="nest2"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// const block = ref(null)
// function display_flex() {
//   block.value.style.display = 'flex'
// }
// function display_none() {
//   block.value.style.display = 'none'
// }
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.block {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #00000022;
  z-index: 10;
}

/* ======= PreLoader CSS Start  ========*/

#nest2 {
  height: 150px;
  width: 150px;
  position: relative;
  border: 5px solid transparent;
  border-top-color: #000000;
  /* box-shadow: 0 0 5px skyblue; */
  box-shadow: 0 0 15px skyblue;
  border-radius: 50%;
  -webkit-animation: spin8 2s linear infinite;
  animation: spin8 2s linear infinite;
}

#nest2:before {
  content: '';
  position: absolute;
  top: 21px;
  right: 21px;
  bottom: 21px;
  left: 21px;
  border: 5px solid transparent;
  border-radius: 50%;
  border-top-color: #000000;
  box-shadow: 0 0 15px skyblue;
  -webkit-animation: spin8 0.9s linear infinite;
  animation: spin8 0.9s linear infinite;
}

#nest2:after {
  content: '';
  position: absolute;
  top: 45px;
  right: 45px;
  bottom: 45px;
  left: 45px;
  border: 5px solid transparent;
  border-radius: 50%;
  border-top-color: #000000;
  box-shadow: 0 0 15px skyblue;
  -webkit-animation: spin8 1.5s linear infinite;
  animation: spin8 1.5s linear infinite;
}

@-webkit-keyframes spin8 {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}
@keyframes spin8 {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}
</style>
