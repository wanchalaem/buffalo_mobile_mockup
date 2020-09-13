<template>
<div class="bg">
    <!-- <Navbar icon="mdi-account-key" name="คำขอรหัสผ่าน" /> -->
    <NavigationAdmin name="คำขอรหัสผ่าน" />

    <v-container grid-list-xs>
        <v-card class="pa-3 pb-1 rounded-lg">
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
        </v-card> 
    </v-container>

    <v-tabs grow color="green">
        <v-tab>
            <v-icon left>mdi-lock</v-icon>
            ยังไม่ได้แก้รหัส
        </v-tab>
        <v-tab>
            <v-icon left>mdi-lock</v-icon>
            แก้รหัสแล้ว
        </v-tab>

        <v-tab-item>
            <v-card flat>
                <v-card-text>
                    <v-layout row wrap>
                        <v-flex xs12>
                            <v-card v-for="item in 5" class="rounded-lg pa-2 mt-3">
                                <div class="d-flex flex-no-wrap">
                                    <h3 class="pt-1 font-weight-light text--primary">ชื่อ-นามสกุล : นายแดง แม่ใจ </h3>
                                    <v-spacer></v-spacer>
                                    <v-btn depressed color="red" fab small dark @click="dialog1=false">
                                        <v-icon>mdi-delete</v-icon>
                                    </v-btn>
                                </div>
                                <!-- <h3 class="pt-1 font-weight-light text--primary">ชื่อ-นามสกุล : นายแดง แม่ใจ </h3> -->
                                <h3 class="pt-1 font-weight-light text--secondary">เบอร์โทร : 0123123123 </h3>
                                <h3 class="pt-1 font-weight-light text--secondary">สถานะ : แก้ไขรหัสผ่านแล้ว</h3>
                                <br>
                                <v-btn depressed dark @click="$router.push('/admin/userprofiledetail')" class="widths rounded-lg" color="success">
                                    <h4>ดูข้อมูล</h4>
                                </v-btn>
                            </v-card>

                            <div class="text-center pt-4">
                                <v-pagination color="green" v-model="page" :length="4" prev-icon="mdi-menu-left" next-icon="mdi-menu-right"></v-pagination>
                            </div>
                        </v-flex>

                    </v-layout>
                </v-card-text>

            </v-card>
        </v-tab-item>

        <v-tab-item>
            <v-card flat>
                <v-card-text>
                    <v-layout row wrap>
                        <v-flex xs12>
                            <v-card v-for="item in 5" class="rounded-lg pa-2 mt-3">
                                <div class="d-flex flex-no-wrap">
                                    <h3 class="pt-1 font-weight-light text--primary">ชื่อ-นามสกุล : นายแดง แม่ใจ </h3>
                                    <v-spacer></v-spacer>
                                    <v-btn depressed color="red" fab small dark @click="dialog1=false">
                                        <v-icon>mdi-delete</v-icon>
                                    </v-btn>
                                </div>
                                <!-- <h3 class="pt-1 font-weight-light text--primary">ชื่อ-นามสกุล : นายแดง แม่ใจ </h3> -->
                                <h3 class="pt-1 font-weight-light text--secondary">เบอร์โทร : 0123123123 </h3>
                                <h3 class="pt-1 font-weight-light text--secondary">สถานะ : แก้ไขรหัสผ่านแล้ว</h3>
                                <br>
                                <v-btn depressed dark @click="$router.push('/admin/userprofiledetail')" class="widths rounded-lg" color="success">
                                    <h4>ดูข้อมูล</h4>
                                </v-btn>
                            </v-card>

                            <div class="text-center pt-4">
                                <v-pagination color="green" v-model="page" :length="4" prev-icon="mdi-menu-left" next-icon="mdi-menu-right"></v-pagination>
                            </div>
                        </v-flex>

                    </v-layout>
                </v-card-text>

            </v-card>
        </v-tab-item>

    </v-tabs> 

    <buttomnav />
</div>
</template>

<script>
import buttomnav from '@/components/admin/buttomnav';
export default {
    name: 'Root',
    /*-------------------------ประกาศ components ---------------------------------------*/
    components: {
buttomnav
    },
    /*-------------------------รับค่าเมื่อเราเป็น components---------------------------------------*/
    props: {

    },
    /*-------------------------ประกาศตัวแปรที่ใช้ ผูกกับ v-model ---------------------------------------*/
    data() {
        return {
            activeBtn: 1,
            page: 1,
            items: ['แก้ไขรหัสผ่านแล้ว', 'ยังไม่ได้แก้ไขรหัสผ่าน'],

            txt: 'Hello World',

            date: new Date().toISOString().substr(0, 10),
            menu: false,
            modal: false,
            menu2: false,
            dialog: true,
            menu: false,
            desserts1: [{
                    describe1: 'น้ำหนัก (กิโลกรัม)',
                    calories1: '97 กิโลกรัม',
                },
                {
                    describe1: 'ความกว้างรอบอก (เซนติเมตร)',
                    calories1: '56 เซนติเมตร',
                },
                {
                    describe1: 'ความยาวลำตัว (เซนติเมตร)',
                    calories1: '102 เซนติเมตร',
                },
                {
                    describe1: 'ความสูง (เซนติเมตร)',
                    calories1: '78 เซนติเมตร',
                },

            ],

        };
    },
    /*------------------------- สิ่งทที่อยู่ในนี้จะถูกรัยเมื่อโหลด ------------------------------------------*/
    // mounted: async function () { 
    //     await this.load();
    // },
    /*------------------------- กระทำการตอน router ถูกโหลดเข้ามา------------------------------------------*/
    async beforeRouteEnter(to, from, next) {
        next()
    },

    methods: {
        load: async function () {},
        save1(date) {
            this.$refs.menu.save(date)
        },
    },
    /*-------------------------ใช้จัดการ operation  หรือ คำนวณค่าต่างๆ (คล้าย methods)------------------------------------------*/

}
</script>

<style scoped>
.widths {
    width: 100%;
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

.datebg {
    background: rgb(255, 255, 255);
}
</style>
