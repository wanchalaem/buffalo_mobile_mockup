<template>
<div>

    <Navbar icon="mdi-arrow-left-bold" name="รายงานสรุป" />
    <v-container id="dropdown-example-1">
        <v-select outlined class="my-2 rounded-lg" :items="dropdown_font" label="ยอดรวมกระบือทั้งหมด" target="#dropdown-example-1"></v-select>
    </v-container>

    <v-container grid-list-xs>
        <v-card class="mt-4 mx-auto rounded-lg" max-width="400">
            <v-sheet class="v-sheet--offset mx-auto rounded-lg" color="cyan" elevation="12" max-width="calc(100% - 32px)">
                <v-sparkline :labels="labels" :value="value" color="white" line-width="2" padding="16"></v-sparkline>
            </v-sheet>

            <v-card-text class="pt-0">
                <div class="title font-weight-light mb-2">User Registrations</div>
                <div class="subheading font-weight-light grey--text">Last Campaign Performance</div>
                <v-divider class="my-2"></v-divider>
                <v-icon class="mr-2" small>
                    mdi-clock
                </v-icon>
                <span class="caption grey--text font-weight-light">last registration 26 minutes ago</span>
            </v-card-text>
        </v-card>
    </v-container>

</div>
</template>

<script>
export default {
    data: () => ({
        dropdown_font: ['ยอดรวมกระบือทั้งหมด', 'มีชีวิตอยู่', 'ไม่มีชีวิต', ],
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
.v-sheet--offset {
    top: -24px;
    position: relative;
}
</style>
