<template>
<div class="bg">
    <!-- <Navbar icon="mdi-account-cog" name="สิทธิ์การใช้งาน" /> -->
    <NavigationAdmin name="ผู้ดูแลระบบ" />

    <v-container grid-list-xs>
        <v-text-field clearable flat hide-details append-icon="mdi-magnify" label="ค้นหา" solo outlined single-line class="widths rounded-lg pt-3"></v-text-field>

        <br>
        <v-btn @click="$router.push('/admin/addadmin')" color="green" class="rounded-lg" large block dark>
            <h3>เพิ่มผู้ดูแลระบบ</h3>
        </v-btn>
        <br>
        <!-- <v-container> -->
        <!-- <v-card flat class="rounded-lg"> -->
        <!-- <v-card-text> -->
        <v-card class="elevation-5 rounded-lg pa-3">
            <div class="d-flex flex-no-wrap">
                <h4>ผู้ดูแลระบบ</h4>
            </div>
            <h4>ชื่อ-นามสกุล : นายแดง แดงแดง </h4>
            <h4>ชื่อผู้ใช้งาน : dang1234 </h4>
            <h4>อีเมล : dang@gmail.com </h4>
            <!-- <h3>สิทธิ์ : ผู้ดูแลระบบ</h3> -->
            <br>
            <center>
                <v-flex xs12 row wrap>
                    <v-flex xs6>
                        <v-btn outlined  dark class="rounded-l-lg width " color="green" @click="$router.push('/admin/admindetail')">
                            <v-icon>mdi-pencil</v-icon>แก้ไข
                        </v-btn>
                    </v-flex>
                    <v-flex xs6>
                        <v-btn outlined  dark class="rounded-r-lg width" color="red" @click="dialog1=false">
                            <v-icon>mdi-delete</v-icon>ลบ
                        </v-btn>
                    </v-flex>
                </v-flex>
            </center>
        </v-card>

    </v-container>
    <!-- </v-card-text>  -->
</div>
</template>

<script>
export default {
    name: 'checkUser',
    /*-------------------------ประกาศ components ---------------------------------------*/
    components: {

    },
    /*-------------------------รับค่าเมื่อเราเป็น components---------------------------------------*/
    props: {

    },
    /*-------------------------ประกาศตัวแปรที่ใช้ ผูกกับ v-model ---------------------------------------*/
    data() {
        return {
            dialog: false,
            value: [
                423,
                446,
                675,
                510,
                590,
                610,
                760,
            ],
        };
    },
    /*------------------------- สิ่งทที่อยู่ในนี้จะถูกรัยเมื่อโหลด ------------------------------------------*/
    mounted: async function () {
        /**** เรียกใช้ methods ชื่อ load() */
        await this.load();
    },
    /*------------------------- กระทำการตอน router ถูกโหลดเข้ามา------------------------------------------*/
    async beforeRouteEnter(to, from, next) {
        next()
    },
    /*-------------------------ใช้จัดการ operation  หรือ คำนวณค่าต่างๆ (คล้าย methods)------------------------------------------*/
    computed: {

    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        /******* Methods default run ******/
        load: async function () {}
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
