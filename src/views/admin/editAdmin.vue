<template>
<div class="">
    <!-- <Navbar icon="mdi-chevron-left" name="ตั้งค่ารหัสผ่าน" /> -->
    <!-- <NavigationAdmin name="แก้ไขข้อมูลผู้ดูแลระบบ" /> -->
    <v-container>
        <v-row class="d-flex flex-row ">
            <v-btn depressed color="white" small fab @click="$router.go(-1)">
                <v-icon class="icon">mdi-chevron-left</v-icon>
            </v-btn>
            <h2>แก้ไขข้อมูลผู้ดูแลระบบ</h2>
        </v-row>
    </v-container>
    <v-container grid-list-xs> 
        <v-text-field color="green" clearable label="ชื่อ" prepend-inner-icon="mdi-card-account-details-outline" outlined class=" rounded-lg"></v-text-field>
        <v-text-field color="green" clearable label="นามสกุล" prepend-inner-icon="mdi-card-account-details-outline" outlined class=" rounded-lg"></v-text-field>
        <v-text-field color="green" clearable label="ชื่อผู้ใช้" prepend-inner-icon="mdi-account" outlined class=" rounded-lg"></v-text-field>
        <!-- <v-text-field color="green" type="password" clearable label="รหัสผ่านใหม่" prepend-inner-icon="mdi-lock" outlined class=" rounded-lg"></v-text-field>
        <v-text-field color="green" type="password" clearable label="ยืนยันรหัสผ่านใหม่" prepend-inner-icon="mdi-lock" outlined class=" rounded-lg"></v-text-field> -->
        <v-text-field color="green" clearable label="อีเมล" prepend-inner-icon="mdi-email" outlined class=" rounded-lg"></v-text-field>

        <v-btn block dark large class="rounded-lg " color="green" @click="$router.push('/admin/adminedit')">ตกลง
        </v-btn>

        <!-- <v-layout row wrap>
            <v-flex xs12>
                <v-toolbar-title>
                    <br>

                </v-toolbar-title>
                <v-spacer></v-spacer>

            </v-flex>

        </v-layout> -->
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
    background: rgba(242, 243, 244);
    height: 100%;
    background-position: center;
    background-repeat: repeat;
    background-size: cover;
}
</style>
