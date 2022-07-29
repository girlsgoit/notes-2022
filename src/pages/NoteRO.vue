<template>
  <HeaderRO />
  <div>NoteRO</div>
  <NoteCardList >
      <NoteCard/>
   </NoteCardList >
  <DeleteButtonRO />
  <FooterRO />
</template>

<script>
import HeaderRO from "../components/HeaderRO.vue";
import NoteCardList from "../components/NoteCardList.vue";
import NoteCard from "../components/NoteCard.vue";
import DeleteButtonRO from "../components/NoteItem.vue";
import FooterRO from "../components/FooterRO.vue";

export default {
  name: "NoteRO",
};
</script>

<style scoped>
</style>