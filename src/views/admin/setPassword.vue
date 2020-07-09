<template>
<div class="bg">
    <!-- <Navbar icon="mdi-account-key" name="เกี่ยวกับเกษตรกร" /> -->
    <NavigationAdmin name="เกษตรกร" />

    <v-container>
        <v-text-field class="rounded-lg pt-3" clearable flat hide-details append-icon="mdi-magnify" label="ค้นหา" solo outlined single-line></v-text-field>
        <br>
        
        <v-card class="elevation-5 rounded-lg pa-3">
            <div class="d-flex flex-no-wrap">
                <h4>ข้อมูลเกษตรกร</h4>
            </div>
            <h4>ชื่อ : นายแดง แดงแดง </h4>
            <h4>อีเมล์ : dang@gmail.com </h4>
            <h4>กลุ่มผู้ใช้ : แม่ใจ </h4>
            <br>

            <center>
                <v-flex xs12 row wrap>
                    <v-flex xs6>
                        <v-btn outlined  dark class="rounded-l-lg width " color="green" @click="$router.push('/admin/userprofiledetail')">
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
