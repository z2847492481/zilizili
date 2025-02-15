<script setup lang="ts">

</script>

<template>
    <nav class="fixed-navbar">
        <div class="nav-container">
            <!-- 导航内容 -->
        </div>
    </nav>
</template>

<style lang="scss" scoped>
.fixed-navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 64px;
    background: #992727;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    /* 底部阴影 */
    z-index: 1000;
}

.nav-container {
    min-width: 1100px;
    /* 最小宽度限制 */
    margin: 0 auto;
    /* 水平居中 */
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 20px;
    /* 两侧留白 */
}
</style>
