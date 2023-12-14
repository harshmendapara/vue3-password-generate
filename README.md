# vue3-password-generate

A Vue.js 3 plugin for generating random passwords with customizable options.

## Installation

You can install the package using npm or yarn:


```bash
npm install vue3-password-generate
yarn add vue3-password-generate


### template
<template>
  <div>
    <!-- Include the PasswordGenerator component -->
    <PasswordGenerator />
    
    <!-- Button to generate and log a password with default options -->
    <button @click="generateDefaultPassword">Generate Default Password</button>
    
    <!-- Button to generate and log a password with custom options -->
    <button @click="generateCustomPassword">Generate Custom Password</button>
  </div>
</template>
```

### script
<script>
import { PasswordGenerator } from "vue3-password-generate";

export default {
  components: {
    PasswordGenerator,
  },
  methods: {
    generateDefaultPassword() {
      // Default options
      const password = this.$generatePassword();
      console.log("Default Password:", password);
    },
    generateCustomPassword() {
      // Custom options
      const password = this.$generatePassword({
        includeUppercase: true,
        includeNumbers: true,
        includeSymbols: false,
        passwordLength: 28,
      });
      console.log("Custom Password:", password);
    },
  },
};
</script>
```

## Contributing

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Commit your changes: `git commit -am 'Add some feature'`
4.  Push to the branch: `git push origin my-new-feature`
5.  Submit a pull request :D

## Author

**vue-internet-checker** © [Harsh Mendapara](https://github.com/harshmendapara/), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by Harsh Mendapara with help from contributors ([list](https://github.com/harshmendapara/vue3-password-generate/graphs/contributors)).

> GitHub [@Harsh Mendapara](https://github.com/harshmendapara)

> Gmail [@Harsh Mendapara](mendaparaharsh02@gmail.com)

> Linkedin [@Harsh Mendapara](https://www.linkedin.com/in/harsh-mendapara-44883a165/)

