declare module 'vue-double-range-input' {
    import { DefineComponent } from 'vue';

    const DoubleRangeInput: DefineComponent<{
        min?: number;
        max?: number;
        value?: number;
        step?: number;
    }>;

    export default DoubleRangeInput;
}
