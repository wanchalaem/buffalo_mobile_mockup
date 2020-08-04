<template>
<div class="">
    <!-- <NavigationAdmin name="เพิ่มควาย" /> -->
    <v-container>
        <v-row class="d-flex flex-row ">
            <v-btn depressed color="white" small fab @click="$router.push('/admin/buffalo')">
                <v-icon class="icon">mdi-chevron-left</v-icon>
            </v-btn>
            <h2>เพิ่มควาย</h2>
            <h3 class="pl-10 pt-2">ชื่อเกษตกร : นายแดง มีสุข</h3>
        </v-row>
    </v-container> 
    <v-card flat>
        <v-card-text>
            <center>
                <v-flex xs12 row wrap>
                    <v-flex xs6 class="pr-2 pb-4">
                        <v-card class="elevation-5 rounded-lg">
                            <v-img src="https://images.pexels.com/photos/1054650/pexels-photo-1054650.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" aspect-ratio="1.7"></v-img>
                            <v-list two-line>
                                <center>
                                    <h5>ภาพด้านข้าง</h5>
                                </center>
                            </v-list>
                            <v-btn block color="success">อัพโหลด</v-btn>
                        </v-card>
                    </v-flex>
                    <v-flex xs6 class="pl-2 pb-2">
                        <v-card class="elevation-5 rounded-lg ">
                            <v-img src="https://images.pexels.com/photos/2261770/pexels-photo-2261770.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" aspect-ratio="1.7"></v-img>
                            <v-list two-line>
                                <center>
                                    <h5>ภาพด้านหลัง</h5>
                                </center>

                            </v-list>
                            <v-btn block color="success">อัพโหลด</v-btn>
                        </v-card>
                    </v-flex>

                    <v-flex xs6 class="pr-2">
                        <v-card class="elevation-5 rounded-lg ">
                            <div class="d-flex flex-no-wrap">
                                <div class="ma-3">
                                    <v-icon dark medium class="elevation-6 error rounded-lg" style="max-height: auto; width: auto;">mdi-file-pdf-outline</v-icon>
                                </div>
                                <div class="ml-auto text-right " style="margin-right:4px; margin-top:8px;">
                                    <h5>
                                        ใบพันธุ์ประวัติอ้างอิง
                                    </h5>
                                </div>
                            </div>
                            <v-btn block color="success">อัพโหลด</v-btn>
                        </v-card>
                    </v-flex>

                    <v-flex xs6 class="pl-2">
                        <v-card class="elevation-5 rounded-lg ">
                            <div class="d-flex flex-no-wrap">
                                <div class="ma-3">
                                    <v-icon dark medium class="elevation-6 error rounded-lg" style="max-height: auto; width: auto;">mdi-file-pdf-outline</v-icon>
                                </div>
                                <div class="ml-auto text-right " style="margin-right:4px; margin-top:8px;">
                                    <h5>
                                        ใบพันธุ์ประวัติทางการ
                                    </h5>
                                </div>
                            </div>
                            <v-btn block color="success">อัพโหลด</v-btn>
                        </v-card>
                    </v-flex>

                </v-flex>
            </center>
            <br>
            <!-- <div v-for="item in desserts" :key="item.name">
                        <v-text-field color="green" class="rounded-lg" outlined v-model="item.calories" name="name" :label="item.describe" id="id"></v-text-field>
                    </div>
                    <div>
                        <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="290px">
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field outlined color="green" v-model="date" class="rounded-lg" label="วัน/เดือน/ปีเกิด" prepend-inner-icon="mdi-calendar"  v-bind="attrs" v-on="on"></v-text-field>
                            </template>
                            <v-date-picker  color="green" ref="picker" v-model="date" :max="new Date().toISOString().substr(0, 10)" min="1950-01-01" @change="save1"></v-date-picker>
                        </v-menu> 
                        <v-select outlined color="green" class="rounded-lg" label="เพศ"></v-select>
                        <v-select outlined color="green" class="rounded-lg" label="สี"></v-select>
                        <v-select outlined color="green" class="rounded-lg" label="แหล่งที่มา"></v-select>
                        <v-select outlined color="green" class="rounded-lg" label="สถานะ"></v-select>
                    </div> -->
            <v-text-field class="rounded-lg" prepend-inner-icon="mdi-cow" color="green" outlined label="ชื่อหรือหมายเลขควาย"></v-text-field>
            <v-text-field class="rounded-lg" prepend-inner-icon="mdi-numeric-10-box-multiple-outline" color="green" outlined type="number" label="หมายเลข NID"></v-text-field>
            <v-text-field class="rounded-lg" prepend-inner-icon="mdi-numeric" color="green" outlined type="number" label="หมายเลขไมโครซิป"></v-text-field>
            <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="290px">
                <template v-slot:activator="{ on, attrs }">
                    <v-text-field outlined color="green" v-model="date" class="rounded-lg" label="วัน/เดือน/ปีเกิด" prepend-inner-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                </template>
                <v-date-picker color="green" ref="picker" v-model="date" :max="new Date().toISOString().substr(0, 10)" min="1950-01-01" @change="save1"></v-date-picker>
            </v-menu>
            <v-select class="rounded-lg" prepend-inner-icon="mdi-gender-male-female" color="green" outlined label="เพศ"></v-select>
            <v-text-field class="rounded-lg" prepend-inner-icon="mdi-calendar-clock" color="green" type="number" outlined label="อายุ"></v-text-field>
            <v-select class="rounded-lg" prepend-inner-icon="mdi-invert-colors" color="green" outlined label="สี"></v-select>
            <v-select class="rounded-lg" prepend-inner-icon="mdi-import" color="green" outlined label="แหล่งที่มา"></v-select>
            <v-text-field class="rounded-lg" prepend-inner-icon="mdi-tag-outline" color="green" type="number" outlined label="ราคา"></v-text-field>
            <v-select class="rounded-lg" prepend-inner-icon="mdi-post-outline" color="green" outlined label="สถานะ"></v-select>
            <v-text-field class="rounded-lg" prepend-inner-icon="mdi-cow" color="green" outlined label="ชื่อหรือหมายเลขพ่อ"></v-text-field>
            <v-text-field class="rounded-lg" prepend-inner-icon="mdi-numeric-10-box-multiple-outline" color="green" type="number" outlined label="หมายเลข NID พ่อ"></v-text-field>
            <v-text-field class="rounded-lg" prepend-inner-icon="mdi-numeric" color="green" type="number" outlined label="หมายเลขไมโครชิปพ่อ"></v-text-field>
            <v-text-field class="rounded-lg" prepend-inner-icon="mdi-cow" color="green" outlined label="ชื่อหรือหมายเลขแม่"></v-text-field>
            <v-text-field class="rounded-lg" prepend-inner-icon="mdi-numeric-10-box-multiple-outline" color="green" type="number" outlined label="หมายเลข NID แม่"></v-text-field>
            <v-text-field class="rounded-lg" prepend-inner-icon="mdi-numeric" color="green" type="number" outlined label="หมายเลขไมโครชิปแม่"></v-text-field>
            <v-text-field class="rounded-lg" prepend-inner-icon="mdi-weight-kilogram" color="green" type="number" outlined label="น้ำหนัก(กิโลกรัม)"></v-text-field>
            <v-text-field class="rounded-lg" prepend-inner-icon="mdi-arrow-left-right" color="green" type="number" outlined label="ความกว้างรอบอก(เซนติเมตร)"></v-text-field>
            <v-text-field class="rounded-lg" prepend-inner-icon="mdi-arrow-left-right" color="green" type="number" outlined label="ความยาวรอบลำตัว(เซนติเมตร)"></v-text-field>
            <v-text-field class="rounded-lg" prepend-inner-icon="mdi-human-male-height-variant" color="green" type="number" outlined label="ความสูง(เซนติเมตร)"></v-text-field>
            <!-- </v-card> -->
            <v-btn @click="$router.push('/admin/buffalo')" class="rounded-lg" block medium color="success">บันทึก</v-btn>
        </v-card-text>
    </v-card> 
