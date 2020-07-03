<template>
<div class="bg">

    <!-- <Navbar icon="mdi-clipboard-text" name="รายงาน" /> -->
    <Navigation name="รายงาน" />
    <v-container grid-list-xs>
        <v-card @click="$router.push('/sumReport')" class="ma-2 rounded-lg">
            <div class="d-flex flex-no-wrap">
                <div class="ma-3">
                    <v-btn color="success" fab dark>
                        <v-icon>mdi-clipboard-text-outline</v-icon>
                    </v-btn>
                </div>
                <div class="ml-auto text-right pa-6">
                    <h3>
                        รายงานสรุป
                    </h3>
                </div>
            </div>
        </v-card>

        <v-card @click="$router.push('/growReport')" class="ma-2 mt-4 rounded-lg">
            <div class="d-flex flex-no-wrap">
                <div class="ma-3">
                    <v-btn color="primary" fab dark>
                        <v-icon>mdi-clipboard-text-multiple-outline</v-icon>
                    </v-btn>
                </div>
                <div class="ml-auto text-right pa-3">
                    <h3>
                        รายงานสรุปการเจริญเติบโตพันธุ์ประวัติรายฟาร์ม
                    </h3>
                </div>
            </div>
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
