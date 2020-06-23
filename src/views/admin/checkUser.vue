<template>
<div>
    <Navbar icon="mdi-account-cog" name="สิทธิ์การใช้งาน" />
    <div class="pa-6">
        <v-layout row wrap>
            <v-flex xs12>
                <v-card class="ma-2">
                    <div class="d-flex flex-no-wrap">
                        <div class="ma-3">
                            <h3>รายละเอียดผู้ดูแลระบบ</h3>
                        </div>

                        <div class="ml-auto text-right" style="margin-right: 4px;">
                            <v-row justify="center">
                                <v-dialog v-model="dialog" persistent max-width="600px">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn dark v-bind="attrs" v-on="on">
                                            <v-icon @click="dialog=false">mdi-pencil</v-icon>
                                        </v-btn>
                                    </template>
                                    <v-card>
                                        <v-card-title>
                                            <span class="headline">User Profile</span>
                                        </v-card-title>
                                        <v-card-text>
                                            <v-container>
                                                <v-row>
                                                    <v-col cols="12" sm="6" md="4">
                                                        <v-text-field outlined label="ชื่อ" ></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="6" md="4">
                                                        <v-text-field outlined label="อีเมล"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="6" md="4">
                                                        <v-text-field outlined label="ชื่อผู้ใช้งาน" ></v-text-field>
                                                    </v-col>
                                                </v-row>
                                            </v-container>
                                        </v-card-text>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                                            <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </v-row>
                            <!-- <h5 class="body-3 grey--text font-weight-light">
                                    <v-icon @click="dialog=false">mdi-pencil</v-icon>
                                    <v-icon>mdi-delete</v-icon>
                                </h5> -->
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
                </v-card>
            </v-flex>
        </v-layout>
    </div>
    <NavigationAdmin/>
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
