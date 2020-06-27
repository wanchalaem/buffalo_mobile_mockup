<template>
<div class="bg">
    <Navbar icon="mdi-account-group" name="เกี่ยวกับผู้ใช้งาน" />
    <v-container grid-list-xs>
        <center>
            <v-flex xs12 row wrap>
                <v-flex xs12 row wrap class="ma-3">
                    <v-flex xs12 class="pa-4">
                        <v-hover v-slot:default="{ hover }" close-delay="150" class="lg4 sm6 xs12">

                            <v-card @click="$router.push('/setFarmerDetail')" :elevation="hover ? 16 : 2  " class="mx-auto pa-3 rounded-lg">
                                <!-- <div class="v-card--material pa-3 v-card--material-stats v-card v-sheet theme--light v-card--material--has-heading"> -->
                                <div class="d-flex grow flex-wrap">
                                    <v-icon dark large class=" info pa-5 rounded-lg" style="max-height: 50px; width: 50px;">mdi-account-multiple</v-icon>
                                    <v-spacer></v-spacer>
                                    <div class="col-ml-6 ">
                                        <div class="ml-auto text-right">
                                            <div class="body-3 grey--text font-weight-light">
                                                ตั้งค่ารหัสผ่าน
                                            </div>
                                            
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
                            <v-card @click="$router.push('/setDetail')" :elevation="hover ? 16 : 2  " class="mx-auto pa-3 rounded-lg">
                                <!-- <div class="v-card--material pa-3 v-card--material-stats v-card v-sheet theme--light v-card--material--has-heading"> -->
                                <div class="d-flex grow flex-wrap">
                                    <v-icon dark large class=" indigo pa-5 rounded-lg" style="max-height: 50px; width: 50px;">mdi-account-clock</v-icon>
                                    <v-spacer></v-spacer>
                                    <div class="col-ml-6 ">
                                        <div class="ml-auto text-right">
                                            <div class="body-3 grey--text font-weight-light">
                                                ข้อมูลผู้ใช้
                                            </div>
                                            
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
    <NavigationAdmin/>
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

<style  scoped>
</style>
