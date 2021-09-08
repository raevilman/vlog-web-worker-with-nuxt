self.addEventListener('message', (event) => {
  console.log('[WORKER] Received event data: ', event.data)
  expensiveWork()
})

function expensiveWork() {
  setTimeout(() => {
    self.postMessage(42)
  }, 3000)
}
