<template>
  <vueform @mounted="formMounted"></vueform>
</template>

<script lang="ts" setup>
const emit = defineEmits(["mount", "form"]);

onMounted(() => {
  emit("mount");
});

const formMounted = () => {
  emit("form");
};
</script>
