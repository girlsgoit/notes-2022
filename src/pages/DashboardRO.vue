<template>
  <HeaderRO/>
  <DashboardBarRO/>
  <div>Dashboard RO</div>
  <NoteList>
    <NoteItem />
    <NoteItem />
    <NoteItem />
  </NoteList>
  <FooterRO/>
</template>

<script>
import DashboardBarRO from "../components/DashboardBarRO.vue";
import NoteItem from "../components/NoteItem.vue";
import NoteList from "../components/NoteList.vue";
import FooterRO from "../components/FooterRO.vue";
import HeaderRO from "../components/HeaderRO.vue";

export default {
  name: "DashboardRO",
  components: {
    DashboardBarRO,
    NoteItem,
    NoteList,
    FooterRO,
    HeaderRO,
  },
};
</script>

<style >
</style>