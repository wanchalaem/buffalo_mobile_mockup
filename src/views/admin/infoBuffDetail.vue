<template>
<div>

    <!-- <Navbar icon="mdi-chevron-left" name="ข้อมูลควาย" /> -->
    <NavigationAdmin name="ข้อมูลควาย" />
    <v-container grid-list-xs>
        <v-btn  small fab @click="$router.push('/admin/buffalo')"><v-icon class="icon">mdi-chevron-left</v-icon></v-btn>
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
                                        <v-btn class="rounded-lg pa-1 mr-1" color="green" outlined @click="dialog1=false">
                                            <v-icon>mdi-pencil</v-icon>แก้ไข
                                        </v-btn>
                                        <v-btn class="rounded-lg pa-1 ml-1" color="red" outlined @click="dialog1=false">
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
                                </v-card>
                            </v-flex>
                            <v-flex xs6 class="pl-2">
                                <v-card class="elevation-5 rounded-lg ">
                                    <v-img src="https://images.pexels.com/photos/2261770/pexels-photo-2261770.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" aspect-ratio="1.7"></v-img>
                                    <v-list two-line>
                                        <center>
                                            <h5>ภาพด้านหลัง</h5>
                                        </center>
                                    </v-list>
                                </v-card>
                            </v-flex>

                            <v-flex xs6 class="pr-2">
                                <v-card class="elevation-5 rounded-lg ">
                                    <div class="d-flex flex-no-wrap">
                                        <div class="ma-3">
                                            <v-icon dark large class="elevation-6 error rounded-lg" style="max-height: auto; width: auto;">mdi-file-pdf-outline</v-icon>
                                        </div>
                                        <div class="ml-auto text-right " style="margin-right:4px; margin-top:8px;">
                                            <h5>
                                                ใบพันธุ์ประวัติอ้างอิง
                                            </h5>
                                        </div>
                                    </div>

                                </v-card>
                            </v-flex>

                            <v-flex xs6 class="pl-2">
                                <v-card class="elevation-5 rounded-lg ">
                                    <div class="d-flex flex-no-wrap">
                                        <div class="ma-3">
                                            <v-icon dark large class="elevation-6 error rounded-lg" style="max-height: auto; width: auto;">mdi-file-pdf-outline</v-icon>
                                        </div>
                                        <div class="ml-auto text-right " style="margin-right:4px; margin-top:8px;">
                                            <h5>
                                                ใบพันธุ์ประวัติทางการ
                                            </h5>
                                        </div>
                                    </div>

                                </v-card>
                            </v-flex>

                        </v-flex>
                    </center>
                    <br>

                    <div v-for="item in desserts" :key="item.name">
                        <v-text-field class="rounded-lg" outlined :readonly="dialog" v-model="item.calories" name="name" :label="item.describe" id="id"></v-text-field>
                    </div>
                    <!-- </v-card> -->
                    <v-btn class="rounded-lg" block disabled large color="success">บันทึก</v-btn>
                </v-card-text>

            </v-card>
        </v-tab-item>

        <v-tab-item class="bg">
            <v-container grid-list-xs>
                <!-- <v-card flat>  -->
                <v-btn large block @click="$router.push('/admin/buffaloage')" class="rounded-lg" color="green" dark>
                    <h3>เพิ่มข้อมูลอายุ</h3>
                </v-btn>

                <v-card class="elevation-5 rounded-lg pa-2 mt-4">
                    <div class="d-flex flex-no-wrap">
                        <h3>อายุ 240 วัน</h3>
                    </div><br>
                    <div v-for="item in desserts1" :key="item.name">
                        <v-text-field class="rounded-lg" outlined :readonly="dialog" v-model="item.calories1" name="name" :label="item.describe1" id="id"></v-text-field>
                    </div>
                    <!-- <div class="d-flex flex-no-wrap"> -->
                    <center>
                    <v-flex xs12 row wrap>
                        <v-flex xs6>
                            <v-btn outlined large dark class="rounded-l-lg width " color="green" @click="dialog1=false">
                                <v-icon>mdi-pencil</v-icon>แก้ไข
                            </v-btn>
                        </v-flex>
                        <v-flex xs6>
                            <v-btn outlined large dark class="rounded-r-lg width" color="red" @click="dialog1=false">
                                <v-icon>mdi-delete</v-icon>ลบ
                            </v-btn>
                        </v-flex>
                    </v-flex>
                    <!-- <v-btn outlined large dark class="rounded-l-lg width mr-1" color="green" @click="dialog1=false">
                        <v-icon>mdi-pencil</v-icon>แก้ไข
                    </v-btn>
                    <v-btn outlined large dark class="rounded-r-lg width " color="red" @click="dialog1=false">
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
                        <v-text-field class="rounded-lg" outlined :readonly="dialog" v-model="item.calories1" name="name" :label="item.describe1" id="id"></v-text-field>
                    </div>
                    <!-- <div class="d-flex flex-no-wrap"> -->
                    <center>
                    <v-flex xs12 row wrap>
                        <v-flex xs6>
                            <v-btn outlined large dark class="rounded-l-lg width " color="green" @click="dialog1=false">
                                <v-icon>mdi-pencil</v-icon>แก้ไข
                            </v-btn>
                        </v-flex>
                        <v-flex xs6>
                            <v-btn outlined large dark class="rounded-r-lg width" color="red" @click="dialog1=false">
                                <v-icon>mdi-delete</v-icon>ลบ
                            </v-btn>
                        </v-flex>
                    </v-flex>
                    <!-- <v-btn outlined large dark class="rounded-l-lg width mr-1" color="green" @click="dialog1=false">
                        <v-icon>mdi-pencil</v-icon>แก้ไข
                    </v-btn>
                    <v-btn outlined large dark class="rounded-r-lg width " color="red" @click="dialog1=false">
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
                        <v-text-field class="rounded-lg" outlined :readonly="dialog" v-model="item.calories1" name="name" :label="item.describe1" id="id"></v-text-field>
                    </div>
                    <!-- <div class="d-flex flex-no-wrap"> -->
                    <center>
                    <v-flex xs12 row wrap>
                        <v-flex xs6>
                            <v-btn outlined large dark class="rounded-l-lg width " color="green" @click="dialog1=false">
                                <v-icon>mdi-pencil</v-icon>แก้ไข
                            </v-btn>
                        </v-flex>
                        <v-flex xs6>
                            <v-btn outlined large dark class="rounded-r-lg width" color="red" @click="dialog1=false">
                                <v-icon>mdi-delete</v-icon>ลบ
                            </v-btn>
                        </v-flex>
                    </v-flex>
                    <!-- <v-btn outlined large dark class="rounded-l-lg width mr-1" color="green" @click="dialog1=false">
                        <v-icon>mdi-pencil</v-icon>แก้ไข
                    </v-btn>
                    <v-btn outlined large dark class="rounded-r-lg width " color="red" @click="dialog1=false">
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
        desserts: [{
                describe: 'หมายเลขบัตรประชาชนเกษตรกร',
                calories: '3560700337836',
            },
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
            {
                describe: 'วัน/เดือน/ปี เกิด',
                calories: ' ',
            },
            {
                describe: 'เพศ',
                calories: 'เมีย',
            },
            {
                describe: 'อายุ (..ปี..เดือน) ',
                calories: '4ปี 0เดือน',
            },
            {
                describe: 'สี',
                calories: 'ดำ',
            },
            {
                describe: 'แหล่งที่มา ',
                calories: 'พ่อค้าคนกลาง',
            },
            {
                describe: 'ราคา',
                calories: '50000',
            },
            {
                describe: 'สถานะควาย',
                calories: 'ท้อง',
            },
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

}
</script>

<style>
.width {
    width: 95%;
}
</style>
