<template>
    <div>
        <h1 class="text-center">LIST KARYAWAN</h1>

        <v-container>
            <v-row cols="12">
                <v-col cols="6" sm="2" md="4" lg="6">
                    <div>
                        <v-btn
                         :to="{ path: '/karyawan/tambah-karyawan' }"
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
                         > Tambah Karyawan
                        </v-btn>
                    </div>
                </v-col>

                <v-col cols="6">
                    <!-- <div>
                       <template>
                            <v-text-field
                                style="margin-top: 50px;
                                    padding-left: 150px;"
                                append-icon="mdi-magnify"
                                rounded
                                label="Search...."
                                placeholder="Search By Name"
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
                 :search="search"
                 >
                 <template v-slot:item="props">
                    <tr>
                     <td>
                     {{ props.item.code_user }}
                     </td>
                     <td>
                      {{ props.item.name }}
                     </td>
                     <td>
                      {{ props.item.date_of_birth | moment("D MMMM YYYY") }}
                     </td>
                     <td>
                      {{ props.item.gender }}
                     </td>
                     <td>
                      {{ props.item.phone_number }}
                     </td>
                     <td>
                      {{ props.item.address }}
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
                                     :to="{ path: `/karyawan/edit-karyawan/${props.item.id}`,}"
                                     link
                                     style="width: 150px; "
                                     >
                                        <div>
                                          <v-list-item-title>Update</v-list-item-title>
                                        </div>
                                    </v-list-item>
                                    <v-divider
                                     style="margin-left: 10px;margin-right: 10px"
                                    ></v-divider>
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
                            </v-list>
                        </v-menu>
                    </td>
                    </tr>
                 </template>
                </v-data-table>
            </div>
        </v-container>
        <!-- OPEN DIALOG FOR DELETE -->
        <!-- <v-dialog v-model="deleteDialog" persistent max-width="360px">
            <v-card style="height: 200px">
                <v-card-title class="headline"> </v-card-title>
                <v-card-text 
                 style="font-size: 16px; margin-top: 10px;"
                 class="text-center"
                 >
                 Serius Nih pengen di hapus?
                </v-card-text>
                <v-card-action>
                    <v-row>
                        <v-col cols="2"></v-col>
                        <v-col cols="4">
                            <v-btn
                            @click="deleteDialog = false"
                            style="margin-bottom: 20px; margin-top: 5px; background: #4662d4; color: white;  border-radius: 100px; width: 96px; font-weight: bold; height: 50px; padding: 4px; font-size: 16px; text-transform: capitalize;">
                            No
                            </v-btn>
                        </v-col>
                        <v-col cols="5">
                            <v-btn
                            @click="deleteData(props.item.id)"
                            style="margin-bottom: 10px; margin-top: 5px; background: white; color: #4662d4; border-style: solid; border-color: #4662d4;  border-radius: 100px; width: 96px; font-weight: bold; height: 50px; padding: 4px; font-size: 16px; text-transform: capitalize;">
                            Yes
                            </v-btn>
                        </v-col>
                        <v-col cols="1"></v-col>
                    </v-row>
                </v-card-action>
            </v-card>
        </v-dialog> -->
    </div>
</template>

<script>
export default {
    data() {
        return{

            search: '',
            deleteDialog: false,

            dataTable : [],
            table: [
                    {
                     text: 'Code User',
                     align: 'left',
                     width: '0%',
                     class: ' black--text title',
                     sortable: false,
                    },
                    {
                     text: 'Nama Karyawan',
                     align: 'left',
                     width: '0%',
                     class: ' black--text title',
                     sortable: false,
                    },
                    {
                     text: 'Tanggal Lahir',
                     align: 'left',
                     width: '0%',
                     class: ' black--text title',
                     sortable: false,
                    },
                    {
                     text: 'Jenis Kelamin',
                     align: 'left',
                     width: '0%',
                     class: ' black--text title',
                     sortable: false,
                    },
                    {
                     text: 'Nomor Telepon',
                     align: 'left',
                     width: '0%',
                     class: ' black--text title',
                     sortable: false,
                    },
                    {
                     text: 'Alamat',
                     align: 'left',
                     width: '0%',
                     class: ' black--text title',
                     sortable: false,
                    },
                    // {
                    // value: 'actions',
                    // sortable: false,
                    // },
                ],
        }
    },

    created(){
        this.renderData()
    },

   
    methods: {
        renderData(){
            console.log("lll")
            this.$http
            .get('/users')
            .then(response=>{   
                this.dataTable = response.data
            })
        },

        deleteData(id){
            this.$http
            .delete('/users/' + id )
            .then(response=>{   
                console.log(response)
                // this.dataTable = response.data
                console.log(this.dataTable)
                this.$toast.success('Data has been deleted successfully')
                this.renderData()
                // window.location.reload()
            })

            // .catch((error) => {
            //     if(error.response.data.errors)(
            //       this.$toast.error("Kehapus kan")
            //     )
            // })
            
        }   
    },
}
</script>

<style scoped>
/* .v-btn button {
 width: 200px;
 height: 50px;
 background: #4662d4;
 color: white;
 border-radius: 30px;
 font-size: 16px;
 margin-top: 50px;
 font-weight: bold;
 text-transform: capitalize;
 cursor: pointer;
 padding: 5px;
} */
</style>