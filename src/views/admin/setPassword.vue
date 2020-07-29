<template>
<div class="bg">
    <!-- <Navbar icon="mdi-account-key" name="เกี่ยวกับเกษตรกร" /> -->
    <NavigationAdmin name="เกษตรกร" />

    <v-container>
        <v-text-field class="rounded-lg pt-3" clearable flat hide-details append-icon="mdi-magnify" label="ค้นหา" solo outlined single-line></v-text-field>
        <br>
        <v-btn @click="$router.push('/admin/addfarmer')" block class="rounded-lg" color="success">
            <v-icon>mdi-plus</v-icon>เพิ่มเกษตรกร
        </v-btn>

        <v-card v-for="item in 5" class="elevation-5 rounded-lg pa-3 mt-3">
            <div class="d-flex flex-no-wrap">
                <h4>ข้อมูลเกษตรกร</h4>
            </div>
            <h4>เลขบัตรประชาชน : 1234567890123 </h4>
            <h4>ชื่อ : นายแดง แดงดำ </h4>
            <h4>เบอร์โทรศัพท์ : 0123456789 </h4>
            <h4>ตำบล : แม่กา </h4>
            <h4>อำเภอ : เมือง </h4>
            <h4>จังหวัด : พะเยา </h4>
            <h4>ฟาร์ม : นายแดง </h4>
            <h4>กลุ่มเกษตกร : กลุ่มแม่กา </h4>
            <br>

            <center>
                <v-flex xs12 row wrap>
                    <v-flex xs6>
                        <v-btn outlined dark class="rounded-l-lg width " color="warning" @click="$router.push('/admin/userprofiledetail')">
                            <v-icon>mdi-pencil</v-icon>แก้ไข
                        </v-btn>
                    </v-flex>
                    <v-flex xs6>
                        <v-btn outlined dark class="rounded-r-lg width" color="red" @click="dialog1=false">
                            <v-icon>mdi-delete</v-icon>ลบ
                        </v-btn>
                    </v-flex>
                </v-flex>
            </center>
        </v-card>

        <div class="text-center pt-4">
            <v-pagination color="green" v-model="page" :length="4" prev-icon="mdi-menu-left" next-icon="mdi-menu-right"></v-pagination>
        </div>

    </v-container>
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
    data() {
        return {
            page: 1,
            txt: 'Hello World'

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
