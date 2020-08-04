<template>
<div class="bg">

    <!-- <Navbar icon="mdi-chevron-left" name="รายงานการเติบโต" /> -->
    <!-- <Navigation name="" /> -->
    <v-container>
        <v-row class="d-flex flex-row ">
            <v-btn color="" depressed fab @click="$router.go(-1)" small>
                <v-icon class="icon">mdi-chevron-left</v-icon>
            </v-btn>
            <h2>รายงานการเติบโต</h2>
        </v-row>
    </v-container>
    <v-container>
        <!-- <v-btn class="mb-6" fab @click="$router.push('/user/report')" small>
            <v-icon class="icon">mdi-chevron-left</v-icon>
        </v-btn> -->
        <!-- <v-btn class="mb-6" fab @click="$router.go(-1)" small><v-icon class="icon">mdi-chevron-left</v-icon></v-btn> -->
        <div class="mb-3">
            <h3>การเจริญเติบโตพันธุ์ประวัติรายฟาร์ม</h3>
        </div>
        <v-card class=" pa-4 rounded-lg">
            <v-text-field class="rounded-lg" outlined name="name" label="ชื่อฟาร์ม" id="id"></v-text-field>
            <v-text-field class="rounded-lg" outlined name="name" label="จำนวนควายอายุ 240 วัน" id="id"></v-text-field>
            <v-text-field class="rounded-lg" outlined name="name" label="จำนวนควายอายุ 400 วัน" id="id"></v-text-field>
            <v-text-field class="rounded-lg" outlined name="name" label="จำนวนควายอายุ 600 วัน" id="id"></v-text-field>
        </v-card>

    </v-container>

    <buttomnavuser/>

</div>
</template>

<script>
import buttomnavuser from '@/components/buttomnavuser'
export default {
    components:{
        buttomnavuser
    },
    data: () => ({

    }),

}
</script>

<style>
.bg { 
    background: rgba(242, 243, 244); 
    height: 100%; 
    background-position: center; 
    background-repeat: repeat;
    background-size: cover; 
}
</style>
