<template>
    <span />
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  mounted() {
    // const password = this.generatePassword({
    //   includeSymbols: false,
    //   passwordLength: 28,
    // });
    // console.log(password);
  },
  methods: {
    generatePassword({
      includeUppercase = true,
      includeNumbers = true,
      includeSymbols = true,
      passwordLength = 8,
    } = {}) {
      const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
      const uppercaseChars = includeUppercase
        ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        : "";
      const numberChars = includeNumbers ? "0123456789" : "";
      const symbolChars = includeSymbols
        ? "!@#$%^&*()_+-=[]{}|;:'\"<>,.?/"
        : "";
      const allChars =
        lowercaseChars + uppercaseChars + numberChars + symbolChars;
      let generatedPassword = "";
      for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        generatedPassword += allChars[randomIndex];
      }
      return generatedPassword;
    },
  },
});
</script>