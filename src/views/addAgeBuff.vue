<template>
<div>

    <!-- <Navbar icon="mdi-chevron-left" name="เพิ่มข้อมูลอายุควาย" /> -->
    <!-- <Navigation name="" /> -->
    <v-container>
        <v-row class="d-flex flex-row ">
            <v-btn color="white" depressed fab @click="$router.go(-1)" small>
                <v-icon class="icon">mdi-chevron-left</v-icon>
            </v-btn>
            <h2>เพิ่มข้อมูลอายุควาย</h2>
        </v-row>
    </v-container>
    
    <v-container grid-list-xs>
        <!-- <v-btn class="mb-6" fab @click="$router.push('/user/buffaloinformation')" small><v-icon class="icon">mdi-chevron-left</v-icon></v-btn> -->
            <!-- <v-btn class="mb-6" fab @click="$router.go(-1)" small><v-icon class="icon">mdi-chevron-left</v-icon></v-btn> -->
            <!-- <v-card-text> -->
                <!-- <v-container> -->
                    <v-text-field color="green" type="number" class="rounded-lg" prepend-inner-icon="mdi-weight-kilogram" outlined label="น้ำหนัก (กิโลกรัม)"></v-text-field>
                    <v-text-field color="green" type="number" class="rounded-lg" prepend-inner-icon="mdi-arrow-left-right" outlined label="ความกว้างรอบอก (เซนติเมตร)"></v-text-field>
                    <v-text-field color="green" type="number" class="rounded-lg" prepend-inner-icon="mdi-arrow-left-right" outlined label="ความยาวลำตัว (เซนติเมตร)"></v-text-field>
                    <v-text-field color="green" type="number" class="rounded-lg" prepend-inner-icon="mdi-human-male-height-variant"  outlined label="ความสูง (เซนติเมตร)"></v-text-field>
                    <v-select color="green" class="rounded-lg" prepend-inner-icon="mdi-account-clock-outline" outlined :items="['240วัน', '400วัน', '600วัน']" label="อายุ"></v-select>
                    <v-btn @click="$router.push('/user/buffaloinformation')" class="rounded-lg" color="green" dark large block>บันทึก</v-btn>
                <!-- </v-container> -->
            <!-- </v-card-text>  -->

    </v-container>
    

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

<style scope>
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
