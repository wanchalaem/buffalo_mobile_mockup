<template>
<div>
    <!-- <Navbar icon="mdi-chevron-left" name="เพิ่มควาย" /> -->
    <Navigation name="เพิ่มควาย" />
    <v-container grid-list-xs>
        <v-btn class="mb-6" fab @click="$router.push('/user/buffalo')" small><v-icon class="icon">mdi-chevron-left</v-icon></v-btn>
        <div v-for="item in desserts" :key="item.name" class="">
            <v-text-field class="rounded-lg" outlined v-model="item.calories" name="name" :label="item.describe" id="id"></v-text-field>
        </div>
        <center>
            <v-flex xs12 row wrap>
                <v-flex xs6 class="pr-2 pb-4">
                    <v-card class="elevation-5 rounded-lg">
                        <v-img src="https://images.pexels.com/photos/1054650/pexels-photo-1054650.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" aspect-ratio="1.7"></v-img>
                        <v-list two-line>
                            <center>
                                <h5>ภาพด้านข้าง</h5>
                            </center>
                        </v-list>
                    </v-card>
                </v-flex>
                <v-flex xs6 class="pl-2">
                    <v-card class="elevation-5 rounded-lg ">
                        <v-img src="https://images.pexels.com/photos/2261770/pexels-photo-2261770.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" aspect-ratio="1.7"></v-img>
                        <v-list two-line>
                            <center>
                                <h5>ภาพด้านหลัง</h5>
                            </center>
                        </v-list>
                    </v-card>
                </v-flex>

                <v-flex xs6 class="pr-2">
                    <v-card class="elevation-5 rounded-lg ">
                        <div class="d-flex flex-no-wrap">
                            <div class="ma-3">
                                <v-icon dark large class="elevation-6 error rounded-lg" style="max-height: auto; width: auto;">mdi-file-pdf-outline</v-icon>
                            </div>
                            <div class="ml-auto text-right " style="margin-right:4px; margin-top:8px;">
                                <h5>
                                    ใบพันธุ์ประวัติอ้างอิง
                                </h5>
                            </div>
                        </div>

                    </v-card>
                </v-flex>

                <v-flex xs6 class="pl-2">
                    <v-card class="elevation-5 rounded-lg ">
                        <div class="d-flex flex-no-wrap">
                            <div class="ma-3">
                                <v-icon dark large class="elevation-6 error rounded-lg" style="max-height: auto; width: auto;">mdi-file-pdf-outline</v-icon>
                            </div>
                            <div class="ml-auto text-right " style="margin-right:4px; margin-top:8px;">
                                <h5>
                                    ใบพันธุ์ประวัติทางการ
                                </h5>
                            </div>
                        </div>

                    </v-card>
                </v-flex>

            </v-flex>
        </center>
        <br>
        <v-btn class="rounded-lg" @click="$router.push('/user/buffalo')" color="green" dark large block>บันทึก</v-btn>
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

<style>
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
