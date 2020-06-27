<template>
<div>

    <Navbar icon="mdi-chevron-left" name="ข้อมูลควาย" /> 

    <v-tabs grow>
        <v-tab>
            <v-icon left>mdi-gender-male</v-icon>
            พันธุ์ประวัติ
        </v-tab>
        <v-tab>
            <v-icon left>mdi-gender-female</v-icon>
            การเจริญเติบโต
        </v-tab>

        <v-tab-item>
            <v-card flat>
                <v-card-text>
                    <v-card class="elevation-5 rounded-lg pa-2">
                        <div class="d-flex flex-no-wrap">
                            <div class="ma-3">
                                <h3>รายละเอียดควาย</h3>
                            </div>

                            <div class="ml-auto text-right" style="margin-right: 4px;">
                                <h5 class="body-3 grey--text font-weight-light">
                                    <!-- <v-btn outlined color="teal" @click="dialog=false">แก้ไข<v-icon>mdi-pencil</v-icon>
                                    </v-btn> -->
                                    <v-icon>mdi-upload</v-icon>
                                    <v-icon @click="dialog=false">mdi-pencil</v-icon>
                                    <v-icon>mdi-delete</v-icon>
                                </h5>
                            </div>
                        </div>
                        <center>
                            <v-flex xs12 row wrap>
                                <v-flex xs6 pa-3>
                                    <v-card class="elevation-5 rounded-lg">
                                        <v-img src="https://images.pexels.com/photos/1054650/pexels-photo-1054650.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" aspect-ratio="1.7"></v-img>
                                        <v-list two-line>
                                            <center>
                                                <h5>ภาพด้านข้าง</h5>
                                            </center>
                                        </v-list>
                                    </v-card>
                                </v-flex>
                                <v-flex xs6 pa-3>
                                    <v-card class="elevation-5 rounded-lg ">
                                        <v-img src="https://images.pexels.com/photos/2261770/pexels-photo-2261770.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" aspect-ratio="1.7"></v-img>
                                        <v-list two-line>
                                            <center>
                                                <h5>ภาพด้านหลัง</h5>
                                            </center>
                                        </v-list>
                                    </v-card>
                                </v-flex>

                                <v-flex xs6 pa-3>
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

                                <v-flex xs6 pa-3>
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
                    </v-card>
                    <br>
                </v-card-text>

            </v-card>
        </v-tab-item>

        <v-tab-item>
            <v-card flat>
                <div class="d-flex flex-no-wrap">
                    <div class="ml-auto text-right" style="margin-top:4px; margin-right:4px;">
                        <div class="pa-3">
                            <v-dialog v-model="dialog1" persistent max-width="600px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn class="rounded-lg" outlined color="teal" dark v-bind="attrs" v-on="on">
                                        เพิ่มข้อมูลอายุ
                                    </v-btn>
                                </template>
                                <v-card>
                                    <v-card-title>
                                        <h3>อายุควาย</h3> 
                                    </v-card-title>
                                    <v-card-text>
                                        <v-container>
                                            <v-text-field class="rounded-lg" outlined label="น้ำหนัก (กิโลกรัม)" ></v-text-field> 
                                            <v-text-field class="rounded-lg" outlined label="ความกว้างรอบอก (เซนติเมตร)"></v-text-field> 
                                            <v-text-field class="rounded-lg" outlined label="ความยาวลำตัว (เซนติเมตร)"></v-text-field> 
                                            <v-text-field class="rounded-lg" outlined label="ความสูง (เซนติเมตร)" ></v-text-field>
                                            <v-select outlined :items="['240วัน', '400วัน', '600วัน']" label="อายุ" ></v-select>
                                        </v-container>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="blue darken-1" text @click="dialog1 = false">ยกเลิก</v-btn>
                                        <v-btn color="blue darken-1" text @click="dialog1 = false">บันทึก</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>

                        </div>
                    </div>
                </div>

                <v-card-text>
                    <v-card class="elevation-5 rounded-lg pa-2">
                        <div class="d-flex flex-no-wrap">
                            <h3 style="margin-bottom:20px;">ข้อมูลการเจริญเติบโต อายุ 240 วัน</h3>

                            <div class="ml-auto text-right" style="margin-right: 4px;">
                                <h5 class="body-3 grey--text font-weight-light">
                                    <!-- <v-btn outlined color="teal" @click="dialog=false">แก้ไข<v-icon>mdi-pencil</v-icon>
                                    </v-btn> -->
                                    <v-icon @click="dialog=false">mdi-pencil</v-icon>
                                    <v-icon>mdi-delete</v-icon>
                                </h5>
                            </div>
                        </div>

                        <div v-for="item in desserts1" :key="item.name">
                            <v-text-field class="rounded-lg" outlined :readonly="dialog" v-model="item.calories1" name="name" :label="item.describe1" id="id"></v-text-field>
                        </div>
                    </v-card>
                </v-card-text>

                <v-card-text>
                    <v-card class="elevation-5 rounded-lg pa-2">
                        <div class="d-flex flex-no-wrap">
                            <h3 style="margin-bottom:20px;">ข้อมูลการเจริญเติบโต อายุ 400 วัน</h3>

                            <div class="ml-auto text-right" style="margin-right: 4px;">
                                <h5 class="body-3 grey--text font-weight-light">
                                    <!-- <v-btn outlined color="teal" @click="dialog=false">แก้ไข<v-icon>mdi-pencil</v-icon>
                                    </v-btn> -->
                                    <v-icon @click="dialog=false">mdi-pencil</v-icon>
                                    <v-icon>mdi-delete</v-icon>
                                </h5>
                            </div>
                        </div>

                        <div v-for="item in desserts1" :key="item.name">
                            <v-text-field outlined :readonly="dialog" v-model="item.calories1" name="name" :label="item.describe1" id="id"></v-text-field>
                        </div>
                    </v-card>
                </v-card-text>

                <v-card-text>
                    <v-card class="elevation-5 rounded-lg pa-2">
                        <div class="d-flex flex-no-wrap">
                            <h3 style="margin-bottom:20px;">ข้อมูลการเจริญเติบโต อายุ 600 วัน</h3>

                            <div class="ml-auto text-right" style="margin-right: 4px;">
                                <h5 class="body-3 grey--text font-weight-light">
                                    <!-- <v-btn outlined color="teal" @click="dialog=false">แก้ไข<v-icon>mdi-pencil</v-icon>
                                    </v-btn> -->
                                    <v-icon @click="dialog=false">mdi-pencil</v-icon>
                                    <v-icon>mdi-delete</v-icon>
                                </h5>
                            </div>
                        </div>

                        <div v-for="item in desserts1" :key="item.name">
                            <v-text-field outlined :readonly="dialog" v-model="item.calories1" name="name" :label="item.describe1" id="id"></v-text-field>
                        </div>
                    </v-card>
                </v-card-text>

            </v-card>
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

</style>
