<template>
  <div class="home">
    <SignUpForm />
  </div>
</template>

<script>
// @ is an alias to /src
import SignUpForm from "@/components/signUpForm.vue";

export default {
  name: "Home",
  components: {
    SignUpForm
  }
};
</script>
