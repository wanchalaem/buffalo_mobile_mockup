<template>
<div class="pa-3">
    <v-app-bar color="white" flat>
        
        <h1 class="menu ">
            <v-icon @click="$router.push('reportAdmin')" class="icon">{{icon}}</v-icon>&nbsp;{{name}}
        </h1>
        
        <v-spacer></v-spacer>
      
    </v-app-bar>
</div>
</template>

<script>
export default {
    data: () => (
        {items1: [
            {
                title: 'ออกจากระบบ',
            },
        ],
       

    }),
    props: {
        icon: {
            default: 'mdi-keyboard-backspace',
        },
        name: {
            default: 'Menu',
        }
        
    }

}
</script>

<style>
.menu {
    font-size: 20px !important;
}

.icon {
    font-size: 26px !important;
}

.ll {
    font-weight: 100 !important;
}
</style>
