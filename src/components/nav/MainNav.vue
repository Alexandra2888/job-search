<template>
  <header class="w-full text-sm">
    <div class="fixed left-0 top-0 h-16 w-full bg-white text-black">
      <div
        class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8"
      >
        <a :href="url" class="flex h-full items-center text-xl">{{
          company
        }}</a>

        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem"
              class="ml-9 h-full first:ml-0"
            >
              <a href="" class="flex h-full items-center py-2.5">{{
                menuItem
              }}</a>
            </li>
          </ul>
        </nav>

        <div class="ml-auto flex h-full items-center">
          <profile-image v-if="isLoggedIn" />
          <action-button v-else text="Sign in" @click="loginUser" />
        </div>
      </div>

  <sub-nav v-if="isLoggedIn"/>
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/button/ActionButton.vue";
import ProfileImage from "@/components/profileImage/ProfileImage.vue";
import SubNav from "@/components/subNav/SubNav.vue";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    SubNav
  },
  data() {
    return {
      company: "New Careers",
      url: "https://careers.google.com",
      menuItems: [
        "Teams",
        "Locations",
        "Life at Bobo Corp",
        "How we hire",
        "Students",
        "Jobs",
      ],
      isLoggedIn: false,
    };
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true;
    },
  },
};
</script>
