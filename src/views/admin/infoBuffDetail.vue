<template>
<div class="">

    <!-- <Navbar icon="mdi-chevron-left" name="ข้อมูลควาย" /> -->
    <!-- <Navigation name="" /> -->
    <v-container>
        <v-row class="d-flex flex-row ">
            <v-btn color="white" depressed fab @click="$router.go(-1)" small>
                <v-icon class="icon">mdi-chevron-left</v-icon>
            </v-btn>
            <h2>ข้อมูลควาย</h2>
        </v-row>

    </v-container>

    <!-- <v-container grid-list-xs>
        <div class="text-center">
            <v-chip class="pa-1 ma-1" @click="$router.push('/admin/buffalo')" color="indigo" dark large>
                <v-icon>mdi-image-outline</v-icon>รูปภาพ
            </v-chip>

            <v-chip class="pa-1 ma-1" @click="$router.push('/admin/userpicture')" color="success" dark large>
                <v-icon>mdi-file-pdf-outline</v-icon>ใบพันธุ์ประวัติ
            </v-chip>
        </div> 
    </v-container> -->

    <v-tabs grow color="green" class="pb-12">
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
                    <h2>รายละเอียดควาย</h2>
                    <br>
                    <center>
                        <v-card>
                            <v-card-title primary-title>
                                รูปภาพ
                            </v-card-title>
                            <v-divider class="mx-4"></v-divider>
                            <v-card-text>
                                <v-flex xs12 row wrap>
                            <v-flex xs6 class="pr-2 pb-4">
                                <v-card class="rounded-lg">
                                    <v-img src="https://images.pexels.com/photos/1054650/pexels-photo-1054650.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" aspect-ratio="1.2"></v-img>
                                    <v-list two-line>
                                        <center>
                                            <h3>ภาพด้านข้าง</h3>
                                        </center>
                                    </v-list>
                                    <v-btn depressed block color="success">อัพโหลด</v-btn>
                                </v-card>
                            </v-flex>
                            <v-flex xs6 class="pl-2 pb-2">
                                <v-card class="rounded-lg ">
                                    <v-img src="https://images.pexels.com/photos/2261770/pexels-photo-2261770.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" aspect-ratio="1.2"></v-img>
                                    <v-list two-line>
                                        <center>
                                            <h3>ภาพด้านหลัง</h3>
                                        </center>
                                    </v-list>
                                    <v-btn depressed block color="success">อัพโหลด</v-btn>
                                </v-card>
                            </v-flex> 
                        </v-flex> 
                        </v-card-text> 
                        </v-card>
                    </center>
                    <br>

                    <!-- <div v-for="item in desserts" :key="item.name">
                        <v-text-field color="green" class="rounded-lg" outlined :readonly="dialog" v-model="item.calories" name="name" :label="item.describe" id="id"></v-text-field>
                    </div>
                    <div>
                        <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="290px">
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field outlined color="green" v-model="date" class="rounded-lg" label="วัน/เดือน/ปีเกิด" prepend-inner-icon="mdi-calendar" v-bind="attrs" v-on="on"></v-text-field>
                            </template>
                            <v-date-picker color="green" ref="picker" v-model="date" :max="new Date().toISOString().substr(0, 10)" min="1950-01-01" @change="save1"></v-date-picker>
                        </v-menu>
                        <v-select outlined color="green" class="rounded-lg" label="เพศ"></v-select>
                        <v-select outlined color="green" class="rounded-lg" label="สี"></v-select>
                        <v-select outlined color="green" class="rounded-lg" label="แหล่งที่มา"></v-select>
                        <v-select outlined color="green" class="rounded-lg" label="สถานะ"></v-select>
                    </div>  -->

                    <!-- <v-text-field :readonly="dialog1" class="rounded-lg" prepend-inner-icon="mdi-cow" color="green" outlined label="ชื่อหรือหมายเลขควาย"></v-text-field>
                    <v-text-field :readonly="dialog1" class="rounded-lg" prepend-inner-icon="mdi-numeric-10-box-multiple-outline" color="green" outlined type="number" label="หมายเลข NID"></v-text-field>
                    <v-text-field :readonly="dialog1" class="rounded-lg" prepend-inner-icon="mdi-numeric" color="green" outlined type="number" label="หมายเลขไมโครซิป"></v-text-field>
                    <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="290px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field outlined color="green" v-model="date" class="rounded-lg" label="วัน/เดือน/ปีเกิด" prepend-inner-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                        </template>
                        <v-date-picker :readonly="dialog1" color="green" ref="picker" v-model="date" :max="new Date().toISOString().substr(0, 10)" min="1950-01-01" @change="save1"></v-date-picker>
                    </v-menu>
                    <v-select :readonly="dialog1" class="rounded-lg" prepend-inner-icon="mdi-gender-male-female" color="green" outlined label="เพศ"></v-select>
                    <v-text-field :readonly="dialog1" class="rounded-lg" prepend-inner-icon="mdi-calendar-clock" color="green" outlined type="number" label="อายุ"></v-text-field>
                    <v-select :readonly="dialog1" class="rounded-lg" prepend-inner-icon="mdi-invert-colors" color="green" outlined label="สี"></v-select>
                    <v-select :readonly="dialog1" class="rounded-lg" prepend-inner-icon="mdi-import" color="green" outlined label="แหล่งที่มา"></v-select>
                    <v-text-field :readonly="dialog1" class="rounded-lg" prepend-inner-icon="mdi-tag-outline" color="green" outlined type="number" label="ราคา"></v-text-field>
                    <v-select :readonly="dialog1" class="rounded-lg" prepend-inner-icon="mdi-post-outline" color="green" outlined label="สถานะ"></v-select>
                    <v-text-field :readonly="dialog1" class="rounded-lg" prepend-inner-icon="mdi-cow" color="green" outlined label="ชื่อหรือหมายเลขพ่อ"></v-text-field>
                    <v-text-field :readonly="dialog1" class="rounded-lg" prepend-inner-icon="mdi-numeric-10-box-multiple-outline" color="green" outlined type="number" label="หมายเลข NID พ่อ"></v-text-field>
                    <v-text-field :readonly="dialog1" class="rounded-lg" prepend-inner-icon="mdi-numeric" color="green" outlined type="number" label="หมายเลขไมโครชิปพ่อ"></v-text-field>
                    <v-text-field :readonly="dialog1" class="rounded-lg" prepend-inner-icon="mdi-cow" color="green" outlined label="ชื่อหรือหมายเลขแม่"></v-text-field>
                    <v-text-field :readonly="dialog1" class="rounded-lg" prepend-inner-icon="mdi-numeric-10-box-multiple-outline" color="green" outlined type="number" label="หมายเลข NID แม่"></v-text-field>
                    <v-text-field :readonly="dialog1" class="rounded-lg" prepend-inner-icon="mdi-numeric" color="green" outlined type="number" label="หมายเลขไมโครชิปแม่"></v-text-field>
                    <v-text-field :readonly="dialog1" class="rounded-lg" prepend-inner-icon="mdi-weight-kilogram" color="green" outlined type="number" label="น้ำหนัก(กิโลกรัม)"></v-text-field>
                    <v-text-field :readonly="dialog1" class="rounded-lg" prepend-inner-icon="mdi-arrow-left-right" color="green" outlined type="number" label="ความกว้างรอบอก(เซนติเมตร)"></v-text-field>
                    <v-text-field :readonly="dialog1" class="rounded-lg" prepend-inner-icon="mdi-arrow-left-right" color="green" outlined type="number" label="ความยาวรอบลำตัว(เซนติเมตร)"></v-text-field>
                    <v-text-field :readonly="dialog1" class="rounded-lg" prepend-inner-icon="mdi-human-male-height-variant" color="green" outlined type="number" label="ความสูง(เซนติเมตร)"></v-text-field>

                    <v-btn class="rounded-lg" block disabled large color="success">บันทึก</v-btn> -->

                    <v-dialog v-model="dialogcow" max-width="500px">
                        <v-card>
                            <v-card-title>
                                ชื่อหรือหมายเลขควาย
                            </v-card-title>
                            <v-card-text>
                                <v-text-field color="success" label="ชื่อหรือหมายเลขควาย" id="id"></v-text-field>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="error width1" class="rounded-lg" depressed @click="dialogcow = false">
                                    ยกเลิก
                                </v-btn>
                                <v-btn color="success width1" class="rounded-lg" depressed @click="dialogcow = false">
                                    ตกลง
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-card class="pa-3" @click="dialogcow = true">
                        <v-row>
                            <h4 class="pl-4">ชื่อหรือหมายเลขควาย</h4>
                            <v-spacer></v-spacer>
                            <h4 class="pr-4">ควายไทย</h4>
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-row>
                    </v-card>

                    <v-dialog v-model="dialognid" max-width="500px">
                        <v-card>
                            <v-card-title>
                                หมายเลขNID
                            </v-card-title>
                            <v-card-text>
                                <v-text-field color="success" type="number" label="หมายเลขNID" id="id"></v-text-field>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="error width1" class="rounded-lg" depressed @click="dialognid = false">
                                    ยกเลิก
                                </v-btn>
                                <v-btn color="success width1" class="rounded-lg" depressed @click="dialognid = false">
                                    ตกลง
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-card class="pa-3" @click="dialognid = true">
                        <v-row>
                            <h4 class="pl-4">หมายเลขNID</h4>
                            <v-spacer></v-spacer>
                            <h4 class="pr-4">123</h4>
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-row>
                    </v-card>

                    <v-dialog v-model="dialogmicro" max-width="500px">
                        <v-card>
                            <v-card-title>
                                หมายเลขไมโครชิป
                            </v-card-title>
                            <v-card-text>
                                <v-text-field color="success" label="หมายเลขไมโครชิป" id="id"></v-text-field>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="error width1" class="rounded-lg" depressed @click="dialogmicro = false">
                                    ยกเลิก
                                </v-btn>
                                <v-btn color="success width1" class="rounded-lg" depressed @click="dialogmicro = false">
                                    ตกลง
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-card class="pa-3" @click="dialogmicro = true">
                        <v-row>
                            <h4 class="pl-4">หมายเลขไมโครชิป</h4>
                            <v-spacer></v-spacer>
                            <h4 class="pr-4">2222</h4>
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-row>
                    </v-card>

                    <v-dialog v-model="dialogdate" max-width="500px">
                        <v-card>
                            <v-card-title>
                                วัน/เดือน/ปีเกิด
                            </v-card-title>
                            <v-card-text>
                                <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="290px">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field outlined color="green" v-model="date" class="rounded-lg" label="วัน/เดือน/ปีเกิด" prepend-inner-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                                    </template>
                                    <v-date-picker :readonly="dialog1" color="green" ref="picker" v-model="date" :max="new Date().toISOString().substr(0, 10)" min="1950-01-01" @change="save1"></v-date-picker>
                                </v-menu>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="error width1" class="rounded-lg" depressed @click="dialogdate = false">
                                    ยกเลิก
                                </v-btn>
                                <v-btn color="success width1" class="rounded-lg" depressed @click="dialogdate = false">
                                    ตกลง
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-card class="pa-3" @click="dialogdate = true">
                        <v-row>
                            <h4 class="pl-4">วัน/เดือน/ปีเกิด</h4>
                            <v-spacer></v-spacer>
                            <h4 class="pr-4">20/08/2020 </h4>
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-row>
                    </v-card>

                    <v-dialog v-model="dialoggender" max-width="500px">
                        <v-card>
                            <v-card-title>
                                เพศ
                            </v-card-title>
                            <v-card-text>
                                <v-select color="success" :items="itemsgender" label="เพศ"></v-select>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="error width1" class="rounded-lg" depressed @click="dialoggender = false">
                                    ยกเลิก
                                </v-btn>
                                <v-btn color="success width1" depressed @click="dialoggender = false">
                                    ตกลง
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-card class="pa-3" @click="dialoggender = true">
                        <v-row>
                            <h4 class="pl-4">เพศ</h4>
                            <v-spacer></v-spacer>
                            <h4 class="pr-4">ผู้</h4>
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-row>
                    </v-card>

                    <v-dialog v-model="dialogage" max-width="500px">
                        <v-card>
                            <v-card-title>
                                อายุ
                            </v-card-title>
                            <v-card-text>
                                <v-text-field color="success" type="number" label="อายุ" id="id"></v-text-field>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="error width1" class="rounded-lg" depressed @click="dialogage = false">
                                    ยกเลิก
                                </v-btn>
                                <v-btn color="success width1" class="rounded-lg" depressed @click="dialogage = false">
                                    ตกลง
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-card class="pa-3" @click="dialogage = true">
                        <v-row>
                            <h4 class="pl-4">อายุ</h4>
                            <v-spacer></v-spacer>
                            <h4 class="pr-4">59</h4>
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-row>
                    </v-card>

                    <v-dialog v-model="dialogcolor" max-width="500px">
                        <v-card>
                            <v-card-title>
                                สี
                            </v-card-title>
                            <v-card-text>
                                <v-select color="success" :items="itemscolor" label="สี"></v-select>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="error width1" class="rounded-lg" depressed @click="dialogcolor = false">
                                    ยกเลิก
                                </v-btn>
                                <v-btn color="success width1" class="rounded-lg" depressed @click="dialogcolor = false">
                                    ตกลง
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-card class="pa-3" @click="dialogcolor = true">
                        <v-row>
                            <h4 class="pl-4">สี</h4>
                            <v-spacer></v-spacer>
                            <h4 class="pr-4">ดำ</h4>
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-row>
                    </v-card>

                    <v-dialog v-model="dialogimport" max-width="500px">
                        <v-card>
                            <v-card-title>
                                แหล่งที่มา
                            </v-card-title>
                            <v-card-text>
                                <v-select color="success" :items="itemsimport" label="แหล่งที่มา"></v-select>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="error width1" class="rounded-lg" depressed @click="dialogimport = false">
                                    ยกเลิก
                                </v-btn>
                                <v-btn color="success width1" class="rounded-lg" depressed @click="dialogimport = false">
                                    ตกลง
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-card class="pa-3" @click="dialogimport = true">
                        <v-row>
                            <h4 class="pl-4">แหล่งที่มา</h4>
                            <v-spacer></v-spacer>
                            <h4 class="pr-4">พ่อค้าคนกลาง</h4>
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-row>
                    </v-card>

                    <v-dialog v-model="dialogprice" max-width="500px">
                        <v-card>
                            <v-card-title>
                                ราคา
                            </v-card-title>
                            <v-card-text>
                                <v-text-field color="success" type="number" label="ราคา" id="id"></v-text-field>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="error width1" class="rounded-lg" depressed @click="dialogprice = false">
                                    ยกเลิก
                                </v-btn>
                                <v-btn color="success width1" class="rounded-lg" depressed @click="dialogprice = false">
                                    ตกลง
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-card class="pa-3" @click="dialogprice = true">
                        <v-row>
                            <h4 class="pl-4">ราคา</h4>
                            <v-spacer></v-spacer>
                            <h4 class="pr-4">30,000</h4>
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-row>
                    </v-card>

                    <v-dialog v-model="dialogstatus" max-width="500px">
                        <v-card>
                            <v-card-title>
                                สถานะ
                            </v-card-title>
                            <v-card-text>
                                <v-select color="success" :items="itemsstatus" label="สถานะ"></v-select>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="error width1" class="rounded-lg" depressed @click="dialogstatus = false">
                                    ยกเลิก
                                </v-btn>
                                <v-btn color="success width1" class="rounded-lg" depressed @click="dialogstatus = false">
                                    ตกลง
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-card class="pa-3" @click="dialogstatus = true">
                        <v-row>
                            <h4 class="pl-4">สถานะ</h4>
                            <v-spacer></v-spacer>
                            <h4 class="pr-4">ไม่ท้อง</h4>
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-row>
                    </v-card>

                    <v-dialog v-model="dialognnf" max-width="500px">
                        <v-card>
                            <v-card-title>
                                ชื่อหรือหมายเลขพ่อ
                            </v-card-title>
                            <v-card-text>
                                <v-text-field color="success" label="ชื่อหรือหมายเลขพ่อ" id="id"></v-text-field>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="error width1" class="rounded-lg" depressed @click="dialognnf = false">
                                    ยกเลิก
                                </v-btn>
                                <v-btn color="success width1" class="rounded-lg" depressed @click="dialognnf = false">
                                    ตกลง
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-card class="pa-3" @click="dialognnf = true">
                        <v-row>
                            <h4 class="pl-4">ชื่อหรือหมายเลขพ่อ</h4>
                            <v-spacer></v-spacer>
                            <h4 class="pr-4">พ่อเปี้ย</h4>
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-row>
                    </v-card>

                    <v-dialog v-model="dialognidf" max-width="500px">
                        <v-card>
                            <v-card-title>
                                หมายเลขNIDพ่อ
                            </v-card-title>
                            <v-card-text>
                                <v-text-field color="success" type="number" label="หมายเลขNIDพ่อ" id="id"></v-text-field>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="error width1" class="rounded-lg" depressed @click="dialognidf = false">
                                    ยกเลิก
                                </v-btn>
                                <v-btn color="success width1" class="rounded-lg" depressed @click="dialognidf = false">
                                    ตกลง
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-card class="pa-3" @click="dialognidf = true">
                        <v-row>
                            <h4 class="pl-4">หมายเลขNIDพ่อ</h4>
                            <v-spacer></v-spacer>
                            <h4 class="pr-4">1234</h4>
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-row>
                    </v-card>

                    <v-dialog v-model="dialogmicrof" max-width="500px">
                        <v-card>
                            <v-card-title>
                                หมายเลขไมโครซิบพ่อ
                            </v-card-title>
                            <v-card-text>
                                <v-text-field color="success" type="number" label="หมายเลขไมโครซิบพ่อ" id="id"></v-text-field>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="error width1" class="rounded-lg" depressed @click="dialogmicrof = false">
                                    ยกเลิก
                                </v-btn>
                                <v-btn color="success width1" class="rounded-lg" depressed @click="dialogmicrof = false">
                                    ตกลง
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-card class="pa-3" @click="dialogmicrof = true">
                        <v-row>
                            <h4 class="pl-4">หมายเลขไมโครซิบพ่อ</h4>
                            <v-spacer></v-spacer>
                            <h4 class="pr-4">1234</h4>
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-row>
                    </v-card>

                    <v-dialog v-model="dialognnm" max-width="500px">
                        <v-card>
                            <v-card-title>
                                ชื่อหรือหมายเลขแม่
                            </v-card-title>
                            <v-card-text>
                                <v-text-field color="success" label="ชื่อหรือหมายเลขแม่" id="id"></v-text-field>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="error width1" class="rounded-lg" depressed @click="dialognnm = false">
                                    ยกเลิก
                                </v-btn>
                                <v-btn color="success width1" class="rounded-lg" depressed @click="dialognnm = false">
                                    ตกลง
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-card class="pa-3" @click="dialognnm = true">
                        <v-row>
                            <h4 class="pl-4">ชื่อหรือหมายเลขแม่</h4>
                            <v-spacer></v-spacer>
                            <h4 class="pr-4">แม่เปี้ย</h4>
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-row>
                    </v-card>

                    <v-dialog v-model="dialognidm" max-width="500px">
                        <v-card>
                            <v-card-title>
                                หมายเลขNIDแม่
                            </v-card-title>
                            <v-card-text>
                                <v-text-field color="success" type="number" label="หมายเลขNIDแม่" id="id"></v-text-field>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="error width1" class="rounded-lg" depressed @click="dialognidm = false">
                                    ยกเลิก
                                </v-btn>
                                <v-btn color="success width1" class="rounded-lg" depressed @click="dialognidm = false">
                                    ตกลง
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-card class="pa-3" @click="dialognidm = true">
                        <v-row>
                            <h4 class="pl-4">หมายเลขNIDแม่</h4>
                            <v-spacer></v-spacer>
                            <h4 class="pr-4">1234</h4>
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-row>
                    </v-card>

                    <v-dialog v-model="dialogmicrom" max-width="500px">
                        <v-card>
                            <v-card-title>
                                หมายเลขไมโครซิบแม่
                            </v-card-title>
                            <v-card-text>
                                <v-text-field color="success" type="number" label="หมายเลขไมโครซิบแม่" id="id"></v-text-field>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="error width1" class="rounded-lg" depressed @click="dialogmicrom = false">
                                    ยกเลิก
                                </v-btn>
                                <v-btn color="success width1" class="rounded-lg" depressed @click="dialogmicrom = false">
                                    ตกลง
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-card class="pa-3" @click="dialogmicrom = true">
                        <v-row>
                            <h4 class="pl-4">หมายเลขไมโครซิบแม่</h4>
                            <v-spacer></v-spacer>
                            <h4 class="pr-4">1234</h4>
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-row>
                    </v-card>

                    <v-dialog v-model="dialogkg" max-width="500px">
                        <v-card>
                            <v-card-title>
                                น้ำหนัก(กิโลกรัม)
                            </v-card-title>
                            <v-card-text>
                                <v-text-field color="success" type="number" label="น้ำหนัก(กิโลกรัม)" id="id"></v-text-field>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="error width1" class="rounded-lg" depressed @click="dialogkg = false">
                                    ยกเลิก
                                </v-btn>
                                <v-btn color="success width1" class="rounded-lg" depressed @click="dialogkg = false">
                                    ตกลง
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-card class="pa-3" @click="dialogmicrom = true">
                        <v-row>
                            <h4 class="pl-4">น้ำหนัก(กิโลกรัม)</h4>
                            <v-spacer></v-spacer>
                            <h4 class="pr-4">200</h4>
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-row>
                    </v-card>

                    <v-dialog v-model="dialogweight" max-width="500px">
                        <v-card>
                            <v-card-title>
                                ความกว้างรอบอก(เซนติเมตร)
                            </v-card-title>
                            <v-card-text>
                                <v-text-field color="success" type="number" label="ความกว้างรอบอก(เซนติเมตร)" id="id"></v-text-field>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="error width1" class="rounded-lg" depressed @click="dialogweight = false">
                                    ยกเลิก
                                </v-btn>
                                <v-btn color="success width1" class="rounded-lg" depressed @click="dialogweight = false">
                                    ตกลง
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-card class="pa-3" @click="dialogweight = true">
                        <v-row>
                            <h4 class="pl-4">ความกว้างรอบอก(เซนติเมตร)</h4>
                            <v-spacer></v-spacer>
                            <h4 class="pr-4">200</h4>
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-row>
                    </v-card>

                    <v-dialog v-model="dialogbodyweight" max-width="500px">
                        <v-card>
                            <v-card-title>
                                ความยาวรอบลำตัว(เซนติเมตร)
                            </v-card-title>
                            <v-card-text>
                                <v-text-field color="success" type="number" label="ความยาวรอบลำตัว(เซนติเมตร)" id="id"></v-text-field>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="error width1" class="rounded-lg" depressed @click="dialogbodyweight = false">
                                    ยกเลิก
                                </v-btn>
                                <v-btn color="success width1" class="rounded-lg" depressed @click="dialogbodyweight = false">
                                    ตกลง
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-card class="pa-3" @click="dialogbodyweight = true">
                        <v-row>
                            <h4 class="pl-4">ความยาวรอบลำตัว(เซนติเมตร)</h4>
                            <v-spacer></v-spacer>
                            <h4 class="pr-4">200</h4>
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-row>
                    </v-card>

                    <v-dialog v-model="dialogheight" max-width="500px">
                        <v-card>
                            <v-card-title>
                                ความสูง(เซนติเมตร)
                            </v-card-title>
                            <v-card-text>
                                <v-text-field color="success" type="number" label="ความสูง(เซนติเมตร)" id="id"></v-text-field>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="error width1" class="rounded-lg" depressed @click="dialogheight = false">
                                    ยกเลิก
                                </v-btn>
                                <v-btn color="success width1" class="rounded-lg" depressed @click="dialogheight = false">
                                    ตกลง
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-card class="pa-3" @click="dialogheight = true">
                        <v-row>
                            <h4 class="pl-4">ความสูง(เซนติเมตร)</h4>
                            <v-spacer></v-spacer>
                            <h4 class="pr-4">200</h4>
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-row>
                    </v-card>

                    <br>
                    <v-card>
                        <v-card-title primary-title>
                            พันธุ์ประวัติ
                        </v-card-title>
                        <v-divider class="mx-4"></v-divider>
                        <v-card-text>
                            <v-card-title class="black--text white darken-4">
                                <v-icon @click="$router.go()" large color="error">mdi-file-pdf-outline</v-icon>
                                <v-divider vertical inset class="mx-1" dark></v-divider>
                                <h5 @click="$router.go()">ใบพันธุ์ประวัติอ้างอิง</h5>
                                <v-spacer></v-spacer>
                                <v-btn :loading="loading3" :disabled="loading3" color="indigo" fab small class="white--text" @click="loader = 'loading3'">
                                    <v-icon>mdi-cloud-upload</v-icon>
                                </v-btn>
                            </v-card-title>

                            <v-card-title class="black--text white darken-4">
                                <v-icon @click="$router.go()" large color="error">mdi-file-pdf-outline</v-icon>
                                <v-divider vertical inset class="mx-1" dark></v-divider>
                                <h5 @click="$router.go()">ใบพันธุ์ประวัติทางการ</h5>
                                <v-spacer></v-spacer>
                                <v-btn :loading="loading3" :disabled="loading3" color="indigo" fab small class="white--text" @click="loader = 'loading3'">
                                    <v-icon >mdi-cloud-upload</v-icon>
                                </v-btn>
                            </v-card-title>

                        </v-card-text>
                    </v-card>

                    <br>
                    <center class="mb-2">
                        <v-btn class="rounded-lg" large disabled color="success" block>บันทึก</v-btn>
                    </center>

                </v-card-text>

            </v-card>
        </v-tab-item>

        <v-tab-item class="">
            <v-container grid-list-xs>
                <v-btn depressed large block @click="$router.push('/user/buffaloage')" class="rounded-lg" color="green" dark>
                    <h3>เพิ่มข้อมูลอายุ</h3>
                </v-btn> 
                <v-card class="elevation-5 rounded-lg pa-2 mt-4">
                    <v-card-title primary-title>
                        อายุ 240 วัน
                    </v-card-title>
                    <v-divider class="mx-4"></v-divider>
                    <v-card-text>
                        <div v-for="item in desserts1" :key="item.name">
                        <v-text-field  color="green" class="rounded-lg" :readonly="dialog" v-model="item.calories1" name="name" :label="item.describe1" id="id"></v-text-field>
                        </div>
                        <center>
                        <v-flex xs12 row wrap>
                            <v-flex xs6>
                                <v-btn depressed large dark class="rounded-l-lg width mr-2" color="warning" @click="dialog=false">
                                    <v-icon>mdi-pencil</v-icon>แก้ไข
                                </v-btn>
                            </v-flex>
                            <v-flex xs6>
                                <v-btn depressed large dark class="rounded-r-lg width ml-2" color="red" >
                                    <v-icon>mdi-delete</v-icon>ลบ
                                </v-btn>
                            </v-flex>
                        </v-flex> 
                        </center>
                    </v-card-text> 
                </v-card>

                <v-card class="elevation-5 rounded-lg pa-2 mt-4">
                    <v-card-title primary-title>
                        อายุ 400 วัน
                    </v-card-title>
                    <v-divider class="mx-4"></v-divider>
                    <v-card-text>
                        <div v-for="item in desserts1" :key="item.name">
                        <v-text-field  color="green" class="rounded-lg" :readonly="dialog" v-model="item.calories1" name="name" :label="item.describe1" id="id"></v-text-field>
                        </div>
                        <center>
                        <v-flex xs12 row wrap>
                            <v-flex xs6>
                                <v-btn depressed large dark class="rounded-l-lg width mr-2" color="warning" @click="dialog=false">
                                    <v-icon>mdi-pencil</v-icon>แก้ไข
                                </v-btn>
                            </v-flex>
                            <v-flex xs6>
                                <v-btn depressed large dark class="rounded-r-lg width ml-2" color="red" >
                                    <v-icon>mdi-delete</v-icon>ลบ
                                </v-btn>
                            </v-flex>
                        </v-flex> 
                        </center>
                    </v-card-text> 
                </v-card>

                <v-card class="elevation-5 rounded-lg pa-2 mt-4">
                    <v-card-title primary-title>
                        อายุ 600 วัน
                    </v-card-title>
                    <v-divider class="mx-4"></v-divider>
                    <v-card-text>
                        <div v-for="item in desserts1" :key="item.name">
                        <v-text-field  color="green" class="rounded-lg" :readonly="dialog" v-model="item.calories1" name="name" :label="item.describe1" id="id"></v-text-field>
                        </div>
                        <center>
                        <v-flex xs12 row wrap>
                            <v-flex xs6>
                                <v-btn depressed large dark class="rounded-l-lg width mr-2" color="warning" @click="dialog=false">
                                    <v-icon>mdi-pencil</v-icon>แก้ไข
                                </v-btn>
                            </v-flex>
                            <v-flex xs6>
                                <v-btn depressed large dark class="rounded-r-lg width ml-2" color="red" >
                                    <v-icon>mdi-delete</v-icon>ลบ
                                </v-btn>
                            </v-flex>
                        </v-flex> 
                        </center>
                    </v-card-text> 
                </v-card>
 
            </v-container>

        </v-tab-item>

    </v-tabs>

    <buttomnav />

