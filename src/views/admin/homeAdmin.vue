<template>
<!-- <div class="bg"> 
    <NavigationAdmin name="ผู้ดูแลระบบ" /> 
        <v-container grid-list-xs> 
        <v-layout row wrap>
            <v-flex xs12>
                <v-card class="mb-3 rounded-lg" @click="$router.push('/admin/reportsystem')">
                    <div class="d-flex flex-no-wrap ">
                        <div class="ma-3">
                            <v-btn color="info" fab dark>
                                <v-icon>mdi-account</v-icon>
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
                <v-card  class="mr-2 rounded-lg" @click="$router.push('/admin/reportbuffalo')">
                    <div class="d-flex flex-no-wrap">
                        <div class="ma-3">
                            <v-btn samll color="success" fab dark>
                                <v-icon>mdi-cow</v-icon>
                            </v-btn>
                        </div>
                        <div class="ml-auto text-right mt-2 mr-2">
                            <h5 class="body-3 grey--text font-weight-light">
                                จำนวนควาย
                            </h5>
                            <h4>
                                39 ตัว
                            </h4>
                        </div> 
                    </div>
                </v-card>
            </v-flex>
            <v-flex xs6>
                <v-card class="ml-2 rounded-lg">
                    <div class="d-flex flex-no-wrap ">
                        <div class="ma-3">
                            <v-btn color="primary" fab dark>
                                <v-icon>mdi-domain</v-icon>
                            </v-btn>
                        </div>
                        <div class="ml-auto text-right mt-2 mr-2">
                            <h5 class="body-3 grey--text font-weight-light">
                                จำนวนฟาร์ม
                            </h5>
                            <h4>
                                20 แห่ง
                            </h4>
                        </div> 
                    </div>
                </v-card>
            </v-flex> 
        </v-layout>
         </v-container> 
        <v-container grid-list-xs> 
        <v-card class="mt-3 pa-4 rounded-lg">
            <v-card-title>
                จำนวนสมาชิกในเดือนนี้
            </v-card-title>
            <column-chart :colors="['#339933']" :data="chartData"></column-chart>
             <v-btn @click="$router.push('/admin/reportsystem')" block dark text color="green">ดูข้อมูลเพิ่มเติม</v-btn>
        </v-card>

        <v-card class="mt-3 pa-4 rounded-lg">
            <v-card-title>
                จำนวนควายทั้งหมด
            </v-card-title>
            <area-chart :colors="['#3399FF']" :data="chartData"></area-chart>
            <v-btn @click="$router.push('/admin/reportbuffalo')" block dark text color="green">ดูข้อมูลเพิ่มเติม</v-btn>
        </v-card>
 </v-container> 
</div> -->
</template>

<script>
// export default {
//     data: () => ({
//         chartData: {
//             '1/7/2020': 40,
//             '2/7/2020': 20,
//             '3/7/2020': 80,
//             '4/7/2020': 12,
//             '5/7/2020': 32,
//             '6/7/2020': 60,
//         },
//         value: [
//             423,
//             446,
//             675,
//             510,
//             590,
//             610,
//             760,
//         ],

//     }),

// }
</script>

<style>
/* .menu {
    font-size: 26px !important;
} 
.icon {
    font-size: 26px !important;
} 
.ll {
    font-weight: 100 !important;
} 
.bg { 
    background: rgba(242, 243, 244); 
    height: 100%; 
    background-position: center; 
    background-repeat: repeat;
    background-size: cover; 
} */
</style>

<template>

