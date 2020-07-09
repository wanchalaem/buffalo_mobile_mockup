<template>
<div>
    <!-- <Navbar icon="mdi-chevron-left" name="เพิ่มควาย" /> -->
    <NavigationAdmin name="เพิ่มผู้ดูแลระบบ" />
    <v-container grid-list-xs>
        <v-btn class="mb-6" fab @click="$router.push('/admin/adminedit')" small><v-icon class="icon">mdi-chevron-left</v-icon></v-btn>
        <div v-for="item in desserts" :key="item.name" class="">
            <v-text-field color="green" class="rounded-lg" outlined v-model="item.calories" name="name" :label="item.describe" id="id"></v-text-field>
        </div>  
        <v-btn class="rounded-lg" @click="$router.push('/admin/adminedit')" color="green" dark large block>บันทึก</v-btn>
    </v-container>

</div>
</template>

<script>
export default {
    data: () => ({
        desserts: [{
                describe: 'ชื่อจริง',
                calories: 'นายแดง',
            },
            {
                describe: 'นามสกุล',
                calories: 'มีสุข',
            },
            {
                describe: 'ชื่อผู้ใช้งาน',
                calories: 'dang1234',
            },
            {
                describe: 'รหัสผ่าน',
                calories: '******',
            },
            {
                describe: 'ยืนยันรหัสผ่าน',
                calories: '******',
            },
            {
                describe: 'อีเมล',
                calories: 'dang1234@gmail.com',
            },
             
        ],

    }),

}
</script>

<style>
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
