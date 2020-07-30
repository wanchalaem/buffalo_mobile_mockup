<template>
<div class="bg">
    <Navigation name="เกษตกร" />
    <br>
    <v-card class="mx-auto rounded-lg elevation-10" max-width="140">
        <v-img height="160" src="https://www.siamzone.com/music/news/2015/07381.jpg">
        </v-img>
        <v-btn depressed class="" max-width="140" color="success">
            <v-icon>mdi-upload</v-icon>อัพโหลดรูปภาพ
        </v-btn>
    </v-card>
    <br>
    <v-container>
        <center>
            <h3> นายแดง เชิดชู </h3><br>
            <v-flex xs12 row wrap>
                <!-- <v-flex xs6>
                    <v-btn class="rounded-lg pr-1" color="success">
                        <v-icon>mdi-upload</v-icon>อัพโหลดรูปภาพ
                    </v-btn>
                </v-flex> -->
                <v-flex xs12>
                    <v-btn class="rounded-lg pl-1" color="error" @click="$router.push('/user/resetpassword')">
                        <v-icon>mdi-account-key</v-icon>ตั้งค่ารหัสผ่าน
                    </v-btn>
                </v-flex>
            </v-flex>
        </center>
    </v-container>

    <br>
    <!-- <v-card class="rounded-lg"> -->
    <v-tabs v-model="tab" grow color="green">
        <v-tab>
            <v-icon>mdi-account-outline</v-icon>
            <h5>ข้อมูลเกษตกร</h5>
        </v-tab>
        <v-tab>
            <v-icon dark>mdi-file-outline</v-icon>
            <h5>ข้อมูลฟาร์ม</h5>
        </v-tab>
        <!-- <v-tab>
                <v-icon dark>mdi-account-cog</v-icon>
                <h5>ตั้งค่า</h5>
            </v-tab> -->

        <v-tab-item>
            <center>
                <v-flex xs12 row wrap>
                    <v-flex xs12>
                        <v-card-text>
                            <!-- <div class="d-flex grow flex-wrap"> -->
                            <div>
                                <v-spacer></v-spacer>
                                <div class="col-ml-6 ">
                                    <div class="ml-auto text-right">

                                    </div>
                                    <div class="ml-auto text-right">
                                        <v-btn depressed class="rounded-lg" color="warning" dark @click="dialog1=false">
                                            <v-icon>mdi-pencil</v-icon>แก้ไขข้อมูลเกษตกร
                                        </v-btn>
                                    </div>
                                </div>
                            </div>
                            <br>
                            <v-flex xs12>
                                <div>
                                    <center class="pb-6 ">
                                        <v-card flat class="rounded-lg pt-2">
                                            <h2>ภาพถ่ายบัตรประจำตัวประชาชน</h2>
                                            <v-img class="rounded-lg " height="200" width="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNf3OTIf1lugjQhtLRTP8cwuosPAJmIykTsry1UL87ArfVFx84&usqp=CAU"></v-img>
                                            <v-btn depressed block class="rounded-lg" color="success">
                                                <v-icon>mdi-upload</v-icon>อัพโหลดบัตรประชาชน
                                            </v-btn>
                                        </v-card>
                                    </center>
                                    <v-select class="rounded-lg" outlined :readonly="dialog1" prepend-inner-icon="mdi-human-male-female" color="green" id="id" label="คำนำหน้า"></v-select>
                                    <v-text-field class="rounded-lg" outlined :readonly="dialog1" prepend-inner-icon="mdi-card-account-details-outline" color="green" id="id" label="ชื่อ"></v-text-field>
                                    <v-text-field class="rounded-lg" outlined :readonly="dialog1" prepend-inner-icon="mdi-card-account-details-outline" color="green" id="id" label="นามสกุล"></v-text-field>
                                    <v-select class="rounded-lg" outlined :readonly="dialog1" prepend-inner-icon="mdi-human-male-female" color="green" id="id" label="เพศ"></v-select>
                                    <v-text-field class="rounded-lg" outlined :readonly="dialog1" prepend-inner-icon="mdi-card-account-details-outline" color="green" type="number" id="id" label="หมายเลขบัตร"></v-text-field>

                                    <v-text-field class="rounded-lg" outlined :readonly="dialog1" prepend-inner-icon="mdi-account-clock-outline" color="green" id="id" type="number" label="อายุ"></v-text-field>
                                    <v-text-field class="rounded-lg" outlined :readonly="dialog1" prepend-inner-icon="mdi-home" color="green" id="id" label="ที่อยู่"></v-text-field>
                                    <v-text-field class="rounded-lg" outlined :readonly="dialog1" prepend-inner-icon="mdi-phone" color="green" id="id" type="number" label="เบอร์โทรศัพท์"></v-text-field>
                                </div>
                                <!-- <div v-for="item in informationfarmer" :key="item.name">
                                    <v-text-field class="rounded-lg" color="green" outlined :readonly="dialog1" v-model="item.calories" name="name" :label="item.describe" id="id"></v-text-field>
                                </div> -->

                                <!-- <div>
                                    <center>
                                        <h3>ภาพถ่ายบัตรประจำตัวประชาชน</h3>
                                        <v-img class="rounded-lg elevation-5 pb-4" height="200" width="350" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNf3OTIf1lugjQhtLRTP8cwuosPAJmIykTsry1UL87ArfVFx84&usqp=CAU"></v-img>
                                        <v-btn class="rounded-lg" color="success">
                                            <v-icon>mdi-upload</v-icon>อัพโหลดภาพถ่ายบัตรประชาชน
                                        </v-btn>
                                    </center>
                                </div>  -->
                                <!-- <div class="pt-6">
                                    <v-select class="rounded-lg " color="green" outlined :readonly="dialog1" :items="items" label="ตำบล"></v-select>
                                    <v-select class="rounded-lg " color="green" outlined :readonly="dialog1" :items="items" label="อำเภอ"></v-select>
                                    <v-select class="rounded-lg " color="green" outlined :readonly="dialog1" :items="items" label="จังหวัด"></v-select>
                                    <v-select class="rounded-lg " color="green" outlined :readonly="dialog1" :items="items" label="รหัสไปรษณีย์"></v-select>
                                </div> -->
                            </v-flex>

                            <v-btn large class="rounded-lg mt-6" disabled block color="success">บันทึก</v-btn>
                        </v-card-text>

                    </v-flex>

                </v-flex>
            </center>
        </v-tab-item>

        <v-tab-item>
            <v-card flat background-color="transparent">
                <v-flex xs12>
                    <v-card-text>
                        <div class="d-flex grow flex-wrap">

                            <v-spacer></v-spacer>
                            <div class="col-ml-6 ">
                                <div class="ml-auto text-right">
                                    <v-btn depressed class="rounded-lg " color="warning" dark @click="dialog1=false">
                                        <v-icon>mdi-pencil</v-icon>แก้ไขข้อมูลฟาร์ม
                                    </v-btn>
                                </div>
                            </div>
                        </div>

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
                        <br>
                        <v-flex xs12>
                            <!-- <div v-for="item in informationfarm1" :key="item.name">
                                <v-text-field class="rounded-lg" color="green" outlined :readonly="dialog1" v-model="item.calories1" name="name" :label="item.describe1" id="id"></v-text-field>
                            </div>
                            <div>
                                <v-select class="rounded-lg " color="green" outlined :readonly="dialog1" :items="items" label="ตำบล"></v-select>
                                <v-select class="rounded-lg " color="green" outlined :readonly="dialog1" :items="items" label="อำเภอ"></v-select>
                                <v-select class="rounded-lg " color="green" outlined :readonly="dialog1" :items="items" label="จังหวัด"></v-select>
                                <v-select class="rounded-lg " color="green" outlined :readonly="dialog1" :items="items" label="รหัสไปรษณีย์"></v-select>
                                <v-select class="rounded-lg " color="green" outlined :readonly="dialog1" :items="items" label="กลุ่มเกษตกร"></v-select>
                            </div> -->
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

                        </v-flex>
                        <v-btn large class="rounded-lg" disabled block color="success">บันทึก</v-btn>
                    </v-card-text>
                </v-flex>
            </v-card>
        </v-tab-item>

    </v-tabs>
</div>
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
    data: () => ({
        tab: null,
        search: '',
        dialog1: true,
        dialog: false,

        items: [
            'ข้อมูลเกษตกร', 'ข้อมูลควาย', 'ตั้งค่า'
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
            // {
            //     describe: 'อายุ',
            //     calories: '58',

            // },
            // {
            //     describe: 'ที่อยู่',
            //     calories: '123/123 ถนน 123 ซอย123',
            // },
            // {
            //     describe: 'เบอร์โทรศัพท์',
            //     calories: '0861800385',
            // },

            // {
            //     describe: 'ตำบล',
            //     calories: 'เจริญราษฎร์',
            // },
            // {
            //     describe: 'อำเภอ',
            //     calories: 'แม่กา',
            // },
            // {
            //     describe: 'จังหวัด',
            //     calories: 'พะเยา',
            // },
            // {
            //     describs: 'ไปรษณีย์',
            //     calories: '56000',
            // },
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
                describe1: 'ที่อยู่ฟาร์ม',
                calories1: '123/123 ถนน123 ซอย123',
            },
            // {
            //     describe1: 'กลุ่มเกษตรกร',
            //     calories1: 'กลุ่มแม่ใจ',
            // },
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

.width {
    width: 95%;
}
</style>
