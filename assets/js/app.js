// new Vue({
//     el: '#app',
//     data(){
//         return{
//             users: [
//                 {name: 'Ani'},
//                 {name: 'Budi'},
//                 {name: 'Tono'},
//             ],
//             updateSubmit: false,
//             form: {
//                 'name' : ''
//             },
//             selectedUserId : ''
//         }
//     },
//     methods : {
//         add()
//     }

// })



var app = new Vue({
    el: '#app',
    data: {
        name_input: '',
        add: true,
        tmp_id: null,
        users: [
            {name: 'Ani'},
            {name: 'Budi'},
            {name: 'Tono'},
        ]
    },
    methods: {
        tambah: function(){
            this.users.push({name: this.name_input})
            this.name_input = ''
        },
        edit: function(index){
            this.name_input = this.users[index].name
            this.add = false
            this.tmp_id = index
        },
        hapus: function(index){
            this.users.splice(index, 1)
        },
        update: function(){
            this.users[this.tmp_id].name = this.name_input
            this.tmp_id = ''
            this.name_input = ""
        }
    }
})