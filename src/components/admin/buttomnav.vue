<template>
  <div>
      <v-bottom-navigation grow fixed color="success">
        <v-btn @click="$router.push('/admin/home') ">
            <span>หน้าหลัก</span>
            <v-icon>mdi-view-dashboard-outline</v-icon>
        </v-btn>

        <!-- <v-btn>
            <span>ข้อมูลส่วนตัว</span>
            <v-icon>mdi-account</v-icon>
        </v-btn> -->

        <v-btn @click="$router.push('/admin/userprofile') ">
            <span>เกษตกร</span>
            <v-icon>mdi-account-group</v-icon>
        </v-btn>

        <v-btn @click="$router.push('/admin/adminedit') ">
            <span>ผู้ดูแลระบบ</span>
            <v-icon>mdi-account-cog</v-icon>
        </v-btn>

        <!-- <v-btn>
            <span>คำขอรหัสผ่าน</span>
            <v-icon>mdi-account-key</v-icon>
        </v-btn> -->

        <v-btn @click="$router.push('/admin/report') ">
            <span>รายงาน</span>
            <v-icon>mdi-clipboard-text</v-icon>
        </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
    data() {
        return { 
        }
    },

}
</script>

<style>

</style>