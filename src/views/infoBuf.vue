<template>
<div>

    <Navbar icon="" name="ข้อมูลกระบือ" />
    <div class="pa-4">
        <v-layout row wrap>
            <v-flex xs12 class="ma-2">
                <div class="d-flex flex-no-wrap ">
                    <div class="ma-3">
                        <v-btn color="teal" class="rounded-lg" outlined large dark>
                            <h3>เพิ่มกระบือ</h3>
                        </v-btn>
                    </div>
                    <v-spacer></v-spacer>
                    <v-flex xs7>
                        <div class="ml-auto text-right ma-3">
                            <v-select class="rounded-lg" dense :items="items" label="มีชีวิตหรือไม่มีชีวิต" outlined></v-select>
                        </div>
                    </v-flex>
                </div>
            </v-flex>
        </v-layout>
    </div>

    <v-tabs grow>
        <v-tab>
            <v-icon left>mdi-gender-male</v-icon>
            ตัวผู้
        </v-tab>
        <v-tab>
            <v-icon left>mdi-gender-female</v-icon>
            ตัวเมีย
        </v-tab>

        <v-tab-item>
            <v-card flat>
                <v-card-text>
                    <v-card class="mx-auto rounded-lg" max-width="auto"> 
                        <h3 class="pa-3">ชื่อหรือหมายเลขกระบือ : พ่อเปี้ย</h3>
                        <h3 class="pa-3">หมายเลข : NID</h3>
                        <h3 class="pa-3">เพศ : ผู้</h3> 
                    </v-card>
                </v-card-text>

                <v-card-text>
                    <v-card class="mx-auto rounded-lg" max-width="auto"> 
                        <h3 class="pa-3">ชื่อหรือหมายเลขกระบือ : พ่อเปี้ย</h3>
                        <h3 class="pa-3">หมายเลข : NID</h3>
                        <h3 class="pa-3">เพศ : ผู้</h3> 
                    </v-card>
                </v-card-text>

                <v-card-text>
                    <v-card class="mx-auto rounded-lg" max-width="auto"> 
                        <h3 class="pa-3">ชื่อหรือหมายเลขกระบือ : พ่อเปี้ย</h3>
                        <h3 class="pa-3">หมายเลข : NID</h3>
                        <h3 class="pa-3">เพศ : ผู้</h3> 
                    </v-card>
                </v-card-text>
            </v-card>
        </v-tab-item>

        <v-tab-item>
            <v-card flat>
                <v-card-text>
                    <v-card class="mx-auto rounded-lg" max-width="auto"> 
                        <h3 class="pa-3">ชื่อหรือหมายเลขกระบือ : แม่เปี้ย</h3>
                        <h3 class="pa-3">หมายเลข : NID</h3>
                        <h3 class="pa-3">เพศ : เมีย</h3> 
                    </v-card>
                </v-card-text>

               <v-card-text>
                    <v-card class="mx-auto rounded-lg" max-width="auto"> 
                        <h3 class="pa-3">ชื่อหรือหมายเลขกระบือ : แม่เปี้ย</h3>
                        <h3 class="pa-3">หมายเลข : NID</h3>
                        <h3 class="pa-3">เพศ : เมีย</h3> 
                    </v-card>
                </v-card-text>

                <v-card-text>
                    <v-card class="mx-auto rounded-lg" max-width="auto"> 
                        <h3 class="pa-3">ชื่อหรือหมายเลขกระบือ : แม่เปี้ย</h3>
                        <h3 class="pa-3">หมายเลข : NID</h3>
                        <h3 class="pa-3">เพศ : เมีย</h3> 
                    </v-card>
                </v-card-text>
            </v-card>
        </v-tab-item>

    </v-tabs>

</div>
</template>

<script>
export default {
    data: () => ({
        items: ['มีชีวิต', 'ไม่มีชีวิต', ],
        dialog1: true,

    }),

}
</script>

<style>
 
</style>
