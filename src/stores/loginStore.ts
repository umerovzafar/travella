import { defineStore } from 'pinia';

import { ModalType } from '../core/enums';
import { UserType } from '../core/enums';

export const useLoginStore = defineStore('login', {
    state: () => ({
        showloginModal: false,
        hasAuth: false,
        user: UserType.physical,
        modalType: ModalType.start,
    }),
    actions: {
        async loadAuthData() {

        },
        setModalStatus(type: ModalType) {
            this.modalType = type;
        },
        setUserType(userType: UserType) {
            if (userType == UserType.сorporate) {
                this.setModalStatus(ModalType.auth);
                this.user = UserType.сorporate;
            } else {
                this.setModalStatus(ModalType.auth);
                this.user = UserType.physical;
            }
        },
        toggleModalStatus(status: boolean) {
            this.showloginModal = status;
            if (this.showloginModal) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'scroll';
                this.modalType = ModalType.start;
            }
        },
        async registerNewUser() {

        }
    }
});