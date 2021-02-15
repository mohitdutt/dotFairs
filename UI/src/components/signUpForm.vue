<template>
  <div class="">
    <div id="customBtn" v-google-signin-button="clientId">
      <!-- <div id="customBtn" class="customGPlusSignIn"> -->
      <span class="icon"></span>
      <span class="buttonText">Google</span>
      <!-- </div> -->
    </div>
    <facebook-login
      class="button"
      appId="426498682030860"
      @login="getUserData"
      @logout="onLogout"
      @get-initial-status="getUserData"
      @sdk-loaded="sdkLoaded"
    >
    </facebook-login>
  </div>
</template>

<script>
import facebookLogin from "facebook-login-vuejs";
export default {
  data: () => ({
    clientId:
      "963164406217-4af3e7bm05mk465ag8o463dtnqli2f00.apps.googleusercontent.com",
    name: "",
    email: "",
    personalID: "",
    FB: undefined
  }),
  components: {
    // eslint-disable-next-line vue/no-unused-components
    facebookLogin
  },
  methods: {
    OnGoogleAuthSuccess(idToken) {
      console.log(idToken);
      // Receive the idToken and make your magic with the backend
    },
    OnGoogleAuthFail(error) {
      console.log(error);
    },
    getUserData() {
      this.FB.api(
        "/me",
        "GET",
        {
          fields:
            "id,name,email, cover, first_name, last_name, age_range, link, gender, locale, picture, timezone, updated_time, verified"
        },
        userInformation => {
          console.log(1, userInformation);
          this.personalID = userInformation.id;
          this.email = userInformation.email;
          this.name = userInformation.name;
        }
      );
    },
    sdkLoaded(payload) {
      this.isConnected = payload.isConnected;
      this.FB = payload.FB;
      if (this.isConnected) this.getUserData();
    },
    onLogin() {
      this.isConnected = true;
      this.getUserData();
    },
    onLogout() {
      this.isConnected = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#customBtn {
  display: inline-block;
  background: white;
  color: #444;
  width: 190px;
  border-radius: 5px;
  border: thin solid #888;
  box-shadow: 1px 1px 1px grey;
  white-space: nowrap;
}
#customBtn:hover {
  cursor: pointer;
}
span.label {
  font-family: serif;
  font-weight: normal;
}
span.icon {
  background: url("https://developers-dot-devsite-v2-prod.appspot.com/identity/sign-in/g-normal.png")
    transparent 5px 50% no-repeat;
  display: inline-block;
  vertical-align: middle;
  width: 42px;
  height: 42px;
}
span.buttonText {
  display: inline-block;
  vertical-align: middle;
  padding-left: 42px;
  padding-right: 42px;
  font-size: 14px;
  font-weight: bold;
  /* Use the Roboto font that is loaded in the <head> */
  font-family: "Roboto", sans-serif;
}
</style>
