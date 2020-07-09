<template>
<div class="bg">
    <!-- <NavbarAdmin icon=" " name="บัญชีผู้ใช้" /> -->
    <NavigationAdmin name="ข้อมูลเกษตกร" />
    <v-container class="mt-1">
        <v-btn class="mb-6" fab @click="$router.push('/admin/userprofile')" small>
            <v-icon class="icon">mdi-chevron-left</v-icon>
        </v-btn>
        <v-card class="mx-auto rounded-lg elevation-10" max-width="140">
            <v-img height="160" src="https://www.siamzone.com/music/news/2015/07381.jpg">
            </v-img>
        </v-card>
        <br>
        <center>
            <h3> นายแดง เชิดชู </h3><br>
            <v-btn medium class="rounded-lg ma-2" dark color="indigo" @click="$router.push('/admin/buffalo')">ข้อมูลควาย<v-icon>mdi-cow</v-icon>
            </v-btn>
            <v-flex xs12 row wrap class="pt-2">
                <v-flex xs6>
                    <v-btn class="rounded-lg pr-1" color="success">
                        <v-icon>mdi-upload</v-icon>อัพโหลดรูปภาพ
                    </v-btn>
                </v-flex>
                <v-flex xs6>
                    <v-btn class="rounded-lg pl-1" color="error" @click="$router.push('/admin/resetpassword')">
                        <v-icon>mdi-account-key</v-icon>ตั้งค่ารหัสผ่าน
                    </v-btn>
                </v-flex>
            </v-flex>
        </center>
    </v-container>

    <!-- <v-card class="rounded-lg pa-2"> -->
    <v-tabs grow color="green">
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
                    <div class="d-flex grow flex-wrap">
                        <!-- <h5>ข้อมูลผู้ใช้</h5> -->
                        <v-spacer></v-spacer>
                        <div class="col-ml-6 ">
                            <div class="ml-auto text-right">
                                <v-btn class="rounded-lg mr-2" color="green" outlined @click="dialog1=false">แก้ไข<v-icon>mdi-pencil</v-icon>
                                </v-btn>
                                <v-btn class="rounded-lg " color="red" outlined @click="dialog1=false">ลบ<v-icon>mdi-delete</v-icon>
                                </v-btn>
                            </div>
                        </div>
                    </div>
                    <br>
                    <v-flex xs12>
                        <div v-for="item in informationfarmer" :key="item.name">
                            <v-text-field outlined :readonly="dialog1" v-model="item.calories" name="name" :label="item.describe" id="id"></v-text-field>
                        </div>
                        <div>
                            <center>
                                <h3 class="mb-1">ภาพถ่ายบัตรประจำตัวประชาชน</h3>
                                <v-img class="rounded-lg elevation-5" height="200" width="350" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNf3OTIf1lugjQhtLRTP8cwuosPAJmIykTsry1UL87ArfVFx84&usqp=CAU"></v-img>
                            </center>
                        </div>
                    </v-flex>
                    <v-btn large class="rounded-lg mt-4" disabled block color="success">บันทึก</v-btn>
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
                                    <v-btn class="rounded-lg mr-2" color="green" outlined @click="dialog1=false">แก้ไข<v-icon>mdi-pencil</v-icon>
                                    </v-btn>
                                    <v-btn class="rounded-lg " color="red" outlined @click="dialog1=false">ลบ<v-icon>mdi-delete</v-icon>
                                    </v-btn>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3>สภาพฟาร์ม</h3>
                            <center>
                                <v-img class="rounded-lg elevation-5" height="200" width="auto" src="https://images.pexels.com/photos/158179/lake-constance-sheep-pasture-sheep-blue-158179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                                </v-img>
                            </center>
                        </div>
                        <br>
                        <v-flex xs12>
                            <div v-for="item in informationfarm1" :key="item.name">
                                <v-text-field outlined :readonly="dialog1" v-model="item.calories1" name="name" :label="item.describe1" id="id"></v-text-field>
                            </div>

                        </v-flex>
                        <v-btn large class="rounded-lg mt-4" disabled block color="success">บันทึก</v-btn>
                    </v-card-text>
                </v-flex>
            </v-card>
        </v-tab-item>

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
        informationfarmer: [{
                describe: 'หมายเลขบัตรประจำตัวประชาชน',
                calories: '3560700347135',
            },
            {
                describe: 'อีเมล',
                calories: 'dang',
            },
            {
                describe: 'คำนำหน้า',
                calories: 'นาย',
            },
            {
                describe: 'ชื่อ',
                calories: 'เชิดชู',
            },
            {
                describe: 'นามสกุล',
                calories: 'แก้วบุญเรือง',
            },

            {
                describe: 'เพศ',
                calories: 'ชาย',
            },
            {
                describe: 'อายุ',
                calories: '58',
            },
            {
                describe: 'ที่อยู่ตามทะเบียนบ้าน',
                calories: '4 หมู่ 7 ต.เจริญราษฎร์ อ.แม่ใจ จ.พะเยา 56130',
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
                describe1: 'บ้านเลขที่ ถนน ซอย',
                calories1: 'เชิดชู',
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
    background: rgba(242, 243, 244);
    height: 100%;
    background-position: center;
    background-repeat: repeat;
    background-size: cover;
}
</style>
