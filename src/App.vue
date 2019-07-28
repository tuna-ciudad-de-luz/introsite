<template>
    <div class="background">
        <Navbar></Navbar>
        <modal :agenda="agenda"></modal>
        <banner-image :no-margin="true">
            <img src="./assets/foto6.jpg">
        </banner-image>
        <div class="container">
            <Paragraph title="Agenda" id="home">
                <template v-slot:paragraphOne>
                    <div class="map-wrapper">
                        <mgl-map :accessToken="accessToken" :mapStyle="mapStyle" :center="[5.4831,51.4445]"
                                 :zoom="13.75">
                            <mgl-marker v-for="marker in markersAgenda" :coordinates="marker.coordinates"
                                        :key="marker.place"
                            >
                                <mgl-popup>
                                    <div>
                                        <div>
                                            {{ marker.when + ": " + marker.place}}
                                        </div>
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
            <img src="./assets/foto8.jpg">
        </banner-image>
        <div class="container">
            <Paragraph title="De Tuna" id="tuna" :paragraph-one="tunaText">
                <template v-slot:paragraphTwo>
                    <div class="map-wrapper">
                        <mgl-map :accessToken="accessToken" :mapStyle="mapStyle" :center="markerPeapod.coordinates"
                                 :zoom="14.7">
                            <mgl-marker :coordinates="markerPeapod.coordinates">
                                <mgl-popup :showed="true">
                                    <div>
                                        <h6>{{ markerPeapod.place }}</h6>
                                        <p>{{ markerPeapod.address }}</p>
                                    </div>
                                </mgl-popup>
                            </mgl-marker>
                        </mgl-map>

                    </div>
                </template>
            </Paragraph>
        </div>
        <banner-image>
            <img src="./assets/foto2.jpg">
        </banner-image>
        <div class="container">
            <Paragraph title="Muziek" id="muziek" :full-width="true" :paragraph-one="muziekText">
                <template v-slot:paragraphTwo>
                    <div class="videoWrapper">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/HlKRJZ_SoxM" frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                    </div>
                </template>
            </Paragraph>
        </div>
        <banner-image>
            <img src="./assets/foto4.jpg">
        </banner-image>
        <div class="container">
            <Paragraph title="Gezelligheid" id="gezelligheid" :paragraph-one="gezelligheidText">
                <template v-slot:paragraphTwo>
                    <div class="map-wrapper">
                        <mgl-map :accessToken="accessToken" :mapStyle="mapStyle" :center="[-8.75, 36.1555]" :zoom="3.6">
                            <mgl-marker v-for="marker in markersSpanje" :key="marker.place"
                                        :coordinates="marker.coordinates">
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
            <img src="./assets/foto1.jpg">
        </banner-image>
        <div class="container">
            <Paragraph title="Studeren" id="studeren" :full-width="true" :paragraph-one="studerenText"></Paragraph>
        </div>
        <banner-image>
            <img src="./assets/foto12.jpg">
        </banner-image>
        <div class="container">
            <Paragraph title="Contact" id="contact" :full-width="true">
                <template v-slot:paragraphOne>
                    <form role="form" id="contactForm">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="name" class="h5">Name</label>
                                <input type="text" class="form-control" id="name" placeholder="Naam">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="email" class="h5">Email</label>
                                <input type="email" class="form-control" id="email" placeholder="Email">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputAddress" class="h5">Telefoonnummer</label>
                            <input type="tel" class="form-control" id="inputAddress" placeholder="Telfoonnummer">
                        </div>
                        <button type="submit" class="btn btn-danger ml-auto">Verstuur</button>
                    </form>
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
    import {MglMap, MglMarker, MglPopup} from "vue-mapbox";

    export default {
        name: 'app',
        components: {
            Modal,
            BannerImage,
            Paragraph,
            Navbar,
            MglMap,
            MglMarker,
            MglPopup
        },
        data: function () {
            return {
                agendaText: "",
                tunaText: "Tuna Ciudad de Luz is een studentenmuziekvereniging van de TU Eindhoven. De Tuna is opgericht in 1964 en is daarmee de oudste Tuna buiten Spanje en Portugal. Een Tuna is een groep studenten die behalve studeren ook Spaanse volksmuziek maken. In Spanje heeft bijna elke universiteit een tunagroep, vaak zelfs voor elke faculteit één. Dat een Nederlandse universiteit zoals de TU/e een tunagroep heeft is uniek. Wat begon als een studentengrap, bleek te groeien tot een volwaardige en succesvolle studentenvereniging. Om onze muzikaliteit op een hoog peil te kunnen houden, en omdat het nu eenmaal gezellig is, repeteren we elke dinsdag vanaf 21.00 uur in café de Peapod, Aalsterweg 56. Zin om de sfeer eens te proeven? Kom zeker eens langs!",
                muziekText: "Het maken van muziek is één van de belangrijkste activiteiten binnen de vereniging. Elke dinsdag repeteren we in Café de Peapod (maps plaatje) om het niveau te houden en nieuwe nummers te leren. Je hoeft geen ervaring met een instrument of zingen te hebben, want we kunnen je dit gewoon aanleren. Genoeg Tuno's zijn bij de Tuna gekomen zonder ooit een instrument aangeraakt te hebben. Als je al iets kan spelen, bijvoorbeeld gitaar, is dat mooi meegenomen! Dan is er ook de mogelijkheid om typisch Spaanse instrumenten te leren spelen, zoals Bandurria en Laud. Voor iedereen is iets leuks te vinden!",
                gezelligheidText: "Naast muziek maken is gezelligheid natuurlijk ook belangrijk in een studentenvereniging. Elke dinsdag eten we samen op ons verenigingshuis voordat we naar de repetitie gaan. En bij de repetitie pakken we er ook graag een biertje bij. \n" +
                    "Daarnaast hebben we ook andere activiteiten. We doen zo’n 25 optredens per jaar en dat wordt altijd gecombineerd met eten, drinken en stappen. \n" +
                    "Ook gaan we elk jaar 1 of 2 keer op reis naar Spanje! Vamos a la fiesta! Dan zoeken we bevriende Tuna groepen op en doen we mee in het festival waar meerdere Tuna groepen samen komen om muziek te maken en te feesten tot diep in de nacht! ",
                studerenText: "Ook bij de Tuna staat studie altijd voorop. Rond examentijd is het altijd rustiger, zodat er op tentamens gefocust kan worden. Ook zit er op bijna elke studie wel een Tuno. Aangezien we een kleine vereniging zijn kent iedereen elkaar goed en is iedereen altijd bereid elkaar te helpen als dat nodig is.",
                agenda: "<ul>" +
                    "                        <li>Maandag: Limbopad</li>\n" +
                    "                        <li>Dinsdag: KOE-veld</li>\n" +
                    "                        <li>Woensdag: Luna</li>\n" +
                    "                        <li>Donderdag: Markt</li>\n" +
                    "                    </ul>" +
                    "                    <ul>" +
                    "                        <li>19 september: Borrel op de TU/e</li>\n" +
                    "                        <li>20 september: Kroegen in het centrum van Eindhoven</li>\n" +
                    "                        <li>21 september: Markt</li>\n" +
                    "                        <li>22 september: Markt</li>\n" +
                    "                    </ul>",
                mapStyle: 'mapbox://styles/mapbox/outdoors-v11',
                markersAgenda: {
                    Limbopad: {
                        coordinates: [5.4828, 51.4457],
                        place: "Limbopad",
                        when: "Maandag"
                    },
                    KOEVeld: {
                        coordinates: [5.4845, 51.4472],
                        place: "KOE-veld",
                        when: "Dinsdag"
                    },
                    Luna: {
                        coordinates: [5.4876, 51.4491],
                        place: "Luna",
                        when: "Woensdag"
                    },
                    Markt: {
                        coordinates: [5.4785, 51.4393],
                        place: "Markt",
                        when: "Donderdag, 20, 21 & 22 september"
                    },
                    TueTerrein: {
                        coordinates: [5.4886, 51.4484],
                        place: "Tue terrein",
                        when: "19 september"
                    }
                },
                markerPeapod: {
                    coordinates: [5.4863, 51.4267],
                    place: "Cafe bar Peapod",
                    address: "Aalsterweg 56,\n 5615 Eindhoven"
                },
                markersSpanje: {
                    Tenerife: {
                        coordinates: [-16.2537, 28.4895],
                        place: "Santa Cruz de Tenerife"
                    },
                    SanSebastian: {
                        coordinates: [-1.9816, 43.3133],
                        place: "San Sebastian"
                    },
                    Bilbao: {
                        coordinates: [-2.9385, 43.29],
                        place: "Bilbao"
                    },
                    Barcelona: {
                        coordinates: [-0.382, 39.5077],
                        place: "Barcelona"
                    },
                    Madrid: {
                        coordinates: [-3.7027, 40.4193],
                        place: "Madrid"
                    },
                    Porto: {
                        coordinates: [-8.6144, 41.1435],
                        place: "Porto"
                    },
                    Valencia: {
                        coordinates: [-0.3764, 39.4698],
                        place: "Valencia"
                    },
                    Murcia: {
                        coordinates: [-1.1292, 37.9906],
                        place: "Murcia"
                    },
                    Sevilla: {
                        coordinates: [-5.9828, 37.3848],
                        place: "Sevilla"
                    },
                    Granada: {
                        coordinates: [-3.6058, 37.1857],
                        place: "Granada"
                    },
                    Jerez: {
                        coordinates: [-6.1355, 36.6853],
                        place: "Jerez de la Frontera"
                    },
                    Almeria: {
                        coordinates: [-2.4584, 36.842],
                        place: "Almería"
                    },
                    Peniscola: {
                        coordinates: [0.4058, 40.3581],
                        place: "Peniscola"
                    }
                }
            }
        },
        created() {
            this.mapbox = Mapbox;
        }
    }
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
