<template>
  <div id="sign_in">
    <RouterLink to="/">
      <img class="logo" src="../assets/images/logo.svg" alt="" />
    </RouterLink>
    <div id="sign_in_card">
      <h1>Войти</h1>
      <form action="">
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Парол" />
        <input class="submit" type="submit" value="Войти" />
        <div class="form_links">
          <RouterLink to="/sign_up">Регистрация</RouterLink>
          <div></div>
          <RouterLink to="/sign_up">Забили парол?</RouterLink>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup></script>
<style scoped lang="scss">
#sign_in {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 10px;
  background-color: #fafafa;
  #sign_in_card {
    width: 500px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    padding: 50px 50px;
    background-color: #ffffff;
    border-radius: 15px;
    @include media("<=500px") {
      width: 100%;
    }
    h1 {
      font-weight: 500;
      font-size: 28px;
      color: #171818;
    }
    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      input {
        appearance: none;
        width: 100%;
        padding: 13px 16px;
        border: none;
        background: #f7f6f7;
        border-radius: 5px;
        font-size: 15px;
        font-weight: 500;
        line-height: 1.4;
        color: #171818;
        transition: border 0.25s ease-in-out, color 0.25s ease-in-out;
        &:focus {
          outline: 1px solid #171818;
        }
      }
      .submit {
        background-color: #1e88e5;
        color: #ffffff;
        font-weight: 500;
      }
      a {
        font-size: 15px;
        font-weight: 500;
        text-align: center;
        color: #1e88e5;
      }
      .form_links {
        display: flex;
        justify-content: center;
        gap: 10px;
        > div {
          border-left: 1px solid #171818;
        }
      }
    }
  }
  > a {
    padding: 20px;
    .logo {
      width: 100px;
    }
  }
}
</style>
