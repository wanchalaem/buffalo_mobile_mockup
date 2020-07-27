<template>
<div class="">
    <!-- <Navbar icon="mdi-chevron-left" name="เพิ่มควาย" /> -->
    <NavigationAdmin name="เพิ่มผู้ดูแลระบบ" />
    <v-container grid-list-xs>
        <!-- <v-btn class="mb-6" fab @click="$router.push('/admin/adminedit')" small><v-icon class="icon">mdi-chevron-left</v-icon></v-btn> -->
        <v-btn class="mb-6" small fab @click="$router.go(-1)">
            <v-icon class="icon">mdi-chevron-left</v-icon>
        </v-btn>
        <!-- <div v-for="item in desserts" :key="item.name" class="">
            <v-text-field color="green" class="rounded-lg" outlined v-model="item.calories" name="name" :label="item.describe" id="id"></v-text-field>
        </div>   -->
        <!-- <v-text-field   class="rounded-lg" prepend-inner-icon="mdi-card-account-details-outline" color="green" outlined v-model="editedItem.name" label="ชื่อจริง"></v-text-field> -->
        <v-text-field color="green" clearable label="ชื่อ" prepend-inner-icon="mdi-card-account-details-outline" outlined class=" rounded-lg"></v-text-field>
                        <v-text-field color="green" clearable label="นามสกุล" prepend-inner-icon="mdi-card-account-details-outline" outlined class=" rounded-lg"></v-text-field>
                        <v-text-field color="green" clearable label="ชื่อผู้ใช้" prepend-inner-icon="mdi-account" outlined class=" rounded-lg"></v-text-field>
                        <v-text-field color="green" type="password" clearable label="รหัสผ่านใหม่" prepend-inner-icon="mdi-lock" outlined class=" rounded-lg"></v-text-field>
                        <v-text-field color="green" type="password" clearable label="ยืนยันรหัสผ่านใหม่" prepend-inner-icon="mdi-lock" outlined class=" rounded-lg"></v-text-field>
                        <v-text-field color="green" clearable label="อีเมล" prepend-inner-icon="mdi-email" outlined class=" rounded-lg"></v-text-field>
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
show4: false,
        password: 'Password',
        rules: {
          required: value => !!value || 'กรุณากรอกรหัสผ่านให้ตรงกัน.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('กรุณากรอกรหัสผ่านให้ตรงกัน'),
        },
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
