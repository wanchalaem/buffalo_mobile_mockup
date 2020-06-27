<template>
<div>
    <NavbarAdmin icon="mdi-chevron-left" name="รายงานสรุปจำนวนควายที่มีชีวิต" />
<v-flex xs10 pa-3>
    <div class="pa-4">
        <v-row>
            <v-flex xs6>
                <v-overflow-btn :items="province" label="กรุณาเลือกจังหวัด" hide-details class="pa-0" outlined></v-overflow-btn>
            </v-flex>
            <v-flex xs6>
                <v-overflow-btn :items="district" label="กรุณาเลือกอำเภอ" hide-details class="pa-0" outlined></v-overflow-btn>
            </v-flex>
            <v-flex xs6>
                <v-overflow-btn :items="place" label="กรุณาเลือกตำบล" hide-details class="pa-0" outlined></v-overflow-btn>
            </v-flex>
            <v-flex xs6>
                <v-overflow-btn :items="farm" label="กรุณาเลือกฟาร์ม" hide-details class="pa-0" outlined></v-overflow-btn>
            </v-flex>
        </v-row>

    </div>
    <v-card class="ma-2">
        <div class="d-flex flex-no-wrap">
            <div class="ma-3">
                <h3>รายละเอียด</h3>
            </div>
            <!-- <div class="ml-auto text-right" style="margin-right: 4px;">
                <h5 class="body-3 grey--text font-weight-light">
                    <v-icon @click="dialog=false">mdi-pencil</v-icon>
                    <v-icon>mdi-delete</v-icon>
                </h5>
            </div> -->
        </div>
        <v-spacer></v-spacer>

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
</v-flex>
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

<style  scoped>

</style>
