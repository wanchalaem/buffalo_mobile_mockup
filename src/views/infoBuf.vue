<template>
<div class="bg">
    <Navigation name="ข้อมูลควาย" />
    <div>
        <v-container>
            <v-container>
                <v-card class="rounded-lg ">
                    <div>
                        <v-select block large class="rounded-lg pa-2" color="green" :items="items" label="มีชีวิต,ไม่มีชีวิต" solo></v-select>
                    </div>
                    <v-radio-group class="pa-2" v-model="radios" :mandatory="false" :row="row">
                        <v-layout row wrap :class="`d-flex justify-space-around`">
                            <v-radio color="success" label="ทั้งหมด" value="ทั้งหมด"></v-radio>
                            <v-radio color="success" label="ตัวผู้" value="ตัวผู้"></v-radio>
                            <v-radio color="success" label="ตัวเมีย" value="ตัวเมีย"></v-radio>
                        </v-layout>
                        <center>
                            <p class="d-block pa-2 deep-purple accent-4 white--text rounded-lg">{{ radios || 'null' }}</p>
                        </center>
                    </v-radio-group>
                    <v-btn @click="$router.push('/user/buffaloadd')" color="green" class="rounded-lg deep-purple accent-4" block dark>
                        <h3>เพิ่มควาย</h3>
                    </v-btn>
                </v-card>
            </v-container>

            <v-flex xs12 row wrap>
                <v-flex xs6 v-for="item in 6">
                    <v-card class="rounded-lg pa-3 ml-6 mb-4">
                        <div class="d-flex flex-no-wrap mb-2">
                            <v-spacer></v-spacer>
                            <v-btn color="red" fab depressed x-small dark @click="dialog1=false">
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                        </div>
                        <v-img src="https://images.pexels.com/photos/1054650/pexels-photo-1054650.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" aspect-ratio="2"></v-img>
                        <h3 class="pt-2">ชื่อควาย : พ่อเปี้ย</h3>
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
                            </v-flex>
                        </center>
                    </v-card>
                </v-flex>
            </v-flex>

            <div class="text-center pt-4">
                <v-pagination v-model="page" color="green" :length="4" prev-icon="mdi-menu-left" next-icon="mdi-menu-right"></v-pagination>
            </div>

            <br><br><br>
        </v-container>
    </div>
    <buttomnavuser />
</div>
</template>

<script>
import buttomnavuser from '@/components/buttomnavuser'
export default {
    components: {
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
        page: 1,

        model: null,

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
