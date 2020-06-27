<template>
<div>
    <Navbar icon="mdi-account-cowboy-hat" name="ข้อมูลผู้ใช้" />
    <div class="pa-6">
        <v-layout row wrap>
            <v-flex xs12>
            <v-toolbar-title>
                <center>
                <v-text-field clearable flat hide-details append-icon="mdi-magnify" label="ค้นหา" outlined single-line class="widths rounded-lg pa-1"></v-text-field>
            </center>
            </v-toolbar-title>  
            <v-spacer></v-spacer>
            
            <v-card class="ma-2">
                    <v-spacer></v-spacer>
                    
                    <div class="d-flex flex-no-wrap ">
                        <div class="ma-3">
                            <h4>ชื่อ : นายแดง แดงแดง </h4>
                            <h4>อีเมล์ : dang@gmail.com </h4>
                            <h4>กลุ่มผู้ใช้ : แม่ใจ </h4>
                        </div>
                        
                    </div>
                </v-card>
            </v-flex>
 
        </v-layout>
    </div>
<NavigationAdmin/>
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

<style  scoped>
.widths{
    width: 80%;
}
</style>
