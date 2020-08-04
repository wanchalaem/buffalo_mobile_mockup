<template>
<div class="bg">
    <!-- <NavigationAdmin name="ข้อมูลเกษตกร" /> -->
    <v-container>
        <v-row class="d-flex flex-row ">
            <v-btn depressed small fab @click="$router.push('/admin/userprofile')">
                <v-icon class="icon">mdi-chevron-left</v-icon>
            </v-btn>
            <h2>ข้อมูลเกษตกร</h2>
        </v-row>
    </v-container>
    <v-container class="mt-1">
        <v-card class="mx-auto rounded-lg elevation-10" max-width="140">
            <v-img height="160" src="https://images.pexels.com/photos/697243/pexels-photo-697243.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
            </v-img>
            <v-btn depressed max-width="140" color="success">
                <v-icon>mdi-upload</v-icon>อัพโหลดรูปภาพ
            </v-btn>
        </v-card>
        <br>
        <center>
            <h3> นายแดง เชิดชู </h3><br>
        </center> 

        <div class="text-center">
            <v-chip class="pa-1 ma-1" @click="$router.push('/admin/buffalo')" color="indigo" dark large>
                <v-icon>mdi-cow</v-icon>ข้อมูลควาย
            </v-chip>

            <v-chip class="pa-1 ma-1" @click="$router.push('/admin/userpicture')" color="success" dark large>
                <v-icon>mdi-image-outline</v-icon>รูปภาพ
            </v-chip>

            <v-chip class="pa-1 ma-1" @click="$router.push('/admin/resetpassword')" color="red" dark large>
                <v-icon>mdi-lock</v-icon>รหัสผ่าน
            </v-chip>
        </div>
    </v-container>

    <v-tabs grow color="green" centered>
        <v-tab>
            <v-icon>mdi-account-outline</v-icon>
            <h5>ข้อมูลเกษตกร</h5>
        </v-tab>
        <v-tab>
            <v-icon dark>mdi-file-outline</v-icon>
            <h5>ข้อมูลฟาร์ม</h5>
        </v-tab>

        <v-tab-item>
            <v-flex xs12>
                <v-card-text>
                    <!-- <br> -->
                    <v-flex xs12>
                        <!-- <div>
                            <center class="pb-6 ">
                                <v-card flat class="rounded-lg pt-2">
                                    <h2>ภาพถ่ายบัตรประจำตัวประชาชน</h2>
                                    <v-img class="rounded-lg " height="200" width="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNf3OTIf1lugjQhtLRTP8cwuosPAJmIykTsry1UL87ArfVFx84&usqp=CAU"></v-img>
                                    <v-btn depressed block class="rounded-lg" color="success">
                                        <v-icon>mdi-upload</v-icon>อัพโหลดบัตรประชาชน
                                    </v-btn>
                                </v-card>
                            </center>
                        </div> -->
                        <!-- <v-select class="rounded-lg" outlined :readonly="dialog1" prepend-inner-icon="mdi-human-male-female" color="green" id="id" label="คำนำหน้า"></v-select>
                        <v-text-field class="rounded-lg" outlined :readonly="dialog1" prepend-inner-icon="mdi-card-account-details-outline" color="green" id="id" label="ชื่อ"></v-text-field>
                        <v-text-field class="rounded-lg" outlined :readonly="dialog1" prepend-inner-icon="mdi-card-account-details-outline" color="green" id="id" label="นามสกุล"></v-text-field>
                        <v-select class="rounded-lg" outlined :readonly="dialog1" prepend-inner-icon="mdi-human-male-female" color="green" id="id" label="เพศ"></v-select>
                        <v-text-field class="rounded-lg" outlined :readonly="dialog1" prepend-inner-icon="mdi-card-account-details-outline" color="green" id="id" type="number" label="หมายเลขบัตร"></v-text-field>
                        <v-text-field class="rounded-lg" outlined :readonly="dialog1" prepend-inner-icon="mdi-account-clock-outline" color="green" id="id" type="number" label="อายุ"></v-text-field>
                        <v-text-field class="rounded-lg" outlined :readonly="dialog1" prepend-inner-icon="mdi-home" color="green" id="id" label="ที่อยู่"></v-text-field>
                        <v-text-field class="rounded-lg" outlined :readonly="dialog1" prepend-inner-icon="mdi-phone" color="green" id="id" type="number" label="เบอร์โทรศัพท์"></v-text-field> -->

                        <!-- <h3 class="text-center"> ข้อมูลส่วนตัว</h3> -->
                        <!-- <br> -->
                        <v-dialog v-model="dialogpre" max-width="500px">
                            <v-card>
                                <v-card-title>
                                    คำนำหน้า
                                </v-card-title>
                                <v-card-text>
                                    <v-select color="success" :items="itemspre" label="คำหน้า"></v-select>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn color="error width" depressed @click="dialogpre = false">
                                        ยกเลิก
                                    </v-btn>
                                    <v-btn color="success width" depressed @click="dialogpre = false">
                                        ตกลง
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                        <v-card class="pa-3" @click="dialogpre = true">
                            <v-row>
                                <h4 class="pl-4">คำนำหน้า</h4>
                                <v-spacer></v-spacer>
                                <h4 class="pr-4">นาย</h4>
                                <v-icon>mdi-chevron-right</v-icon>
                            </v-row>
                        </v-card>

                        <v-dialog v-model="dialogname" max-width="500px">
                            <v-card>
                                <v-card-title>
                                    เปลี่ยนชื่อ
                                </v-card-title>
                                <v-card-text>
                                    <v-text-field color="success" label="ชื่อ" id="id"></v-text-field>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn color="error width" depressed @click="dialogname = false">
                                        ยกเลิก
                                    </v-btn>
                                    <v-btn color="success width" depressed @click="dialogname = false">
                                        ตกลง
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                        <v-card class="pa-3" @click="dialogname = true">
                            <v-row>
                                <h4 class="pl-4">ชื่อ</h4>
                                <v-spacer></v-spacer>
                                <h4 class="pr-4">นายแดง</h4>
                                <v-icon>mdi-chevron-right</v-icon>
                            </v-row>
                        </v-card>

                        <v-dialog v-model="dialoglastname" max-width="500px">
                            <v-card>
                                <v-card-title>
                                    นามสกุล
                                </v-card-title>
                                <v-card-text>
                                    <v-text-field color="success" label="นามสกุล" id="id"></v-text-field>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn color="error width" depressed @click="dialoglastname = false">
                                        ยกเลิก
                                    </v-btn>
                                    <v-btn color="success width" depressed @click="dialoglastname = false">
                                        ตกลง
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                        <v-card class="pa-3" @click="dialoglastname = true">
                            <v-row>
                                <h4 class="pl-4">นามสกุล</h4>
                                <v-spacer></v-spacer>
                                <h4 class="pr-4">นามสกุลนายแดง</h4>
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
                                    <v-btn color="error width" depressed @click="dialoggender = false">
                                        ยกเลิก
                                    </v-btn>
                                    <v-btn color="success width" depressed @click="dialoggender = false">
                                        ตกลง
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                        <v-card class="pa-3" @click="dialoggender = true">
                            <v-row>
                                <h4 class="pl-4">เพศ</h4>
                                <v-spacer></v-spacer>
                                <h4 class="pr-4">ชาย </h4>
                                <v-icon>mdi-chevron-right</v-icon>
                            </v-row>
                        </v-card>

                        <v-dialog v-model="dialogidcard" max-width="500px">
                            <v-card>
                                <v-card-title>
                                    หมายเลขบัตรประชาชน
                                </v-card-title>
                                <v-card-text>
                                    <v-text-field color="success" name="name" type="number" label="หมายเลขบัตรประชาชน" id="id"></v-text-field>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn color="error width" depressed @click="dialogidcard = false">
                                        ยกเลิก
                                    </v-btn>
                                    <v-btn color="success width" depressed @click="dialogidcard = false">
                                        ตกลง
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                        <v-card class="pa-3" @click="dialogidcard = true">
                            <v-row>
                                <h4 class="pl-4">หมายเลขบัตร</h4>
                                <v-spacer></v-spacer>
                                <h4 class="pr-4">1231231231231</h4>
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
                                    <v-btn color="error width" depressed @click="dialogage = false">
                                        ยกเลิก
                                    </v-btn>
                                    <v-btn color="success width" depressed @click="dialogage = false">
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

                        <v-dialog v-model="dialogaddress" max-width="500px">
                            <v-card>
                                <v-card-title>
                                    ที่อยู่
                                </v-card-title>
                                <v-card-text>
                                    <v-text-field color="success" label="ที่อยู่" id="id"></v-text-field>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn color="error width" depressed @click="dialogaddress = false">
                                        ยกเลิก
                                    </v-btn>
                                    <v-btn color="success width" depressed @click="dialogaddress = false">
                                        ตกลง
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                        <v-card class="pa-3" @click="dialogaddress = true">
                            <v-row>
                                <h4 class="pl-4">ที่อยู่</h4>
                                <v-spacer></v-spacer>
                                <h4 class="pr-4">123/123 บ้านแม่ใจ</h4>
                                <v-icon>mdi-chevron-right</v-icon>
                            </v-row>
                        </v-card>

                        <v-dialog v-model="dialogphone" max-width="500px">
                            <v-card>
                                <v-card-title>
                                    เบอร์โทรศัพท์
                                </v-card-title>
                                <v-card-text>
                                    <v-text-field color="success" label="เบอร์โทรศัพท์" id="id"></v-text-field>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn color="error width" depressed @click="dialogphone = false">
                                        ยกเลิก
                                    </v-btn>
                                    <v-btn color="success width" depressed @click="dialogphone = false">
                                        ตกลง
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                        <v-card class="pa-3" @click="dialogphone = true">
                            <v-row>
                                <h4 class="pl-4">เบอร์โทรษัพท์</h4>
                                <v-spacer></v-spacer>
                                <h4 class="pr-4">0123456789</h4>
                                <v-icon>mdi-chevron-right</v-icon>
                            </v-row>
                        </v-card>
                        <br>
                        <center class="mb-15">
                            <v-btn class="rounded-lg" large disabled color="success" block>บันทึก</v-btn>
                        </center>
                    </v-flex>
                    <!-- <v-btn large class="rounded-lg mt-4" disabled block color="success">บันทึก</v-btn> -->
                </v-card-text>
            </v-flex>

        </v-tab-item>

        <v-tab-item>
            <v-card flat background-color="transparent" color="basil">
                <v-flex xs12>
                    <v-card-text>
                        <div class="d-flex grow flex-wrap">
                            <!-- <h5>ข้อมูลฟาร์ม</h5> -->
                            <v-spacer></v-spacer>
                            <div class="col-ml-6 ">
                                <div class="ml-auto text-right">
                                    <!-- <v-btn depressed class="rounded-lg mr-2" color="warning" @click="dialog1=false">แก้ไขข้อมูลฟาร์ม<v-icon>mdi-pencil</v-icon>
                                    </v-btn> -->
                                    <!-- <v-btn class="rounded-lg " color="red" dark @click="dialog1=false">ลบ<v-icon>mdi-delete</v-icon>
                                    </v-btn> -->
                                </div>
                            </div>
                        </div>
                        <!-- <br>
                        <div>
                            <v-card flat class="rounded-lg">
                                <center class="pt-2">
                                    <h2 class="pb-2">รูปภาพฟาร์ม</h2>
                                    <v-img class="rounded-lg elevation-5" height="200" width="auto" src="https://images.pexels.com/photos/158179/lake-constance-sheep-pasture-sheep-blue-158179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                                    </v-img>
                                    <v-btn depressed block class="rounded-lg" color="success">
                                        <v-icon>mdi-upload</v-icon>อัพโหลดภาพถ่ายฟาร์ม
                                    </v-btn>
                                </center>
                            </v-card>
                        </div>
                        <br> -->
                        <!-- <v-flex xs12>
                            <v-text-field class="rounded-lg" prepend-inner-icon="mdi-home-outline" color="green" outlined v-model="editedItem.status" label="ชื่อฟาร์ม"></v-text-field>
                            <v-text-field class="rounded-lg" prepend-inner-icon="mdi-home" color="green" outlined v-model="editedItem.nonf" label="ที่อยู่ฟาร์ม"></v-text-field>
                            <v-select class="rounded-lg" prepend-inner-icon="mdi-map-marker-multiple-outline" color="green" outlined v-model="editedItem.nidf" label="ตำบล"></v-select>
                            <v-select class="rounded-lg" prepend-inner-icon="mdi-map-marker-multiple-outline" color="green" outlined v-model="editedItem.nmif" label="อำเภอ"></v-select>
                            <v-select class="rounded-lg" prepend-inner-icon="mdi-map-marker-multiple-outline" color="green" outlined v-model="editedItem.nmim" label="จังหวัด"></v-select>
                            <v-select class="rounded-lg" prepend-inner-icon="mdi-postage-stamp" color="green" outlined v-model="editedItem.nidm" label="รหัสไปรษณีย์"></v-select>
                            <v-text-field class="rounded-lg" prepend-inner-icon="mdi-map-marker-radius-outline" color="green" outlined v-model="editedItem.mim" label="พิกัดฟาร์มตามระบบ GPS (ละติจูด)"></v-text-field>
                            <v-text-field class="rounded-lg" prepend-inner-icon="mdi-map-marker-radius-outline" color="green" outlined v-model="editedItem.weight" label="พิกัดฟาร์มตามระบบ GPS (ลองติจูด)"></v-text-field>
                            <v-text-field class="rounded-lg" prepend-inner-icon="mdi-cow" color="green" outlined v-model="editedItem.cwidth" type="number" label="จำนวนกระบือทั้งหมด"></v-text-field>
                            <v-select class="rounded-lg" prepend-inner-icon="mdi-account-group-outline" color="green" outlined v-model="editedItem.blength" label="กลุ่มเกษตรกร"></v-select>
                        </v-flex> -->
                        <!-- <v-btn large class="rounded-lg mt-4" disabled block color="success">บันทึก</v-btn> -->

                        <v-dialog v-model="dialogfarm" max-width="500px">
                            <v-card>
                                <v-card-title>
                                    ชื่อฟาร์ม
                                </v-card-title>
                                <v-card-text>
                                    <v-text-field color="success" label="ชื่อฟาร์ม" id="id"></v-text-field>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn color="error width" depressed @click="dialogfarm = false">
                                        ยกเลิก
                                    </v-btn>
                                    <v-btn color="success width" depressed @click="dialogfarm = false">
                                        ตกลง
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                        <v-card class="pa-3" @click="dialogfarm = true">
                            <v-row>
                                <h4 class="pl-4">ชื่อฟาร์ม</h4>
                                <v-spacer></v-spacer>
                                <h4 class="pr-4">ฟาร์มนายแดง</h4>
                                <v-icon>mdi-chevron-right</v-icon>
                            </v-row>
                        </v-card>

                        <v-dialog v-model="dialogaddressfarm" max-width="500px">
                            <v-card>
                                <v-card-title>
                                    ที่อยู่ฟาร์ม
                                </v-card-title>
                                <v-card-text>
                                    <v-text-field color="success" label="ที่อยู่ฟาร์ม" id="id"></v-text-field>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn color="error width" depressed @click="dialogaddressfarm = false">
                                        ยกเลิก
                                    </v-btn>
                                    <v-btn color="success width" depressed @click="dialogaddressfarm = false">
                                        ตกลง
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                        <v-card class="pa-3" @click="dialogaddressfarm = true">
                            <v-row>
                                <h4 class="pl-4">ที่อยู่ฟาร์ม</h4>
                                <v-spacer></v-spacer>
                                <h4 class="pr-4">123/123 บ้านแม่ใจ</h4>
                                <v-icon>mdi-chevron-right</v-icon>
                            </v-row>
                        </v-card>

                        <v-dialog v-model="dialogparish" max-width="500px">
                            <v-card>
                                <v-card-title>
                                    ตำบล
                                </v-card-title>
                                <v-card-text>
                                    <v-select color="success" :items="itemsparish" label="ตำบล"></v-select>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn color="error width" depressed @click="dialogparish = false">
                                        ยกเลิก
                                    </v-btn>
                                    <v-btn color="success width" depressed @click="dialogparish = false">
                                        ตกลง
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                        <v-card class="pa-3" @click="dialogparish = true">
                            <v-row>
                                <h4 class="pl-4">ตำบล</h4>
                                <v-spacer></v-spacer>
                                <h4 class="pr-4">แม่ใจ</h4>
                                <v-icon>mdi-chevron-right</v-icon>
                            </v-row>
                        </v-card>

                        <v-dialog v-model="dialogdistrict" max-width="500px">
                            <v-card>
                                <v-card-title>
                                    อำเภอ
                                </v-card-title>
                                <v-card-text>
                                    <v-select color="success" :items="itemsdistrict" label="ตำบล"></v-select>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn color="error width" depressed @click="dialogdistrict = false">
                                        ยกเลิก
                                    </v-btn>
                                    <v-btn color="success width" depressed @click="dialogdistrict = false">
                                        ตกลง
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                        <v-card class="pa-3" @click="dialogdistrict = true">
                            <v-row>
                                <h4 class="pl-4">อำเภอ</h4>
                                <v-spacer></v-spacer>
                                <h4 class="pr-4">เมือง </h4>
                                <v-icon>mdi-chevron-right</v-icon>
                            </v-row>
                        </v-card>

                        <v-dialog v-model="dialogprovince" max-width="500px">
                            <v-card>
                                <v-card-title>
                                    จังหวัด
                                </v-card-title>
                                <v-card-text>
                                    <v-select color="success" :items="itemsprovince" label="ตำบล"></v-select>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn color="error width" depressed @click="dialogprovince = false">
                                        ยกเลิก
                                    </v-btn>
                                    <v-btn color="success width" depressed @click="dialogprovince = false">
                                        ตกลง
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                        <v-card class="pa-3" @click="dialogprovince = true">
                            <v-row>
                                <h4 class="pl-4">จังหวัด</h4>
                                <v-spacer></v-spacer>
                                <h4 class="pr-4">พะเยา</h4>
                                <v-icon>mdi-chevron-right</v-icon>
                            </v-row>
                        </v-card>

                        <v-dialog v-model="dialogpostalcode" max-width="500px">
                            <v-card>
                                <v-card-title>
                                    รหัสไปรษณีย์
                                </v-card-title>
                                <v-card-text>
                                    <v-select color="success" :items="itemspostalcode" label="ตำบล"></v-select>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn color="error width" depressed @click="dialogpostalcode = false">
                                        ยกเลิก
                                    </v-btn>
                                    <v-btn color="success width" depressed @click="dialogpostalcode = false">
                                        ตกลง
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                        <v-card class="pa-3" @click="dialogpostalcode = true">
                            <v-row>
                                <h4 class="pl-4">รหัสไปรษณีย์</h4>
                                <v-spacer></v-spacer>
                                <h4 class="pr-4">56000</h4>
                                <v-icon>mdi-chevron-right</v-icon>
                            </v-row>
                        </v-card>

                        <v-dialog v-model="dialoglatitude" max-width="500px">
                            <v-card>
                                <v-card-title>
                                    พิกัดฟาร์ม ละติจูด
                                </v-card-title>
                                <v-card-text>
                                    <v-text-field color="success" type="number" label="พิกัดฟาร์ม ละติจูด" id="id"></v-text-field>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn color="error width" depressed @click="dialoglatitude = false">
                                        ยกเลิก
                                    </v-btn>
                                    <v-btn color="success width" depressed @click="dialoglatitude = false">
                                        ตกลง
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                        <v-card class="pa-3" @click="dialoglatitude = true">
                            <v-row>
                                <h4 class="pl-4">พิกัดฟาร์ม ละติจูด</h4>
                                <v-spacer></v-spacer>
                                <h4 class="pr-4">41.40338</h4>
                                <v-icon>mdi-chevron-right</v-icon>
                            </v-row>
                        </v-card>

                        <v-dialog v-model="dialoglongitude" max-width="500px">
                            <v-card>
                                <v-card-title>
                                    พิกัดฟาร์ม ลองจิจูด
                                </v-card-title>
                                <v-card-text>
                                    <v-text-field color="success" type="number" label="พิกัดฟาร์ม ลองจิจูด " id="id"></v-text-field>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn color="error width" depressed @click="dialoglongitude = false">
                                        ยกเลิก
                                    </v-btn>
                                    <v-btn color="success width" depressed @click="dialoglongitude = false">
                                        ตกลง
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                        <v-card class="pa-3" @click="dialoglongitude = true">
                            <v-row>
                                <h4 class="pl-4">พิกัดฟาร์ม ลองติจูด</h4>
                                <v-spacer></v-spacer>
                                <h4 class="pr-4">2.17403</h4>
                                <v-icon>mdi-chevron-right</v-icon>
                            </v-row>
                        </v-card>

                        <v-dialog v-model="dialogbuf" max-width="500px">
                            <v-card>
                                <v-card-title>
                                    จำนวนกระบือทั้งหมด
                                </v-card-title>
                                <v-card-text>
                                    <v-text-field color="success" type="number" label="พิกัดฟาร์ม ละติจูด" id="id"></v-text-field>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn color="error width" depressed @click="dialogbuf = false">
                                        ยกเลิก
                                    </v-btn>
                                    <v-btn color="success width" depressed @click="dialogbuf = false">
                                        ตกลง
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                        <v-card class="pa-3" @click="dialogbuf = true">
                            <v-row>
                                <h4 class="pl-4">จำนวนกระบือทั้งหมด</h4>
                                <v-spacer></v-spacer>
                                <h4 class="pr-4">150 ตัว</h4>
                                <v-icon>mdi-chevron-right</v-icon>
                            </v-row>
                        </v-card>

                        <v-dialog v-model="dialoggroup" max-width="500px">
                            <v-card>
                                <v-card-title>
                                    กลุ่มเกษตรกร
                                </v-card-title>
                                <v-card-text>
                                    <v-select color="success" :items="itemsgroup" label="กลุ่มเกษตรกร"></v-select>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn color="error width" depressed @click="dialoggroup = false">
                                        ยกเลิก
                                    </v-btn>
                                    <v-btn color="success width" depressed @click="dialoggroup = false">
                                        ตกลง
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                        <v-card class="pa-3" @click="dialoggroup = true">
                            <v-row>
                                <h4 class="pl-4">กลุ่มเกษตรกร</h4>
                                <v-spacer></v-spacer>
                                <h4 class="pr-4">กลุ่มแม่ใจ</h4>
                                <v-icon>mdi-chevron-right</v-icon>
                            </v-row>
                        </v-card>
                        <br>
                        <center class="mb-15">
                            <v-btn class="rounded-lg" large disabled color="success" block>บันทึก</v-btn>
                        </center>
                    </v-card-text>
                </v-flex>
            </v-card>
        </v-tab-item>

    </v-tabs>
    <!-- </v-card> -->
    <buttomnav/>
    
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
    data: () => ({
        
        dialogpre: false,
        dialogname: false,
        dialoglastname: false,
        dialoggender: false,
        dialogidcard: false,
        dialogage: false,
        dialogaddress: false,
        dialogphone: false,
        dialogfarm: false,
        dialogaddressfarm: false,
        dialogparish: false,
        dialogdistrict: false,
        dialogprovince: false,
        dialogpostalcode: false,
        dialoglatitude: false,
        dialoglongitude: false,
        dialogbuf: false,
        dialoggroup: false,

        itemsgender: ['ชาย', 'หญิง'],
        itemspre: ['นาย', 'นาง', 'นางสาว'],
        itemsparish: ['แม่กา', 'แม่ใจ'],
        itemsdistrict: ['เมือง', 'เมืองพะเยา'],
        itemsprovince: ['พะเยา', 'แพร่'],
        itemspostalcode: ['56000', '57000', '58000'],
        itemsgroup: ['กลุ่มแม่กา', 'กลุ่มแม่ใจ'],

        tab: null,
        search: '',
        dialog1: true,
        dialog: false,

        items: [
            'ข้อมูลเกษตกร', 'ข้อมูลควาย',
        ],
        headers: [{
                text: 'รหัสผ่าน',
                value: 'password'
            },
            {
                text: 'อีเมล',
                value: 'email'
            },
            {
                text: 'ชื่อ',
                value: 'name'
            },
            {
                text: 'เบอร์หู',
                value: 'number'
            },
            {
                text: 'พันธุ์',
                value: 'gene'
            },
            {
                text: 'อายุ',
                value: 'age'
            },
            {
                text: 'เพศ',
                value: 'sex'
            },
            {
                text: 'การจัดการ',
                value: 'actions',
                // sortable: false
            },
        ],
        informationfarmer: [
            // {
            //     describe: 'หมายเลขบัตรประจำตัวประชาชน',
            //     calories: '3560700347135',
            // },
            // {
            //     describe: 'อีเมล',
            //     calories: 'dang',
            // },
            // {
            //     describe: 'คำนำหน้า',
            //     calories: 'นาย',
            // },
            // {
            //     describe: 'ชื่อ',
            //     calories: 'เชิดชู',
            // },
            // {
            //     describe: 'นามสกุล',
            //     calories: 'แก้วบุญเรือง',
            // },

            // {
            //     describe: 'เพศ',
            //     calories: 'ชาย',
            // },
            {
                describe: 'อายุ',
                calories: '58',
            },
            {
                describe: 'ที่อยู่',
                calories: '123/123 ถนน123 ซอย123',
            },

            {
                describe: 'เบอร์โทรศัพท์',
                calories: '0861800385',
            },

        ],
        informationfarm1: [{
                describe1: 'ชื่อฟาร์ม',
                calories1: 'ฟาร์มพ่อหร่วน',
            },

            {
                describe1: 'พิกัดฟาร์มตามระบบ GPS (ละติจูด)',
                calories1: '19.391271',
            },
            {
                describe1: 'พิกัดฟาร์มตามระบบ GPS (ลองติจูด)',
                calories1: '99.816495',
            },
            {
                describe1: 'จำนวนควายทั้งหมด',
                calories1: '40',
            },
            {
                describe1: 'บ้านเลขที่/ถนน/ซอย',
                calories1: '123/123 ถนน123 ซอย123',
            },
            {
                describe1: 'กลุ่มเกษตรกร',
                calories1: 'กลุ่มแม่ใจ',
            },
            // {
            //     describe1: 'ตำบล',
            //     calories1: 'เจริญราษฎร์',
            // },
            // {
            //     describe1: 'อำเภอ',
            //     calories1: 'แม่กา',
            // },
            // {
            //     describe1: 'จังหวัด',
            //     calories1: 'พะเยา',
            // },
            // {
            //     describe1: 'ไปรษณีย์',
            //     calories1: '56000',
            // },
        ],
        desserts: [],
        editedIndex: -1,
        editedItem: {
            IDcardFarmer: '',
            nonb: '',
            nid: '',
            nmi: '',
            birth: ''
        },
        defaultItem: {
            name: '',
            number: '',
            gene: '',
            age: '',
            certifacate: ''
        },
    }),
    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'เพิ่ม' : 'เพิ่ม'
        },
    },
    watch: {
        dialog(val) {
            val || this.close()
        },
    },
    methods: {
        editItem(item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },
        deleteItem(item) {
            const index = this.desserts.indexOf(item)
            confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
        },
        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },
        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.desserts[this.editedIndex], this.editedItem)
            } else {
                this.desserts.push(this.editedItem)
            }
            this.close()
        },
    },
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

.button2 {
    background-color: #008CBA;
}

.width {
    width: 48%;
}
</style>
