<template>
  <footer id="footer" class="container">
    <div class="footer_div">
      <div class="logo_and_social">
        <ul class="footer_logo">
          <img class="logo" src="../assets/images/logo.svg" alt="" />
          <p>Школа программирования</p>
        </ul>
        <ul class="social">
          <a href=""
            ><img src="../assets/images/svg_icon/instagram.svg" alt=""
          /></a>
          <a href="">
            <img src="../assets/images/svg_icon/vkontact.svg" alt="" />
          </a>
          <a href="">
            <img src="../assets/images/svg_icon/facebook.svg" alt=""
          /></a>
          <a href="">
            <img src="../assets/images/svg_icon/youtube.svg" alt="" />
          </a>
        </ul>
      </div>
      <ul class="footer_links">
        <a href="#section1">Чему вы научитесь</a>
        <a href="#section3">Процесс обучения</a>
        <a href="#section2">Стоимость</a>
        <a href="#footer">Контакты</a>
        <RouterLink to="sign_up">Регистрация</RouterLink>
      </ul>
      <div class="contacts">
        <ul>
          <li class="tel">+998 (91) 159 94 22</li>
          <li class="email">mira5146@mail.ru</li>
          <li>Кодиров Жахонгир</li>
        </ul>
      </div>
    </div>
    <hr />
    <ul class="footer_ul">
      <li>© 2023 CRUD — Все права защищены</li>
      <a href="">Пользовательское соглашение</a>
      <a href="">Политика конфиденциальности</a>
    </ul>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../assets/variables";

#footer {
  display: flex;
  flex-direction: column;
  gap: 30px;
  @include media("<=1160px") {
    width: 100%;
  }
  .footer_div {
    display: grid;
    grid-template-columns: repeat(3, 60% 20% 20%);
    @include media("<=tablet") {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 40px;
    }
    .logo_and_social {
      display: flex;
      flex-direction: column;
      gap: 40px;
      @include media("<=tablet") {
        align-items: center;
      }
      .footer_logo {
        display: flex;
        gap: 20px;
        img {
          width: 90px;
          height: 32px;
        }
        p {
          width: 150px;
          font-weight: 400;
          font-size: 16px;
          color: #8e8e8e;
        }
      }
      .social {
        display: flex;
        gap: 15px;
        a {
          img {
            width: 35px;
          }
        }
      }
    }
    .footer_links {
      display: flex;
      flex-direction: column;
      gap: 25px;
      @include media("<=tablet") {
        text-align: center;
      }
      a {
        font-weight: 400;
        font-size: 13px;
        color: #22253b;
      }
    }
    .contacts {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @include media("<=tablet") {
        gap: 40px;
        text-align: center;
      }
      ul {
        .tel {
          font-weight: 400;
          font-size: 16px;
          color: $blue_btn;
        }
        .email {
          font-weight: 400;
          font-size: 16px;
          color: #22253b;
        }
      }
      .adress {
        li {
          font-weight: 400;
          font-size: 13px;
          color: #8e8e8e;
        }
      }
    }
  }
  hr {
    border: 1px solid #d8d8d8;
  }
  .footer_ul {
    display: grid;
    grid-template-columns: repeat(3, 55% 22% 23%);
    @include media("<=tablet") {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 13px;
    }
    li,
    a {
      font-weight: 400;
      font-size: 16px;
      color: #8e8e8e;
      @include media("<=tablet") {
        font-size: 12px;
      }
    }
    a {
      @include media("<=tablet") {
        color: #f15525;
      }
    }
  }
}
</style>
