<template>
  <HeaderRU />
  <div>NoteRU</div>
  <NoteCardList >
      <NoteCard/>
   </NoteCardList >
  <DeleteButtonRU />
  <FooterRU />
</template>

<script>
import DeleteNoteButtonRU from "./components/DeleteNoteButtonRU.vue";
import HeaderRU from "./components/HeaderRU.vue";
import NoteCard from "./components/NoteCard.vue";
import NoteCardList from "./components/NoteCardList.vue";
import FooterRU from "../components/FooterRU.vue";

export default {
  name: "NoteRU",
};
</script>

<style>
</style>