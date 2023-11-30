<template>
  <Preloader style="z-index: 15" v-if="preloader" />
  <div id="home">
    <div class="container">
      <MyHeader />
    </div>
    <div class="container" id="section1">
      <div class="justify_between">
        <h1>Продукты</h1>
        <span @click="add_product()" title="Add product" class="icon_add">
          <img src="../assets/images/svg_icon/add.svg" alt="" />
        </span>
      </div>
      <TransitionGroup
        id="cards"
        name="list"
        tag="ul"
        appear=""
        @before-enter="beforeEnter"
        @enter="enter"
      >
        <li
          v-for="(product, index) in products"
          class="card"
          :key="index"
          :data-index="index"
        >
          <img src="../assets/images/svg_icon/clipart.png" alt="" />
          <h3>{{ product.name_uz }}</h3>
          <div>
            <p>Адрес</p>
            <p>
              {{ product.address }}
            </p>
          </div>
          <div>
            <p>Число</p>
            <p>
              {{
                new Date(product.created_date).getDate() +
                "-" +
                String(new Date(product.created_date).getMonth() + 1).padStart(
                  2,
                  "0"
                ) +
                "-" +
                new Date(product.created_date).getFullYear()
              }}
            </p>
          </div>
          <div>
            <p>Цена</p>
            <p>
              {{ product.cost }}
            </p>
          </div>
          <div>
            <span class="justify_center">
              <img
                @click="edit_product(product)"
                class="edit_icon"
                src="../assets/images/svg_icon/edit.svg"
                alt=""
              />
            </span>
            <span @click="del_product(product.id)">
              <img
                class="delete_icon"
                src="../assets/images/svg_icon/delete.svg"
                alt=""
              />
            </span>
          </div>
        </li>
      </TransitionGroup>

      <vue-awesome-paginate
        :total-items="totalItems"
        :items-per-page="perPage"
        :max-pages-shown="5"
        v-model="currentPage"
        :on-click="onClickHandler"
      />
    </div>
    <div class="loudspeak container">
      <img src="../assets/images/svg_icon/loudspeaker.svg" alt="" />
      <p>
        Все блоки проходятся строго по порядку. Пропустить какой-то блок или
        начать обучение с середины нельзя, даже если вы считаете, что уже знаете
        какую-то часть материала. Только так мы можем гарантировать, что вы
        получите все знания, предусмотренные учебной программой.
      </p>
      <RouterLink to="/sign_up" class="start_test_btn"
        >Начать обучение<span class="material-symbols-outlined">
          north_east
        </span></RouterLink
      >
    </div>
    <MyFooter />
  </div>
</template>
<script setup>
import MyHeader from "../components/MyHeader.vue";
import MyFooter from "../components/MyFooter.vue";
import Preloader from "../components/Preloader.vue";
import Swal from "sweetalert2";
import { ref } from "vue";
import axios from "axios";
import { gsap } from "gsap";
const preloader = ref(false);
const products = ref([]);
const product_types = ref([]);
////pagination
const onClickHandler = (page) => {
  get_products();
  location.href = "#cards";
};
const totalItems = ref(100);
const currentPage = ref(1);
const perPage = ref(12);

////pagination
///transition
const beforeEnter = (el) => {
  el.style.opacity = 0;
  el.style.transform = "translateY(100px)";
};
const enter = (el, done) => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 0.1,
    onComplete: done,
    delay: el.dataset.index * 0.2,
  });
};
///transition

