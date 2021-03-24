var app = new Vue(
  {
    el: '#root',
    data: {
      message: "Vue.js",
      img: "https://vuejs.org/images/logo.png",
      link: "https://vuejs.org/",
      color: "primary_color"
    },
    methods: {
      mouseOver: function(){
        if (this.color == "primary_color") {
          this.color = "secondary_color";
        } else{
          this.color = "primary_color";
        }
      },
      mouseLeave: function(){
        if (this.color == "secondary_color") {
          this.color = "primary_color";
        } else{
          this.color = "secondary_color";
        }
      }
    }
  }
);