</div>
</template>

<script>
export default {
    data: () => ({ 
        items: ['มีชีวิต', 'ไม่มีชีวิต', ],
        dialog: true,
        dialog1: false,
        date: null,
        menu: false,
        desserts: [
            // {
            //     describe: 'หมายเลขบัตรประชาชนเกษตรกร',
            //     calories: '3560700337836',
            // },
            {
                describe: 'ชื่อหรือหมายเลขควาย',
                calories: 'เปีย',
            },
            {
                describe: 'หมายเลข NID',
                calories: ' ',
            },
            {
                describe: 'หมายเลขไมโครชิป',
                calories: ' ',
            },
            // {
            //     describe: 'วัน/เดือน/ปี เกิด',
            //     calories: ' ',
            // },
            // {
            //     describe: 'เพศ',
            //     calories: 'เมีย',
            // },
            {
                describe: 'อายุ (..ปี..เดือน) ',
                calories: '4ปี 0เดือน',
            },
            // {
            //     describe: 'สี',
            //     calories: 'ดำ',
            // },
            // {
            //     describe: 'แหล่งที่มา ',
            //     calories: 'พ่อค้าคนกลาง',
            // },
            {
                describe: 'ราคา',
                calories: '50000',
            },
            // {
            //     describe: 'สถานะควาย',
            //     calories: 'ท้อง',
            // },
            {
                describe: 'ชื่อหรือหมายเลขพ่อ',
                calories: ' ',
            },
            {
                describe: 'หมายเลข NID พ่อ',
                calories: ' ',
            },
            {
                describe: 'หมายเลขไมโครชิปพ่อ',
                calories: ' ',
            },
            {
                describe: 'ชื่อหรือหมายเลขแม่',
                calories: ' ',
            },
            {
                describe: 'หมายเลข NID แม่',
                calories: ' ',
            },
            {
                describe: 'หมายเลขไมโครชิปแม่',
                calories: ' ',
            },
            {
                describe: 'น้ำหนัก (กิโลกรัม)',
                calories: '400',
            },
            {
                describe: 'ความกว้างรอบอก (เซนติเมตร)',
                calories: '224',
            },
            {
                describe: 'ความยาวลำตัว (เซนติเมตร)',
                calories: '128',
            },
            {
                describe: 'ความสูง (เซนติเมตร)',
                calories: '132',
            },
        ],

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

    }),
    watch: {
        menu(val) {
            val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
        },
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        load: async function () {},
        save1(date) {
            this.$refs.menu.save(date)
        },
    },

}
</script>

<style>
.width {
    width: 95%;
}

.bg {
    background: rgba(242, 243, 244);
    height: 100%;
    background-position: center;
    background-repeat: repeat;
    background-size: cover;
}
</style>
