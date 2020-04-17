<template>
	<Page class="page">
		<ActionBar title="Ajouter un nouveau film"></ActionBar>
		<StackLayout col="1" class="p-20">
			 <TextField v-model="textFieldValue" hint="Entrez titre" />
             <TextField v-model="textFieldValue" hint="Année de réalisation" />
             <TextField v-model="textFieldValue" hint="" />
             <Button class="background" left="0" top="0" width="100%"
                height="100%" @tap="valide" />
             <Button class="background" left="0" top="0" width="100%"
                height="100%" @tap="cancel" />
		</StackLayout>
	</Page>
</template>

<script>
    export default {
        data() {
            return {
                textFieldValue: ""
            };
        },

        methods: {
            cancel() {
                this.$emit("togglesearch");
                console.log("cancel adding movie");
            },
            valid() {
                //add textfield from 
                //add item to array
                console.log("Valide adding movie");
            }
        }
    };
</script>