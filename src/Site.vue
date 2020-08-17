<template>
  <div class="background">
    <Navbar></Navbar>
    <modal :agenda="agenda"></modal>
    <banner-image :no-margin="true">
      <img src="./assets/foto6.jpg" />
    </banner-image>
    <div class="container">
      <Paragraph title="Agenda" id="home">
        <template v-slot:paragraphOne>
          <div class="map-wrapper">
            <mgl-map
              :accessToken="accessToken"
              :mapStyle="mapStyle"
              :center="[5.485150,51.446895]"
              :zoom="15"
            >
              <mgl-marker
                v-for="marker in markersAgenda"
                :coordinates="marker.coordinates"
                :key="marker.place"
              >
                <mgl-popup>
                  <div>
                    <div>{{ marker.when + ": " + marker.place}}</div>
                  </div>
                </mgl-popup>
              </mgl-marker>
            </mgl-map>
          </div>
        </template>
        <template v-slot:paragraphTwo>
          <div v-html="agenda"></div>
        </template>
      </Paragraph>
    </div>
    <banner-image photo="8">
      <img src="./assets/foto8.jpg" />
    </banner-image>
    <div class="container">
      <Paragraph title="De Tuna" id="tuna" :paragraph-one="tunaText">
        <template v-slot:paragraphTwo>
          <div class="map-wrapper">
            <mgl-map
              :accessToken="accessToken"
              :mapStyle="mapStyle"
              :center="markerZwarteDoos.coordinates"
              :zoom="14.7"
            >
              <mgl-marker :coordinates="markerZwarteDoos.coordinates">
                <mgl-popup :showed="true">
                  <div>
                    <h6>{{ markerZwarteDoos.place }}</h6>
                    <p>{{ markerZwarteDoos.address }}</p>
                  </div>
                </mgl-popup>
              </mgl-marker>
            </mgl-map>
          </div>
        </template>
      </Paragraph>
    </div>
    <banner-image>
      <img src="./assets/foto2.jpg" />
    </banner-image>
    <div class="container">
      <Paragraph title="Muziek" id="muziek" :full-width="true" :paragraph-one="muziekText">
        <template v-slot:paragraphTwo>
          <div class="videoWrapper">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/HlKRJZ_SoxM"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </template>
      </Paragraph>
    </div>
    <banner-image>
      <img src="./assets/foto4.jpg" />
    </banner-image>
    <div class="container">
      <Paragraph title="Gezelligheid" id="gezelligheid" :paragraph-one="gezelligheidText">
        <template v-slot:paragraphTwo>
          <div class="map-wrapper">
            <mgl-map
              :accessToken="accessToken"
              :mapStyle="mapStyle"
              :center="[-8.75, 36.1555]"
              :zoom="3.6"
            >
              <mgl-marker
                v-for="marker in markersSpanje"
                :key="marker.place"
                :coordinates="marker.coordinates"
              >
                <mgl-popup>
                  <div>
                    <h6>{{ marker.place }}</h6>
                  </div>
                </mgl-popup>
              </mgl-marker>
            </mgl-map>
          </div>
        </template>
      </Paragraph>
    </div>
    <banner-image>
      <img src="./assets/foto1.jpg" />
    </banner-image>
    <div class="container">
      <Paragraph title="Studeren" id="studeren" :full-width="true" :paragraph-one="studerenText"></Paragraph>
    </div>
    <banner-image>
      <img src="./assets/foto12.jpg" />
    </banner-image>
    <div class="container">
      <Paragraph title="Contact" id="contact" :full-width="true">
        <template v-slot:paragraphOne>
          <div role="form" id="contactForm">
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="name" class="h5">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Naam"
                  v-model="name"
                  required
                />
              </div>
              <div class="form-group col-md-6">
                <label for="email" class="h5">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Email"
                  v-model="email"
                  required
                />
              </div>
            </div>
            <div class="form-group">
              <label for="inputAddress" class="h5">Telefoonnummer</label>
              <input
                type="tel"
                class="form-control"
                id="inputAddress"
                placeholder="Telfoonnummer"
                v-model="phone"
                required
              />
            </div>
            <button type="submit" class="btn btn-danger ml-auto" v-on:click="handleForm">Verstuur</button>
          </div>
        </template>
      </Paragraph>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Paragraph from "./components/Paragraph";
import BannerImage from "./components/BannerImage";
import Modal from "./components/Modal";
import Mapbox from "mapbox-gl";
import { MglMap, MglMarker, MglPopup } from "vue-mapbox";
import jQuery from "jquery";

