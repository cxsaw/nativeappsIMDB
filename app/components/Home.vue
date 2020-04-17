<template>
    <Page>
        <ActionBar>
            <Label text="Home"></Label>
        </ActionBar>

        <GridLayout>
            <Label class="info">
                <FormattedString>
                    <Span class="fas" text.decode="&#xf135; "/>
                    <Span :text="message"/>
                </FormattedString>
            </Label>
        </GridLayout>
    <transition name="fade" mode="out-in">
         <router-view class="view"></router-view>
    </transition>
    </Page>
</template>

<script>
export default {
  name: "App"
};
</script>

<style scoped lang="scss">
    @import '~@nativescript/theme/scss/variables/grey';

    // Custom styles
    .fas {
        @include colorize($color: accent);
    }

    .info {
        font-size: 20;
        horizontal-align: center;
        vertical-align: center;
    }
</style>
