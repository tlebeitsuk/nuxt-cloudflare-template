<script setup lang="ts">
const { data, pending, refresh } = await useLazyFetch('/api/db-kv')
</script>

<template>
  <div>
    <nuxt-link to="/">
      Without KV
    </nuxt-link>
    <h1>Nuxt + Cloudflare(Pages + D1 + KV)</h1>
    <button @click="refresh">
      Refresh
    </button>
    <div v-if="pending">
      Getting data from D1...
    </div>
    <div v-else>
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>
