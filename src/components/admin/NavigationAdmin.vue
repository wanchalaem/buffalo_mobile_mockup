<template>
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
            <!-- <v-list-item-group v-model="item" color="green"> -->
                <v-list-item-group color="green">
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

    <v-app-bar color="white" elevate-on-scroll app clipped-left>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <h3>
            &nbsp;{{name}}
        </h3>
    </v-app-bar>

</div>
</template>

<script>
export default {
    name: 'Root',
    components: {

    },
    props: {

    },
    data() {
        return {
            drawer: null,
            items: [
                {
                    text: "หน้าหลัก",
                    icon: "mdi-view-dashboard-outline",
                    router: "/admin/home"
                },
                {
                    text: "ข้อมูลส่วนตัว",
                    icon: "mdi-account",
                    router: "/admin/admindetail"
                },
                {
                    text: "จัดการเกษตรกร",
                    icon: "mdi-account-group",
                    router: "/admin/userprofile"
                }, 
                {
                    text: "จัดการผู้ดูแลระบบ",
                    icon: "mdi-account-cog",
                    router: "/admin/adminedit"
                },
                {
                    text: "คำขอรหัสผ่าน",
                    icon: "mdi-account-key",
                    router: "/admin/password"
                },
                {
                    text: "รายงาน",
                    icon: "mdi-clipboard-text",
                    router: "/admin/report"
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
    mounted: async function () {
        await this.load();
    },
    async beforeRouteEnter(to, from, next) {
        next()
    },
    computed: {

    },
     methods: {
        load: async function () {}
    },
}
</script>

<style  scoped>

</style>
