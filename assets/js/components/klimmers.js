Vue.component("klimmers", {
    data() {
        return {
            klimmers_data: klimmers,
        }
    },

    template: `

    <div class="text-align-center container-fluid">

        <h1>Klimmers</h1>
        
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div v-for="klimmer in klimmers_data" :key="klimmer.id" class="col">
            <div class="card h-100">
                <img :src="klimmer.image" class="card-img-top" :alt="klimmer.image">
                <div class="card-body">
                <h5 class="card-title">{{ klimmer.title_klimmers }}</h5>
                <p class="card-text">{{ klimmer.description_klimmers }}</p>
                </div>
            </div>
            </div>
        </div>
    </div>
    `
});

