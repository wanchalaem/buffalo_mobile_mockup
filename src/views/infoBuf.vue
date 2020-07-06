<template>
<div class="bg">
    <!-- <Navbar icon="" name="ข้อมูลควาย" /> -->
    <Navigation name="ข้อมูลควาย" />
    <div>
        <v-layout row wrap>
            <v-flex xs12 class="ma-8">
                <div>
                    <v-select block large class="rounded-lg" :items="items" label="มีชีวิตหรือไม่มีชีวิต" solo></v-select>
                </div>
                <v-btn @click="$router.push('/addBuf')" color="green" class="rounded-lg" large block solo medium dark>
                    <h3>เพิ่มควาย</h3>
                </v-btn> 
            </v-flex>
        </v-layout>
    </div>

    <v-tabs grow color="green">
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
                    <v-card @click="$router.push('/infoBuf1')" class="mx-auto rounded-lg" max-width="auto">
                        <h3 class="pa-3">ชื่อหรือหมายเลขควาย: พ่อเปี้ย</h3>
                        <h3 class="pa-3">หมายเลข : NID</h3>
                        <h3 class="pa-3">เพศ : ผู้</h3>
                    </v-card>
                </v-card-text>

                <v-card-text>
                    <v-card @click="$router.push('/infoBuf1')" class="mx-auto rounded-lg" max-width="auto">
                        <h3 class="pa-3">ชื่อหรือหมายเลขควาย : พ่อเปี้ย</h3>
                        <h3 class="pa-3">หมายเลข : NID</h3>
                        <h3 class="pa-3">เพศ : ผู้</h3>
                    </v-card>
                </v-card-text>

                <v-card-text>
                    <v-card @click="$router.push('/infoBuf1')" class="mx-auto rounded-lg" max-width="auto">
                        <h3 class="pa-3">ชื่อหรือหมายเลขควาย : พ่อเปี้ย</h3>
                        <h3 class="pa-3">หมายเลข : NID</h3>
                        <h3 class="pa-3">เพศ : ผู้</h3>
                    </v-card>
                </v-card-text> 
        </v-tab-item>

        <v-tab-item>
            <v-card flat>
                <v-card-text>
                    <v-card @click="$router.push('/infoBuf1')" class="mx-auto rounded-lg" max-width="auto">
                        <h3 class="pa-3">ชื่อหรือหมายเลขควาย : แม่เปี้ย</h3>
                        <h3 class="pa-3">หมายเลข : NID</h3>
                        <h3 class="pa-3">เพศ : เมีย</h3>
                    </v-card>
                </v-card-text>

                <v-card-text>
                    <v-card @click="$router.push('/infoBuf1')" class="mx-auto rounded-lg" max-width="auto">
                        <h3 class="pa-3">ชื่อหรือหมายเลขควาย : แม่เปี้ย</h3>
                        <h3 class="pa-3">หมายเลข : NID</h3>
                        <h3 class="pa-3">เพศ : เมีย</h3>
                    </v-card>
                </v-card-text>

                <v-card-text>
                    <v-card @click="$router.push('/infoBuf1')" class="mx-auto rounded-lg" max-width="auto">
                        <h3 class="pa-3">ชื่อหรือหมายเลขควาย : แม่เปี้ย</h3>
                        <h3 class="pa-3">หมายเลข : NID</h3>
                        <h3 class="pa-3">เพศ : เมีย</h3>
                    </v-card>
                </v-card-text>
            </v-card>
        </v-tab-item>

    </v-tabs>

</div>
</template>

<script>
export default {
    data: () => ({
        items: ['มีชีวิต', 'ไม่มีชีวิต' ],
        dialog1: true,

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
