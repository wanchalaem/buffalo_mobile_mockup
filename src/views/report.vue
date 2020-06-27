<template>
<div>

    <Navbar icon="mdi-clipboard-text" name="รายงาน" />

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

        <v-card @click="$router.push('/growReport')" class="ma-2 rounded-lg">
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

    </v-container><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <Navigation />
</div>
</template>

<script>
export default {
    data: () => ({

    }),

}
</script>

<style>

</style>
