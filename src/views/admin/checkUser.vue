<template>
<div>
    <Navbar icon="mdi-account-cog" name="สิทธิ์การใช้งาน" />
    <div class="pa-6">
        <v-layout row wrap>
            <v-flex xs12>
                <v-card class="ma-2">
                    <v-spacer></v-spacer>
                    
                    <div class="d-flex flex-no-wrap ">
                        <div class="ma-3">
                            <h4>ชื่อ : นายแดง แดงแดง </h4>
                            <h4>อีเมล์ : dang@gmail.com </h4>
                            <h4>ชื่อผู้ใช้งาน : admin </h4>
                            <h4>สิทธิ์ : ผู้ดูแลระบบ</h4>
                        </div>
                        
                    </div>
                </v-card>
            </v-flex>
        </v-layout>
    </div>


</div>
</template>

    <script>
export default {
    name: 'checkUser',
    /*-------------------------ประกาศ components ---------------------------------------*/
    components: {

    },
  /*-------------------------รับค่าเมื่อเราเป็น components---------------------------------------*/
props:{

},
    /*-------------------------ประกาศตัวแปรที่ใช้ ผูกกับ v-model ---------------------------------------*/
    data() {
    return {
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
     mounted:async function() {
    /**** เรียกใช้ methods ชื่อ load() */
        await this.load(); 
    },
    /*------------------------- กระทำการตอน router ถูกโหลดเข้ามา------------------------------------------*/
     async beforeRouteEnter(to, from, next) { 
        next()
    },
    /*-------------------------ใช้จัดการ operation  หรือ คำนวณค่าต่างๆ (คล้าย methods)------------------------------------------*/
    computed:{

},
    /*-------------------------Methods------------------------------------------*/
methods:{
    /******* Methods default run ******/
    load:async function(){
}
},
    }
</script>
<style  scoped>

</style>