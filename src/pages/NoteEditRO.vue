<template>
  <HeaderRO @change-lang="$router.push('/ro/note-edit')" />
</template>

<script>
import HeaderRO from "../components/HeaderRO.vue";
import DeleteNoteButtonRO from "../components/DeleteNoteButtonRO.vue";
import PlusButton from "../components/PlusButton.vue";


export default {
  name: "NoteEditRO",
};
</script>

<style>
</style>