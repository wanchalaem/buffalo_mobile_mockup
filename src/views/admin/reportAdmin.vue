<template>
<div class="bg">
    <!-- <Navbar icon="mdi-clipboard-text" name="รายงาน" /> -->
    <NavigationAdmin name="รายงาน" />
    <v-container grid-list-xs>
        <center>
            <v-flex xs12 row wrap>
                <v-flex xs12 row wrap class="ma-3">
                    <v-flex xs12 class="pa-2">
                        <v-hover v-slot:default="{ hover }" close-delay="150" class="lg4 sm6 xs12">

                            <v-card :elevation="hover ? 16 : 2  " @click="$router.push('/admin/reportbuffalo')" class="mx-auto pa-3 rounded-lg">
                                <div class="d-flex grow flex-wrap">
                                    <v-icon dark large class=" info pa-5 rounded-lg" style="max-height: 50px; width: 50px;">mdi-cow</v-icon>
                                    <v-spacer></v-spacer>
                                    <div class="col-ml-6 ">
                                        <div class="ml-auto text-right">
                                            <h4 class="">
                                                รายงานสรุป
                                            </h4>
                                            <h4>
                                                จำนวนควายที่มีชีวิต
                                            </h4>

                                            <v-spacer></v-spacer>
                                        </div>
                                    </div>

                                </div>
                                <!-- </div> -->
                            </v-card>

                        </v-hover>
                    </v-flex>

                    <v-flex xs12 class="pa-2">
                        <v-hover v-slot:default="{ hover }" close-delay="150" class="lg4 sm6 xs12">
                            <v-card @click="$router.push('/admin/reportmap')" :elevation="hover ? 16 : 2  " class="mx-auto pa-3 rounded-lg">
                                <!-- <div class="v-card--material pa-3 v-card--material-stats v-card v-sheet theme--light v-card--material--has-heading"> -->
                                <div class="d-flex grow flex-wrap">
                                    <v-icon dark large class=" indigo pa-5 rounded-lg" style="max-height: 50px; width: 50px;">mdi-map</v-icon>
                                    <v-spacer></v-spacer>
                                    <div class="col-ml-6 ">
                                        <div class="ml-auto text-right">
                                            <h4 class=" ">
                                                รายงาน
                                            </h4>
                                            <h4>
                                                เชิงแผนที่
                                            </h4>

                                            <v-spacer></v-spacer>
                                        </div>
                                    </div>
                                </div>
                                <!-- </div> -->
                            </v-card>
                        </v-hover>
                    </v-flex>

                    <v-flex xs12 class="pa-2">
                        <v-hover v-slot:default="{ hover }" close-delay="150" class="lg4 sm6 xs12">
                            <v-card @click="$router.push('/admin/reportsystem')" :elevation="hover ? 16 : 2  " class="mx-auto pa-3 rounded-lg">
                                <!-- <div class="v-card--material pa-3 v-card--material-stats v-card v-sheet theme--light v-card--material--has-heading"> -->
                                <div class="d-flex grow flex-wrap">
                                    <v-icon dark large class=" success pa-5 rounded-lg" style="max-height: 50px; width: 50px;">mdi-clipboard-flow-outline</v-icon>
                                    <v-spacer></v-spacer>
                                    <div class="col-ml-6 ">
                                        <div class="ml-auto text-right">
                                            <h4 class="">
                                                รายงาน
                                            </h4>
                                            <h4>
                                                ความเคลื่อไหวการใช้งาน
                                            </h4>

                                            <v-spacer></v-spacer>
                                        </div>
                                    </div>
                                </div>
                                <!-- </div> -->
                            </v-card>
                        </v-hover>
                    </v-flex>
                </v-flex>

            </v-flex>
        </center>
    </v-container>
</div>
</template>

<script>
export default {
    name: 'Root',
    /*-------------------------ประกาศ components ---------------------------------------*/
    components: {},
    /*-------------------------รับค่าเมื่อเราเป็น components---------------------------------------*/
    props: {},
    /*-------------------------ประกาศตัวแปรที่ใช้ ผูกกับ v-model ---------------------------------------*/
    data() {
        return {
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
    computed: {},
    /*-------------------------Methods------------------------------------------*/
    methods: {
        /******* Methods default run ******/
        load: async function () {}
    },
}
</script>

<style scoped>
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
