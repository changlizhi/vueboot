<template>
    <div>
        <ul class='daohang'>
            <li>
                <a v-link="{path:'/usetabs'}"
                   style='font-size: 22px'>usetabs
                </a>
            </li>
            <li>
                <a v-link="{path:'/useslider'}"
                   style='font-size: 22px'>useslider
                </a>
            </li>
            <li>
                <a v-link="{path:'/usenavbar'}"
                   style='font-size: 22px'>usenavbar
                </a>
            </li>
            <li>
                <a v-link="{path:'/usealert'}"
                   style='font-size: 22px'>usealert
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
  export default{}
</script>
<style scoped>
    .daohang {
        padding: 30px 20px;
    }

    .daohang li {
        line-height: 30px;
    }

    .daohang a:hover {
        text-decoration: none;
    }
</style>
