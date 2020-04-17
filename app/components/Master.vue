<template>
	<Page class="page">
		<ActionBar title="Top 100 IMDB V0.4-b"></ActionBar>
 
		<GridLayout :columns="isTablet ? '*, 2*' : '*'">
			<GridLayout col="0" class="left-column">
 				<!--Display item foreach item in movie list-->
				<ListView class="list-group" for="item in movie" @itemTap="select">
					<v-template>
						<GridLayout class="list-group-item" rows="*" columns="auto, *">
							<Image row="0" col="0" :src="item.src" class="thumb"></Image>
							<Label row="0" col="1" :text="item.name" class="titleList"></Label>
                                <Label row="0" col="2" :text="item.year" style="text-align : right"></Label>
						</GridLayout>
					</v-template>
				</ListView>
			</GridLayout>
			<!--Display item of thelistview if in tablet mode-->
			<StackLayout col="1" class="p-20" v-if="isTablet">
				<Label class="h1 m-b-10" :text="selected.name"></Label>
				<Image height="200" :src="selected.src" class="thumb img-circle"></Image>
				<Label class="body" textWrap="true" :text="selected.description"></Label>
			</StackLayout>
            <Button class="background" left="0" top="0" width="100%" height="100%"
                @tap="addMovie" />
		</GridLayout>
	</Page>
</template>
<style scoped lang="scss">
    @import '~@nativescript/theme/scss/variables/grey';//not working
	
    
    .fas {
        @include colorize($color: accent);
    }

    .info {
        font-size: 20;
        horizontal-align: center;
        vertical-align: center;
    }
</style>

<script>
//import Details and addmovie pages
import Details from "./Details";
import AddMovie from "./AddMovie";

//check the device
const DeviceType = require("tns-core-modules/ui/enums").DeviceType;
const isTablet =
	require("tns-core-modules/platform").device.deviceType == DeviceType.Tablet;
//array from data.js file
const movie = require("../data").movie;

export default {
    data() {
		//return istablet bool, movie array,  selected
        return { isTablet: isTablet, movie: movie, selected: {} };
    },
    methods: {
        select: function(event) {
		   
		   //if is tablet  
		   		//display in same page
            const selected = movie[event.index];
            if (isTablet) {
				this.selected = selected;
				console.log("Mode tablette - affichage du résumé");
			} //if not
			//display in detail page
			else {
                this.$navigateTo(Details, {
					props: { selected: selected }
					
				})
				;
				console.log("Mode Téléphone - affichage du résumé");
            }
		},
		//when user click on the add movie button
		addMovie() {
                this.$navigateTo(addMovie, {
					props: { selected: selected 
					}});
                console.log("Ajout d'un film");
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
