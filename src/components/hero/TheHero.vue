<template>
  <main>
    <section class="flex h-screen flex-col pb-20 pt-10">
      <div class="grid grid-cols-12">
        <div class="col-span-5 col-start-2">
          <the-headline />
          <job-search-form/>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import TheHeadline from "@/components/headline/TheHeadline.vue";
import JobSearchForm from "@/components/form/JobSearchform.vue"

export default {
  name: "TheHero",
  components: {
    TheHeadline,
    JobSearchForm
  },
};
</script>
