<template>
    <section>
        <v-navigation-drawer 
            enable-resize-watcher 
            app color="#3e465b" 
            height="100%" 
            width="14%"
            :dark="true"
            >
        
            <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->

            <v-list>

                <img src="@/assets/matana_logo.png" width="80%" height="80%" class="pl-md-4">

                <br>
                <br>
              
                <v-list-item color="white" to="/barang">
                    <v-list-item-icon>
                        <v-icon> mdi-clipboard-outline </v-icon>
                    </v-list-item-icon>
                    <v-list-item-title class="navfont"> Barang </v-list-item-title>
                </v-list-item>

                 <v-list-item color="white" to="/karyawan">
                    <v-list-item-icon>
                        <v-icon> mdi-account </v-icon>
                    </v-list-item-icon>
                    <v-list-item-title class="navfont"> Karyawan </v-list-item-title>
                </v-list-item>

                <!-- <v-list-group group="inventory">
                    <template v-slot:activator>
                        <v-list-item-icon>
                            <v-icon>mdi-layers</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title class="navfont"> Inventory </v-list-item-title>
                    </template>

                    <v-list-item to="/inventory/product">
                        <v-list-item-icon>
                            <v-icon></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content class="navfont"> Product </v-list-item-content>
                    </v-list-item>
            
                    <v-list-item to="/inventory/product-tag">
                        <v-list-item-icon>
                            <v-icon></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content class="navfont"> Product Tag </v-list-item-content>
                    </v-list-item>
                </v-list-group> -->
            </v-list>
        </v-navigation-drawer>

    
        <v-app-bar :elevation="0" app color="white">
            <v-row>
                <v-col cols="12" lg="12">
                    <v-btn
                        :to="{ name: 'Login' }"
                        style="margin-left:93%;"
                        text
                        name="logout-btn"
                        color="grey"
                        >
                        Logout
                    </v-btn>
                </v-col>
            </v-row>
        </v-app-bar>
    </section>
</template>


// <script>
//   export default {
//     data: () => ({
//       drawer: false,
//     }),
//   }
// </script>

<style scoped>
    .navfont{
     font-size:14px;
    }
</style>
