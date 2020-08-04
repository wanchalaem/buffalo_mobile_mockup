<template>
<div class="bg">
    <NavigationAdmin name="ผู้ดูแลระบบ" />
    <!-- <NavbarAdmin icon="mdi-chevron-left" name="แก้ไขข้อมูลผู้ดูแลระบบ" /> -->
    <v-container grid-list-xs>
        <v-card class="mx-auto rounded-lg elevation-10" max-width="140">
            <v-img height="160" src="https://cdn-th.tunwalai.net/files/member/139588/1601081451-member.jpg">
            </v-img>
            <v-btn depressed color="success" max-width="140">
                <v-icon>mdi-upload</v-icon>อัพโหลดรูปภาพ
            </v-btn>
        </v-card>
        <br>
    </v-container>

    <v-dialog v-model="dialogname" max-width="500px">
        <v-card>
            <v-card-title>
                ชื่อ-นามสกุล
            </v-card-title>
            <v-card-text>
                <v-text-field color="success" name="name" label="ชื่อ" id="id"></v-text-field>
                <v-text-field color="success" name="name" label="นามสกุล" id="id"></v-text-field>
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

    <v-dialog v-model="dialogemail" max-width="500px">
        <v-card>
            <v-card-title>
                เปลี่ยนอีเมล
            </v-card-title>
            <v-card-text>
                <v-text-field color="success" name="name" label="อีเมล" id="id"></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-btn color="error width" depressed @click="dialogemail = false">
                    ยกเลิก
                </v-btn>
                <v-btn color="success width" depressed @click="dialogemail = false">
                    ตกลง
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>

    <v-dialog v-model="dialogpass" max-width="500px">
        <v-card>
            <v-card-title>
                เปลี่ยนรหัสผ่าน
            </v-card-title>
            <v-card-text>
                <v-text-field color="success" name="name" type="password" label="รหัสผ่านเก่า" id="id"></v-text-field>
                <v-text-field color="success" name="name" type="password" label="รหัสผ่านใหม่" id="id"></v-text-field>
                <v-text-field color="success" name="name" type="password" label="ยืนยันรหัสผ่านใหม่" id="id"></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-btn color="error width" depressed @click="dialogpass = false">
                    ยกเลิก
                </v-btn>
                <v-btn color="success width" depressed @click="dialogpass = false">
                    ตกลง
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>

    <h3 class="text-center"> ข้อมูลส่วนตัว</h3>
    <br>
    <v-card class="pa-3" @click="dialogname = true">
        <v-row>
            <h4 class="pl-4">ชื่อ-นามสกุล</h4>
            <v-spacer></v-spacer>
            <h4 class="pr-4">นายแดง นายแดง </h4>
            <v-icon>mdi-chevron-right</v-icon>
        </v-row>
    </v-card>
    <v-card class="pa-3" disabled>
        <v-row>
            <h4 class="pl-4">ชื่อผู้ใช้งาน</h4>
            <v-spacer></v-spacer>
            <h4 class="pr-4">Dang1234 </h4>
        </v-row>
    </v-card>
    <v-card class="pa-3" @click="dialogemail = true">
        <v-row>
            <h4 class="pl-4">อีเมล</h4>
            <v-spacer></v-spacer>
            <h4 class="pr-4">Dang-dang@gmail.com</h4>
            <v-icon>mdi-chevron-right</v-icon>
        </v-row>
    </v-card>
    <br>
    <h3 class="text-center">ตั้งค่า</h3>
    <br>
    <v-card class="pa-3" @click="dialogpass = true">
        <v-row>
            <h4 class="pl-4">เปลี่ยนรหัสผ่าน</h4>
            <v-spacer></v-spacer>
            <h4 class="pr-4 flex-vertical"></h4>
            <v-icon>mdi-chevron-right</v-icon>
        </v-row>
    </v-card>
    <br>
    <center class="mb-15">
        <v-btn large disabled color="success" block>บันทึก</v-btn>
    </center>
 
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
        dialogname: false,
        dialogemail: false,
        dialogpass: false,
        notifications: false,
        sound: true,
        widgets: false,
        items: [{
                title: 'Click Me',
            },
            {
                title: 'Click Me',
            },
            {
                title: 'Click Me',
            },
            {
                title: 'Click Me 2',
            },
        ],
        select: [{
                text: 'State 1'
            },
            {
                text: 'State 2'
            },
            {
                text: 'State 3'
            },
            {
                text: 'State 4'
            },
            {
                text: 'State 5'
            },
            {
                text: 'State 6'
            },
            {
                text: 'State 7'
            },
        ],
        tab: null,
        search: '',
        // dialog1: true,
        // dialog: false,
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

.width {
    width: 48%;
}
</style>
