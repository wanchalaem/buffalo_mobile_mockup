<template>
<div class="bg">
    <!-- <Navbar icon="mdi-chevron-left" name="เพิ่มควาย" /> -->
    <NavigationAdmin name="เพิ่มผู้ดูแลระบบ" />
    <v-container grid-list-xs>
        <!-- <v-btn class="mb-6" fab @click="$router.push('/admin/adminedit')" small><v-icon class="icon">mdi-chevron-left</v-icon></v-btn> -->
        <v-btn class="mb-6" small fab @click="$router.go(-1)"><v-icon class="icon">mdi-chevron-left</v-icon></v-btn>
        <div v-for="item in desserts" :key="item.name" class="">
            <v-text-field color="green" class="rounded-lg" solo outlined v-model="item.calories" name="name" :label="item.describe" id="id"></v-text-field>
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
    background: rgba(242, 243, 244); 
    height: 100%; 
    background-position: center; 
    background-repeat: repeat;
    background-size: cover; 
}
</style>
