<template>
<div>
    <Navbar name="ผู้ดูแลระบบ" />
        <div class="pa-4">
            <v-layout row wrap>
                <v-flex xs12>
                    <v-card class="ma-2">
                        <div class="d-flex flex-no-wrap ">
                            <div class="ma-3">
                                <v-btn color="danger" fab dark>
                                    <v-icon>mdi-domain</v-icon>
                                </v-btn>
                            </div>
                            <div>
                                <v-card-title class="headline">120 คน</v-card-title>
                                <v-card-subtitle>จำนวนสมาชิกในเดือนนี้</v-card-subtitle>
                            </div>
                        </div>
                    </v-card>
                </v-flex>
                <v-flex xs6>
                    <v-card class="ma-2 rounded-lg">
                        <div class="d-flex flex-no-wrap">
                            <div class="ma-3">
                                <v-btn color="success" fab dark>
                                    <v-icon>mdi-cow</v-icon>
                                </v-btn>
                            </div>
                            <div class="ml-auto text-right" style="margin-right: 4px;">
                                <h5 class="body-3 grey--text font-weight-light">
                                    จำนวนควายทั้งหมด
                                </h5>
                                <h2>
                                    39ตัว
                                </h2>
                            </div>

                        </div>
                    </v-card>
                </v-flex>
                <v-flex xs6>
                    <v-card class="ma-2">
                        <div class="d-flex flex-no-wrap ">
                            <div class="ma-3">
                                <v-btn color="primary" fab dark>
                                    <v-icon>mdi-domain</v-icon>
                                </v-btn>
                            </div>
                            <div class="ml-auto text-right" style="margin-right: 4px;">
                                <h5 class="body-3 grey--text font-weight-light">
                                    จำนวนควายทั้งหมด
                                </h5>
                                <h2>
                                    39ตัว
                                </h2>
                            </div>

                        </div>
                    </v-card>
                </v-flex>

            </v-layout>
        </div>

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
                    <div class="display-1 font-weight-thin">จำนวนสมาชิกในเดือนนี้</div>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions class="justify-center">
                    <v-btn block text>Go to Report</v-btn>
                </v-card-actions>
            </v-card>
        </div>

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
    <NavigationAdmin />
</div>
</template>

<script>
export default {
    data: () => ({
        value: [
            423,
            446,
            675,
            510,
            590,
            610,
            760,
        ],

    }),

}
</script>

<style>
.menu {
    font-size: 26px !important;
}

.icon {
    font-size: 26px !important;
}

.ll {
    font-weight: 100 !important;
}

.bg {
    background-color: #f5f5ff;
    background-attachment: fixed;
}
</style>
