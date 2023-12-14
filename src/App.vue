<template>
  <div>
    <PasswordGenerator />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PasswordGenerator from './components/PasswordGenerator.vue';

export default defineComponent({
  components: {
    PasswordGenerator,
  },
});
</script>