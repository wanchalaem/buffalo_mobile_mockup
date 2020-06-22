<template>
<v-app>

    <v-main>
        <router-view />
    </v-main>
    <v-bottom-navigation shift class="pa-2 elevation-10 ">
        <v-btn > 
            <span>หน้าหลัก</span>
            <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-btn >
            <span>ข้อมูลกระบือ</span>
            <v-icon>mdi-cow</v-icon>
        </v-btn>

        <v-btn >
            <span>ข้อมูลการเจริญเติบโต</span>
            <v-icon>mdi-clipboard-text-outline</v-icon>
        </v-btn>

        <v-btn >
            <span>รายงาน</span>
            <v-icon>mdi-clipboard-text-multiple-outline</v-icon>
        </v-btn>
    </v-bottom-navigation>

</v-app>
</template>

<script>
export default {
    name: 'home-template',
    /*-------------------------ประกาศ components ---------------------------------------*/
    components: {

    },
    /*-------------------------รับค่าเมื่อเราเป็น components---------------------------------------*/
    props: {
        icon: {
            default: 'mdi-view-dashboard',
        },
        name: {
            default: 'Menu',
        }

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
