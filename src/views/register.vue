<template>
<v-app id="inspire">
    <v-main class="bg">
        <v-container class="fill-height" fluid>
            <v-btn fab @click="$router.push('/')" small><v-icon class="icon">mdi-chevron-left</v-icon></v-btn>
            <v-row align="center" justify="center">
                <v-col cols="10" sm="8" md="4">
                    
                    <div class="text-center">
                        <!-- <img style="width:50%;" src="https://www.img.in.th/images/baec9e10112fc5b2253841c3099c9e42.png" alt=""> -->
                        <h2 class="fcw">สมัครสมาชิก</h2>
                    </div>
                    <br>
                    <div color="white">
                        <hr><br>
                    </div>
                    <v-form>
                        <v-text-field class="rounded-lg" solo label="ชื่อผู้ใช้งาน" prepend-inner-icon="mdi-account-star"></v-text-field>
                        <v-text-field class="rounded-lg" solo label="รหัสผ่าน" prepend-inner-icon="mdi-lock" type="password"></v-text-field>
                        <v-text-field class="rounded-lg" solo label="ยืนยันรหัสผ่าน" prepend-inner-icon="mdi-lock" type="password"></v-text-field>
                        <v-text-field class="rounded-lg" solo label="ชื่อ" prepend-inner-icon="mdi-account" type="text"></v-text-field>
                        <v-text-field class="rounded-lg" solo label="นามสกุล" prepend-inner-icon="mdi-account"></v-text-field> 
                    </v-form>

                    <v-spacer></v-spacer>
                    <v-btn solo dark class="width rounded-lg" @click="$router.push('/')" large color="green">สมัครสมาชิก</v-btn>

                </v-col>
            </v-row>
        </v-container>
    </v-main>
</v-app>
</template>

<script>
export default {
    name: 'Root',
    /*-------------------------ประกาศ components ---------------------------------------*/
    components: {

    },
    /*-------------------------รับค่าเมื่อเราเป็น components---------------------------------------*/
    props: {

    },
    /*-------------------------ประกาศตัวแปรที่ใช้ ผูกกับ v-model ---------------------------------------*/
    data() {
        return {

            txt: 'Hello World',
            province: [
                'พะเยา'
            ],
            district: [
                'เมือง'
            ],
            place: [
                'แม่กา'
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
    background: #000000 url(https://www.img.in.th/images/fe63e0ee1d678a04ad8d5aefb976aba6.jpg) no-repeat left top;
    background-size: cover;
}

.width {
    width: 100%;
}

.icon {
    font-size: 26px !important;
}

.fcw {
    color: white;
}
</style>
