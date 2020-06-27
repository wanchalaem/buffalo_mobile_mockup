<template>
<div>
    <Navbar icon="mdi-chevron-left" name="ตั้งค่ารหัสผ่าน" />
    <div class="pa-6">
        <v-layout row wrap>
            <v-flex xs12>
                <v-toolbar-title>
                    <center>
                        <v-text-field clearable flat hide-details label="ตั้งรหัสผ่าน" outlined single-line class="widths rounded-lg pa-1"></v-text-field>
                        <v-text-field clearable flat hide-details label="ยืนยันรหัสผผ่าน" outlined single-line class="widths rounded-lg pa-1"></v-text-field>
                    </center><br>
                    <div class="col-ml-6 ">
                        <div class="ml-auto text-center">
                            <v-btn class="rounded-lg " style="width:70%" color="teal" outlined @click="$router.push('/setPassword')">ยืนยัน<v-icon>mdi-pencil</v-icon>
                            </v-btn>
                        </div>
                    </div>

                </v-toolbar-title>
                <v-spacer></v-spacer>

            </v-flex>

        </v-layout>
    </div>
    <NavigationAdmin />
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
</style>