function get_products() {
  preloader.value = true;
  products.value = [];
  axios
    .get(`/product/?page=${currentPage.value}&perPage=${perPage.value}`)
    .then((res) => {
      preloader.value = false;
      products.value = res.data;
      if (
        res.data.length == perPage.value &&
        perPage.value * currentPage.value == totalItems.value
      ) {
        totalItems.value += perPage.value;
      }
      // products.value.forEach((item) => {
      //   axios.delete(`/product/${item.id}`);
      // });
    })
    .catch((err) => {
      preloader.value = false;
      console.log(err.message);
      products.value = res.data;
    });
}
async function add_product() {
  // for (let i = 0; i < 30; i++) {
  //   axios.post("/product/", {
  //     name_uz: `new product ${i}`,
  //     cost: 12,
  //     address: `somewhere ${i}`,
  //     product_type_id: 2,
  //     created_date: new Date(),
  //   });
  // }

  /////
  let get_product_types_option = async () => {
    let text;
    product_types.value?.forEach((item) => {
      text += `<option value="${item.id}">${item.name_uz}</option>`;
    });
    return text;
  };
  const { value: formValue } = await Swal.fire({
    title: `Добавить продукт`,
    customClass: "alert-width",
    html:
      '<input id="swal-input1" type="text" class="input-modal" placeholder="Название"> ' +
      '<input id="swal-input2" type="text" class="input-modal" placeholder="Адрес">' +
      '<input id="swal-input3" type="number" class="input-modal" placeholder="Цена">' +
      '<select id="swal-input4" class="input-modal">' +
      "<option disabled selected value=''>Выберите категорию</option>" +
      (await get_product_types_option()) +
      "</select class='input-modal input'>",
    showCancelButton: true,
    preConfirm: () => {
      let resultObject = {
        input1: document.getElementById("swal-input1").value,
        input2: document.getElementById("swal-input2").value,
        input3: document.getElementById("swal-input3").value,
        input4: document.getElementById("swal-input4").value,
      };
      if (
        !resultObject.input1 ||
        !resultObject.input2 ||
        !resultObject.input3 ||
        !resultObject.input4
      ) {
        Swal.showValidationMessage(
          "<i class='fa fa-info-circle'></i> Заполните все поля"
        );
        return null;
      } else {
        return [
          document.getElementById("swal-input1").value,
          document.getElementById("swal-input2").value,
          document.getElementById("swal-input3").value,
          document.getElementById("swal-input4").value,
        ];
      }
    },
  });
  if (formValue) {
    axios
      .post("/product/", {
        name_uz: formValue[0],
        address: formValue[1],
        cost: formValue[2],
        product_type_id: formValue[3],
        created_date: new Date(),
      })
      .then((res) => {
        console.log(res);
        get_products();
        Swal.fire({
          icon: "success",
          title: "Продукт добавлен",
        });
      })
      .catch((err) => {
        console.log(err.message);
        Swal.fire({
          icon: "error",
          title: "Нет соединения с интернетом",
          text: "Пожалуйста, попробуйте еще раз",
        });
      });
  }
}
async function edit_product(product) {
  let get_product_types_option = async () => {
    let text;
    product_types.value?.forEach((item) => {
      text += `<option value="${item.id}">${item.name_uz}</option>`;
    });
    return text;
  };
  const { value: formValue } = await Swal.fire({
    title: `Изменить продукт`,
    customClass: "alert-width",
    html:
      `<input value="${product.name_uz}" id="swal-input1" type="text" class="input-modal" placeholder="Название"> ` +
      `<input value="${product.address}" id="swal-input2" type="text" class="input-modal" placeholder="Адрес">` +
      `<input value="${product.cost}" id="swal-input3" type="number" class="input-modal" placeholder="Цена">` +
      `<select id="swal-input4" class="input-modal">` +
      "<option disabled selected value=''>Выберите категорию</option>" +
      (await get_product_types_option()) +
      "</select class='input-modal input'>",
    showCancelButton: true,
    preConfirm: () => {
      let resultObject = {
        input1: document.getElementById("swal-input1").value,
        input2: document.getElementById("swal-input2").value,
        input3: document.getElementById("swal-input3").value,
        input4: document.getElementById("swal-input4").value,
      };
      if (
        !resultObject.input1 ||
        !resultObject.input2 ||
        !resultObject.input3 ||
        !resultObject.input4
      ) {
        Swal.showValidationMessage(
          "<i class='fa fa-info-circle'></i> Заполните все поля"
        );
        return null;
      } else {
        return [
          document.getElementById("swal-input1").value,
          document.getElementById("swal-input2").value,
          document.getElementById("swal-input3").value,
          document.getElementById("swal-input4").value,
        ];
      }
    },
  });
  if (formValue) {
    axios
      .put(`/product/${product.id}`, {
        name_uz: formValue[0],
        address: formValue[1],
        cost: formValue[2],
        product_type_id: formValue[3],
        created_date: new Date(),
      })
      .then((res) => {
        console.log(res);
        get_products();
        Swal.fire({
          icon: "success",
          title: "Продукт изменен",
        });
      })
      .catch((err) => {
        console.log(err.message);
        Swal.fire({
          icon: "error",
          title: "Нет соединения с интернетом",
          // text: "Пожалуйста, попробуйте еще раз",
          text: `${err.message}`,
        });
      });
  }
}
function del_product(product_id) {
  Swal.fire({
    title: "Вы уверены?",
    text: "Вы не сможете это вернуть!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText: "Отмена",

    confirmButtonText: "Да, удалите!",
  }).then((result) => {
    if (result.isConfirmed) {
      axios
        .delete(`/product/${product_id}`)
        .then((res) => {
          Swal.fire({
            title: "Удалено!",
            text: "Ваш файл был удален.",
            icon: "success",
          });
          get_products();
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Упс...",
            text: "Что-то пошло не так!",
            footer: '<a href="#">Почему у меня возникла эта проблема?</a>',
          });
        });
    }
  });
}
async function get_product_types() {
  preloader.value = true;
  axios
    .get("/product/get-product-types")
    .then((res) => {
      preloader.value = false;
      product_types.value = [...res.data];
    })
    .catch((err) => {
      preloader.value = false;
      console.log(err.message);
    });
}
get_product_types();
get_products();
</script>
<style scoped lang="scss">
@import "../assets/variables";

