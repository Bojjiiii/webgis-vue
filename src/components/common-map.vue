<template>
  <!-- <div class="map-container"> -->
  <div id="viewDiv" ref="viewDiv">
    <div class="logo">this is logo</div>
  </div>
  <!-- </div> -->
</template>
<style scoped>
#viewDiv {
  outline: none;
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
}
.logo {
  position: absolute;
  height: 200px;
  top: 20px;
  left: 15px;
}
</style>
<script>
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
export default {
  name: "common-map",
  computed: {
      viewInstance: function(){
          return this.$store.getters.getMapView
      }
  },
  methods: {
    //created的时候使用
    createMapView() {
      //创建 Map 对象
      const map = new Map({
        basemap: "osm",
      });
      // 创建MapView
      const view = new MapView({
        map: map,
        center: [120.12792, 30.228932],
        zoom: 13,
      });
      return view
    },
    bindMapView(mapViewInstance,container) {
        mapViewInstance.container = container
        return mapViewInstance
    }
  },
  //挂载时绑定mapview实例
  mounted: function () {
    this.bindMapView(this.viewInstance,this.$refs.viewDiv)
  },
  //mapview实例只创建一次
  created: function () {
      this.$store.commit('setMapView', this.createMapView())
  },
};
</script>