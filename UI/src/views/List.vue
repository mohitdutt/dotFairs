<template>
  <div class="home" style="background: #f3f3f3;">
    <mdb-form-inline class="md-form" style="display: initial;">
      <mdbIcon icon="search" />
      <mdb-input
        type="text"
        placeholder="Search"
        aria-label="Search"
        style="padding-top: 3%;"
      />
    </mdb-form-inline>
    <EventList />
  </div>
</template>

<script>
// @ is an alias to /src
import EventList from "@/components/eventList.vue";
import { mdbIcon, mdbFormInline, mdbInput } from "mdbvue";

export default {
  name: "Home",
  components: {
    EventList,
    mdbIcon,
    mdbFormInline,
    mdbInput
  }
};
</script>

<style scoped>
.active-pink-2 input[type="text"]:focus:not([readonly]) {
  border-bottom: 1px solid #f48fb1;
  box-shadow: 0 1px 0 0 #f48fb1;
}
.active-pink input[type="text"] {
  border-bottom: 1px solid #f48fb1;
  box-shadow: 0 1px 0 0 #f48fb1;
}
.active-purple-2 input[type="text"]:focus:not([readonly]) {
  border-bottom: 1px solid #ce93d8;
  box-shadow: 0 1px 0 0 #ce93d8;
}
.active-purple input[type="text"] {
  border-bottom: 1px solid #ce93d8;
  box-shadow: 0 1px 0 0 #ce93d8;
}
.active-cyan-2 input[type="text"]:focus:not([readonly]) {
  border-bottom: 1px solid #4dd0e1;
  box-shadow: 0 1px 0 0 #4dd0e1;
}
.active-cyan input[type="text"] {
  border-bottom: 1px solid #4dd0e1;
  box-shadow: 0 1px 0 0 #4dd0e1;
}
.active-cyan .fa,
.active-cyan-2 .fa {
  color: #4dd0e1;
}
.active-purple .fa,
.active-purple-2 .fa {
  color: #ce93d8;
}
.active-pink .fa,
.active-pink-2 .fa {
  color: #f48fb1;
}
.form-control {
  width: 40%;
}
</style>
