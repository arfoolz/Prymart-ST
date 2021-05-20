<template>
    <div>
        <h1 class="text-center">LIST BARANG</h1>

        <v-container>
            <v-row cols="12">
                <v-col cols="6" sm="2" md="4" lg="6">
                    <div>
                        <v-btn
                         :loading = buttonLoading
                         @click="fungsiTambah()"
                         style="width: 200px;
                                height: 50px;
                                background: #4662d4;
                                color: white;
                                border-radius: 10px;
                                font-size: 16px;
                                margin-top: 50px;
                                font-weight: bold;
                                text-transform: capitalize;
                                cursor: pointer;
                                padding: 5px;"
                         > Tambah Barang
                        </v-btn>
                    </div>
                </v-col>

                <v-col cols="6" sm="4" md="5" lg="6">
                    <!-- <div>
                       <template>
                            <v-text-field
                                style="margin-top: 50px;
                                    padding-left: 150px;"
                                append-icon="mdi-magnify"
                                rounded
                                label="Search...."
                                solo
                                hide-details
                                v-model="search"
                                >
                            </v-text-field>
                        </template>
                   </div> -->
                </v-col>
            </v-row>

            <br>
            <v-divider></v-divider>
            <br>
            <br>

            <div>
                <v-data-table
                 loading-text="Please Wait...."
                 :headers="table"
                 :items="dataTable"
                 >
                 <template v-slot:item="props">
                    <tr>
                     <td>
                      {{ props.item.code_item }}
                     </td>
                     <td>
                      {{ props.item.item_name }}
                     </td>
                     <td>
                      {{ props.item.type_of_item}}
                     </td>
                     <td>
                      {{ props.item.stock_item}}
                     </td>
                     <td>
                      Rp {{ props.item.purchase_price}}
                     </td>
                     <td>
                      Rp {{ props.item.selling_price}}
                     </td>
                     <td>
                      {{ props.item.expired_date | moment("D MMMM YYYY")}}
                     </td>
                     <td>
                        <v-menu offset-y>
                            <template v-slot:activator="{ on, attrs }">
                            <v-btn v-bind="attrs" v-on="on" icon>
                                <v-icon dark>
                                mdi-dots-horizontal
                                </v-icon>
                            </v-btn>
                            </template>
                            <v-list>
                                <template class="menu">
                                    <v-list-item
                                    :to="{ path: `/barang/edit-barang/${props.item.id}`,}"
                                    link
                                    style="width: 150px; "
                                    >
                                    <div>
                                        <v-list-item-title>Update</v-list-item-title>
                                    </div>
                                    </v-list-item>
                                    <v-list-item
                                    @click="deleteData(props.item.id)"
                                    link
                                    style="width: 150px; "
                                    >
                                    <div>
                                        <v-list-item-title>Delete</v-list-item-title>
                                    </div>
                                    </v-list-item>
                                </template>
                                <v-divider
                                    style="margin-left: 10px;margin-right: 10px"
                                ></v-divider>
                            </v-list>
                        </v-menu>
                    </td>
                    </tr>
                 </template>
                </v-data-table>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    
    data() {
        return{

            search : '',
            buttonLoading : false,

            dataTable : [],
            table: [
                    {
                     text: 'Kode Barang',
                     align: 'left',
                     width: '0%',
                     class: ' black--text title',
                     sortable: false,
                    },
                    {
                     text: 'Nama Barang',
                     align: 'left',
                     width: '0%',
                     class: ' black--text title',
                     sortable: false,
                    },
                    {
                     text: 'Jenis Barang',
                     align: 'left',
                     width: '0%',
                     class: ' black--text title',
                     sortable: false,
                    },
                    {
                     text: 'Stok Barang',
                     align: 'left',
                     width: '0%',
                     class: ' black--text title',
                     sortable: false,
                    },
                    {
                     text: 'Harga Beli',
                     align: 'left',
                     width: '0%',
                     class: ' black--text title',
                     sortable: false,
                    },
                    {
                     text: 'Harga Jual',
                     align: 'left',
                     width: '0%',
                     class: ' black--text title',
                     sortable: false,
                    },
                    {
                     text: 'Expired Date',
                     align: 'left',
                     width: '0%',
                     class: ' black--text title',
                     sortable: false,
                    },
                    {
                     value: 'actions',
                     sortable: false,
                    },
                ],
        }
    },

    created(){
        this.renderData()
    },

    methods: {
        renderData(){
            this.$http
            .get('/items')
            .then(response=>{
                console.log(response)
                this.dataTable = response.data
                console.log(this.dataTable)
            })
        },

        deleteData(id){
            this.$http
            .delete('/items/' + id )
            .then(response=>{   
                console.log(response)
                this.dataTable = response.data
                console.log(this.dataTable)
                window.location.reload()
            })
        },
       
        fungsiTambah(){
            this.buttonLoading = true
            this.$router.push('/barang/tambah-barang')
        },
    },
}
</script>
