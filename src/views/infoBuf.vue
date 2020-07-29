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

            <v-card v-for="item in 5" class="elevation-5 rounded-lg pa-3 mt-3" max-width="auto">
                <!-- <h4 class="pl-4 pt-1">เจ้าของควาย : นายแดง สุขใจ</h4> -->
                <h4 class="pl-4 pt-1">ชื่อหรือหมายเลขควาย : พ่อเปี้ย</h4>
                <h4 class="pl-4 pt-1">เบอร์หู : 123</h4>
                <h4 class="pl-4 pt-1">อายุ : 4ปี</h4>
                <h4 class="pl-4 pt-1 pb-1">เพศ : ผู้</h4>
                <center>
                    <v-flex xs12 row wrap>
                        <v-flex xs6>
                            <v-btn outlined dark class="rounded-l-lg width " color="warning" @click="$router.push('/user/buffaloinformation')">
                                <v-icon>mdi-pencil</v-icon>แก้ไข
                            </v-btn>
                        </v-flex>
                        <v-flex xs6>
                            <v-btn outlined dark class="rounded-r-lg width" color="red" @click="dialog1=false">
                                <v-icon>mdi-delete</v-icon>ลบ
                            </v-btn>
                        </v-flex>
                    </v-flex>
                </center>
            </v-card>

            <div class="text-center pt-4">
                <v-pagination v-model="page" color="green" :length="4" prev-icon="mdi-menu-left" next-icon="mdi-menu-right"></v-pagination>
            </div>

        </v-container>
    </div>
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
