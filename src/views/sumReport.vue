<template>
<div class="bg">
    <Navigation name="รายงานสรุป" />
    <v-container id="dropdown-example-1">
        <v-select solo class="my-2 rounded-lg" :items="dropdown_font" label="ยอดรวมควายทั้งหมด" target="#dropdown-example-1"></v-select>
        <v-card class="mt-3">
            <column-chart :colors="['#33CC00']" :data="chartData"></column-chart>
            <!-- <v-btn @click="$router.push('/sumReport')" block dark text color="green">ดูข้อมูลเพิ่มเติม</v-btn> -->
        </v-card>
    </v-container>

</div>
</template>

<script>
export default {
    data: () => ({
        chartData: {
            '1/7/2020': 40,
            '2/7/2020': 40,
            '3/7/2020': 40,
            '4/7/2020': 42,
            '5/7/2020': 42,
            '6/7/2020': 45,
        },
        dropdown_font: ['ยอดรวมควายทั้งหมด', 'มีชีวิตอยู่', 'ไม่มีชีวิต', ],
        labels: [
            '12am',
            '3am',
            '6am',
            '9am',
            '12pm',
            '3pm',
            '6pm',
            '9pm',
        ],
        value: [
            200,
            675,
            410,
            390,
            310,
            460,
            250,
            240,
        ],

    }),

}
</script>

<style>
/* .v-sheet--offset {
    top: -24px;
    position: relative;
}, */
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
