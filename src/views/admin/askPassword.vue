<template>
<div>
    <Navbar icon="mdi-account-key" name="คำขอรหัสผ่าน" />

    <v-container>
        
        
    </v-container>

    <div class="ma-6">
        <v-layout row wrap>
            <v-flex xs12>
                <v-card class="rounded-lg pa-2"> 
                    <v-flex xs12 row wrap>
            <v-flex xs6 class="pa-6">
                <v-toolbar-title>
                    <center>
                        <v-text-field class="rounded-lg" clearable flat hide-details append-icon="mdi-magnify" label="ค้นหา" outlined single-line></v-text-field>
                    </center>
                </v-toolbar-title><br>
            </v-flex>

            <v-flex xs6 class="pa-6">
            <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date" transition="scale-transition" offset-y min-width="290px">
                <template v-slot:activator="{ on, attrs }">
                    <v-text-field v-model="date" label="Picker in menu" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                </template>
                <v-date-picker v-model="date" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                    <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                </v-date-picker>
            </v-menu>
        </v-flex>

        </v-flex>
                    <div class="d-flex flex-no-wrap">
                        <div class="ma-3">
                            <h4>รายละเอียดเกษตรกร</h4>
                        </div>
                        <v-spacer></v-spacer>
                        <div class="col-ml-6 ">
                            <div class="ml-auto text-right">
                                <v-btn text class="rounded-lg " color="teal" outlined @click="$router.push('/setDetail')">
                                    <h6>ดูข้อมูล</h6>
                                    <v-icon>mdi-pencil</v-icon>
                                </v-btn>
                            </div>
                        </div>
                    </div>

                    <v-spacer></v-spacer>

                    <div class="d-flex flex-no-wrap ">
                        <div class="ma-3">
                            <h4>เลขบัตรประชาชน : 1231231231231 </h4>
                            <h4>ชื่อ : นายแดง </h4>
                            <h4>นามสกุล : แม่ใจ </h4>
                            <h4>เบอร์โทร : 0123123123 </h4>
                        </div>

                    </div>
                </v-card>
            </v-flex>

        </v-layout>
    </div><br><br><br><br><br><br><br><br><br><br>
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

            txt: 'Hello World',

            date: new Date().toISOString().substr(0, 10),
            menu: false,
            modal: false,
            menu2: false,

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

}
</script>

<style scoped>
.widths {
    width: 80%;
}
</style>
