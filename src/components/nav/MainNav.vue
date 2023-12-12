<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div
        class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8"
      >
        <router-link
          :to="{ name: 'Home' }"
          class="flex h-full items-center text-xl"
          >Bobo Careers
        </router-link>

        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.text"
              class="ml-9 h-full first:ml-0"
            >
              <router-link
                :to="menuItem.url"
                class="flex h-full items-center py-2.5"
                >{{ menuItem.text }}</router-link
              >
            </li>
          </ul>
        </nav>

        <div class="ml-auto flex h-full items-center">
          <profile-image v-if="isLoggedIn" />
          <action-button v-else text="Sign in" @click="LOGIN_USER" />
        </div>
      </div>

      <the-subnav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

import { useUserStore } from "@/stores/user";

import ActionButton from "@/components/button/ActionButton.vue";
import ProfileImage from "@/components/profileImage/ProfileImage.vue";
import TheSubnav from "@/components/subnav/TheSubnav.vue";

const menuItems = ref([
  { text: "Teams", url: "/teams" },
  { text: "Locations", url: "/" },
  { text: "Life at Bobo Corp", url: "/" },
  { text: "How we hire", url: "/" },
  { text: "Students", url: "/" },
  { text: "Jobs", url: "/jobs/results" },
]);

const userStore = useUserStore();
const LOGIN_USER = userStore.LOGIN_USER;
const isLoggedIn = computed(() => userStore.isLoggedIn);

const headerHeightClass = computed(() => ({
  "h-16": !isLoggedIn.value,
  "h-32": isLoggedIn.value,
}));
</script>
