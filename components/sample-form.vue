<template>
  <Vueform @mounted="formMounted"></Vueform>
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
