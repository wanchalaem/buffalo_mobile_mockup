<template>
<div>

    <Navbar icon="mdi-chevron-left" name="รายงานการเติบโต" />
    <v-container grid-list-xs>
        <div class="text-center">
            <h4>รายงานสรุปการเจริญเติบโต พันธุ์ประวัติรายฟาร์ม</h4>
        </div>
        <v-card class="ma-4 pa-4 rounded-lg">
            <v-text-field class="rounded-lg" outlined name="name" label="ชื่อฟาร์ม" id="id"></v-text-field>
            <v-text-field class="rounded-lg" outlined name="name" label="ใบพันธุ์ประวัติสำหรับอ้างอิง" id="id"></v-text-field>
            <v-text-field class="rounded-lg" outlined name="name" label="ใบพันธุ์ประวัติทางการ" id="id"></v-text-field>
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
.v-sheet--offset {
    top: -24px;
    position: relative;
}
</style>
