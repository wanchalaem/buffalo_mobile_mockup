<template>
<div>

    <Navbar icon="mdi-chevron-left" name="เพิ่มข้อมูลอายุควาย" />
    <v-container grid-list-xs>
        <v-card>
            <v-card-title>
                <h3>อายุควาย</h3>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-text-field class="rounded-lg" outlined label="น้ำหนัก (กิโลกรัม)"></v-text-field>
                    <v-text-field class="rounded-lg" outlined label="ความกว้างรอบอก (เซนติเมตร)"></v-text-field>
                    <v-text-field class="rounded-lg" outlined label="ความยาวลำตัว (เซนติเมตร)"></v-text-field>
                    <v-text-field class="rounded-lg" outlined label="ความสูง (เซนติเมตร)"></v-text-field>
                    <v-select outlined :items="['240วัน', '400วัน', '600วัน']" label="อายุ"></v-select>
                </v-container>
            </v-card-text>
        </v-card>

    </v-container>
    <v-btn @click="$router.push('/infoBuffDetail')" color="teal" dark large block>บันทึก</v-btn>

</div>
</template>

<script>
export default {
    data: () => ({
        desserts: [{
                describe: 'หมายเลขบัตรประชาชนเกษตรกร',
                calories: '',
            },
            {
                describe: 'ชื่อหรือหมายเลขควาย',
                calories: '',
            },
            {
                describe: 'หมายเลข NID',
                calories: ' ',
            },
            {
                describe: 'หมายเลขไมโครชิป',
                calories: ' ',
            },
            {
                describe: 'วัน/เดือน/ปี เกิด',
                calories: ' ',
            },
            {
                describe: 'เพศ',
                calories: '',
            },
            {
                describe: 'อายุ (..ปี..เดือน) ',
                calories: '',
            },
            {
                describe: 'สี',
                calories: '',
            },
            {
                describe: 'แหล่งที่มา ',
                calories: '',
            },
            {
                describe: 'ราคา',
                calories: '',
            },
            {
                describe: 'สถานะควาย',
                calories: '',
            },
            {
                describe: 'ชื่อหรือหมายเลขพ่อ',
                calories: ' ',
            },
            {
                describe: 'หมายเลข NID พ่อ',
                calories: ' ',
            },
            {
                describe: 'หมายเลขไมโครชิปพ่อ',
                calories: ' ',
            },
            {
                describe: 'ชื่อหรือหมายเลขแม่',
                calories: ' ',
            },
            {
                describe: 'หมายเลข NID แม่',
                calories: ' ',
            },
            {
                describe: 'หมายเลขไมโครชิปแม่',
                calories: ' ',
            },
            {
                describe: 'น้ำหนัก (กิโลกรัม)',
                calories: '',
            },
            {
                describe: 'ความกว้างรอบอก (เซนติเมตร)',
                calories: '',
            },
            {
                describe: 'ความยาวลำตัว (เซนติเมตร)',
                calories: '',
            },
            {
                describe: 'ความสูง (เซนติเมตร)',
                calories: '',
            },
        ],

    }),

}
</script>

<style>

</style>
