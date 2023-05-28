<script setup lang="ts">
const { data, pending, refresh } = await useLazyFetch('/api/db')
</script>

<template>
  <div>
    <nuxt-link to="/kv">
      With KV
    </nuxt-link>
    <h1>Nuxt + Cloudflare(Pages + D1)</h1>
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
