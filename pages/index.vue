<template>
  <div>
    <p>Open console and click the below button.</p>
    <button @click="initWorker">Init Worker</button>
    <p>Clicking the button will initiate two separate workers.</p>
    <p>One is a js script and another writtern with typescript.</p>
    <p>Check the video if you haven't already -> <a href="https://youtu.be/cRNxdlOcHJw">YouTube</a>.</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TypedWorker from '~/assets/js/typed.worker.ts'

declare module 'vue/types/vue' {
  interface Vue {
    $worker: {
      createSimpleWorker(): Worker
    }
  }
}

export default Vue.extend({
  methods: {
    initWorker() {
      const simpleWorker = this.$worker.createSimpleWorker()
      simpleWorker.addEventListener('message', this.workerResponseHandler)
      simpleWorker.postMessage('Do expensive work!')
      // ---
      const typedWorker = new TypedWorker()
      typedWorker.addEventListener('message', this.workerResponseHandler)
      typedWorker.postMessage('Do expensive work!')
    },
    workerResponseHandler(event: any) {
      console.log('[MAIN]', event.data)
    },
  },
})
</script>
