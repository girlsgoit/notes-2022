<template>
  <HeaderRU @change-lang="$router.push('/ru/note edit')" />
</template>

<script>
import HeaderRU from "../components/HeaderRU.vue";
import DeleteNoteButtonRU from "../components/DeleteNoteButtonRU";
import PlusButton from "../components/PlusButton.vue";

export default {
  name: "NoteEditRU",
};
</script>

<style>
</style>