<v-container class="bg">
<NavigationAdmin name="ผู้ดูแลระบบ" /> 
    <!-- <v-container>
        <h2>แดชบอร์ด</h2>
        <v-divider></v-divider>
    </v-container> -->

    <!-- <v-container grid-list-xs> -->
        <v-layout row wrap>
            <v-flex xs12 md4>
                <v-hover v-slot:default="{ hover }" close-delay="200">
                    <v-card class="pa-3 rounded-lg ma-2" flat :elevation="hover ? 16 : 2  ">
                        <v-img style="height:160px" src="https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                            <!-- <v-row class="pa-2">  -->
                                <center>
                                <v-avatar class="rounded-lg pt-3 elevation-5" size="120">
                                    <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                                </v-avatar> 
                                    <v-list-item-title class="title body-3 white--text font-weight-light" ><h5>นายแดง สุขใจ (ผู้ดูแลระบบ)</h5></v-list-item-title>
                             
                                </center> 
                        </v-img>
                    </v-card>
                </v-hover>
            </v-flex>

            <v-flex xs12 md4>
                <v-hover v-slot:default="{ hover }" close-delay="200">
                    <v-card class="pa-3 rounded-lg ma-2" flat :elevation="hover ? 16 : 2  ">
                        <v-row class="pa-2">
                            <v-icon dark large class="icondash info pa-7 rounded-lg">mdi-account-multiple</v-icon>
                            <div class="ml-auto text-right">
                                <div class="">
                                    เกษตกร
                                </div>
                                <div class="">
                                    ทั้งหมด
                                </div>
                                <h2>
                                    300 คน
                                </h2>
                            </div>
                            <v-btn class="rounded-lg" outlined block @click="$router.push('/admin/userprofile')" color="green">ดูรายละเอียดเพิ่มเติม</v-btn>
                        </v-row>
                    </v-card>
                </v-hover>
            </v-flex>

            <v-flex xs12 md4>
                <v-hover v-slot:default="{ hover }" close-delay="200">
                    <v-card class="pa-3 rounded-lg ma-2" flat :elevation="hover ? 16 : 2  ">
                        <v-row class="pa-2">
                            <v-icon dark large class="icondash indigo pa-7 rounded-lg">mdi-account-clock</v-icon>
                            <div class="ml-auto text-right">
                                <div class="">
                                    สมัครสมาชิกใหม่
                                </div>
                                <div class="">
                                    ในเดือนนี้
                                </div>
                                <h2>
                                    120 คน
                                </h2>
                            </div>
                            <v-btn class="rounded-lg" outlined block @click="$router.push('/admin/reportsystem')" color="green">ดูรายละเอียดเพิ่มเติม</v-btn>
                        </v-row>
                    </v-card>
                </v-hover>
            </v-flex>

            <v-flex xs12 md4>
                <v-hover v-slot:default="{ hover }" close-delay="200">
                    <v-card class="pa-3 rounded-lg ma-2" flat :elevation="hover ? 16 : 2  ">
                        <v-img style="height:160px" src="https://images.pexels.com/photos/46188/bison-buffalo-american-animal-46188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></v-img>
                    </v-card>
                </v-hover>
            </v-flex>

            <v-flex xs12 md4>
                <v-hover v-slot:default="{ hover }" close-delay="200">
                    <v-card class="pa-3 rounded-lg ma-2" flat :elevation="hover ? 16 : 2  ">
                        <v-row class="pa-2">
                            <v-icon dark large class="icondash light-blue pa-7 rounded-lg">mdi-cow</v-icon>
                            <div class="ml-auto text-right">
                                <div class="">
                                    จำนวนควาย
                                </div>
                                <div class="">
                                    ทั้งหมด
                                </div>
                                <h2>
                                    500 ตัว
                                </h2>
                            </div>
                            <v-btn class="rounded-lg" outlined block @click="$router.push('/admin/reportbuffalo')" color="green">ดูรายละเอียดเพิ่มเติม</v-btn>
                        </v-row>
                    </v-card>
                </v-hover>
            </v-flex>

            <v-flex xs12 md4>
                <v-hover v-slot:default="{ hover }" close-delay="200">
                    <v-card class="pa-3 rounded-lg ma-2" flat :elevation="hover ? 16 : 2  ">
                        <v-row class="pa-2">
                            <v-icon dark large class="icondash purple pa-7 rounded-lg">mdi-home-group</v-icon>
                            <div class="ml-auto text-right">
                                <div class="">
                                    จำนวนฟาร์ม
                                </div>
                                <div class="">
                                    ทั้งหมด
                                </div>
                                <h2>
                                    50 แห่ง
                                </h2>
                            </div>
                            <v-btn class="rounded-lg" outlined block @click="$router.push('/admin/reportsystem')" color="green">ดูรายละเอียดเพิ่มเติม</v-btn>
                        </v-row>
                    </v-card>
                </v-hover>
            </v-flex>
            <!-- <v-flex xs12 md4 >
                <v-date-picker v-model="picker" elevation="5" class="rounded-lg ma-3"></v-date-picker>
            </v-flex> -->
        </v-layout>
    <!-- </v-container> -->

    <v-divider></v-divider>
    <!-- <v-container grid-list-xs> -->
        <v-layout row wrap>
            <v-flex xs12 md6>
                <v-hover v-slot:default="{ hover }" close-delay="200" class="lg4 sm6 xs12">
                    <v-card :elevation="hover ? 16 : 2" class="rounded-lg ma-2 pa-4">
                        <h4 class="text-center">
                            จำนวนผู้ใช้งานในแต่ละเดือน
                        </h4>
                        <column-chart :colors="['#3CB371']" :data="chartData"></column-chart>
                        <center>
                            <v-btn @click="$router.push('/admin/reportsystem')" block text class="rounded-lg mt-2 mb-3" color="green">ดูข้อมูลเพิ่มเติม</v-btn>
                        </center>
                    </v-card>
                </v-hover>
            </v-flex>
            <v-flex xs12 md6>
                <v-hover v-slot:default="{ hover }" close-delay="200" class="lg4 sm6 xs12">
                    <v-card :elevation="hover ? 16 : 2" class="rounded-lg ma-2 pa-4">
                        <h4 class="text-center">
                            จำนวนกระบือที่อยู่ในระบบทั้งหมด
                        </h4>
                        <area-chart :colors="['#1E90FF']" :data="chartData"></area-chart>
                        <center>
                            <v-btn @click="$router.push('/admin/reportbuffalo')" block text class="rounded-lg mt-2 mb-3" color="green">ดูข้อมูลเพิ่มเติม</v-btn>
                        </center>
                    </v-card>
                </v-hover>
            </v-flex>
        </v-layout>
    <!-- </v-container> -->

