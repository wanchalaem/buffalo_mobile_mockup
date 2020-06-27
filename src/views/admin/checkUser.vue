<template>
<div>
    <Navbar icon="mdi-account-cog" name="สิทธิ์การใช้งาน" />
    <v-flex xs12>
        <v-toolbar-title>
            <center>
                <v-text-field clearable flat hide-details append-icon="mdi-magnify" label="ค้นหา" outlined single-line class="widths rounded-lg pa-1"></v-text-field>
            </center>
        </v-toolbar-title>
    </v-flex>
    <v-card class="rounded-lg pa-2">
        <v-tabs grow>
            <v-tab>
                <v-icon>mdi-account-outline</v-icon>
                <h5>ข้อมูลเกษตกร</h5>
            </v-tab>
            <v-tab>
                <v-icon dark>mdi-file-outline</v-icon>
                <h5>ข้อมูลฟาร์ม</h5>
            </v-tab>

            <v-tab-item>
                <v-flex xs12 row wrap>
                    <v-flex xs12>
                        <v-card-text>
                            <v-flex xs12>
                                <div class="d-flex flex-no-wrap">
                                    <div class="ma-3">
                                        <h4>รายละเอียดผู้ดูแลระบบ</h4>
                                    </div>
                                    <v-spacer></v-spacer>
                                    <div class="col-ml-6 ">
                                        <div class="ml-auto text-right">
                                            <v-btn text class="rounded-lg " color="teal" outlined @click="$router.push('/adminDetail')">
                                                <v-icon>mdi-pencil</v-icon>
                                            </v-btn>
                                            <v-btn text class="rounded-lg " color="red" outlined @click="dialog1=false">
                                                <v-icon>mdi-delete</v-icon>
                                            </v-btn>
                                        </div>
                                    </div>
                                </div>
                                <v-spacer></v-spacer>
                                <div class="d-flex flex-no-wrap ">
                                    <div class="ma-3">
                                        <h4>ชื่อ : นายแดง แดงแดง </h4>
                                        <h4>อีเมล์ : dang@gmail.com </h4>
                                        <h4>ชื่อผู้ใช้งาน : admin </h4>
                                        <h4>สิทธิ์ : ผู้ดูแลระบบ</h4>
                                    </div>

                                </div>
                                <hr>
                            </v-flex>
                        </v-card-text>
                    </v-flex>

                </v-flex>

            </v-tab-item>
            <v-tab-item>
                <v-flex xs12 row wrap>
                    <v-flex xs12>
                        <v-card-text>
                            <v-flex xs12>
                                <div class="d-flex flex-no-wrap">
                                    <div class="ma-3">
                                        <h4>รายละเอียดเกษตรกร</h4>
                                    </div>
                                    <v-spacer></v-spacer>
                                    <div class="col-ml-6 ">
                                        <div class="ml-auto text-right">
                                            <v-btn text class="rounded-lg " color="teal" outlined @click="$router.push('/setDetail')">
                                                <v-icon>mdi-pencil</v-icon>
                                            </v-btn>
                                            <v-btn text class="rounded-lg " color="red" outlined @click="dialog1=false">
                                                <v-icon>mdi-delete</v-icon>
                                            </v-btn>
                                        </div>
                                    </div>
                                </div>
                                <v-spacer></v-spacer>
                                <div class="d-flex flex-no-wrap ">
                                    <div class="ma-3">
                                        <h4>หมายเลขบัตรประจำตัวประชาชน : 3354795548125 </h4>
                                        <h4>ชื่อ : นายแดง เชิดชู </h4>
                                        <h4>อีเมล์ : chu@gmail.com </h4>
                                        <h4>กลุ่มผู้ใช้งาน : แม่ใจ </h4>
                                        <h4>สิทธิ์ : เกษตรกร</h4>
                                    </div>

                                </div>
                                <hr>
                            </v-flex>
                        </v-card-text>
                    </v-flex>

                </v-flex>

            </v-tab-item>

            <v-tab-item>
                <v-card flat background-color="transparent" color="basil">
                    <v-flex xs12>
                        <v-card-text>
                            <div class="d-flex grow flex-wrap">

                            </div>

                            <div>
                                <h6>สภาพฟาร์ม</h6>
                                <center>
                                    <v-img class="rounded-lg elevation-5" height="200" width="auto" src="https://images.pexels.com/photos/158179/lake-constance-sheep-pasture-sheep-blue-158179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                                    </v-img>
                                </center>
                            </div>
                            <br>
                            <v-flex xs12>
                                <div v-for="item in informationfarm1" :key="item.name">
                                    <v-text-field outlined :readonly="dialog1" v-model="item.calories1" name="name" :label="item.describe1" id="id"></v-text-field>
                                </div>

                            </v-flex>
                        </v-card-text>
                    </v-flex>
                </v-card>
            </v-tab-item>

        </v-tabs>
    </v-card><br><br><br><br><br><br><br><br><br>
    <NavigationAdmin />
</div>
</template>

<script>
export default {
    name: 'checkUser',
    /*-------------------------ประกาศ components ---------------------------------------*/
    components: {

    },
    /*-------------------------รับค่าเมื่อเราเป็น components---------------------------------------*/
    props: {

    },
    /*-------------------------ประกาศตัวแปรที่ใช้ ผูกกับ v-model ---------------------------------------*/
    data() {
        return {
            dialog: false,
            value: [
                423,
                446,
                675,
                510,
                590,
                610,
                760,
            ],
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

<style  scoped>

</style>
