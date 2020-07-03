<template>
<!-- <v-bottom-navigation >
    <v-btn>
        <span>หน้าหลัก</span>
        <v-icon @click="$router.push('/homeAdmin')">mdi-home</v-icon>
    </v-btn>

    <v-btn>
        <span>สิทธิ์การใช้งาน</span>
        <v-icon @click="$router.push('/checkUser')">mdi-account-cog</v-icon>
    </v-btn>

    <v-btn>
        <span>เกษตรกร</span>
        <v-icon @click="$router.push('/setPassword')">mdi-account-group</v-icon>
    </v-btn>
    <v-btn>
        <span>คำขอรหัสผ่าน</span>
        <v-icon @click="$router.push('/askPassword')">mdi-account-key</v-icon>
    </v-btn>
    <v-btn>
        <span>รายงาน</span>
        <v-icon @click="$router.push('/reportAdmin')">mdi-clipboard-text</v-icon>
    </v-btn>
</v-bottom-navigation> -->
<div>
    <!-- <v-navigation-drawer v-model="drawer" app clipped class="dr-bg"> -->
    <v-navigation-drawer dense color="white" v-model="drawer" app clipped>
        <!-- <v-list class="w3-margin" shaped> -->
        <v-list dense rounded>
            <!-- <v-list-item two-line :class="miniVariant && 'px-0'"> -->
            <v-list-item two-line class="pt-2">
                <v-list-item-avatar size="50">
                    <img src="https://randomuser.me/api/portraits/men/81.jpg">
                </v-list-item-avatar>

                <v-list-item-content>
                    <h5>นายแดง แดงแดง</h5>
                    <h6 color="grey">dang@gmail.com</h6>
                    <!-- <v-list-item-title>นายแดง แดงแดง</v-list-item-title> -->
                    <!-- <v-list-item-subtitle>dang@gmail.com</v-list-item-subtitle> -->
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item-group v-model="item" color="green">
                <v-list-item v-for="(item, i) in items" :key="i" @click="$router.push(`${item.router}`) ">
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title class="">{{ item.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>

    </v-navigation-drawer>

    <v-app-bar color="white" app clipped-left>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <h3>
            &nbsp;{{name}}
        </h3>

        <!-- <v-menu bottom offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn-icon class="ma-2" v-bind="attrs" v-on="on">
                    <v-avatar>
                        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                    </v-avatar>
                </v-btn-icon>
            </template>
            <v-list>
                <v-list-item v-for="(item, i) in items1" :key="i" @click="() => {}">
                    <v-list-item-title>
                        {{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu> -->

    </v-app-bar>

</div>
</template>

<script>
export default {
    name: 'Root',
    /*-------------------------ประกาศ components ---------------------------------------*/
    components: {

    },
    /*-------------------------รับค่าเมื่อเราเป็น components---------------------------------------*/
    props: {

    },
    /*-------------------------ประกาศตัวแปรที่ใช้ ผูกกับ v-model ---------------------------------------*/
    data() {
        return {
            drawer: null,
            items: [{
                    text: "หน้าหลัก",
                    icon: "mdi-view-dashboard-outline",
                    router: "/homeAdmin"
                },
                {
                    text: "สิทธิ์การใช้งาน",
                    icon: "mdi-account-cog",
                    router: "/checkUser"
                },
                {
                    text: "เกษตรกร",
                    icon: "mdi-account-group",
                    router: "/setPassword"
                }, 
                {
                    text: "คำขอรหัสผ่าน",
                    icon: "mdi-account-key",
                    router: "/askPassword"
                },
                {
                    text: "รายงาน",
                    icon: "mdi-clipboard-text",
                    router: "/reportAdmin"
                }, 
                {
                    text: "ออกจากระบบ",
                    icon: "mdi-logout",
                    router: "/"
                },

            ],

            txt: 'Hello World'

        };
    },
    props: {
        icon: {
            default: 'mdi-view-dashboard',
        },
        name: {
            default: 'Menu',
        }
    },
    /*------------------------- สิ่งทที่อยู่ในนี้จะถูกรัยเมื่อโหลด ------------------------------------------*/
    mounted: async function () {
        /**** เรียกใช้ methods ชื่อ load() */
        await this.load();
    },
    /*------------------------- กระทำการตอน router ถูกโหลดเข้ามา------------------------------------------*/
    async beforeRouteEnter(to, from, next) {
        next()
    },
    /*-------------------------ใช้จัดการ operation  หรือ คำนวณค่าต่างๆ (คล้าย methods)------------------------------------------*/
    computed: {

    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        /******* Methods default run ******/
        load: async function () {}
    },
}
</script>

<style  scoped>

</style>
