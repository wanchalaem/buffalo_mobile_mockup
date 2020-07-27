
    
<template>
<div class="">
<NavigationAdmin name="ข้อมูลควาย" />
    <v-container grid-list-xs>
        <!-- <v-btn  small fab @click="$router.push('/admin/buffalo')"><v-icon class="icon">mdi-chevron-left</v-icon></v-btn> -->
    <v-btn class="mb-6" fab @click="$router.go(-1)" small><v-icon class="icon">mdi-chevron-left</v-icon></v-btn>
    </v-container>
    <v-tabs grow color="green">
        <v-tab>
            <v-icon left>mdi-file-document-outline</v-icon>
            พันธุ์ประวัติ
        </v-tab>
        <v-tab>
            <v-icon left>mdi-chart-bell-curve-cumulative</v-icon>
            การเจริญเติบโต
        </v-tab>

        <v-tab-item>
            <v-card flat>
                <v-card-text>
                    <!-- <v-card class="elevation-5 rounded-lg pa-2"> -->
                    <div class="d-flex flex-no-wrap">
                        <h3>รายละเอียดควาย</h3>
                        <div class="ml-auto text-right" style="margin-right: 4px;">
                            <h5 class="body-3 grey--text font-weight-light">
                                <!-- <v-btn outlined color="green" @click="dialog=false">แก้ไข<v-icon>mdi-pencil</v-icon>
                                    </v-btn> -->
                                <!-- <v-icon>mdi-upload</v-icon>
                                    <v-icon @click="dialog=false">mdi-pencil</v-icon>
                                    <v-icon>mdi-delete</v-icon> -->
                                <div class="col-ml-4 ">
                                    <div class="ml-auto text-right">
                                        <v-btn class="rounded-lg pa-1 mr-1" color="green" outlined @click="dialog=false">
                                            <v-icon>mdi-pencil</v-icon>แก้ไข
                                        </v-btn>
                                        <v-btn class="rounded-lg pa-1 ml-1" color="red" outlined @click="dialog=false">
                                            <v-icon>mdi-delete</v-icon>ลบ
                                        </v-btn>
                                    </div>
                                </div>
                            </h5>
                        </div>
                    </div>
                    <br>
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
                        <v-text-field color="green" class="rounded-lg" outlined :readonly="dialog" v-model="item.calories" name="name" :label="item.describe" id="id"></v-text-field>
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
                    <v-text-field :readonly="dialog" class="rounded-lg" prepend-inner-icon="mdi-cow" color="green" outlined label="ชื่อหรือหมายเลขควาย"></v-text-field>
                    <v-text-field :readonly="dialog" class="rounded-lg" prepend-inner-icon="mdi-numeric-10-box-multiple-outline" color="green" outlined type="number" label="หมายเลข NID"></v-text-field>
                    <v-text-field :readonly="dialog" class="rounded-lg" prepend-inner-icon="mdi-numeric" color="green" outlined type="number" label="หมายเลขไมโครซิป"></v-text-field>
                    <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="290px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field outlined  color="green" v-model="date" class="rounded-lg" label="วัน/เดือน/ปีเกิด" prepend-inner-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                        </template>
                        <v-date-picker :readonly="dialog" color="green" ref="picker" v-model="date" :max="new Date().toISOString().substr(0, 10)" min="1950-01-01" @change="save1"></v-date-picker>
                    </v-menu>
                    <v-select :readonly="dialog" class="rounded-lg" prepend-inner-icon="mdi-gender-male-female" color="green" outlined label="เพศ"></v-select>
                    <v-text-field :readonly="dialog" class="rounded-lg" prepend-inner-icon="mdi-calendar-clock" color="green" outlined type="number" label="อายุ"></v-text-field>
                    <v-select :readonly="dialog" class="rounded-lg" prepend-inner-icon="mdi-invert-colors" color="green" outlined label="สี"></v-select>
                    <v-select :readonly="dialog" class="rounded-lg" prepend-inner-icon="mdi-import" color="green" outlined label="แหล่งที่มา"></v-select>
                    <v-text-field :readonly="dialog" class="rounded-lg" prepend-inner-icon="mdi-tag-outline" color="green" outlined type="number" label="ราคา"></v-text-field>
                    <v-select :readonly="dialog" class="rounded-lg" prepend-inner-icon="mdi-post-outline" color="green" outlined label="สถานะ"></v-select>
                    <v-text-field :readonly="dialog" class="rounded-lg" prepend-inner-icon="mdi-cow" color="green" outlined label="ชื่อหรือหมายเลขพ่อ"></v-text-field>
                    <v-text-field :readonly="dialog" class="rounded-lg" prepend-inner-icon="mdi-numeric-10-box-multiple-outline" color="green" type="number" outlined label="หมายเลข NID พ่อ"></v-text-field>
                    <v-text-field :readonly="dialog" class="rounded-lg" prepend-inner-icon="mdi-numeric" color="green" type="number" outlined label="หมายเลขไมโครชิปพ่อ"></v-text-field>
                    <v-text-field :readonly="dialog" class="rounded-lg" prepend-inner-icon="mdi-cow" color="green" outlined label="ชื่อหรือหมายเลขแม่"></v-text-field>
                    <v-text-field :readonly="dialog" class="rounded-lg" prepend-inner-icon="mdi-numeric-10-box-multiple-outline" color="green" type="number" outlined label="หมายเลข NID แม่"></v-text-field>
                    <v-text-field :readonly="dialog" class="rounded-lg" prepend-inner-icon="mdi-numeric" color="green" type="number" outlined label="หมายเลขไมโครชิปแม่"></v-text-field>
                    <v-text-field :readonly="dialog" class="rounded-lg" prepend-inner-icon="mdi-weight-kilogram" color="green" type="number" outlined label="น้ำหนัก(กิโลกรัม)"></v-text-field>
                    <v-text-field :readonly="dialog" class="rounded-lg" prepend-inner-icon="mdi-arrow-left-right" color="green" type="number" outlined label="ความกว้างรอบอก(เซนติเมตร)"></v-text-field>
                    <v-text-field :readonly="dialog" class="rounded-lg" prepend-inner-icon="mdi-arrow-left-right" color="green" type="number" outlined label="ความยาวรอบลำตัว(เซนติเมตร)"></v-text-field>
                    <v-text-field :readonly="dialog" class="rounded-lg" prepend-inner-icon="mdi-human-male-height-variant" color="green" type="number" outlined label="ความสูง(เซนติเมตร)"></v-text-field>

                    <!-- </v-card> -->
                    <v-btn class="rounded-lg" block disabled medium color="success">บันทึก</v-btn>
                </v-card-text>

            </v-card>
        </v-tab-item>

        <v-tab-item class="">
            <v-container grid-list-xs>
                <!-- <v-card flat>  -->
                <v-btn medium block @click="$router.push('/admin/buffaloage')" class="rounded-lg" color="green" dark>
                    <h3>เพิ่มข้อมูลอายุ</h3>
                </v-btn>

                <v-card class="elevation-5 rounded-lg pa-2 mt-4">
                    <div class="d-flex flex-no-wrap">
                        <h3>อายุ 240 วัน</h3>
                    </div><br>
                    <div v-for="item in desserts1" :key="item.name">
                        <v-text-field color="green" class="rounded-lg" outlined :readonly="dialog" v-model="item.calories1" name="name" :label="item.describe1" id="id"></v-text-field>
                    </div>
                    <!-- <div class="d-flex flex-no-wrap"> -->
                    <center>
                        <v-flex xs12 row wrap>
                            <v-flex xs6>
                                <v-btn outlined medium dark class="rounded-l-lg width " color="green" @click="dialog1=false">
                                    <v-icon>mdi-pencil</v-icon>แก้ไข
                                </v-btn>
                            </v-flex>
                            <v-flex xs6>
                                <v-btn outlined medium dark class="rounded-r-lg width" color="red" @click="dialog1=false">
                                    <v-icon>mdi-delete</v-icon>ลบ
                                </v-btn>
                            </v-flex>
                        </v-flex>
                        <!-- <v-btn outlined medium dark class="rounded-l-lg width mr-1" color="green" @click="dialog1=false">
                        <v-icon>mdi-pencil</v-icon>แก้ไข
                    </v-btn>
                    <v-btn outlined medium dark class="rounded-r-lg width " color="red" @click="dialog1=false">
                        <v-icon>mdi-delete</v-icon>ลบ
                    </v-btn> -->
                    </center>
                    <!-- </div> -->
                </v-card>

                <v-card class="elevation-5 rounded-lg pa-2 mt-4">
                    <div class="d-flex flex-no-wrap">
                        <h3>อายุ 400 วัน</h3>
                    </div><br>
                    <div v-for="item in desserts1" :key="item.name">
                        <v-text-field color="green" class="rounded-lg" outlined :readonly="dialog" v-model="item.calories1" name="name" :label="item.describe1" id="id"></v-text-field>
                    </div>
                    <!-- <div class="d-flex flex-no-wrap"> -->
                    <center>
                        <v-flex xs12 row wrap>
                            <v-flex xs6>
                                <v-btn outlined medium dark class="rounded-l-lg width " color="green" @click="dialog1=false">
                                    <v-icon>mdi-pencil</v-icon>แก้ไข
                                </v-btn>
                            </v-flex>
                            <v-flex xs6>
                                <v-btn outlined medium dark class="rounded-r-lg width" color="red" @click="dialog1=false">
                                    <v-icon>mdi-delete</v-icon>ลบ
                                </v-btn>
                            </v-flex>
                        </v-flex>
                        <!-- <v-btn outlined medium dark class="rounded-l-lg width mr-1" color="green" @click="dialog1=false">
                        <v-icon>mdi-pencil</v-icon>แก้ไข
                    </v-btn>
                    <v-btn outlined medium dark class="rounded-r-lg width " color="red" @click="dialog1=false">
                        <v-icon>mdi-delete</v-icon>ลบ
                    </v-btn> -->
                    </center>
                    <!-- </div> -->
                </v-card>

                <v-card class="elevation-5 rounded-lg pa-2 mt-4">
                    <div class="d-flex flex-no-wrap">
                        <h3>อายุ 600 วัน</h3>
                    </div><br>
                    <div v-for="item in desserts1" :key="item.name">
                        <v-text-field color="green" class="rounded-lg" outlined :readonly="dialog" v-model="item.calories1" name="name" :label="item.describe1" id="id"></v-text-field>
                    </div>
                    <!-- <div class="d-flex flex-no-wrap"> -->
                    <center>
                        <v-flex xs12 row wrap>
                            <v-flex xs6>
                                <v-btn outlined medium dark class="rounded-l-lg width " color="green" @click="dialog1=false">
                                    <v-icon>mdi-pencil</v-icon>แก้ไข
                                </v-btn>
                            </v-flex>
                            <v-flex xs6>
                                <v-btn outlined medium dark class="rounded-r-lg width" color="red" @click="dialog1=false">
                                    <v-icon>mdi-delete</v-icon>ลบ
                                </v-btn>
                            </v-flex>
                        </v-flex>
                        <!-- <v-btn outlined medium dark class="rounded-l-lg width mr-1" color="green" @click="dialog1=false">
                        <v-icon>mdi-pencil</v-icon>แก้ไข
                    </v-btn>
                    <v-btn outlined medium dark class="rounded-r-lg width " color="red" @click="dialog1=false">
                        <v-icon>mdi-delete</v-icon>ลบ
                    </v-btn> -->
                    </center>
                    <!-- </div> -->
                </v-card>

                <!-- </v-card> -->
            </v-container>

        </v-tab-item>

    </v-tabs>

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
        menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      },
    },
    /*-------------------------Methods------------------------------------------*/
    methods: { 
        load: async function () {},
        save1 (date) {
        this.$refs.menu.save(date)
      },
    },

}
</script>

<style>
.width {
    width: 95%;
}
</style>
