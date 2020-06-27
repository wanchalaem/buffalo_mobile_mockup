<template>
<v-bottom-navigation>
    <v-btn>
        <span>หน้าหลัก</span>
        <v-icon @click="$router.push('/homeAdmin')">mdi-home</v-icon>
    </v-btn>

    <v-btn>
        <span>สิทธิ์การใช้งาน</span>
        <v-icon @click="$router.push('/checkUser')">mdi-account-cog</v-icon>
    </v-btn>

    <v-btn>
        <span>เกี่ยวกับเกษตรกร</span>
        <v-icon @click="$router.push('/setPassword')">mdi-account-group</v-icon>
    </v-btn>

    <v-btn>
        <span>รายงาน</span>
        <v-icon @click="$router.push('/reportAdmin')">mdi-clipboard-text</v-icon>
    </v-btn>
</v-bottom-navigation>
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

<style  scoped>

</style>
