import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        agendaText: {},
        tunaText: {
            'nl' : "Tuna Ciudad de Luz is een studentenmuziekvereniging van de TU Eindhoven. De Tuna is opgericht in 1964 en is daarmee de oudste Tuna buiten Spanje en Portugal. Een Tuna is een groep studenten die behalve studeren ook Spaanse volksmuziek maken. In Spanje heeft bijna elke universiteit een tunagroep, vaak zelfs voor elke faculteit één. Dat een Nederlandse universiteit zoals de TU/e een tunagroep heeft is uniek. Wat begon als een studentengrap, bleek te groeien tot een volwaardige en succesvolle studentenvereniging. Om onze muzikaliteit op een hoog peil te kunnen houden, en omdat het nu eenmaal gezellig is, repeteren we elke dinsdag vanaf 21.00 uur in De Zwarte Doos. Zin om de sfeer eens te proeven? Kom zeker eens langs!",
            'en' : "Tuna Ciudad de Luz is a student association of the TU Eindhoven. The Tuna was founded in 1964, which makes it the oldest Tuna outside of the Iberian peninsula. A Tuna group consists of students who make Spanish folk music.. In Spain, almost every university has its own Tuna, often every faculty even has one. A Tuna group at a Dutch university like TU/e is unique. What started as a joke by students grew to be a full-fledged and successful student association. To keep our musicality at a high level, and because it’s fun, we rehearse every Tuesday from 21:00 in De Zwarte Doos. Do you want to see how it’s done? Be sure to come by!"
        },
        muziekText: {
            'nl' : "Het maken van muziek is één van de belangrijkste activiteiten binnen de vereniging. Elke dinsdag repeteren we in De Zwarte Doos om het niveau te houden en nieuwe nummers te leren. Je hoeft geen ervaring met een instrument of zingen te hebben, want we kunnen je dit gewoon aanleren. Genoeg Tuno's zijn bij de Tuna gekomen zonder ooit een instrument aangeraakt te hebben. Als je al iets kan spelen, bijvoorbeeld gitaar, is dat mooi meegenomen! Dan is er ook de mogelijkheid om typisch Spaanse instrumenten te leren spelen, zoals Bandurria en Laud. Voor iedereen is iets leuks te vinden!",
            'en' : "Making music is one of the most important activities of the association. Every Tuesday, we rehearse in De Zwarte Doos to practice our repertoire and learn new songs. To join the Tuna, you don’t need to have experience playing an instrument or singing, because you can learn this with the Tuna. Many Tunos have joined the Tuna without any musical experience. If you already play an instrument, like a guitar, that is just a nice bonus! In addition, there is the possibility to learn typical Spanish instruments, like Bandurria and Laud. There is something for everyone! "
        },
        gezelligheidText: {
            'nl' : "Naast muziek maken is gezelligheid natuurlijk ook belangrijk in een studentenvereniging. Elke dinsdag eten we samen op ons verenigingshuis voordat we naar de repetitie gaan. En bij de repetitie pakken we er ook graag een biertje bij. \n" +
            "Daarnaast hebben we ook andere activiteiten. We doen zo’n 25 optredens per jaar en dat wordt altijd gecombineerd met eten, drinken en stappen. \n" +
            "Ook gaan we elk jaar 1 of 2 keer op reis naar Spanje! Vamos a la fiesta! Dan zoeken we bevriende Tuna groepen op en doen we mee in het festival waar meerdere Tuna groepen samen komen om muziek te maken en te feesten tot diep in de nacht! ",
            'en' :  "In addition to making music, socializing is of course an important part of a student association. Every Tuesday we have dinner together at our association house before we go to the rehearsal and we also like to grab a beer during the rehearsal. \n" +
            "Besides that, there are other activities. We have about 25 performances per year and this always goes hand in hand with having a meal, drinking and going out. \n" + 
            "Also, every year we travel 1 or 2 times to Spain! Vamos a la fiesta! When in Spain, we visit befriended Tuna groups and join in festivals where multiple groups come together to make music and party until late in the night!"
        },
        studerenText: {
            'nl' : "Ook bij de Tuna staat studie altijd voorop. Rond examentijd is het altijd rustiger, zodat er op tentamens gefocust kan worden. Ook zit er op bijna elke studie wel een Tuno. Aangezien we een kleine vereniging zijn kent iedereen elkaar goed en is iedereen altijd bereid elkaar te helpen als dat nodig is.",
            'en' : "Even within the Tuna, studying comes first. During the exam period, it is always more laid back, so everyone can focus on the exams. For almost every study, there is a Tuno that studies it. As we are a small association everyone knows each other well and is willing to help with studying if needed."
        },
        agenda: {
            'nl' : "<ul>" +
            "                        <li>Dinsdag: Campus market</li>\n" +
            "                        <li>Woensdag: Campus market</li>\n" +
            "                        <li>Donderdag: De Zwarte doos</li>\n" +
            "                        <li>Vrijdag: De Zwarte doos</li>\n" +
            "                    </ul>",
            'en' : "<ul>" +
            "                        <li>Tuesday: Campus market</li>\n" +
            "                        <li>Wednesday: Campus market</li>\n" +
            "                        <li>Thursday: De Zwarte doos</li>\n" +
            "                        <li>Friday: De Zwarte doos</li>\n" +
            "                    </ul>",
        },
    },
    getters:  {
        getAgendaText: (state) => (english) => english ? state.agendaText.en : state.agendaText.nl,
        getTunaText: (state) => (english) => english ? state.tunaText.en : state.tunaText.nl,
        getMuziekText: (state) => (english) => english ? state.muziekText.en : state.muziekText.nl,
        getGezelligheidText: (state) => (english) => english ? state.gezelligheidText.en : state.gezelligheidText.nl,
        getStuderenText: (state) => (english) => english ? state.studerenText.en : state.studerenText.nl,
        getAgenda: (state) => (english) => english ? state.agenda.en : state.agenda.nl,
    }
})