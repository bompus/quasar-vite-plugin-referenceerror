<script setup>
const truthy = false;
</script>

<template>
  <q-item v-if="truthy">
    <q-item-label>Test7</q-item-label>
  </q-item>
  <q-item v-else>
    <!-- ??? no error because q-item-label is referenced above ??? -->
    <q-item-label>Working1</q-item-label>
  </q-item>
</template>
