var  carousel = new Vue({
    el: "#container",
    data: {
        activeSlide: 0,
        slides: [
            {
                image: "img/01.jpg",
                title: "Svezia",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
            },

            {
                image: "img/02.jpg",
                title: "Svizzera",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
            },

            {
                image: "img/03.jpg",
                title: "Gran Bretagna",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
            },

            {
                image: "img/04.jpg",
                title: "Germania",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
            },

            {
                image: "img/05.jpg",
                title: "Paradine",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
            },
        ],
    },
    methods: {
        nextSlide: function() {
            if (this.activeSlide === this.slides.length - 1) {
                this.activeSlide = 0;
            } else {
                this.activeSlide ++;
            }
        },
        prevSlide: function() {
            if (this.activeSlide === 0) {
                this.activeSlide = this.slides.length - 1;
            } else {
                this.activeSlide --;
            }
        }
    }
});