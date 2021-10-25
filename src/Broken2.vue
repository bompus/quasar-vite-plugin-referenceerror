<script setup>
const truthy = false;
</script>

<template>
  <q-item v-if="truthy">
    <q-item-label>Test7</q-item-label>
  </q-item>
  <q-item v-else>
    <!-- Uncaught ReferenceError: QItem_section is not defined at Broken.vue:11 -->
    <q-item-section>Broken</q-item-section>
  </q-item>
</template>
