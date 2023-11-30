<template>
  <div id="header">
    <nav class="nav_desktop">
      <div class="left">
        <RouterLink to="/"
          ><img class="logo" src="../assets/images/logo.svg" alt=""
        /></RouterLink>
        <a href="#section1">Продукты</a>
        <a href="#section2">Обучения</a>
        <a href="#">О нас</a>
        <a href="#footer">Контакты</a>
      </div>
      <div class="right">
        <RouterLink to="/sign_up">Регистрация</RouterLink>
        <RouterLink class="sign_in" to="/sign_in"
          ><span class="material-symbols-outlined"> arrow_right_alt </span
          >Войти</RouterLink
        >
      </div>
    </nav>
    <nav class="nav_phone">
      <div ref="menuModal" class="madal_menu"></div>
      <RouterLink to="/"
        ><img class="logo" src="../assets/images/logo.svg" alt=""
      /></RouterLink>
      <div ref="menuLinks" class="nav_phone_menu">
        <div class="nav_phone_links">
          <div @click="menuCloseFunc()" class="close">
            <img src="../assets/images/svg_icon/close.svg" alt="" />
          </div>
          <a @click="menuCloseFunc()" href="#section1">Продукты</a>
          <a @click="menuCloseFunc()" href="#section2">Обучения</a>
          <a @click="menuCloseFunc()" href="#">О нас</a>
          <a @click="menuCloseFunc()" href="#footer">Контакты</a>
          <RouterLink to="/sign_up">Регистрация</RouterLink>
        </div>
        <RouterLink class="sign_in2" to="/sign_in"
          ><span class="material-symbols-outlined"> arrow_right_alt </span
          >Войти</RouterLink
        >
      </div>
      <RouterLink class="sign_in" to="/sign_in"
        ><span class="material-symbols-outlined"> arrow_right_alt </span
        >Войти</RouterLink
      >
      <img
        @click="menuIconFunc()"
        src="../assets/images/svg_icon/menu.svg"
        alt=""
      />
    </nav>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
const menuLinks = ref(null);
const menuModal = ref(null);
window.onclick = function (event) {
  // console.log(event);
  if (event.target == menuModal.value) {
    menuModal.value.style.display = "none";
    menuLinks.value.style.display = "none";
  }
};
function menuIconFunc() {
  menuModal.value.style.display = "flex";
  menuLinks.value.style.display = "flex";
}
function menuCloseFunc() {
  menuModal.value.style.display = "none";
  menuLinks.value.style.display = "none";
}
</script>
<style lang="scss" scoped>
@import "../assets/variables";

#header {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  .nav_desktop {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    padding: 10px 15px;
    border-radius: 75px;
    @include media("<=tablet") {
      display: none;
    }
    .left {
      display: flex;
      align-items: center;
      gap: 40px;
      a {
        font-weight: 500;
        font-size: 13px;
        color: #000000;
      }
    }
    .right {
      display: flex;
      align-items: center;
      gap: 15px;
      a {
        font-weight: 500;
        font-size: 13px;
        color: #000000;
      }
      .sign_in {
        background-color: $blue_btn;
        font-weight: 500;
        font-size: 12px;
        padding: 9px 17px;
        color: #ffffff;
        display: flex;
        align-items: center;
        border-radius: 35px;
        span {
          font-weight: 500;
          font-size: 12px;
        }
      }
    }
  }
  .nav_phone {
    width: 100%;
    display: none;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    padding: 5px 15px;
    border-radius: 75px;
    @include media("<=tablet") {
      display: flex;
    }
    .madal_menu {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba($color: #181818, $alpha: 0.8);
      z-index: 10;
    }
    .display_flex {
      display: flex;
    }
    .nav_phone_menu {
      // display: flex;
      display: none;
      width: 90%;
      height: 95vh;
      padding: 25px 20px;
      position: fixed;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      top: 10px;
      right: 10px;
      border-radius: 20px;
      z-index: 11;
      background-color: #ffffff;

      .nav_phone_links {
        display: flex;
        width: 100%;
        align-items: flex-start;
        flex-direction: column;
        gap: 40px;
        // border: 1px solid red;
        .close {
          width: 100%;
          display: flex;
          justify-content: flex-end;
          img {
            width: 15px;
          }
        }
        a {
          font-weight: 500;
          font-size: 20px;
          color: #000000;
        }
      }
    }
    .sign_in2 {
      background-color: $blue_btn;
      font-weight: 500;
      font-size: 15px;
      padding: 15px 17px;
      color: #ffffff;
      display: flex;
      align-items: center;
      border-radius: 35px;
      span {
        font-weight: 500;
        font-size: 15px;
      }
    }
    .sign_in {
      background-color: $blue_btn;
      font-weight: 500;
      font-size: 12px;
      padding: 9px 17px;
      color: #ffffff !important;
      display: flex;
      align-items: center;
      border-radius: 35px;
      span {
        font-weight: 500;
        font-size: 12px;
      }
    }
  }
}
</style>
