<template>
<div class="bg">

    <!-- <Navbar icon="mdi-chevron-left" name="รายงานการเติบโต" /> -->
    <Navigation name="รายงานการเติบโต" />
    <v-container>
        <div class="text-center">
            <h2>รายงานสรุปการเจริญเติบโตพันธุ์ประวัติรายฟาร์ม</h2>
        </div>
        <v-card class="ma-4 pa-4 rounded-lg">
            <v-text-field class="rounded-lg" outlined name="name" label="ชื่อฟาร์ม" id="id"></v-text-field>
            <v-text-field class="rounded-lg" outlined name="name" label="จำนวนควายอายุ 240 วัน" id="id"></v-text-field>
            <v-text-field class="rounded-lg" outlined name="name" label="จำนวนควายอายุ 400 วัน" id="id"></v-text-field>
            <v-text-field class="rounded-lg" outlined name="name" label="จำนวนควายอายุ 600 วัน" id="id"></v-text-field>
        </v-card>

    </v-container>

</div>
</template>

<script>
export default {
    data: () => ({

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
