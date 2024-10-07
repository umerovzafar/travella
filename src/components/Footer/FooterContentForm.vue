<template lang="html">
  <form class="footer__content-form" id="form" @submit.prevent="submitData">
    <label class="footer__content-form-label" for="name">
      Ваше имя
      <input type="text" name="name" id="name" placeholder="Ваше имя" v-model="formData.name" required />
    </label>
    <label class="footer__content-form-label" for="email">
      Ваша почта
      <input type="text" id="email" name="email" placeholder="hussain@finesse.com" v-model="formData.email" required />
    </label>
    <label class="footer__content-form-label">
      Ваше сообщение
      <textarea placeholder="Ваше сообщение" v-model="formData.text"></textarea>
    </label>
    <button class="footer__content-form-btn" type="submit">
      <span>Отправить</span>
      <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.75 1.25L16 7.5M16 7.5L9.75 13.75M16 7.5H1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
  </form>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import axios from "axios";
import 'vue3-toastify/dist/index.css';
import { toast } from "vue3-toastify";

interface FormData {
  name: string;
  text: string;
  email: string;
}

const formData = ref<FormData>({
  name: '',
  text: '',
  email: '',
});

const submitData = async () => {
  const submittedData = { ...formData.value };

  try {
    const response = await axios.post(
      "https://travella-admin.uz/api/v1/main/newsletter/send/",
      submittedData,
    );

    if (response.data.is_send) {
      toast('Сообщение отправлено', {
        autoClose: 2000,
        type: "success",
        dangerouslyHTMLString: true,
      });

      // Reset form data
      formData.value = {
        name: "",
        text: '',
        email: '',
      };
    }
  } catch (error) {
    console.error('Error sending the message:', error);
    toast('Ошибка при отправке сообщения', {
      autoClose: 2000,
      type: "error",
    });
  }
};
</script>

<style lang="scss" scoped>
.footer__content-form {
  padding: 50px;
  border-radius: 50px;
  background: var(--white);
  display: flex;
  flex-direction: column;
  transition: 0.5s;
  gap: 24px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }

  @media (max-width: 992px) {
    padding: 32px;
    margin-bottom: 10px;
  }

  @media (max-width: 576px) {
    border-radius: 24px;
  }

  &-label {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-weight: 600;
    font-size: 16px;
    color: var(--gray-500);

    & input,
    & textarea {
      box-shadow: 0 0 0 1px rgba(103, 110, 118, 0.16), 0 2px 5px 0 rgba(103, 110, 118, 0.08);
      background: var(--white);
      padding: 10px 14px;
      border-radius: 50px;
      width: 320px;
      font-weight: 400;
      font-size: 16px;
      color: var(--gray-400);
      position: relative;

      @media (max-width: 992px) {
        width: 240px;
      }

      @media (max-width: 768px) {
        width: 100%;
      }

      &::placeholder {
        color: var(--gray-400);
      }
    }

    & textarea {
      resize: none;
      min-height: 104px;
      border-radius: 20px;
      font-weight: 400;
      font-size: 16px;
      color: var(--gray-400);

      &::placeholder {
        color: var(--gray-400);
      }
    }
  }

  &-btn {
    background: var(--primary-500);
    padding: 16px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    & span {
      font-weight: 600;
      font-size: 16px;
      text-align: center;
      color: var(--white);
    }
  }
}
</style>
