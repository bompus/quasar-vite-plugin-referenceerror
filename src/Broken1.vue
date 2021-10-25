<script setup>
const truthy = false;
</script>

<template>
  <q-item v-if="truthy">
    <q-item-section>Test7</q-item-section>
  </q-item>
  <q-item v-else>
    <!-- Uncaught ReferenceError: QItem_label is not defined at Broken.vue:11 -->
    <q-item-label>Broken</q-item-label>
  </q-item>
</template>
