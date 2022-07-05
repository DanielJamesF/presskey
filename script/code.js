const app = Vue.createApp({
    data: function () {
        return {
            show: false,
            input: ' '
        }
    },
    methods: {
        check() {
            window.addEventListener('keydown', (event) => {
                if (event.key == 'A' || event.key == 'a') {
                    this.show = true;
                } else {
                    this.show = false;
                }
            });
        },
    }
})

app.mount('#app');