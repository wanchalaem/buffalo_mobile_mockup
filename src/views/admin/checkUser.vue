<template>
<div class="bg">
    <!-- <Navbar icon="mdi-account-cog" name="สิทธิ์การใช้งาน" /> -->
    <NavigationAdmin name="ผู้ดูแลระบบ" />

    <v-container grid-list-xs>
        <v-container>
            <v-card class="rounded-lg">
                <v-text-field color="success" clearable flat hide-details append-icon="mdi-magnify" label="ค้นหา" outlined single-line class="widths rounded-lg pa-3"></v-text-field>
                <v-btn @click="$router.push('/admin/addadmin')" color="green" class="rounded-lg" large block dark>
                    <v-icon>mdi-plus</v-icon>
                    <h3>เพิ่มผู้ดูแลระบบ</h3>
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
                    <v-img src="https://cdn-th.tunwalai.net/files/member/139588/1601081451-member.jpg" aspect-ratio="2"></v-img>
                    <h3 class="pt-1 font-weight-regular text--primary">ชื่อ-นามสกุล : นายแดง แดงแดง </h3>
                    <h3 class="pt-1 font-weight-light text--secondary">ชื่อผู้ใช้งาน : dang1234 </h3>
                    <h3 class="pt-1 font-weight-light text--secondary">อีเมล : dang@gmail.com </h3>
                    <br>
                    <center>
                        <!-- <v-flex xs12 row wrap>
                            <v-flex xs6>
                                <v-btn depressed dark class="rounded-l-lg width " color="warning" @click="$router.push('/admin/editadmin')">
                                    <v-icon>mdi-pencil</v-icon>แก้ไข
                                </v-btn>
                            </v-flex>
                            <v-flex xs6>
                                <v-btn depressed dark class="rounded-r-lg width" color="" @click="$router.push('/admin/resetpasswordadmin')">
                                    <v-icon>mdi-lock</v-icon>เปลี่ยนรหัสผ่าน
                                </v-btn>
                            </v-flex>
                        </v-flex> -->
                        <v-btn color="warning" class="rounded-lg width" block @click="$router.push('/admin/editadmin')"><v-icon>mdi-pencil</v-icon>แก้ไข</v-btn>
                        <v-divider class="pa-1"></v-divider>
                        <v-btn color="black" dark class="rounded-lg width" block @click="$router.push('/admin/resetpasswordadmin')"><v-icon>mdi-lock</v-icon>เปลี่ยนรหัสผ่าน</v-btn>
                    </center>
                </v-card>
            </v-flex>
        </v-flex>

        <!-- <v-card v-for="item in 5" class="elevation-5 rounded-lg pa-3 mt-3">
            <div class="d-flex flex-no-wrap">
                <h3 class="pt-1 font-weight-regular text--primary">ชื่อ-นามสกุล : นายแดง แดงแดง </h3>
                <v-spacer></v-spacer>
                <v-btn depressed color="red" fab x-small dark @click="dialog1=false">
                    <v-icon>mdi-delete</v-icon>
                </v-btn>
            </div>
            <h3 class="pt-1 font-weight-light text--secondary">ชื่อผู้ใช้งาน : dang1234 </h3>
            <h3 class="pt-1 font-weight-light text--secondary">อีเมล : dang@gmail.com </h3>
            <br>

            <center>
                <v-flex xs12 row wrap>
                    <v-flex xs6>
                        <v-btn depressed dark class="rounded-l-lg width " color="warning" @click="$router.push('/admin/editadmin')">
                            <v-icon>mdi-pencil</v-icon>แก้ไข
                        </v-btn>
                    </v-flex>
                    <v-flex xs6>
                        <v-btn depressed dark class="rounded-r-lg width" color="" @click="$router.push('/admin/resetpasswordadmin')">
                            <v-icon>mdi-lock</v-icon>เปลี่ยนรหัสผ่าน
                        </v-btn>
                    </v-flex>
                </v-flex>
            </center>
        </v-card> -->

        <div class="text-center pt-4">
            <v-pagination v-model="page" color="green" :length="4" prev-icon="mdi-menu-left" next-icon="mdi-menu-right"></v-pagination>
        </div>
        <br><br>
    </v-container>
    <!-- </v-card-text>  -->
    <buttomnav />
</div>
</template>

<script>
import buttomnav from '@/components/admin/buttomnav';
export default {
    name: 'checkUser',
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

.width {
    width: 95%;
}
</style>
