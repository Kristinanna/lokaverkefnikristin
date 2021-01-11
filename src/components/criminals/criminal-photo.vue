<template>
    <v-container>
        <form method="POST"  enctype="multipart/form-data">
            <div> 
            <label>Select your picture:</label> <input type="file" name="image" ref="file" @change="onSelect" />
            </div>
            <div> 
                <v-btn @click="sub">Submit</v-btn> 
            </div>
        </form>
    </v-container>
</template>

<script>
import api from '../../data/api'
export default {
    data() {
        return {
            file: undefined,
        }
    },
    methods: {
        sub() {
            console.log('subbing');
            const formData = new FormData();
            formData.append('image', this.file);

            api.postPhoto(formData).then(res => {
                console.log(res, ' things worked out great');
                // Here is the ideal place, to set the image property on criminals ?
            }).catch(error => console.log('things did not work out so great', error))
        },
        onSelect() {
            this.file = this.$refs.file.files[0];
        },

    }
}
</script>

<style>

</style>