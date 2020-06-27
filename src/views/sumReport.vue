<template>
<div>

    <Navbar icon="mdi-chevron-left" name="รายงานสรุป" />
    <v-container id="dropdown-example-1">
        <v-select outlined class="my-2 rounded-lg" :items="dropdown_font" label="ยอดรวมควายทั้งหมด" target="#dropdown-example-1"></v-select>
    </v-container>
    <center>
        <v-flex xs11>
            <div class="pa-4">
                <v-card class="mx-auto text-center" color="green" dark max-width="600">
                    <v-card-text>
                        <v-sheet color="rgba(0, 0, 0, .12)">
                            <v-sparkline :value="value" color="rgba(255, 255, 255, .7)" height="100" padding="24" stroke-linecap="round" smooth>
                                <template v-slot:label="item">
                                    ${{ item.value }}
                                </template>
                            </v-sparkline>
                        </v-sheet>
                    </v-card-text>

                    <v-card-text>
                        <div class="display-1 font-weight-thin">จำนวนควายทั้งหมด</div>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions class="justify-center">
                        <v-btn block text>Go to Report</v-btn>
                    </v-card-actions>
                </v-card>
            </div>
        </v-flex>
    </center>

</div>
</template>

<script>
export default {
    data: () => ({
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
.v-sheet--offset {
    top: -24px;
    position: relative;
}
</style>
