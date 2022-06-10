<template>
  <div
    class="
      min-h-full
      flex
      items-center
      justify-center
      py-12
      px-4
      sm:px-6
      lg:px-8
    "
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <img
          class="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Or
          {{ " " }}
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
            log-in if you already have an account
          </a>
        </p>
      </div>

      <form class="mt-8 space-y-6" @submit="get">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="username-address" class="sr-only">Username</label>
            <input
              id="username-address"
              name="username"
              type="username"
              v-model.trim="form.username"
              required=""
              class="
                appearance-none
                rounded-none
                relative
                block
                w-full
                px-3
                py-2
                border border-gray-300
                placeholder-gray-500
                text-gray-900
                rounded-t-md
                focus:outline-none
                focus:ring-indigo-500
                focus:border-indigo-500
                focus:z-10
                sm:text-sm
              "
              placeholder="Username"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              v-model.trim="form.password"
              autocomplete="current-password"
              required=""
              class="
                appearance-none
                rounded-none
                relative
                block
                w-full
                px-3
                py-2
                border border-gray-300
                placeholder-gray-500
                text-gray-900
                rounded-b-md
                focus:outline-none
                focus:ring-indigo-500
                focus:border-indigo-500
                focus:z-10
                sm:text-sm
              "
              placeholder="Password"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="
              group
              relative
              w-full
              flex
              justify-center
              py-2
              px-4
              border border-transparent
              text-sm
              font-medium
              rounded-md
              text-white
              bg-indigo-600
              hover:bg-indigo-700
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-indigo-500
            "
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon
                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              />
            </span>
            Sign up
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { LockClosedIcon } from "@heroicons/vue/solid";
import axios from "axios";
import VueCookies from "vue-cookies";

export default {
  components: {
    LockClosedIcon,
  },
  data() {
    return {
      accounts: {},
      form: {
        username: "",
        password: "",
        cookie_value: "",
      },
    };
  },
  methods: {
    get(evt) {
      evt.preventDefault();

      const path =
        "http://localhost:8000/api/v1/accounts/" + this.form.username + "/";
      axios
        .get(path)
        .then((response) => {
          if (response.data.password == this.form.password) {
            VueCookies.set("session_cookie", response.data.cookie_value, "3y");

            this.$router.push("/photos");
          } else {
            console.log("pwd incorrecta");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    hash(string) {
      const utf8 = new TextEncoder().encode(string);
      return crypto.subtle.digest("SHA-256", utf8).then((hashBuffer) => {
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray
          .map((bytes) => bytes.toString(16).padStart(2, "0"))
          .join("");
        return hashHex;
      });
    },

    verify() {
      const path = "http://localhost:8000/api/v1/accounts/";
      axios
        .get(path)
        .then((response) => {
          const photosArray = response.data.find(
            (element) =>
              element.cookie_value === VueCookies.get("session_cookie")
          );
          if (photosArray) {
            this.$router.push("/photos");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.verify();
  },
};
</script>