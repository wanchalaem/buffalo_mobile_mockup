<template>
<div class="bg">
    <!-- <Navbar icon="mdi-account-key" name="เกี่ยวกับเกษตรกร" /> -->
    <NavigationAdmin name="เกษตรกร"/>

    <v-container>
        <v-text-field class="rounded-lg pt-3" clearable flat hide-details append-icon="mdi-magnify" label="ค้นหา" solo outlined single-line></v-text-field>
    </v-container>

    <v-container>
        <v-card class="rounded-lg pa-2">
            <v-flex xs12 row wrap>
                <v-flex xs12>
                    <div class="d-flex flex-no-wrap">
                        <div class="ml-6 ma-2s">
                            <h3>ข้อมูลเกษตรกร</h3>
                        </div>
                    </div>
                </v-flex>

                <div class="d-flex flex-no-wrap">
                    <div class="ml-9">
                        <h3>ชื่อ : นายแดง แดงแดง </h3>
                            <h3>อีเมล์ : dang@gmail.com </h3>
                            <h3>กลุ่มผู้ใช้ : แม่ใจ </h3>
                        <br>
                    </div>
                </div>
                <v-btn block dark class="ml-3 rounded-lg" medium color="green" @click="$router.push('/setDetail')">
                    <h4>แก้ไข</h4><v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn block dark class="ml-3 rounded-lg" medium color="red" @click="dialog1=false">
                    <h4>ลบ</h4><v-icon>mdi-delete</v-icon>
                </v-btn>
            </v-flex>
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
</style>