#home {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 25px 0;
  align-items: center;
  background-color: #f9f8fd;
  #section1 {
    background-color: #ffffff;
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    gap: 35px;
    align-items: center;
    padding: 20px;

    > div {
      width: 100%;
      > h1 {
        font-weight: 600;
        font-size: 46px;
        color: #22253b;
        @include media("<=1000px") {
          font-size: 34px;
        }
        @include media("<=tablet") {
          font-size: 24px;
        }
      }
    }

    #cards {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      justify-content: center;
      align-items: center;
      gap: 10px;
      @include media("<=tablet") {
        grid-template-columns: repeat(3, 1fr);
      }
      @include media("<=600px") {
        grid-template-columns: repeat(2, 1fr);
      }
      @include media("<=phone") {
        grid-template-columns: repeat(1, 1fr);
      }
      .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 15px;
        padding: 15px;
        background-color: $white_blue;
        border-radius: 30px;
        img {
          width: 100%;
        }
        > h3 {
          font-weight: 600;
          font-size: 16px;
          color: #22253b;
          text-align: center;
          @include media("<=600px") {
            font-size: 13px;
          }
        }
        > div {
          width: 100%;
          display: flex;
          justify-content: space-between;
          > p {
            font-weight: 400;
            font-size: 13px;
            color: #22253b;
            text-align: center;
          }
        }
      }
    }
  }
  .loudspeak {
    display: flex;
    align-items: center;
    gap: 30px;
    background-color: $white_blue;
    padding: 65px;
    border-radius: 30px;
    @include media("<=tablet") {
      flex-direction: column;
      padding: 25px;
    }
    img {
      width: 90px;
      @include media("<=tablet") {
        width: 75px;
      }
    }
    > p {
      font-weight: 400;
      font-size: 12px;
      color: #22253b;
      @include media("<=tablet") {
        text-align: center;
      }
    }
    a {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-shrink: 0;
    }
  }
}
</style>
