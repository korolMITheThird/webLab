<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/simple-adaptive-slider.css">
    <script defer src="js/simple-adaptive-slider.js"></script>
    <script defer src="js/dragndrop.js"></script>
    <script defer src="js/DOMContentLoaded.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=PT+Serif:ital@1&family=Roboto:wght@300;700&display=swap" rel="stylesheet">
    <script>
      document.addEventListener('DOMContentLoaded', function () {
        new SimpleAdaptiveSlider('#slider1', {
          loop: true,
          autoplay: true,
          interval: 5000,
          swipe: true,
        });
        new SimpleAdaptiveSlider('#slider2', {
          loop: true,
          autoplay: false,
          interval: 5000,
          swipe: true,
        });
      });
    </script>
  </head>
  <body>
    {preloader}
    {header}
    {slide1}
    {slide2}
    {slide3}
    {slide4}
    {slide5}
  </body>
</html>