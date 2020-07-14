<template>
<div class="bg">
    <!-- <Navbar icon="" name="ข้อมูลควาย" /> -->
    <Navigation name="ข้อมูลควาย" />
    <div>
        <!-- <v-layout row wrap> -->
        <!-- <v-flex xs12 class="ma-8"> -->
        <v-container>
            <div>
                <v-select block large class="rounded-lg" :items="items" label="มีชีวิตหรือไม่มีชีวิต" solo></v-select>
            </div>

            <center>
                <v-card class="rounded-lg mb-10 pl-6">
                    <v-flex xs12 row wrap>
                        <v-flex xs4>
                            <!-- <v-checkbox v-model="checkbox" :label="`ทั้งหมด: ${checkbox.toString()}`"></v-checkbox> -->
                            <v-checkbox color="green" v-model="checkbox" :label="`ทั้งหมด`"></v-checkbox>
                        </v-flex>
                        <v-flex xs4>
                            <v-checkbox color="green" v-model="checkbox1" :label="`ตัวผู้`"></v-checkbox>
                        </v-flex>
                        <v-flex xs4>
                            <v-checkbox color="green" v-model="checkbox2" :label="`ตัวเมีย`"></v-checkbox>
                        </v-flex>
                    </v-flex>
                </v-card>
            </center>

            <v-btn @click="$router.push('/user/buffaloadd')" color="green" class="rounded-lg" large block solo medium dark>
                <h3>เพิ่มควาย</h3>
            </v-btn>

            <v-card @click="$router.push('/user/buffaloinformation')" class="mx-auto rounded-lg mt-4" max-width="auto">
                <h4 class="pl-4 pt-1">เจ้าของควาย : นายแดง สุขใจ</h4>
                <h4 class="pl-4 pt-1">ชื่อหรือหมายเลขควาย : พ่อเปี้ย</h4>
                <h4 class="pl-4 pt-1">เบอร์หู : 123</h4>
                <h4 class="pl-4 pt-1">พันธุ์ : พื้นเมือง</h4>
                <h4 class="pl-4 pt-1">อายุ : 4ปี</h4>
                <h4 class="pl-4 pt-1 pb-1">เพศ : ผู้</h4>
            </v-card>
            <v-card @click="$router.push('/user/buffaloinformation')" class="mx-auto rounded-lg mt-4" max-width="auto">
                <h4 class="pl-4 pt-1">เจ้าของควาย : นายแดง สุขใจ</h4>
                <h4 class="pl-4 pt-1">ชื่อหรือหมายเลขควาย : พ่อเปี้ย</h4>
                <h4 class="pl-4 pt-1">เบอร์หู : 123</h4>
                <h4 class="pl-4 pt-1">พันธุ์ : พื้นเมือง</h4>
                <h4 class="pl-4 pt-1">อายุ : 4ปี</h4>
                <h4 class="pl-4 pt-1 pb-1">เพศ : ผู้</h4>
            </v-card>
            <v-card @click="$router.push('/user/buffaloinformation')" class="mx-auto rounded-lg mt-4" max-width="auto">
                <h4 class="pl-4 pt-1">เจ้าของควาย : นายแดง สุขใจ</h4>
                <h4 class="pl-4 pt-1">ชื่อหรือหมายเลขควาย : พ่อเปี้ย</h4>
                <h4 class="pl-4 pt-1">เบอร์หู : 123</h4>
                <h4 class="pl-4 pt-1">พันธุ์ : พื้นเมือง</h4>
                <h4 class="pl-4 pt-1">อายุ : 4ปี</h4>
                <h4 class="pl-4 pt-1 pb-1">เพศ : ผู้</h4>
            </v-card>
            <v-card @click="$router.push('/user/buffaloinformation')" class="mx-auto rounded-lg mt-4" max-width="auto">
                <h4 class="pl-4 pt-1">เจ้าของควาย : นายแดง สุขใจ</h4>
                <h4 class="pl-4 pt-1">ชื่อหรือหมายเลขควาย : พ่อเปี้ย</h4>
                <h4 class="pl-4 pt-1">เบอร์หู : 123</h4>
                <h4 class="pl-4 pt-1">พันธุ์ : พื้นเมือง</h4>
                <h4 class="pl-4 pt-1">อายุ : 4ปี</h4>
                <h4 class="pl-4 pt-1 pb-1">เพศ : ผู้</h4>
            </v-card>
            <v-card @click="$router.push('/user/buffaloinformation')" class="mx-auto rounded-lg mt-4" max-width="auto">
                <h4 class="pl-4 pt-1">เจ้าของควาย : นายแดง สุขใจ</h4>
                <h4 class="pl-4 pt-1">ชื่อหรือหมายเลขควาย : พ่อเปี้ย</h4>
                <h4 class="pl-4 pt-1">เบอร์หู : 123</h4>
                <h4 class="pl-4 pt-1">พันธุ์ : พื้นเมือง</h4>
                <h4 class="pl-4 pt-1">อายุ : 4ปี</h4>
                <h4 class="pl-4 pt-1 pb-1">เพศ : ผู้</h4>
            </v-card>

            <div class="text-center pt-4">
                <v-pagination v-model="page" color="green" :length="4" prev-icon="mdi-menu-left" next-icon="mdi-menu-right"></v-pagination>
            </div>

        </v-container>
        <!-- </v-flex> -->
        <!-- </v-layout> -->
    </div>

    <!-- <v-tabs grow color="green">
        <v-tab>
            <v-icon left>mdi-gender-male</v-icon>
            ตัวผู้
        </v-tab>
        <v-tab>
            <v-icon left>mdi-gender-female</v-icon>
            ตัวเมีย
        </v-tab>

        <v-tab-item>
            <v-card-text>
                <v-card @click="$router.push('/user/buffaloinformation')" class="mx-auto rounded-lg" max-width="auto">
                    <h3 class="pa-3">ชื่อหรือหมายเลขควาย: พ่อเปี้ย</h3>
                    <h3 class="pa-3">หมายเลข : NID</h3>
                    <h3 class="pa-3">เพศ : ผู้</h3>
                </v-card>
            </v-card-text>

            <v-card-text>
                <v-card @click="$router.push('/user/buffaloinformation')" class="mx-auto rounded-lg" max-width="auto">
                    <h3 class="pa-3">ชื่อหรือหมายเลขควาย : พ่อเปี้ย</h3>
                    <h3 class="pa-3">หมายเลข : NID</h3>
                    <h3 class="pa-3">เพศ : ผู้</h3>
                </v-card>
            </v-card-text>

            <v-card-text>
                <v-card @click="$router.push('/user/buffaloinformation')" class="mx-auto rounded-lg" max-width="auto">
                    <h3 class="pa-3">ชื่อหรือหมายเลขควาย : พ่อเปี้ย</h3>
                    <h3 class="pa-3">หมายเลข : NID</h3>
                    <h3 class="pa-3">เพศ : ผู้</h3>
                </v-card>
            </v-card-text>
        </v-tab-item>

        <v-tab-item>
            <v-card flat>
                <v-card-text>
                    <v-card @click="$router.push('/user/buffaloinformation')" class="mx-auto rounded-lg" max-width="auto">
                        <h3 class="pa-3">ชื่อหรือหมายเลขควาย : แม่เปี้ย</h3>
                        <h3 class="pa-3">หมายเลข : NID</h3>
                        <h3 class="pa-3">เพศ : เมีย</h3>
                    </v-card>
                </v-card-text>

                <v-card-text>
                    <v-card @click="$router.push('/user/buffaloinformation')" class="mx-auto rounded-lg" max-width="auto">
                        <h3 class="pa-3">ชื่อหรือหมายเลขควาย : แม่เปี้ย</h3>
                        <h3 class="pa-3">หมายเลข : NID</h3>
                        <h3 class="pa-3">เพศ : เมีย</h3>
                    </v-card>
                </v-card-text>

                <v-card-text>
                    <v-card @click="$router.push('/user/buffaloinformation')" class="mx-auto rounded-lg" max-width="auto">
                        <h3 class="pa-3">ชื่อหรือหมายเลขควาย : แม่เปี้ย</h3>
                        <h3 class="pa-3">หมายเลข : NID</h3>
                        <h3 class="pa-3">เพศ : เมีย</h3>
                    </v-card>
                </v-card-text>
            </v-card>
        </v-tab-item>

    </v-tabs> -->

</div>
</template>

<script>
export default {
    data: () => ({
        items: ['มีชีวิต', 'ไม่มีชีวิต'],
        dialog1: true,
        radios: 'ทั้งหมด',
        row: null,
        checkbox: false,
        checkbox1: false,
        checkbox2: false,
        radioGroup: 1,
        switch1: true,
        page:1

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
