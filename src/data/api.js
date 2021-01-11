import axios from 'axios'

const lokeAPI = axios.create({
    baseURL: 'http://159.65.88.14/api/loke',
    params: {
        projectId: 'kristinlokaverkefni', // Ath, þesssu þarftu að breyta í það projectId sem þú villt nota.
        
    }
})

//#region Criminals
export default {
    getCriminals() {
        return lokeAPI.get('/criminals');
    },
    getCriminalById(id) {
        return lokeAPI.get(`criminals/${id}`);
    },
    postCriminal(criminal) {
        return lokeAPI.post('/criminals', criminal);
    },
    putCriminal(criminal) {
        return lokeAPI.put('/criminals', criminal);
    },
    delCriminal(id) {
        return lokeAPI.delete(`/criminals/${id}`);
    },

    postPhoto(formData) {
        return lokeAPI.post('upload', formData);
    }
}
//#endregion