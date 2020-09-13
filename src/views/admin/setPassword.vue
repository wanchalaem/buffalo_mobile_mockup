<template>
<div class="bg">
    <NavigationAdmin name="เกษตรกร" />
    <v-container>
        <v-container>
            <v-card class="rounded-lg">
                <v-text-field class="rounded-lg pa-3" clearable flat hide-details append-icon="mdi-magnify" label="ค้นหา" solo outlined single-line></v-text-field>
                <v-btn @click="$router.push('/admin/addfarmer')" block large class="rounded-lg" color="success">
                    <v-icon>mdi-plus</v-icon>เพิ่มเกษตรกร
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
                    <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg" aspect-ratio="2"></v-img>
                    <h3 class="pt-1 font-weight-regular text--primary">ชื่อ : นายแดง แดงดำ </h3>
                    <h3 class="pt-1 font-weight-light text--secondary">เบอร์โทรศัพท์ : 0123456789 </h3>
                    <h3 class="pt-1 font-weight-light text--secondary">จังหวัด : พะเยา </h3>
                    <h3 class="pt-1 font-weight-light text--secondary">ฟาร์ม : นายแดง </h3>
                    <br>
                    <center>
                        <v-flex xs12 row wrap>
                            <v-flex xs12>
                                <v-btn depressed dark class="rounded-lg width " color="warning" @click="$router.push('/admin/userprofiledetail')">
                                    <v-icon>mdi-pencil</v-icon>แก้ไข
                                </v-btn>
                            </v-flex>
                        </v-flex>
                    </center>
                </v-card>
            </v-flex>
        </v-flex>

        <!-- <v-card v-for="item in 5" class="elevation-5 rounded-lg pa-3 mt-3">
            <div class="d-flex flex-no-wrap">
                <h3 class="pt-1 font-weight-regular text--primary">ชื่อ : นายแดง แดงดำ </h3>
                <v-spacer></v-spacer>
                <v-btn depressed color="red" fab small dark @click="dialog1=false">
                    <v-icon>mdi-delete</v-icon>
                </v-btn>
            </div>
            <h3 class="pt-1 font-weight-light text--secondary">เบอร์โทรศัพท์ : 0123456789 </h3>
            <h3 class="pt-1 font-weight-light text--secondary">จังหวัด : พะเยา </h3>
            <h3 class="pt-1 font-weight-light text--secondary">ฟาร์ม : นายแดง </h3>
            <br>

            <center>
                <v-flex xs12 row wrap>
                    <v-flex xs12>
                        <v-btn depressed dark class="rounded-lg width" color="warning" @click="$router.push('/admin/userprofiledetail')">
                            <v-icon>mdi-pencil</v-icon>แก้ไข
                        </v-btn>
                    </v-flex> 
                </v-flex>
            </center>
        </v-card> -->

        <div class="text-center pt-4">
            <v-pagination color="green" v-model="page" :length="4" prev-icon="mdi-menu-left" next-icon="mdi-menu-right"></v-pagination>
        </div>
        <br><br><br>
    </v-container>

    <buttomnav />
</div>
</template>

<script>
import buttomnav from '@/components/admin/buttomnav';
export default {
    name: 'Root',
    /*-------------------------ประกาศ components ---------------------------------------*/
    components: {
        buttomnav
    },
    /*-------------------------รับค่าเมื่อเราเป็น components---------------------------------------*/
    props: {

    },
    /*-------------------------ประกาศตัวแปรที่ใช้ ผูกกับ v-model ---------------------------------------*/
    data() {
        return {
            page: 1,
            txt: 'Hello World'

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

<style scoped>
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
