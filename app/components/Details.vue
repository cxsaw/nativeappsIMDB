<template>
	<Page class="page">
		<ActionBar :title="selected.name"></ActionBar>
		<StackLayout col="1" class="p-20">
			<Label class="h1 m-b-10" :text="selected.name"></Label>
			<Image height="150" :src="selected.src" class="thumb img-circle"></Image>
            <Label class="body" textWrap="true" :text="selected.year"></Label>
			<Label   textWrap="true" class="animated infinite bounce delay-2s" :text="selected.synopsis"></Label>
            <Image height="50"  src= "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1024px-Gold_Star.svg.png" >
            </Image>
            <Label class="body" textWrap="true" :text="selected.rate" ></Label>
		</StackLayout>
	</Page>
</template>

<script>
export default {
  props: ["selected"]
};
</script>

<style>
</style>
