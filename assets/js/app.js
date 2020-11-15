


var app = new Vue({
    el: '#app',
    data: {
        name_input: '',
        add: true,
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
        edit: function(index=null){
            this.name_input = this.users[index].name
            this.add = false
        },
        hapus: function(index){
            this.users.splice(index, 1)
        },
        // update: function(){
        //     this.users[index]
        // }
    }
})