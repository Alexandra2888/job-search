<template>
    <input type="text" :value="modelValue" class="w-full text-lg fotn-normal focus:outline-none"
    @input="handleInput"/>
</template>

<script>
export default {
name:"TextInput",
props: {
    modelValue: {
        type: String,
        required: true
    },
},
emits: ["update:modelValue"],
methods: {
    handleInput($event) {
        this.$emit("update:modelvalue", event.target.value);
    },
},
};
</script>