<template>
<div class="bg">
    <!-- <NavbarAdmin icon=" " name="บัญชีผู้ใช้" /> -->
    <Navigation name="เกษตกร" />
    <br>
    <v-card class="mx-auto rounded-lg elevation-10" max-width="140">
        <v-img height="160" src="https://www.siamzone.com/music/news/2015/07381.jpg">
        </v-img>
    </v-card>
    <br>
    <!-- <center>
        <h3> นายแดง เชิดชู </h3><br>
        <v-btn class="rounded-lg" color="success" >อัพโหลดรูปภาพ<v-icon>mdi-upload</v-icon>
        </v-btn>
        <v-btn class="rounded-lg" color="error" @click="$router.push('/user/resetpassword')">ตั้งค่ารหัสผ่าน<v-icon>mdi-account-key</v-icon>
        </v-btn>
    </center> -->
    <v-container>
        <center>
            <h3> นายแดง เชิดชู </h3><br>
            <v-flex xs12 row wrap>
                <v-flex xs6>
                    <v-btn class="rounded-lg pr-1" color="success">
                        <v-icon>mdi-upload</v-icon>อัพโหลดรูปภาพ
                    </v-btn>
                </v-flex>
                <v-flex xs6>
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
                                        <v-btn class="rounded-lg" color="green" outlined @click="dialog1=false">
                                            <v-icon>mdi-pencil</v-icon>แก้ไข
                                        </v-btn>
                                    </div>
                                </div>
                            </div>
                            <br>
                            <v-flex xs12>
                                <div>
                                    <v-select class="rounded-lg " color="green" outlined :readonly="dialog1" :items="items" label="คำนำหน้า"></v-select>
                                    <v-text-field class="rounded-lg" color="green" outlined :readonly="dialog1" :items="items" label="ชื่อ"></v-text-field>
                                    <v-text-field class="rounded-lg" color="green" outlined :readonly="dialog1" :items="items" label="นามสกุล"></v-text-field>
                                    <v-select class="rounded-lg " color="green" outlined :readonly="dialog1" :items="items" label="เพศ"></v-select>
                                </div>
                                <div v-for="item in informationfarmer" :key="item.name">
                                    <v-text-field class="rounded-lg" color="green" outlined :readonly="dialog1" v-model="item.calories" name="name" :label="item.describe" id="id"></v-text-field>
                                </div>
                                
                                <div>
                                    <center>
                                        <h3>ภาพถ่ายบัตรประจำตัวประชาชน</h3>
                                        <v-img class="rounded-lg elevation-5 pb-4"  height="200" width="350" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNf3OTIf1lugjQhtLRTP8cwuosPAJmIykTsry1UL87ArfVFx84&usqp=CAU"></v-img>
                                    </center>
                                </div>
                                <br>
                                <!-- <div>
                                    <v-select class="rounded-lg " color="green" outlined :readonly="dialog1" :items="items" label="ตำบล"></v-select>
                                </div>
                                <div>
                                    <v-select class="rounded-lg" color="green" outlined :readonly="dialog1" :items="items" label="อำเภอ"></v-select>
                                </div>
                                <div>
                                    <v-select class="rounded-lg" color="green" outlined :readonly="dialog1" :items="items" label="จังหวัด"></v-select>
                                </div>
                                <div>
                                    <v-select class="rounded-lg" color="green" outlined :readonly="dialog1" :items="items" label="รหัสไปรณีย์"></v-select>
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
                                    <v-btn class="rounded-lg " color="green" outlined @click="dialog1=false">
                                        <v-icon>mdi-pencil</v-icon>แก้ไข
                                    </v-btn>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4>สภาพฟาร์ม</h4>
                            <center>
                                <v-img class="rounded-lg elevation-5" height="200" width="auto" src="https://images.pexels.com/photos/158179/lake-constance-sheep-pasture-sheep-blue-158179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                                </v-img>
                            </center>
                        </div>
                        <br>
                        <v-flex xs12>
                            <div v-for="item in informationfarm1" :key="item.name">
                                <v-text-field class="rounded-lg" outlined :readonly="dialog1" v-model="item.calories1" name="name" :label="item.describe1" id="id"></v-text-field>
                            </div>

                        </v-flex>
                        <v-btn large class="rounded-lg" disabled block color="success">บันทึก</v-btn>
                    </v-card-text>
                </v-flex>
            </v-card>
        </v-tab-item>

        <!-- <v-tab-item>
                <v-card flat background-color="transparent" color="basil">
                    <v-flex xs12>
                        <v-card-text>
                            <h3>
                                <p>ตั้งค่ารหัสผ่าน</p>
                            </h3>
                            <center>
                                <v-text-field clearable flat hide-details label="รหัสผ่านใหม่" solo outlined single-line class=" rounded-lg pb-4"></v-text-field>
                                <v-text-field clearable flat hide-details label="ยืนยันรหัสผ่านใหม่" solo outlined single-line class=" rounded-lg"></v-text-field>
                            </center><br>
                            <div class="col-ml-6 ">
                            <div class="ml-auto text-center">
                                <v-btn block dark large class="rounded-lg " color="green" @click="$router.push('/user/personal')">ตกลง
                                </v-btn>
                                <v-btn block dark large class="rounded-lg " color="green">ตกลง
                                </v-btn>
                            </div>
                        </v-card-text>
                    </v-flex>
                </v-card>
            </v-tab-item> -->

    </v-tabs>
    <!-- </v-card> -->
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
        informationfarmer: [{
                describe: 'หมายเลขบัตรประจำตัวประชาชน',
                calories: '3560700347135',
            },
            {
                describe: 'อีเมล',
                calories: 'dang',
            },
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
                describe: 'เบอร์โทรศัพท์',
                calories: '0861800385',
            },
             {
                describe: 'บ้านเลขที่/ถนน/ซอย',
                calories: '123/123 ถนน 123 ซอย123',
            },
            {
                describe: 'ตำบล',
                calories: 'เจริญราษฎร์',
            },
            {
                describe: 'อำเภอ',
                calories: 'แม่กา',
            },
            {
                describe: 'จังหวัด',
                calories: 'พะเยา',
            },
            {
                describs: 'ไปรษณีย์',
                calories: '56000',
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
                describe1: 'บ้านเลขที่ ถนน ซอย',
                calories1: '123/123 ถนน123 ซอย123',
            },
            {
                describe1: 'กลุ่มเกษตรกร',
                calories1: 'กลุ่มแม่ใจ',
            },
            {
                describe1: 'ตำบล',
                calories1: 'เจริญราษฎร์',
            },
            {
                describe1: 'อำเภอ',
                calories1: 'แม่กา',
            },
            {
                describe1: 'จังหวัด',
                calories1: 'พะเยา',
            },
            {
                describe1: 'ไปรษณีย์',
                calories1: '56000',
            },
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

.width {
    width: 95%;
}
</style>
