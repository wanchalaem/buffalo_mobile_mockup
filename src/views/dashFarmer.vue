<template>
<div class="bg">
    <!-- <Navbar name="ผู้ใช้ทั่วไป" /> -->
    <v-container grid-list-xs>

        <navigation name="ผู้ใช้ทั่วไป" />
        <!-- <div class="pa-4"> -->
        <v-layout row wrap>
            <v-flex xs12 md4>
                <v-hover v-slot:default="{ hover }" close-delay="200">
                    <v-card class="pa-3 rounded-lg mb-2" flat :elevation="hover ? 16 : 2  ">
                        <v-img style="height:160px" src="https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                            <!-- <v-row class="pa-2">  -->
                            <center>
                                <v-avatar class="rounded-lg pt-3 elevation-5" size="120">
                                    <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                                </v-avatar>
                                <v-list-item-title class="title body-3 white--text font-weight-light">
                                    <h5>นายแดง สุขใจ (เกษตกร)</h5>
                                </v-list-item-title>
                            </center>
                        </v-img>
                    </v-card>
                </v-hover>
            </v-flex>

            <v-flex xs12>
                <v-card id="123" @click="$router.push('/user/reportsum')" class=" rounded-lg">
                    <div class="d-flex flex-no-wrap ">
                        <div class="ma-3">
                            <v-btn depressed color="info" fab dark>
                                <v-icon>mdi-cow</v-icon>
                            </v-btn>
                        </div>
                        <div>
                            <v-card-title class="headline">39 ตัว</v-card-title>
                            <v-card-subtitle>จำนวนควายทั้งหมด</v-card-subtitle>
                        </div>
                    </div>
                </v-card>
            </v-flex>

        </v-layout>
        <v-card class="mt-4 pa-4 mb-15">
            <h4 class="text-center">
                จำนวนควายทั้งหมด
            </h4>
            <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date" transition="scale-transition" offset-y min-width="290px">
                <template v-slot:activator="{ on, attrs }">
                    <v-text-field color="success" outlined class="rounded-lg mt-3" v-model="date" label="วันที่" prepend-inner-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                </template>
                <v-date-picker color="success" v-model="date" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="success" @click="menu = false">ยกเลิก</v-btn>
                    <v-btn text color="success" @click="$refs.menu.save(date)">ตกลง</v-btn>
                </v-date-picker>
            </v-menu>
            <column-chart :colors="['#339933']" :data="chartData"></column-chart>
            <br>
            <v-btn depressed class="rounded-lg" @click="$router.push('/user/reportsum')" block dark color="green">ดูข้อมูลเพิ่มเติม</v-btn>
        </v-card>
    </v-container>
    <buttomnavuser/>
</div>

<!-- </div> -->
</template>

<script>
import buttomnavuser from '@/components/buttomnavuser'
export default {
    components:{
        buttomnavuser
    },
    data: () => ({
        date: new Date().toISOString().substr(0, 10),
        menu: false,
        modal: false,
        menu2: false,
        chartData: {
            '1/7/2020': 20,
            '2/7/2020': 30,
            '3/7/2020': 40,
            '4/7/2020': 52,
            '5/7/2020': 62,
            '6/7/2020': 75,
        },
        value: [
            423,
            446,
            675,
            510,
            590,
            610,
            760,
        ],

    }),

}
</script>

<style>
.menu {
    font-size: 26px !important;
}

.icon {
    font-size: 26px !important;
}

.ll {
    font-weight: 100 !important;
}

.bg {
    /* background: rgba(0, 128, 0, 0.1); */
    /* background: rgba(242, 243, 244);
    background-size: cover; */

    background: rgba(242, 243, 244);
    /* Full height */
    height: 100%;

    /* Center and scale the image nicely */
    background-position: center;
    /* background-repeat: no-repeat; */
    background-repeat: repeat;
    background-size: cover;
    /* background-size:100% 100%; */
}
</style>
