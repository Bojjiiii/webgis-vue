import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        mapView: null,
    },
    getters:{
        getMapView: state => {
            return state.mapView
        }
    },
    mutations:{
        setMapView(state, mapView){
            state.mapView = mapView
        }
    }
})