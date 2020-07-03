<template>
<v-app id="inspire">
    <v-main class="bg">
        <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
                <v-col cols="10" sm="8" md="4">
                    <v-icon class="icon" dark @click="$router.push('/')">mdi-chevron-left</v-icon>
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
                        <v-text-field class="rounded-lg" solo label="ชื่อ" prepend-inner-icon="mdi-account" type="text"></v-text-field>
                        <v-text-field class="rounded-lg" solo label="นามสกุล" prepend-inner-icon="mdi-account"></v-text-field>
                        <v-select solo :items="province" label="กรุณาเลือกจังหวัด" prepend-inner-icon="mdi-home-group" hide-details class="rounded-lg" outlined></v-select><br>
                        <v-select solo :items="district" label="กรุณาเลือกอำเภอ" prepend-inner-icon="mdi-home-flood" hide-details class="rounded-lg" outlined></v-select><br>
                        <v-select solo :items="place" label="กรุณาเลือกตำบล" prepend-inner-icon="mdi-home" hide-details class="rounded-lg" outlined></v-select><br>
                        <!-- <v-overflow-btn solo :items="province" dark label="กรุณาเลือกจังหวัด" prepend-inner-icon="mdi-home-group" hide-details class="pa-0" outlined></v-overflow-btn><br> -->
                        <!-- <v-overflow-btn solo :items="district" dark label="กรุณาเลือกอำเภอ" prepend-inner-icon="mdi-home-flood" hide-details class="pa-0" outlined></v-overflow-btn><br> -->
                        <!-- <v-overflow-btn solo :items="place" dark label="กรุณาเลือกตำบล" prepend-inner-icon="mdi-home" hide-details class="pa-0" outlined></v-overflow-btn><br> -->
                        <v-text-field class="rounded-lg" solo outlined label="รหัสไปษณีย์" prepend-inner-icon="mdi-home-city"></v-text-field>
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
