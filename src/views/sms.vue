<template>
<v-main class="bg">

    <v-container>
        <v-btn fab @click="$router.go(-1)" small>
            <v-icon class="icon">mdi-chevron-left</v-icon>
        </v-btn>
        <v-row align="center" justify="center">
            <v-col cols="10" sm="8" md="4">
                <div class="text-center">
                    <!-- <img style="width:50%;" src="https://www.img.in.th/images/baec9e10112fc5b2253841c3099c9e42.png" alt=""> -->
                    <h2 class="fcw">เปลี่ยนรหัสผ่าน</h2>
                </div>
                <br>
                <div color="white">
                    <hr><br>
                </div>

                <v-card class="pa-5 mt-4">
                    <!-- <v-text-field name="name" color="green" type="password" label="รหัสผ่านใหม่" id="id"></v-text-field>
                    <v-text-field name="name" color="green" type="password" label="ยินยันรหัสผ่านใหม่" id="id"></v-text-field> -->
                    <div class="d-flex flex-no-wrap align-self-center">
                        <v-text-field name="name" type="number" color="success" solo label="ใส่รหัส OTP" id="id"></v-text-field>
                        <!-- <v-btn large color="success">รับ OTP</v-btn> -->
                    </div>
                    <v-btn medium dark class="width rounded-lg" @click="$router.push('/sms1')" large color="green">ยืนยัน</v-btn>
                </v-card>

                <!-- <v-form>
                        <v-text-field class="rounded-lg" solo label="ชื่อผู้ใช้งาน"  prepend-inner-icon="mdi-account-star" ></v-text-field>
                    </v-form>
                    <v-spacer></v-spacer>
                    <v-btn dark class="width rounded-lg" @click="$router.push('/')" large color="green">ลืมรหัสผ่าน</v-btn> -->
            </v-col>
        </v-row>
    </v-container>
</v-main>
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
    background: #000000 url(https://www.img.in.th/images/fe63e0ee1d678a04ad8d5aefb976aba6.jpg) no-repeat left top;
    background-size: cover;
    height: 100%;
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
