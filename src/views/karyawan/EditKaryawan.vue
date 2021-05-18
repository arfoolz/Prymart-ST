    <template>
    <div>
        <h2>Edit Data Karyawan</h2>

        <br>

        <v-container>
            <v-row>
                <v-col cols="6">
                    <div>
                        <p>Kode Karyawan <span style="color: red;">*</span></p>
                        <v-text-field
                         v-model="karyawan.code_user"
                         class="form"
                         label="Kode Karyawan"
                         single-line
                         outlined
                         disabled
                         >
                        </v-text-field>
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="6">
                    <div>
                        <p>Nama <span style="color: red;">*</span></p>
                        <v-text-field
                         v-model="karyawan.name"
                         class="form"
                         label="Nama"
                         single-line
                         outlined
                         >
                        </v-text-field>
                    </div>
                </v-col>
                <v-col cols="6">
                    <div>
                        <p>Tanggal Lahir <span style="color: red">*</span></p>
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
                                label="Tanggal Lahir"
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
            <v-row>
                <v-col cols="6">
                    <div>
                        <p>Jenis Kelamin <span style="color: red;">*</span></p>
                        <v-text-field
                         v-model="karyawan.gender"
                         class="form"
                         label="Jenis Kelamin"
                         single-line
                         outlined
                         disabled
                         >
                        </v-text-field>
                    </div>
                </v-col>
                <v-col cols="6">
                    <div>
                        <p>Nomor Telepon <span style="color: red;">*</span></p>
                        <v-text-field
                         v-model="karyawan.phone_number"
                         class="form"
                         label="Nomor Telepon"
                         single-line
                         outlined
                         maxlength="13"
                         >
                        </v-text-field>
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col sm="12" md="12" lg="12">
                    <div>
                        <p>Alamat <span style="color: red;">*</span></p>
                        <v-textarea
                         v-model="karyawan.address"
                         height="150"
                         class="form"
                         label="Alamat"
                         single-line
                         outlined
                         :counter="250"
                         maxlength="250"
                         >
                        </v-textarea>
                    </div>
                </v-col>
            </v-row>
        </v-container>

        <v-container>
            <v-row>
                <v-col cols="6">
                    <div>
                        <p>Username <span style="color: red;">*</span></p>
                        <v-text-field
                         v-model="karyawan.username"
                         class="form"
                         label="Username"
                         single-line
                         outlined
                         :counter="15"
                         maxlength="15"
                         >
                        </v-text-field>
                    </div>
                </v-col>
                <v-col cols="6">
                    <div>
                        <p>Password <span style="color: red;">*</span></p>
                        <v-text-field
                         v-model="karyawan.password"
                         class="form"
                         label="Password"
                         single-line
                         outlined
                         >
                        </v-text-field>
                    </div>
                </v-col>
            </v-row>
            <!-- <v-row>
                <v-col cols="6">
                    <div>
                        <p>Password <span style="color: red;">*</span></p>
                        <v-text-field
                         v-model="karyawan.password"
                         class="form"
                         label="Password"
                         single-line
                         outlined
                         >
                        </v-text-field>
                    </div>
                </v-col>
                <v-col cols="6">
                    <div>
                        <p>Password <span style="color: red;">*</span></p>
                        <v-text-field
                         v-model="karyawan.password"
                         class="form"
                         label="Password"
                         single-line
                         outlined
                         >
                        </v-text-field>
                    </div>
                </v-col>
            </v-row> -->
        </v-container>

        <br>
        <br>
         <v-divider></v-divider>
        <br>

        <div class="btn">
            <v-row>
                <v-col md="10" sm="9" cols="5" lg="10" class="text-right">
                <v-btn
                    :to="{ path: '/karyawan' }"
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

            date: new Date().toISOString().substr(0, 10),
            dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
            menudate: false,

            karyawan: {
                code_user: '',
                name: '',
                date_of_birth:'',
                gender:'',
                phone_number: '',
                address: '',
                username:'',
                password:'',
            },
        }
    },

    created() {
      this.renderData()
    },

    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
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

        renderData(){
          this.$http
          .get('/users/' + this.$route.params.id)

          .then((response) => {
            this.karyawan.code_user = response.data.code_user
            this.karyawan.name = response.data.name
            this.karyawan.date_of_birth = response.data.date_of_birth
            this.karyawan.gender = response.data.gender
            this.karyawan.phone_number = response.data.phone_number
            this.karyawan.address = response.data.address
            this.karyawan.username = response.data.username
            this.karyawan.password = response.data.password
            
            console.log(response.data)
          })
        },

        save(){
          this.$http
          .put('/users/update/' + this.$route.params.id, {
           name: this.karyawan.name,
           date_of_birth: this.karyawan.date_of_birth,
           gender: this.karyawan.gender,
           phone_number: this.karyawan.phone_number,
           address: this.karyawan.address,
          })
          
        
          .then(response=>{
            console.log(response)
            this.$router.push('/karyawan')
            console.log("Masuk")
        })
        //   .catch((error) => {
        //     this.error = error.response.data.error
        //   })
      },
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