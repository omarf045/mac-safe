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

      <form class="mt-8 space-y-6" @submit="signUp">
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
            <label for="email-address" class="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              v-model.trim="form.email"
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
                focus:outline-none
                focus:ring-indigo-500
                focus:border-indigo-500
                focus:z-10
                sm:text-sm
              "
              placeholder="Email address"
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
        email: "",
        password: "",
        photos: [
          {
            name: "IMG_4985.HEIC",
            size: "3.9 MB",
            source:
              "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
            current: true,
            information: {
              Created: "May 1, 2022",
              "Last modified": "June 8, 2022",
              Dimensions: "4032 x 3024",
            },
            sharedWith: [
              {
                id: 1,
                name: "Orland Douglas",
              },
              {
                id: 2,
                name: "Andrea McMillan",
              },
            ],
          },
          {
            name: "IMG_3385.HEIC",
            size: "2.4 MB",
            source:
              "https://images.unsplash.com/photo-1654525481564-9d421b2e51f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=512&q=80",
            current: false,
            information: {
              Created: "Feb 13, 2022",
              "Last modified": "Mar 12, 2022",
              Dimensions: "4032 x 3024",
            },
            sharedWith: [
              {
                id: 1,
                name: "Arr Douglas",
              },
              {
                id: 2,
                name: "Carl Ferrerio",
              },
              {
                id: 3,
                name: "Duke Grant",
              },
            ],
          },
          // More files...
        ],
        trash: [],
        leaks: [],
        cookie_value: "",
      },
    };
  },
  methods: {
    signUp(evt) {
      evt.preventDefault();

      this.hash(this.form.password + this.form.username).then((hex) => {
        this.form.cookie_value = hex;

        const path = "http://localhost:8000/api/v1/accounts/";
        axios
          .post(path, this.form)
          .then((response) => {
            this.form.username = response.data.username;
            this.form.email = response.data.email;
            this.form.password = response.data.password;
            this.form.photos = response.data.photos;
            this.form.leaks = response.data.leaks;
            this.form.trash = response.data.trash;
            this.form.cookie_value = response.data.cookie_value;
          })
          .catch((error) => {
            console.log(error);
          });
        this.$router.push("/photos");
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