<template>
<div class="bg">
    <!-- <Navbar icon="mdi-account-cog" name="สิทธิ์การใช้งาน" /> -->
    <NavigationAdmin name="สิทธิ์การใช้งาน" />

    <v-container grid-list-xs>
        <v-text-field clearable flat hide-details append-icon="mdi-magnify" label="ค้นหา" solo outlined single-line class="widths rounded-lg pa-1"></v-text-field>
    </v-container> 

    <v-container grid-list-xs class="pd-2">
        <v-card class="rounded-lg">
            <v-flex xs12 row wrap>
                <v-flex xs12>
                    <v-card-text>
                        <v-flex xs12>
                            <div class="d-flex flex-no-wrap">
                                <div class="ma-3">
                                    <h4>ผู้ดูแลระบบ</h4>
                                </div>
                                <v-spacer></v-spacer>
                                <div class="col-ml-6">
                                    <div class="ml-auto text-right">
                                        <v-btn text class="rounded-lg " color="green" outlined @click="$router.push('/adminDetail')">
                                            แก้ไข<v-icon>mdi-pencil</v-icon>
                                        </v-btn>
                                        <v-btn text class="rounded-lg " color="red" outlined @click="dialog1=false">
                                            ลบ<v-icon>mdi-delete</v-icon>
                                        </v-btn>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex flex-no-wrap">
                                <div class="ma-3">
                                    <h3>ชื่อ : นายแดง แดงแดง </h3>
                                    <h3>อีเมล์ : dang@gmail.com </h3>
                                    <h3>ชื่อผู้ใช้งาน : admin </h3>
                                    <h3>สิทธิ์ : ผู้ดูแลระบบ</h3>
                                </div>
                            </div>
                        </v-flex>
                    </v-card-text>
                </v-flex>

            </v-flex>

        </v-card>
    </v-container>
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

<style scoped>
.bg {
    background: rgba(242, 243, 244);
    height: 100%;
    background-position: center;
    background-repeat: repeat;
    background-size: cover;
}
</style>
