<template>
<div class="pa-3">
    <v-app-bar color="white" flat>
        <h1 class="menu">
            <v-icon class="icon">{{icon}}</v-icon>&nbsp;{{name}}
        </h1>
        <v-spacer></v-spacer>
        <v-menu bottom offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn fab class="ma-2" v-bind="attrs" v-on="on">
                    <v-avatar>
                        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                    </v-avatar>
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="(item, i) in items1" :key="i" @click="() => {}">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</div>
</template>

<script>
export default {
    data: () => ({
        items1: [{
                title: 'ข้อมูลส่วนตัว',
            },
            {
                title: 'ออกจากระบบ',
            },
        ],

    }),
    props: {
        icon: {
            default: 'mdi-view-dashboard',
        },
        name: {
            default: 'Menu',
        }
    }

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
</style>
