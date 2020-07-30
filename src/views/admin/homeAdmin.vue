<template>
<v-container class="bg">
    <NavigationAdmin name="ผู้ดูแลระบบ" />

    <v-layout row wrap>
        <v-flex xs12 md4>
            <!-- <v-hover v-slot:default="{ hover }" close-delay="200"> -->
            <v-card class="pa-3 rounded-lg ma-2">
                <v-img style="height:160px" src="https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                    <!-- <v-row class="pa-2">  -->
                    <center>
                        <v-avatar class="rounded-lg pt-3 elevation-5" size="120">
                            <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                        </v-avatar>
                        <v-list-item-title class="title body-3 white--text font-weight-light">
                            <h5>นายแดง สุขใจ (ผู้ดูแลระบบ)</h5>
                        </v-list-item-title>
                    </center>
                </v-img>
            </v-card>
            <!-- </v-hover> -->
        </v-flex>

        <v-flex xs12 md4>
            <v-hover v-slot:default="{ hover }" close-delay="200">
                <v-card class="pa-3 rounded-lg ma-2" flat :elevation="hover ? 16 : 2  " @click="$router.push('/admin/userprofile')">
                    <v-row class="pl-3">
                        <v-icon dark large class="icondash info pa-6 rounded-lg">mdi-account-multiple</v-icon>
                        <v-spacer></v-spacer>
                        <div flex-vertical class="pr-3 ml-auto text-right">
                            <h3 class="font-weight-thin">เกษตกร</h3>
                            <h4 class="font-weight-thin">ทั้งหมด</h4>
                            <h3>300 คน</h3>
                        </div>
                    </v-row>
                    <!-- <br> -->
                    <!-- <v-btn class="rounded-lg" dark block @click="$router.push('/admin/userprofile')" color="green">ดูรายละเอียดเพิ่มเติม</v-btn>  -->
                </v-card>
            </v-hover>
        </v-flex>

        <v-flex xs12 md4>
            <v-hover v-slot:default="{ hover }" close-delay="200">
                <v-card class="pa-3 rounded-lg ma-2" flat :elevation="hover ? 16 : 2" @click="$router.push('/admin/reportsystem')">
                    <v-row class="pl-3">
                        <v-icon dark large class="icondash indigo pa-6 rounded-lg">mdi-account-clock</v-icon>
                        <v-spacer></v-spacer>
                        <div flex-vertical class="pr-3 ml-auto text-right">
                            <h3 class="font-weight-thin">สมัครสมาชิกใหม่</h3>
                            <h4 class="font-weight-thin">ในเดือนนี้</h4>
                            <h3>120 คน</h3>
                        </div>
                    </v-row>
                    <!-- <br>
                    <v-btn class="rounded-lg" dark block @click="$router.push('/admin/reportsystem')" color="green">ดูรายละเอียดเพิ่มเติม</v-btn> -->
                </v-card>
            </v-hover>
        </v-flex>

        <!-- <v-flex xs12 md4>
            <v-card class="pa-3 rounded-lg ma-2" flat>
                <v-img style="height:160px" src="https://images.pexels.com/photos/46188/bison-buffalo-american-animal-46188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></v-img>
            </v-card>
        </v-flex> -->

        <v-flex xs12 md4>
            <v-hover v-slot:default="{ hover }" close-delay="200">
                <v-card class="pa-3 rounded-lg ma-2" flat :elevation="hover ? 16 : 2  " @click="$router.push('/admin/reportbuffalo')">
                    <v-row class="pl-3">
                        <v-icon dark large class="icondash green pa-6 rounded-lg">mdi-cow</v-icon>
                        <v-spacer></v-spacer>
                        <div flex-vertical class="pr-3 ml-auto text-right">
                            <h3 class="font-weight-thin">จำนวนควาย</h3>
                            <h4 class="font-weight-thin">ทั้งหมด</h4>
                            <h3>500 ตัว</h3>
                        </div>
                    </v-row>
                    <!-- <v-btn class="rounded-lg" outlined block @click="$router.push('/admin/reportbuffalo')" color="green">ดูรายละเอียดเพิ่มเติม</v-btn> -->
                </v-card>
            </v-hover>
        </v-flex>

        <v-flex xs12 md4>
            <v-hover v-slot:default="{ hover }" close-delay="200">
                <v-card class="pa-3 rounded-lg ma-2" flat :elevation="hover ? 16 : 2 " @click="$router.push('/admin/reportsystem')">
                    <v-row class="pl-3">
                        <v-icon dark large class="icondash purple pa-6 rounded-lg">mdi-home-group</v-icon>
                        <v-spacer></v-spacer>
                        <div flex-vertical class="pr-3 ml-auto text-right">
                            <h3 class="font-weight-thin">จำนวนฟาร์ม</h3>
                            <h4 class="font-weight-thin">ทั้งหมด</h4>
                            <h3>50 แห่ง</h3>
                        </div>
                    </v-row>
                    <!-- <v-btn class="rounded-lg" outlined block @click="$router.push('/admin/reportsystem')" color="green">ดูรายละเอียดเพิ่มเติม</v-btn> -->
                </v-card>
            </v-hover>
        </v-flex>
    </v-layout>

    <v-layout row wrap>
        <v-flex xs12 md6>
            <v-hover v-slot:default="{ hover }" close-delay="200" class="lg4 sm6 xs12">
                <v-card :elevation="hover ? 16 : 2" class="rounded-lg ma-2 pa-4">
                    <h4 class="text-center">
                        จำนวนผู้ใช้งานในแต่ละเดือน
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
                    <column-chart :colors="['#3CB371']" :data="chartData"></column-chart>
                    <br>
                    <center>
                        <v-btn depressed @click="$router.push('/admin/reportsystem')" block dark class="rounded-lg" color="green">ดูข้อมูลเพิ่มเติม</v-btn>
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
                    <area-chart :colors="['#1E90FF']" :data="chartData"></area-chart>
                    <center>
                        <v-btn depressed @click="$router.push('/admin/reportbuffalo')" block dark class="rounded-lg" color="green">ดูข้อมูลเพิ่มเติม</v-btn>
                    </center>
                </v-card>
            </v-hover>
        </v-flex>
    </v-layout>

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
            date: new Date().toISOString().substr(0, 10),
            menu: false,
            modal: false,
            menu2: false,

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
