import SimpleWorker from "~/assets/js/simple.worker.js";

export default (context, inject) => {
    inject( 'worker', {
        createSimpleWorker() {
            return new SimpleWorker()
        }
    })
}