<template>
<div>
    <v-container>
        <v-row class="d-flex flex-row ">
            <v-btn color="white" depressed small fab @click="$router.go(-1)">
                <v-icon class="icon">mdi-chevron-left</v-icon>
            </v-btn>
            <h2>รูปภาพ</h2>
        </v-row>
    </v-container>
    <v-container grid-list-xs>
        <v-card flat class="rounded-lg pt-2">
            <center>
                <h3>ภาพถ่ายบัตรประจำตัวประชาชน</h3>
                <br>
                <v-img class="rounded-lg " height="200" width="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNf3OTIf1lugjQhtLRTP8cwuosPAJmIykTsry1UL87ArfVFx84&usqp=CAU"></v-img>
                <br>
                <v-btn depressed block class="rounded-lg" color="success">
                    <v-icon>mdi-upload</v-icon>อัพโหลดบัตรประชาชน
                </v-btn>
            </center>
        </v-card>
        <br>
        <v-divider color="black"></v-divider>
        <v-card flat class="rounded-lg">
            <center class="pt-2">
                <h3 class="pb-2">รูปภาพฟาร์ม</h3>
                <br>
                <v-img class="rounded-lg elevation-5" height="200" width="auto" src="https://images.pexels.com/photos/158179/lake-constance-sheep-pasture-sheep-blue-158179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                </v-img>
                <br>
                <v-btn depressed block class="rounded-lg" color="success">
                    <v-icon>mdi-upload</v-icon>อัพโหลดภาพถ่ายฟาร์ม
                </v-btn>
            </center>
        </v-card>
    </v-container>

</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
