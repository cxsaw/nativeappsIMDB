<template>
	<Page class="page">
		<ActionBar title="Split View"></ActionBar>
 
		<GridLayout :columns="isTablet ? '*, 2*' : '*'">
			<GridLayout col="0" class="left-column">
 
				<ListView class="list-group" for="item in pokemon" @itemTap="select">
					<v-template>
						<GridLayout class="list-group-item" rows="*" columns="auto, *">
							<Image row="0" col="0" :src="item.src" class="thumb"></Image>
							<Label row="0" col="1" :text="item.name"></Label>
						</GridLayout>
					</v-template>
				</ListView>
			</GridLayout>
 
			<StackLayout col="1" class="p-20" v-if="isTablet">
				<Label class="h1 m-b-10" :text="selected.name"></Label>
				<Image height="200" :src="selected.src" class="thumb img-circle"></Image>
				<Label class="body" textWrap="true" :text="selected.description"></Label>
			</StackLayout>
		</GridLayout>
	</Page>
</template>

<script>
const DeviceType = require("tns-core-modules/ui/enums").DeviceType;
const isTablet =
    require("tns-core-modules/platform").device.deviceType == DeviceType.Tablet;
import DetailPage from "./Details";
const movie = require("../data").movie;

export default {
    data() {
        return { isTablet: isTablet, movie: movie, selected: {} };
    },
    methods: {
        select: function(event) {
           
            const selected = movie[event.index];
            if (isTablet) {
                this.selected = selected;
            } else {
                // And navigate phone users.
                this.$navigateTo(DetailPage, {
                    props: { selected: selected }
                });
            }
        }
    }
};
</script>

<style scoped>
	.home-panel {
		vertical-align: center;
		font-size: 20;
		margin: 15;
	}

	.description-label {
		margin-bottom: 15;
	}
</style>