</div>
</template>

<script>
import buttomnav from '@/components/admin/buttomnav';
export default {
    components: {
        buttomnav
    },
    data: () => ({
        dialogcow: false,
        dialognid: false,
        dialogmicro: false,
        dialogdate: false,
        dialoggender: false,
        dialogage: false,
        dialogcolor: false,
        dialogimport: false,
        dialogprice: false,
        dialogstatus: false,
        dialognnf: false,
        dialognidf: false,
        dialogmicrof: false,
        dialognnm: false,
        dialognidm: false,
        dialogmicrom: false,
        dialogkg: false,
        dialogweight: false,
        dialogbodyweight: false,
        dialogheight: false,

        itemsgender: ['ผู้', 'เมีย'],
        itemscolor: ['ดำ', 'น้ำตาล'],
        itemsimport: ['พ่อค้าคนกลาง', 'ตลาด', 'เพาะพันธุ์'],
        itemsstatus: ['ท้อง', 'ไม่ท้อง'],

        loader: null,
        loading: false,
        loading2: false,
        loading3: false,
        loading4: false,
        loading5: false,

        length: 2,
        onboarding: 0,

        items: ['มีชีวิต', 'ไม่มีชีวิต', ],
        dialog: true,
        dialog1: true,
        date: null,
        menu: false,
        items: [{
                src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            },
            {
                src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            },
            {
                src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            },
            {
                src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            },
        ],
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
        loader() {
            const l = this.loader
            this[l] = !this[l]

            setTimeout(() => (this[l] = false), 3000)

            this.loader = null
        },

    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        load: async function () {},
        save1(date) {
            this.$refs.menu.save(date)
        },

        next() {
            this.onboarding = this.onboarding + 1 === this.length ?
                0 :
                this.onboarding + 1
        },
        prev() {
            this.onboarding = this.onboarding - 1 < 0 ?
                this.length - 1 :
                this.onboarding - 1
        },
    },

}
</script>

<style>
.width {
    width: 95%;
}

.width1 {
    width: 48%;
}

.bg {
    background: rgba(242, 243, 244);
    height: 100%;
    background-position: center;
    background-repeat: repeat;
    background-size: cover;
}
</style>