</v-container>
</template>

<script>
export default {

    name: 'Root',
    /*-------------------------ประกาศ components ---------------------------------------*/
    components: {

    },
    /*-------------------------รับค่าเมื่อเราเป็น components---------------------------------------*/
    props: {

    },
    /*-------------------------ประกาศตัวแปรที่ใช้ ผูกกับ v-model ---------------------------------------*/
    data() {
        return {

            picker: null,
            labels: [
                'ม.ค.',
                'ก.พ.',
                'ม.ค.',
                'เม.ย.',
                'พ.ค.',
                'มิ.ย.',
                'ก.ค.',
                'ส.ค.',
                'ก.ย..',
                'ต.ค.',
                'พ.ย.',
                'ธ.ค.',
            ],
            value: [
                100,
                109,
                93,
                101,
                87,
                108,
                99,
            ],
            chartData: {
                '2020-06-20': 50,
                '2020-06-21': 40,
                '2020-06-22': 30,
                '2020-06-23': 10,
                '2020-06-24': 70,
                '2020-06-25': 45,
            },
        };

    }
}
</script>

<style scoped>
.bg {
    background: rgba(242, 243, 244);
    height: 100%;
    background-position: center;
    background-repeat: repeat;
    background-size: cover;
}

.icondash {
    max-height: 80px;
    width: auto;
}
</style>
