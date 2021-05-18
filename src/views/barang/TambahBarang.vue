<template>
    <div>
        <h2>Tambah Barang</h2>

        <br>

        <v-container>
            <v-row>
                <v-col cols="6">
                    <div>
                        <p>Nama Barang <span style="color: red;">*</span></p>
                        <v-text-field
                         v-model="item.item_name"
                         class="form"
                         label="Nama Barang"
                         single-line
                         outlined
                         >
                        </v-text-field>
                    </div>
                </v-col>
                <v-col cols="6">
                    <div>
                        <p>Jenis Barang <span style="color: red;">*</span></p>
                        <v-select
                         v-model="item.type_of_item"
                         :items="type"
                         class="form"
                         label="Jenis Barang"
                         single-line
                         outlined
                         >
                        </v-select>
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="6">
                    <div>
                        <p>Harga Beli <span style="color: red;">*</span></p>
                        <v-text-field
                         v-model="item.purchase_price"
                         @keypress="onlyNumber"
                         class="form"
                         label="Harga Beli"
                         single-line
                         outlined
                         >
                        </v-text-field>
                    </div>
                </v-col>
                <v-col cols="6">
                    <div>
                        <p>Harga Jual <span style="color: red;">*</span></p>
                        <v-text-field
                         v-model="item.selling_price"
                         @keypress="onlyNumber"
                         class="form"
                         label="Harga Jual"
                         single-line
                         outlined
                         maxlength="13"
                         >
                        </v-text-field>
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="6">
                    <div>
                        <p>Stock Barang <span style="color: red;">*</span></p>
                        <v-text-field
                         v-model="item.stock_item"
                         @keypress="onlyNumber"
                         type="number"
                         class="form"
                         label="Stok Barang"
                         single-line
                         outlined
                         maxlength="13"
                         >
                        </v-text-field>
                    </div>
                </v-col>
                <v-col cols="6">
                    <div>
                        <p>Tanggal Expire <span style="color: red">*</span></p>
                        <v-menu
                            v-model="menudate"
                            :close-on-content-click="false"
                            transition="scale-transition"
                            offset-y
                            max-width="290px"
                            min-width="auto"
                         >
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                v-model="computedDateFormatted"
                                prepend-inner-icon="mdi-calendar"
                                label="Tanggal Expire"
                                single-line
                                class="form"
                                outlined
                                readonly
                                v-bind="attrs"
                                v-on="on"
                                ></v-text-field>
                            </template>

                            <v-date-picker
                                v-model="date"
                                no-title
                                @input="menudate = false"
                            ></v-date-picker>
                        </v-menu>
                    </div>
                </v-col>
            </v-row>
        </v-container>

        <br>
        <br>
         <v-divider></v-divider>
        <br>

        <div class="btn">
            <v-row>
                <v-col md="10" sm="9" cols="5" lg="10" class="text-right">
                <v-btn
                    :to="{ path: '/barang' }"
                    color="#E6E9ED"
                    style="margin: 10px; color: #768F9C; box-sizing: content-box; border-radius: 25px; width: 111px; height: 45px; padding: 4px;"
                    class="cancel"
                    link>
                    Cancel
                </v-btn>
                </v-col>

                <v-col md="1" sm="2" cols="5" lg="1" class="text-right">
                <v-btn
                    style="margin: 10px; background: #4662d4; color: white; box-sizing: content-box; border-radius: 25px; width: 111px; height: 45px; padding: 4px"
                    class="save"
                    @click="save()"
                    :disabled="computedbtnSaveDisable"
                    >
                    Save
                </v-btn>
                </v-col>
            </v-row>
        </div>

    </div>
</template>

<script>

export default ({
    data: vm => {
        return {

            disableBtnSave : true,

            date: new Date().toISOString().substr(0, 10),
            dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
            menudate: false,

            type: ['Makanan', 'Minuman',],
            item: {
                item_name       : '',
                type_of_item    : '',
                purchase_price  : '',
                selling_price   : '',
                stock_item      : '',
                expired_date    : '',
            },
        }
    },

    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      },

      computedbtnSaveDisable() {
        let DisableBtnSave = true
        if (this.item.item_name && this.item.type_of_item && this.item.purchase_price && this.item.selling_price && this.item.stock_item && this.date) {
            DisableBtnSave = false
        } else {
            DisableBtnSave = true
        }
        return DisableBtnSave
      },
    },

    watch: {
      date () {
        this.dateFormatted = this.formatDate(this.date)
      },
    },

  
    methods: {

        formatDate (date) {
        if (!date) return null
        const [year, month, day] = date.split('-')
        return `${day}/${month}/${year}`
        },

        parseDate (date) {
        if (!date) return null
        const [day, month, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        },

        save(){
          this.$http
          .post('/items', {
           item_name       : this.item.item_name,
           type_of_item    : this.item.type_of_item,
           purchase_price  : this.item.purchase_price,
           selling_price   : this.item.selling_price,
           stock_item      : this.item.stock_item,
           expired_date    : this.date,
          })
          
          .then()
            this.$router.push('/barang')
            this.$toast.success('Data has been added successfully')
            
        //   .catch((error) => {
        //     this.error = error.response.data.error
        //   })        
        },

        onlyNumber ($event) {
            //console.log($event.keyCode); //keyCodes value
            let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
            if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) { // 46 is dot
                $event.preventDefault();
            }
        }
    },
})
</script>

<style scoped>
  .form {
    border-radius: 10px;
    border-style: none;
    text-decoration: none;
  }
  .v-btn{
    border-radius: 15px;
    width: 100px;
    height: 100px;
  }
</style>