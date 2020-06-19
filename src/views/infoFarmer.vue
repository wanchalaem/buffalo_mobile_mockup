<template>
<div>

    <Navbar icon="mdi-arrow-left-bold" name="ข้อมูลเกษตกร" />

    <v-card flat>
        <v-card-text>

            <div class="d-flex flex-no-wrap">
                <div class="ma-3">
                    <h3>รายละเอียดกระบือ</h3>
                </div>

                <div class="ml-auto text-right" style="margin-right: 4px;">
                    <h5 class="body-3 grey--text font-weight-light">
                        <!-- <v-btn outlined color="teal" @click="dialog=false">แก้ไข<v-icon>mdi-pencil</v-icon>
                                    </v-btn> -->
                        <v-icon>mdi-upload</v-icon>
                        <v-icon @click="dialog=false">mdi-pencil</v-icon>
                        <v-icon>mdi-delete</v-icon>
                    </h5>
                </div>
            </div>
           
          <center>
                    <v-flex xs12 row wrap class="ma-1">
                        <v-flex xs6>
                            <v-card  class="rounded-lg ma-1" height="130"> 
                            <v-img class="" height="80" width="auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNf3OTIf1lugjQhtLRTP8cwuosPAJmIykTsry1UL87ArfVFx84&usqp=CAU"></v-img>
                            <h4>ภาพถ่ายบัตรประจำตัวประชาชน</h4>
                            </v-card> 
                        </v-flex>
                        <v-flex xs6>
                            <v-card  class="rounded-lg ma-1" height="130">
                            <v-img class="" height="80" width="auto" src="https://images.pexels.com/photos/158179/lake-constance-sheep-pasture-sheep-blue-158179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                            </v-img> 
                            <h4>สภาพฟาร์ม</h4> 
                            </v-card> 
                        </v-flex> 
                    </v-flex>
          </center>

            
            <br>

            <div v-for="item in desserts" :key="item.name">
                <v-text-field class="rounded-lg" outlined :readonly="dialog" v-model="item.calories" name="name" :label="item.describe" id="id"></v-text-field>
            </div>
        </v-card-text>

    </v-card>

</div>
</template>

<script>
export default {
    data: () => ({
        dialog: true,
        desserts: [{
                describe: 'คำนำหน้า',
                calories: 'นาย',
            },
            {
                describe: 'ชื่อ',
                calories: 'เชิดชู',
            },
            {
                describe: 'นามสกุล',
                calories: 'แก้วบุญเรือง',
            },
            {
                describe: 'หมายเลขบัตรประจำตัวประชาชน',
                calories: '3560700347135',
            },
            {
                describe: 'เพศ',
                calories: 'ชาย',
            },
            {
                describe: 'อายุ',
                calories: '58',
            },
            {
                describe: 'ที่อยู่ตามทะเบียนบ้าน',
                calories: '4 หมู่ 7 ต.เจริญราษฎร์ อ.แม่ใจ จ.พะเยา 56130',
            },
            {
                describe: 'เบอร์โทรศัพท์',
                calories: '0861800385',
            },
            {
                describe: 'ชื่อฟาร์ม ',
                calories: 'ฟาร์มพ่อหร่วน',
            },
            {
                describe: 'บ้านเลขที่ ถนน ซอย',
                calories: 'เชิดชู',
            },
            {
                describe: 'พิกัดฟาร์มตามระบบ GPS (ละติจูด)',
                calories: '19.391271',
            },
            {
                describe: 'พิกัดฟาร์มตามระบบ GPS (ลองติจูด)',
                calories: '99.816495',
            },
            {
                describe: 'จำนวนควายทั้งหมด',
                calories: '40 ',
            },
            {
                describe: 'กลุ่มเกษตรกร',
                calories: 'กลุ่มแม่ใจ ',
            },
            {
                describe: 'ตำบล',
                calories: ' เจริญราษฎร์',
            },
            {
                describe: 'อำเภอ',
                calories: ' แม่กา',
            },
            {
                describe: 'จังหวัด',
                calories: 'พะเยา ',
            },
            {
                describe: 'ไปรษณีย์',
                calories: '56000',
            },
        ],

    }),

}
</script>

<style>

</style>
