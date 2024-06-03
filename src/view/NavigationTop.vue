<template>
    <div class="navTop">
        <div class="navlog">
            <div class="left">
            </div>
            <div class="right">
                <form action="https://www.so.com/s" method="get" target="_blank">
                    <input type="text" placeholder="请输入关键字" name="q" class="value">
                    <input type="submit" value="搜索" class="submit">
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">


</script>

<style lang="scss" scoped>
.navTop {
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
    min-width: 1200px;
    .navlog {
        min-width:1200px ;
        padding: 20px 200px;
        display: flex;
        justify-content: space-between;
        flex-grow: row nowrap;

        .left {
            width: 207px;
            height: 42px;
            background: url("../assets/imgs/log.png");
            background-repeat: no-repeat;
        }

        .right {
            height: 100%;

            form {
                display: flex;
                align-items: center;
            }

            .value {
                height: 44.5px;
                width: 310px;
                padding: 0 10px;
                transition: border-color 0.3s;
                border: 2px solid #ccc;
                outline: none;
                border-radius: 1px 0 0 1px;
                border-right: none;
            }

            .value:focus {
                border-color: rgb(55, 181, 248);
            }

            .submit {
                height: 48px;
                /* 与输入框高度匹配 */
                padding: 0 20px;
                background-color: rgb(240, 240, 240);
                cursor: pointer;
                font-size: 14px;
                border: 2px solid #ccc;
                border-left: none;
                transition: background-color 0.3s;
                border-radius: 0 1px 1px 0;
            }

            .submit:hover {
                background-color: #e0e0e0;
            }
        }
    }
}
</style>