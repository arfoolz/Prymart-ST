<template>
    <v-autocomplete
     style="border-radius: 10px"
     item-text="name"
     item-value="value"
     v-model="FilterGender"
     :items="items"
     dense
     outlined
     single-line
     label="Gender"
     >
        
    </v-autocomplete>
</template>