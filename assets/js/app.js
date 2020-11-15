

var app = new Vue({
    el: '#app',
    data: {
        name_input: '',
        users: [
            {name: 'Ani'},
            {name: 'Budi'},
            {name: 'Tono'},
        ]
    },

    methods: {
        add: function(){
            this.users.push({name: this.name_input})
            this.name_input = ''
        },
        edit: function(index){
            this.name_input = this.users[index].name
            // this.action('update')
        },
        hapus: function(index){
            this.users.splice(index, 1)
        }
    }
})