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
                <div class="d-flex flex-no-wrap">
                    <h3>ชื่อหรือหมายเลขควาย : พ่อเปี้ย</h3>
                    <v-spacer></v-spacer>
                    <v-btn color="red" fab depressed x-small dark @click="dialog1=false">
                        <v-icon>mdi-delete</v-icon>
                    </v-btn>
                </div> 
                <h3 class="pt-1 font-weight-light">เบอร์หู : 123</h3>
                <h3 class="pt-1 font-weight-light">อายุ : 4ปี</h3>
                <h3 class="pt-1 font-weight-light">เพศ : ผู้</h3>
                <br>
                <center>
                    <v-flex xs12 row wrap>
                        <v-flex xs12>
                            <v-btn depressed dark class="rounded-lg width " color="warning" @click="$router.push('/user/buffaloinformation')">
                                <v-icon>mdi-pencil</v-icon>แก้ไข
                            </v-btn>
                        </v-flex>
                        <!-- <v-flex xs6>
                            <v-btn dark class="rounded-r-lg width" color="red" @click="dialog1=false">
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
    </div>
    <buttomnavuser/>
</div>
</template>

<script>
import buttomnavuser from '@/components/buttomnavuser'
export default {
    components:{
        buttomnavuser
    },
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