export default {
  name: "app",
  components: {
    Modal,
    BannerImage,
    Paragraph,
    Navbar,
    MglMap,
    MglMarker,
    MglPopup,
  },
  computed: {
    agendaText() {
      return this.$store.getters.getAgendaText(
        this.$route.fullPath.includes("en")
      );
    },
    tunaText() {
      return this.$store.getters.getTunaText(
        this.$route.fullPath.includes("en")
      );
    },
    muziekText() {
      return this.$store.getters.getGezelligheidText(
        this.$route.fullPath.includes("en")
      );
    },
    gezelligheidText() {
      return this.$store.getters.getGezelligheidText(
        this.$route.fullPath.includes("en")
      );
    },
    studerenText() {
      return this.$store.getters.getStuderenText(
        this.$route.fullPath.includes("en")
      );
    },
    agenda() {
      return this.$store.getters.getAgenda(this.$route.fullPath.includes("en"));
    },
  },
  data: function () {
    return {
      mapStyle: "mapbox://styles/mapbox/outdoors-v11",
      markersAgenda: {
        markerZwarteDoos: {
          coordinates: [5.484335, 51.446473],
          place: "De Zwarte Doos",
          when: "Thursday, Friday",
        },
        // Limbopad: {
        //   coordinates: [5.4828, 51.4457],
        //   place: "Limbopad",
        //   when: "Maandag",
        // },
        KOEVeld: {
          coordinates: [5.4845, 51.4472],
          place: "Campus Market",
          when: "Tuesday, Wednesday",
        },
        // Luna: {
        //   coordinates: [5.4876, 51.4491],
        //   place: "Luna",
        //   when: "Woensdag",
        // },
        // Markt: {
        //   coordinates: [5.4785, 51.4393],
        //   place: "Markt",
        //   when: "Donderdag, 20, 21 & 22 september",
        // },
        // Fluxveld: {
        //   coordinates: [5.4904, 51.4469],
        //   place: "Fluxveld",
        //   when: "19 september",
        // },
      },
      markerZwarteDoos: {
        coordinates: [5.484335, 51.446473],
        place: "De Zwarte Doos",
        address: "Den Dolech 2,\n 5612 AZ Eindhoven",
      },
      markersSpanje: {
        Tenerife: {
          coordinates: [-16.2537, 28.4895],
          place: "Santa Cruz de Tenerife",
        },
        SanSebastian: {
          coordinates: [-1.9816, 43.3133],
          place: "San Sebastian",
        },
        Bilbao: {
          coordinates: [-2.9385, 43.29],
          place: "Bilbao",
        },
        Barcelona: {
          coordinates: [2.1734, 41.3851],
          place: "Barcelona",
        },
        Madrid: {
          coordinates: [-3.7027, 40.4193],
          place: "Madrid",
        },
        Porto: {
          coordinates: [-8.6144, 41.1435],
          place: "Porto",
        },
        Valencia: {
          coordinates: [-0.3764, 39.4698],
          place: "Valencia",
        },
        Murcia: {
          coordinates: [-1.1292, 37.9906],
          place: "Murcia",
        },
        Sevilla: {
          coordinates: [-5.9828, 37.3848],
          place: "Sevilla",
        },
        Granada: {
          coordinates: [-3.6058, 37.1857],
          place: "Granada",
        },
        Jerez: {
          coordinates: [-6.1355, 36.6853],
          place: "Jerez de la Frontera",
        },
        Almeria: {
          coordinates: [-2.4584, 36.842],
          place: "Almería",
        },
        Peniscola: {
          coordinates: [0.4058, 40.3581],
          place: "Peniscola",
        },
      },
      name: "",
      email: "",
      phone: "",
    };
  },
  methods: {
    handleForm() {
      jQuery.ajax({
        type: "POST",
        url: "/process.php",
        data:
          "name=" +
          this.name +
          "&email=" +
          this.email +
          "&message=" +
          this.phone,
        success: function (text) {
          if (text == "success") {
            alert("Succes");
            this.name = "";
            this.email = "";
            this.phone = "";
          } else {
            alert("Something went wrong, try again");
          }
        },
      });
    },
  },
  created() {
    this.mapbox = Mapbox;
  },
};
</script>

<style>
.background {
  background: #ffffff url("./assets/lustrum_logo.png") fixed center no-repeat;
}

.map-wrapper {
  height: 400px;
}

.videoWrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
}

.videoWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
