<template>
<div class="bg">
    <!-- <NavbarAdmin icon="mdi-chevron-left" name="รายงานสรุปจำนวนควายที่มีชีวิต" /> -->
    <!-- <NavigationAdmin name="รายงานสรุปจำนวนควายที่มีชีวิต" />
    <v-btn class="mb-6" fab @click="$router.push('/admin/report')" small>
        <v-icon class="icon">mdi-chevron-left</v-icon>
    </v-btn> -->
    <v-container>
        <v-row class="d-flex flex-row ">
            <v-btn depressed fab @click="$router.go(-1)" small>
                <v-icon class="icon">mdi-chevron-left</v-icon>
            </v-btn>
            <h2>รายงานสรุปจำนวนควาย</h2>
        </v-row>
    </v-container>
    <v-container>
        <v-select solo outlined class="rounded-lg mt-2 mb-2" :items="province" label="กรุณาเลือกจังหวัด" hide-details></v-select>
        <v-select solo outlined class="rounded-lg mb-2" :items="district" label="กรุณาเลือกอำเภอ" hide-details></v-select>
        <v-select solo outlined class="rounded-lg mb-2" :items="place" label="กรุณาเลือกตำบล" hide-details></v-select>
        <v-select solo outlined class="rounded-lg mb-2" :items="farm" label="กรุณาเลือกฟาร์ม" hide-details></v-select>
    </v-container>

    <v-container grid-list-xs>
        <v-card class="rounded-lg">
            <div class="d-flex flex-no-wrap ma-4">
                <div class="ma-3">
                    <h4>ชื่อฟาร์ม : สวัสดิ์ฟาร์ม </h4>
                    <h4>กลุ่มเกษตกร : แม่ใจ</h4>
                    <h4>จังหวัด : พะเยา</h4>
                    <h4>อำเภอ : เมือง</h4>
                    <h4>ตำบล : แม่กา</h4>
                    <h4>จำนวนควายทั้งหมด : 30 ตัว</h4>
                </div>
            </div>
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

            province: [{
                    text: 'พะเยา'
                },
                {
                    text: 'เชียงราย'
                },
                {
                    text: 'แพร่'
                },
                {
                    text: 'น่าน'
                },
            ],
            district: [{
                    text: 'พะเยา'
                },
                {
                    text: 'เชียงราย'
                },
                {
                    text: 'แพร่'
                },
                {
                    text: 'น่าน'
                },
            ],
            place: [{
                    text: 'ปัว'
                },
                {
                    text: 'แงง'
                },
                {
                    text: 'สถาน'
                },
                {
                    text: 'ศิลาแลง'
                },
                {
                    text: 'ศิลาเพชร'
                },
                {
                    text: 'อวน'
                },
                {
                    text: 'ไชยวัฒนา'
                },
                {
                    text: 'เจดีย์ชัย'
                },
                {
                    text: 'ภูคา'
                },
                {
                    text: 'สกาด'
                },
                {
                    text: 'ป่ากลาง'
                },
                {
                    text: '	วรนคร'
                },
            ],
            farm: [{
                    text: 'เชียงกลาง'
                },
                {
                    text: 'ท่าวังผา'
                },
                {
                    text: 'ทุ่งช้าง'
                },
                {
                    text: 'นาน้อย'
                },
                {
                    text: 'บ่อเกลือ'
                },
                {
                    text: 'นาน้อย'
                },
                {
                    text: 'บ้านหลวง'
                },
                {
                    text: 'ปัว'
                },
                {
                    text: 'ภูเพียง'
                },
                {
                    text: 'แม่จริม'
                },
                {
                    text: 'เมืองน่าน'
                },
                {
                    text: 'เวียงสา'
                },
                {
                    text: 'สองแคว'
                },
                {
                    text: 'สันติสุข'
                },
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
</style>
