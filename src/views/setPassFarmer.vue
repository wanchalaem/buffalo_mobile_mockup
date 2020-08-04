<template>
<div class="">
    <!-- <Navbar icon="mdi-chevron-left" name="ตั้งค่ารหัสผ่าน" /> -->
    <!-- <Navigation name="ตั้งค่ารหัสผ่าน" /> -->
    <v-container>
        <v-row class="d-flex flex-row ">
            <v-btn color="white" depressed fab @click="$router.go(-1)" small>
                <v-icon class="icon">mdi-chevron-left</v-icon>
            </v-btn>
            <h2>ตั้งค่ารหัสผ่าน</h2>
        </v-row>
    </v-container>
    <v-container grid-list-xs>
            <v-text-field color="green" prepend-inner-icon="mdi-lock" clearable flat hide-details label="รหัสผ่านเก่า" solo outlined single-line type="password" class=" rounded-lg pb-4"></v-text-field>
            <v-text-field color="green" prepend-inner-icon="mdi-lock" clearable flat hide-details label="รหัสผ่านใหม่" solo outlined single-line type="password" class=" rounded-lg pb-4"></v-text-field>
            <v-text-field color="green" prepend-inner-icon="mdi-lock" clearable flat hide-details label="ยืนยันรหัสผ่านใหม่" solo outlined single-line type="password" class=" rounded-lg"></v-text-field>
         <br> 
            <v-btn block dark large class="rounded-lg " color="green" @click="$router.push('/user/profile')">ตกลง
            </v-btn>
 
    </v-container>

</div>
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
.widths {
    width: 80%;
}

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
