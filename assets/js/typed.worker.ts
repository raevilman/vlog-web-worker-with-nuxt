const ctx: Worker = self as any;

function costlyWork() {
    setTimeout(() => {
        ctx.postMessage(44)
    }, 3000)
}

ctx.addEventListener('message', (event) => {
    console.log('[TYPED] Received event data: ', event.data)
    costlyWork()
})


