<template>
<div>
    <NavbarAdmin icon="mdi-chevron-left" name="รายงานสรุปจำนวนควายที่มีชีวิต" />

    <center>
        <h4>จำนวนการกรอกข้อมูลในแต่ละเดือน</h4>
    </center>
    <div class="pa-4">
        <v-row>
            <v-flex xs4>
                <v-overflow-btn :items="province" label="กรุณาเลือกจังหวัด" hide-details class="pa-0" outlined></v-overflow-btn>
            </v-flex>
            <v-flex xs4>
                <v-overflow-btn :items="district" label="กรุณาเลือกเดือน" hide-details class="pa-0" outlined></v-overflow-btn>
            </v-flex>
            <v-flex xs4>
                <v-overflow-btn :items="place" label="กรุณาเลือกปี" hide-details class="pa-0" outlined></v-overflow-btn>
            </v-flex>
        </v-row>

    </div>
    <center>
        <h4>จำนวนการกรอกข้อมูลในแต่ละเดือน</h4>
    </center>

    <div class="pa-4">
        <v-card class="mx-auto text-center" color="green" dark max-width="600">
            <v-card-text>
                <v-sheet color="rgba(0, 0, 0, .12)">
                    <v-sparkline :value="value" color="rgba(255, 255, 255, .7)" height="100" padding="24" stroke-linecap="round" smooth>
                        <template v-slot:label="item">
                            ${{ item.value }}
                        </template>
                    </v-sparkline>
                </v-sheet>
            </v-card-text>

            <v-card-text>
                <div class="display-1 font-weight-thin">Sales Last 24h</div>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions class="justify-center">
                <v-btn block text>Go to Report</v-btn>
            </v-card-actions>
        </v-card>
    </div>
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

<style  scoped>

</style>
