<template lang="html">
    <div class="login__modal" @click="loginStore.toggleModalStatus(false)">
        <div class="login__modal-dialog" @click.stop>
            <div class="login__modal-dialog-start" v-show="loginStore.modalType == ModalType.start">
                <h3 class="login__modal-dialog-title">
                    Добро пожаловать
                </h3>
                <p class="login__modal-dialog-subtitle">Сделайте выбор</p>

                <div class="login__modal-dialog-start-options">
                    <button class="login__modal-dialog-start-options-item"
                        @click="loginStore.setUserType(UserType.physical)">
                        <span>Для физических лиц</span>
                    </button>
                    <button class="login__modal-dialog-start-options-item"
                        @click="loginStore.setUserType(UserType.сorporate)">
                        <span>Для компаний</span>
                    </button>
                </div>
            </div>
            <div class="login__modal-dialog-auth" v-show="loginStore.modalType == ModalType.auth">
                <h3 class="login__modal-dialog-title">
                    Авторизация
                </h3>
                <form class="login__modal-dialog-auth-form">
                    <label for="name">
                        <input type="text" name="name" id="name" required placeholder="Ваше имя">
                    </label>
                    <label for="pasword">
                        <input type="pasword" name="pasword" id="pasword" required placeholder="********">
                    </label>
                    <PrimaryBtn :reversed="false" class="login__modal-dialog-auth-form-btn" btnText="Войти"
                        :btnAction="() => { }" />
                </form>
                <p class="login__modal-dialog-auth-question" @click="loginStore.setModalStatus(ModalType.register)"
                    v-if="loginStore.user == UserType.physical">
                    <span>Еще нет аккаунта?</span>
                    Зарегистрироваться
                </p>
                <p class="login__modal-dialog-auth-question" @click="() => {
                    $router.push('/corporative');
                    loginStore.toggleModalStatus(false);
                }" v-show="loginStore.user == UserType.сorporate">
                    <span>Еще нет аккаунта?</span>
                    Зарегистрироваться
                </p>
                <span>
                    Авторизуясь, вы соглашаетесь с
                    Лицензионным соглашением и Политикой конфиденциальности
                </span>
            </div>
            <div class="login__modal-dialog-register" v-show="loginStore.modalType == ModalType.register">
                <h3 class="login__modal-dialog-title">
                    Регистрация
                </h3>
                <form class="login__modal-dialog-auth-form">
                    <label for="name">
                        <span>Ваше имя</span>
                        <input type="text" name="name" id="name" required placeholder="Ваше имя">
                    </label>
                    <label for="email">
                        <span>Ваша почта</span>
                        <input type="email" name="email" id="email" required placeholder="@mail.com">
                    </label>
                    <label for="phone">
                        <span>Ваш номер телефона</span>
                        <input type="phone" name="phone" id="phone" required placeholder="+998">
                    </label>
                    <label for="pasword">
                        <span>Придумайте пароль</span>
                        <input type="pasword" name="pasword" id="pasword" required placeholder="********">
                    </label>
                    <label for="pass">
                        <span>Подтвердите пароль</span>
                        <input type="pass" name="pass" id="pass" required placeholder="********">
                    </label>
                    <PrimaryBtn :reversed="false" class="login__modal-dialog-auth-form-btn" btnText="Зарегистрироваться"
                        :btnAction="() => { }" />
                </form>
                <span>
                    Авторизуясь, вы соглашаетесь с
                    Лицензионным соглашением и Политикой конфиденциальности
                </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useLoginStore } from '../../stores/loginStore';
import { ModalType } from '../../core/enums'
import { UserType } from '../../core/enums'
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn.vue';
const loginStore = useLoginStore();



</script>


<style lang="scss" scoped>
.login__modal {
    position: fixed;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, .5);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: -8px;

    @media (max-width:576px) {
        margin: 0;
    }

    &-dialog {
        margin: 0 10px;

        &-start {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
            transition: .5s;
            padding: 16px;
            background: var(--white);
            border-radius: 20px;

            &-options {
                background: var(--gray-100);
                padding: 16px;
                border-radius: 20px;
                display: flex;
                align-items: center;
                gap: 24px;

                @media (max-width:768px) {
                    flex-direction: column;
                }

                &-item {
                    background: var(--primary-500);
                    width: 320px;
                    display: flex;
                    justify-content: center;
                    padding: 24px 0;
                    border-radius: 50px;

                    @media (max-width:768px) {
                        width: 280px;
                    }

                    @media (max-width:576px) {
                        width: 240px;
                    }

                    @media (max-width:375px) {
                        width: 220px;
                        padding: 12px 0;
                    }

                    & span {
                        font-weight: 600;
                        font-size: 16px;
                        text-align: center;
                        color: var(--white);

                        @media (max-width:375px) {
                            font-size: 14px;
                        }

                    }
                }
            }
        }

        &-auth {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            max-width: 460px;
            padding: 50px;
            background: var(--white);
            border-radius: 50px;

            &-question {
                font-weight: 600;
                font-size: 16px;
                color: var(--gray-900);
                text-align: center;
                cursor: pointer;

                & span {
                    font-weight: 400;
                    font-size: 14px;
                    color: #667085;
                }
            }

            @media (max-width:768px) {
                padding: 32px;
            }

            @media (max-width:576px) {
                padding: 24px;
                border-radius: 20px;
            }

            @media (max-width:375px) {
                padding: 16px;
            }

            & span {
                font-weight: 400;
                font-size: 12px;
                text-align: center;
                color: #667085;
                margin-top: 16px;
            }

            &-form {
                margin: 24px 0;
                display: flex;
                flex-direction: column;
                gap: 16px;
                width: 360px;

                @media (max-width:768px) {
                    width: 280px;
                }

                @media (max-width:576px) {
                    width: 240px;
                }

                @media (max-width:375px) {
                    width: 220px;
                    padding: 12px 0;
                }

                &-btn {
                    display: flex;
                    justify-content: center;
                }

                & label {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    align-items: self-start;
                }

                & input {
                    box-shadow: 0 0 0 1px rgba(103, 110, 118, 0.16), 0 2px 5px 0 rgba(103, 110, 118, 0.08);
                    background: var(--white);
                    border-radius: 50px;
                    padding: 10px 14px;
                    width: 100%;
                    max-width: 360px;
                    min-width: 220px;
                    font-weight: 400;
                    font-size: 16px;
                    color: var(--gray-400);

                    &::placeholder {
                        color: var(--gray-400);
                    }
                }
            }
        }

        &-register {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            max-width: 460px;
            padding: 50px;
            background: var(--white);
            border-radius: 50px;

            & span {
                font-weight: 400;
                font-size: 14px;
                color: #667085;
                text-align: center;
            }

            @media (max-width:768px) {
                padding: 32px;
            }

            @media (max-width:576px) {
                padding: 24px;
                border-radius: 20px;
            }

            @media (max-width:375px) {
                padding: 16px;
            }
        }

        &-title {
            font-weight: 700;
            font-size: 36px;
            color: var(--gray-900);

            @media (max-width:768px) {
                font-size: 24px;
            }

        }

        &-subtitle {
            font-weight: 700;
            font-size: 20px;
            text-align: center;
            color: var(--gray-500);
            margin-top: 12px;

            @media (max-width:768px) {
                font-size: 16px;
            }
        }
    }
}
</style>