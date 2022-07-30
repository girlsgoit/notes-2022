<template>
  <HeaderRU @change-lang="$router.push('/ro/dashboard')" />
  <DashboardBarRU />
  <div>Dashboard RU</div>
  <NoteList>
    <NoteItem />
    <NoteItem />
    <NoteItem />
  </NoteList>
  <FooterRU />
</template>

<script>
import DashboardBarRU from "../components/DashboardBarRU.vue";
import NoteItem from "../components/NoteItem.vue";
import NoteList from "../components/NoteList.vue";
import FooterRU from "../components/FooterRU.vue";
import HeaderRU from "../components/HeaderRU.vue";

export default {
  name: "DashboardRO",
  components: {
    DashboardBarRU,
    NoteItem,
    NoteList,
    FooterRU,
    HeaderRU,
  },
};
</script>

<style >
</style>