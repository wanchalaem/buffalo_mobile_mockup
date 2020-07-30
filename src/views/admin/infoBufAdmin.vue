<template>
<div class="bg">
    <!-- <NavigationAdmin name="ข้อมูลควาย" /> -->
    <v-container>
        <v-row class="d-flex flex-row ">
            <v-btn depressed small fab @click="$router.push('/admin/userprofiledetail')">
                <v-icon class="icon">mdi-chevron-left</v-icon>
            </v-btn>
            <h2>ข้อมูลควาย</h2>
        </v-row>
    </v-container>
    <div>
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

            <v-btn @click="$router.push('/admin/buffaloadd')" color="green" class="rounded-lg" large block solo medium dark>
                <h3>เพิ่มควาย</h3>
            </v-btn>

            <v-card v-for="item in 5" class="elevation-5 rounded-lg pa-3 mt-3" max-width="auto">
                <!-- <h4 class="pl-4 pt-1">เจ้าของควาย : นายแดง สุขใจ</h4> -->
                <div class="d-flex flex-no-wrap">
                    <h3>เจ้าของควาย : นายแดง สุขใจ</h3>
                    <v-spacer></v-spacer>
                    <v-btn depressed color="red" fab x-small dark @click="dialog1=false">
                        <v-icon>mdi-delete</v-icon>
                    </v-btn>
                </div>
                <h3 class="pt-1 font-weight-regular">ชื่อหรือหมายเลขควาย : พ่อเปี้ย</h3>
                <h3 class="pt-1 font-weight-light">เบอร์หู : 123</h3>
                <h3 class="pt-1 font-weight-light">อายุ : 4ปี</h3>
                <h3 class="pt-1 font-weight-light">เพศ : ผู้</h3>
                <br>
                <center>
                    <v-flex xs12 row wrap>
                        <v-flex xs12>
                            <v-btn depressed dark class="rounded-lg width " color="warning" @click="$router.push('/admin/buffaloinformation')">
                                <v-icon>mdi-pencil</v-icon>แก้ไข
                            </v-btn>
                        </v-flex>
                        <!-- <v-flex xs6>
                            <v-btn outlined dark class="rounded-r-lg width" color="red" @click="dialog1=false">
                                <v-icon>mdi-delete</v-icon>ลบ
                            </v-btn>
                        </v-flex> -->
                    </v-flex>
                </center>
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
        page: 1

    }),

}
</script>

<style>
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
