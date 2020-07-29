<template>
<div class="bg">
    <NavigationAdmin name="ผู้ดูแลระบบ" />
    <!-- <NavbarAdmin icon="mdi-chevron-left" name="แก้ไขข้อมูลผู้ดูแลระบบ" /> -->
    <v-container grid-list-xs>
        <!-- <v-btn class="mb-6" fab @click="$router.push('/admin/adminedit')" small>
            <v-icon class="icon">mdi-chevron-left</v-icon>
        </v-btn> -->
        <v-card class="mx-auto rounded-lg elevation-10" max-width="140">
            <v-img height="160" src="https://cdn-th.tunwalai.net/files/member/139588/1601081451-member.jpg">
            </v-img>
        </v-card>
        <br>
        <center>
            <h3 class="pb-2"> นายแดง เชิดชู </h3>
            <v-btn class="rounded-lg" color="success">อัพโหลดรูปภาพ</v-btn>
        </center>
    </v-container>

    <!-- <v-card class="rounded-lg pa-2"> -->
    <v-tabs grow color="green">
        <v-tab>
            <v-icon>mdi-account-outline</v-icon>
            <h5>ข้อมูลผู้ดูแลระบบ</h5>
        </v-tab>

        <v-tab-item>
            <v-flex xs12>
                <v-flex xs12>
                    <v-card-text>
                        <div class="d-flex grow flex-wrap">
                            <!-- <h3>ข้อมูลผู้ใช้</h3> -->
                            <v-spacer></v-spacer>
                            <div class="col-ml-6 ">
                                <div class="ml-auto text-right">
                                    <v-btn class="rounded-lg mr-2" color="warning" outlined @click="dialog1=false"><v-icon>mdi-pencil</v-icon>แก้ไข
                                    </v-btn>
                                    <!-- <v-btn class="rounded-lg " color="red" outlined @click="dialog1=false">ลบ<v-icon>mdi-delete</v-icon>
                                        </v-btn> -->
                                </div>
                            </div>
                        </div>
                        <br>
                        <v-flex xs12>
                            <!-- <div v-for="item in informationfarmer" :key="item.name">
                                <v-text-field class="rounded-lg" color="green" outlined :readonly="dialog1" v-model="item.calories" name="name" :label="item.describe" id="id"></v-text-field>
                            </div> -->
                            <v-text-field outlined   class="rounded-lg" prepend-inner-icon="mdi-card-account-details-outline" color="green" label="ชื่อ-นามสกุล"></v-text-field>
                        <v-text-field outlined   class="rounded-lg" prepend-inner-icon="mdi-account" color="green" label="ชื่อผู้ใช้งาน"></v-text-field>
                        <v-text-field outlined   class="rounded-lg" prepend-inner-icon="mdi-lock" color="green" type="password" label="รหัสผ่าน"></v-text-field>
                        <v-text-field outlined   class="rounded-lg" prepend-inner-icon="mdi-email" color="green" label="อีเมล"></v-text-field>
                            <v-btn large class="rounded-lg" disabled block color="success">บันทึก</v-btn>
                        </v-flex>
                    </v-card-text>
                </v-flex>
            </v-flex>
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
            'ผู้ดูแลระบบ'
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
            {
                describe: 'ชื่อ-นามสกุล',
                calories: 'นายแดง สุขใจ',
            },
            {
                describe: 'ชื่อผู้ใช้งาน',
                calories: 'dang1234',
            },
            {
                describe: 'รหัสผ่าน',
                calories: '*********',
            },
            {
                describe: 'อีเมล',
                calories: 'dang@gmail.com',
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
