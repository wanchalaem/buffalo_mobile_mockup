<template>
<div class="">
    <NavigationAdmin name="เพิ่มเกษตกร" />
    <v-container grid-list-xs>
        <v-btn  small fab @click="$router.go(-1)"><v-icon class="icon">mdi-chevron-left</v-icon></v-btn>
    </v-container>
    <v-container grid-list-xs>
        
        <!-- <v-btn class="mb-6" fab @click="$router.push('/admin/userprofile')" small>
            <v-icon class="icon">mdi-chevron-left</v-icon>
        </v-btn> -->
        <!-- <v-btn class="mb-6" fab @click="$router.go(-1)" small><v-icon class="icon">mdi-chevron-left</v-icon></v-btn>
        <v-text-field    class="rounded-lg" prepend-inner-icon="mdi-id-card" color="green" outlined label="หมายเลขบัตรประชาชน"></v-text-field>
        <v-select   class="rounded-lg" prepend-inner-icon="mdi-card-account-details-outline" color="green" outlined label="คำนำหน้า "></v-select>
        <v-text-field   class="rounded-lg" prepend-inner-icon="mdi-card-account-details-outline" color="green" outlined label="ชื่อ "></v-text-field>
        <v-text-field   class="rounded-lg" prepend-inner-icon="mdi-card-account-details-outline" color="green" outlined label="นามสกุล"></v-text-field>
        <v-file-input   chips class="rounded-lg" prepend-inner-icon="" color="green" outlined accept="image/*" label="ภาพถ่ายบัตรประจำตัวประชาชน"></v-file-input>
        <v-select   class="rounded-lg" prepend-inner-icon="mdi-human-male-female" color="green" outlined label="เพศ"></v-select>
        <v-text-field   class="rounded-lg" prepend-inner-icon="mdi-account-clock-outline" color="green" outlined label="อายุ"></v-text-field>
        <v-text-field   class="rounded-lg" prepend-inner-icon="mdi-map-marker-multiple-outline" color="green" outlined label="บ้านเลขที่/ถนน/ซอย"></v-text-field>
        <v-select   class="rounded-lg" prepend-inner-icon="mdi-map-marker-multiple-outline" color="green" outlined label="ตำบล"></v-select>
        <v-select   class="rounded-lg" prepend-inner-icon="mdi-map-marker-multiple-outline" color="green" outlined label="อำเภอ"></v-select>
        <v-select   class="rounded-lg" prepend-inner-icon="mdi-map-marker-multiple-outline" color="green" outlined label="จังหวัด"></v-select>
        <v-select   class="rounded-lg" prepend-inner-icon="mdi-postage-stamp" color="green" outlined label="รหัสไปรษณีย์"></v-select>
        <v-text-field   class="rounded-lg" prepend-inner-icon="mdi-phone" color="green" outlined label="เบอร์โทรศัพท์"></v-text-field>

        <v-col cols="12" sm="12">
            <v-divider></v-divider>
        </v-col> -->
        <!-- <center>
            <h4>ฟาร์ม</h4>
        </center> -->
        <!-- <v-file-input   chips class="rounded-lg" prepend-inner-icon="" color="green" outlined accept="image/*" label="ภาพถ่ายเจ้าของฟาร์ม"></v-file-input> -->
        <!-- <v-file-input  chips class="rounded-lg" prepend-inner-icon="" color="green"   outlined accept="image/*" label="ภาพถ่ายสภาพฟาร์ม"></v-file-input>
        <v-text-field  class="rounded-lg" prepend-inner-icon="mdi-home-outline" color="green"   outlined label="ชื่อฟาร์ม"></v-text-field>
        <v-text-field  class="rounded-lg" prepend-inner-icon="mdi-map-marker-radius-outline" color="green"   outlined label="พิกัดฟาร์มตามระบบ GPS (ละติจูด)"></v-text-field>
        <v-text-field  class="rounded-lg" prepend-inner-icon="mdi-map-marker-radius-outline" color="green"   outlined label="พิกัดฟาร์มตามระบบ GPS (ลองติจูด)"></v-text-field>
        <v-text-field  class="rounded-lg" prepend-inner-icon="mdi-cow" color="green"   outlined label="จำนวนกระบือทั้งหมด"></v-text-field> -->
        <!-- <v-text-field  class="rounded-lg" prepend-inner-icon="mdi-account-group-outline" color="green" outlined label="กลุ่มเกษตรกร"></v-text-field> -->
        <!-- <v-select   outlined color="green" class="rounded-lg" prepend-inner-icon="mdi-account-group-outline" label="กลุ่มเกษตกร"></v-select>
        <v-select  class="rounded-lg" prepend-inner-icon="mdi-map-marker-multiple-outline" color="green"   outlined label="ตำบล"></v-select>
        <v-select  class="rounded-lg" prepend-inner-icon="mdi-map-marker-multiple-outline" color="green"   outlined label="อำเภอ"></v-select>
        <v-select  class="rounded-lg" prepend-inner-icon="mdi-map-marker-multiple-outline" color="green"   outlined label="จังหวัด"></v-select>
        <v-select  class="rounded-lg" prepend-inner-icon="mdi-postage-stamp" color="green"   outlined label="รหัสไปรษณีย์"></v-select> -->

        <v-select   class="rounded-lg" prepend-inner-icon="mdi-card-account-details-outline" color="green" outlined label="คำนำหน้า "></v-select>
        <v-text-field   class="rounded-lg" prepend-inner-icon="mdi-card-account-details-outline" color="green" outlined label="ชื่อ "></v-text-field>
        <v-text-field   class="rounded-lg" prepend-inner-icon="mdi-card-account-details-outline" color="green" outlined label="นามสกุล"></v-text-field>
        <v-text-field   class="rounded-lg" prepend-inner-icon="mdi-id-card" color="green" outlined type="number" label="หมายเลขบัตรประชาชน"></v-text-field>
        <v-file-input   chips class="rounded-lg" prepend-inner-icon="" color="green" outlined accept="image/*" label="ภาพถ่ายบัตรประจำตัวประชาชน"></v-file-input>
        <v-select   class="rounded-lg" prepend-inner-icon="mdi-human-male-female" color="green" outlined label="เพศ"></v-select>
        <v-text-field   class="rounded-lg" prepend-inner-icon="mdi-account-clock-outline" color="green" outlined type="number" label="อายุ"></v-text-field>
        <v-text-field   class="rounded-lg" prepend-inner-icon="mdi-home" color="green" outlined label="ที่อยู่"></v-text-field>
        <v-text-field   class="rounded-lg" prepend-inner-icon="mdi-phone" color="green" outlined type="number" label="เบอร์โทรศัพท์"></v-text-field>
        <v-file-input   chips class="rounded-lg" prepend-inner-icon="" color="green" outlined accept="image/*" label="ภาพถ่ายเจ้าของฟาร์ม"></v-file-input>
        <v-file-input   chips class="rounded-lg" prepend-inner-icon="" color="green" outlined accept="image/*" label="ภาพถ่ายสภาพฟาร์ม"></v-file-input>
        <v-text-field   class="rounded-lg" prepend-inner-icon="mdi-home-outline" color="green" outlined label="ชื่อฟาร์ม"></v-text-field>
        <v-text-field   class="rounded-lg" prepend-inner-icon="mdi-home" color="green" outlined label="ที่อยู่ฟาร์ม"></v-text-field>
        <v-select   class="rounded-lg" prepend-inner-icon="mdi-map-marker-multiple-outline" color="green" outlined label="ตำบล"></v-select>
        <v-select   class="rounded-lg" prepend-inner-icon="mdi-map-marker-multiple-outline" color="green" outlined label="อำเภอ"></v-select>
        <v-select   class="rounded-lg" prepend-inner-icon="mdi-map-marker-multiple-outline" color="green" outlined label="จังหวัด"></v-select>
        <v-select   class="rounded-lg" prepend-inner-icon="mdi-postage-stamp" color="green" outlined label="รหัสไปรษณีย์"></v-select>
        <v-text-field   class="rounded-lg" prepend-inner-icon="mdi-map-marker-radius-outline" color="green" outlined label="พิกัดฟาร์มตามระบบ GPS (ละติจูด)"></v-text-field>
        <v-text-field   class="rounded-lg" prepend-inner-icon="mdi-map-marker-radius-outline" color="green" outlined label="พิกัดฟาร์มตามระบบ GPS (ลองติจูด)"></v-text-field>
        <v-text-field   class="rounded-lg" prepend-inner-icon="mdi-cow" color="green" outlined type="number" label="จำนวนกระบือทั้งหมด"></v-text-field>
        <v-select   class="rounded-lg" prepend-inner-icon="mdi-account-group-outline" color="green" outlined label="กลุ่มเกษตรกร"></v-select>

        <v-btn @click="$router.push('/admin/userprofile')" block class="rounded-lg" color="success">บันทึก</v-btn>
    </v-container>
</div>
</template>

<script>
export default {

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
