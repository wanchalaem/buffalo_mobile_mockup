<template>
<div class="bg">
    <!-- <Navbar name="ผู้ดูแลระบบ" /> -->
    <NavigationAdmin name="ผู้ดูแลระบบ" />
    <div class="pa-4">
        <v-layout row wrap>
            <v-flex xs12>
                <v-card class="ma-2">
                    <div class="d-flex flex-no-wrap ">
                        <div class="ma-3">
                            <v-btn color="info" fab dark>
                                <v-icon>mdi-domain</v-icon>
                            </v-btn>
                        </div>
                        <div>
                            <v-card-title class="headline">120 คน</v-card-title>
                            <v-card-subtitle>จำนวนสมาชิกในเดือนนี้</v-card-subtitle>
                        </div>
                    </div>
                </v-card>
            </v-flex>
            <v-flex xs6>
                <v-card class="ma-2 rounded-lg">
                    <div class="d-flex flex-no-wrap">
                        <div class="ma-3">
                            <v-btn color="success" fab dark>
                                <v-icon>mdi-cow</v-icon>
                            </v-btn>
                        </div>
                        <div class="ml-auto text-right" style="margin-right: 4px;">
                            <h5 class="body-3 grey--text font-weight-light">
                                จำนวนควายทั้งหมด
                            </h5>
                            <h2>
                                39ตัว
                            </h2>
                        </div>

                    </div>
                </v-card>
            </v-flex>
            <v-flex xs6>
                <v-card class="ma-2">
                    <div class="d-flex flex-no-wrap ">
                        <div class="ma-3">
                            <v-btn color="primary" fab dark>
                                <v-icon>mdi-domain</v-icon>
                            </v-btn>
                        </div>
                        <div class="ml-auto text-right" style="margin-right: 4px;">
                            <h5 class="body-3 grey--text font-weight-light">
                                จำนวนควายทั้งหมด
                            </h5>
                            <h2>
                                39ตัว
                            </h2>
                        </div>

                    </div>
                </v-card>
            </v-flex>

        </v-layout>
    </div>

    <div class="pa-4">
        <v-card class="mt-3">
            <v-card-title>
                จำนวนสมาชิกในเดือนนี้
            </v-card-title>
            <column-chart :colors="['#339933']" :data="chartData"></column-chart> 
        </v-card>

        <v-card class="mt-3">
            <v-card-title>
                จำนวนควายทั้งหมด
            </v-card-title>
            <area-chart :colors="['#3399FF']" :data="chartData"></area-chart> 
        </v-card>
 
    </div> 
 
</div>
</template>

<script>
export default {
    data: () => ({
        chartData: {
            '1/7/2020': 40,
            '2/7/2020': 40,
            '3/7/2020': 40,
            '4/7/2020': 42,
            '5/7/2020': 42,
            '6/7/2020': 45,
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

/* .bg {
    background-color: #f5f5ff;
    background-attachment: fixed;
} */

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
