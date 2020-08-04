<template>
<div class="bg">
    <!-- <NavbarAdmin icon="mdi-chevron-left" name="รายงานสรุปจำนวนควายที่มีชีวิต" /> -->
    <!-- <NavigationAdmin name="รายงานความเคลื่อไหนการใช้งาน" /> -->
    <!-- <v-btn class="mb-6" fab @click="$router.push('/admin/report')" small>
            <v-icon class="icon">mdi-chevron-left</v-icon>
        </v-btn> -->
    <v-container>
        <v-row class="d-flex flex-row ">
            <v-btn depressed fab @click="$router.go(-1)" small>
                <v-icon class="icon">mdi-chevron-left</v-icon>
            </v-btn>
            <h2>รายงานความเคลื่อนไหว</h2>
        </v-row>
    </v-container>

    <v-container>

        <h3>จำนวนการกรอกข้อมูลในแต่ละเดือน</h3>
        <v-select solo outlined color="success" class="rounded-lg mt-2 mb-2" :items="province" label="กรุณาเลือกจังหวัด" hide-details></v-select>
        <v-select solo outlined color="success" class="rounded-lg mb-2" :items="district" label="กรุณาเลือกอำเภอ" hide-details></v-select>
        <v-select solo outlined color="success" class="rounded-lg mb-2" :items="place" label="กรุณาเลือกตำบล" hide-details></v-select>
    </v-container>

    <div class="pa-4 mb-15">
        <v-card class="mt-3 pa-4 rounded-lg">
            <v-card-title>
                จำนวนการกรอกข้อมูลในแต่ละเดือน
            </v-card-title>
            <area-chart :colors="['#3399FF']" :data="chartData"></area-chart>
        </v-card>

    </div>

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
    data() {
        return { 
            chartData: {
                '1/7/2020': 140,
                '2/7/2020': 80,
                '3/7/2020': 30,
                '4/7/2020': 50,
                '5/7/2020': 12,
                '6/7/2020': 105,
            },
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
                    text: 'มกราคม'
                },
                {
                    text: 'กุมภาพันธ์'
                },
                {
                    text: 'มีนาคม'
                },
                {
                    text: 'เมษายน'
                },
                {
                    text: 'พฤษภาคม'
                },
                {
                    text: 'มิถุนายน'
                },
                {
                    text: 'สิงหาคม'
                },
                {
                    text: 'กันยายน'
                },
                {
                    text: 'ตุลาคม'
                },
                {
                    text: 'พฤศจิกายน'
                },
                {
                    text: 'ธันวาคม'
                },
            ],
            place: [{
                text: '2563'
            }, ],
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
