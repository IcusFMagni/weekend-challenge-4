var app = angular.module('GalleryApp', [])

app.controller('ImageController', ['$http', function($http){
    var self = this
    self.image1 = "images/image1.jpg"
    self.imageArray1 = [{number:1, description:"Rayegene at the lake sitting with me around the fire", showDescription:false, like:0},
                        {number:2, description:"Lumiere and Harley Quinn hanging out at Convergence", showDescription:false, like:0},
                        {number:3, description:"Rayegene and Radish (our amazing Kitty)", showDescription:false, like:0}],

    self.imageArray2 = [{number:4, description:"Rayegene and I at memorial day in Sturgis", showDescription:false, like:0},
                        {number:5, description:"Rayegene working on our light installation at The Soap Factory for GlitchCON", showDescription:false, like:0},
                        {number:6, description:"Rayegene and their family", showDescription:false, like:0}],

    self.imageArray3 = [{number:7, description:"Rayegene and I having breakfast in St Paul", showDescription:false, like:0}]

    




    self.likePic = function (pic) {
        pic.like++
    }
}]);