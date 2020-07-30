<template>
<div class="bg">
    <!-- <Navbar icon="mdi-account-key" name="คำขอรหัสผ่าน" /> -->
    <NavigationAdmin name="คำขอรหัสผ่าน" />

    <v-container grid-list-xs>
        <v-menu  ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date" transition="scale-transition" offset-y min-width="290px">
            <template  v-slot:activator="{ on, attrs }">
                <v-text-field color="success" outlined class="rounded-lg mt-3" v-model="date" label="วันที่" prepend-inner-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
            </template>
            <v-date-picker color="success" v-model="date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="success" @click="menu = false">ยกเลิก</v-btn>
                <v-btn text color="success" @click="$refs.menu.save(date)">ตกลง</v-btn>
            </v-date-picker>
        </v-menu>
        <v-layout row wrap>
            <v-flex xs12> 
                <v-card v-for="item in 5" class="rounded-lg pa-2 mt-3">
                    <div class="d-flex flex-no-wrap ">
                        <div class="">
                            <h3 class="pt-1">ชื่อ-นามสกุล : นายแดง แม่ใจ </h3>
                            <h3 class="pt-1">เบอร์โทร : 0123123123 </h3>
                            <h3 class="pt-1">สถานะ : แก้ไขรหัสผ่านแล้ว</h3>
                        </div>
                    </div>
                    <br>
                    <v-btn depressed dark @click="$router.push('/admin/userprofiledetail')" class="widths rounded-lg" color="success">
                        <h4>ดูข้อมูล</h4>
                    </v-btn>
                </v-card>

                <div class="text-center pt-4">
                    <v-pagination color="green" v-model="page" :length="4" prev-icon="mdi-menu-left" next-icon="mdi-menu-right"></v-pagination>
                </div>
            </v-flex>

        </v-layout>
    </v-container>

    <!-- </div>  -->
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
            page: 1,
            items: ['แก้ไขรหัสผ่านแล้ว', 'ยังไม่ได้แก้ไขรหัสผ่าน'],

            txt: 'Hello World',

            date: new Date().toISOString().substr(0, 10),
            menu: false,
            modal: false,
            menu2: false,

        };
    },
    /*------------------------- สิ่งทที่อยู่ในนี้จะถูกรัยเมื่อโหลด ------------------------------------------*/
    // mounted: async function () { 
    //     await this.load();
    // },
    /*------------------------- กระทำการตอน router ถูกโหลดเข้ามา------------------------------------------*/
    async beforeRouteEnter(to, from, next) {
        next()
    },
    /*-------------------------ใช้จัดการ operation  หรือ คำนวณค่าต่างๆ (คล้าย methods)------------------------------------------*/

}
</script>

<style scoped>
.widths {
    width: 100%;
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
.datebg{
    background: rgb(255, 255, 255);
}
</style>
