function myFunction() {
    var x = document.getElementById("video-overlay");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  mapboxgl.accessToken = 'pk.eyJ1IjoiYXJjaDgiLCJhIjoiY2x4MzN6aDRwMHR5ZTJqcTdteGlvdjljZCJ9.A_v9NbSSGCqv-6M996rKyQ';

  //code from step 3 will go here
  
  const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/arch8/clx365c4o007301qsai6m2kfu',
      center: [88.506506, 27.451761],
      zoom: 15,
    });

    const geojson = {
      type: 'FeatureCollection',
      features: [
        { type: 'Feature', geometry: { type: 'Point', coordinates: [88.50385, 27.445] }, properties: { sectionId: 'section1', title: 'Mapbox', description: 'Sungsa Lee' } },
        { type: 'Feature', geometry: { type: 'Point', coordinates: [88.50262, 27.44506] }, properties: { sectionId: 'section2', title: 'Mapbox', description: 'Chhoten' } },
        { type: 'Feature', geometry: { type: 'Point', coordinates: [88.50585, 27.4519] }, properties: { sectionId: 'section1', title: 'Mapbox', description: 'Longchuk' } },
        { type: 'Feature', geometry: { type: 'Point', coordinates: [88.50152, 27.45488] }, properties: { sectionId: 'section2', title: 'Mapbox', description: 'Ronglee' } },
      ],
      people: [
        { type: 'Feature', geometry: { type: 'Point', coordinates: [88.50217, 27.44545] }, properties: { title: 'Mapbox', description: 'Naku Tsering' } },
        { type: 'Feature', geometry: { type: 'Point', coordinates: [88.50546, 27.44621] }, properties: { title: 'Mapbox', description: 'Kinga Lepcha' } },
        { type: 'Feature', geometry: { type: 'Point', coordinates: [88.50389, 27.44642] }, properties: { title: 'Mapbox', description: 'Norkit & Dukboo Lepcha' } },
        { type: 'Feature', geometry: { type: 'Point', coordinates: [88.50144, 27.4556] }, properties: { title: 'Mapbox', description: 'Anum Chewang' } },
        { type: 'Feature', geometry: { type: 'Point', coordinates: [88.50587, 27.4535] }, properties: { title: 'Mapbox', description: 'Bumthing' } },
        { type: 'Feature', geometry: { type: 'Point', coordinates: [88.50457, 27.44535] }, properties: { title: 'Mapbox', description: 'Passangkit Lepcha' } },
        { type: 'Feature', geometry: { type: 'Point', coordinates: [88.50502, 27.44592] }, properties: { title: 'Mapbox', description: 'Chuzang Lepcha' } },
        { type: 'Feature', geometry: { type: 'Point', coordinates: [88.50638, 27.4464] }, properties: { title: 'Mapbox', description: 'Sonam Dorjee Lepcha' } },
      ],
      sites: [
        { type: 'Feature', geometry: { type: 'Point', coordinates: [88.50556, 27.44569] }, properties: { title: 'Mapbox', description: 'Gnon Primary School' } },
        { type: 'Feature', geometry: { type: 'Point', coordinates: [88.50524, 27.45411] }, properties: { title: 'Mapbox', description: 'Sangdong School' } },
        { type: 'Feature', geometry: { type: 'Point', coordinates: [88.50391, 27.4519] }, properties: { title: 'Mapbox', description: 'Gompa' } },
      ]
    };

    for (const feature of geojson.features) {
      // Create a HTML element for each feature
      const el = document.createElement('div');
      el.className = 'marker-living-stories';

      // Make a marker for each feature and add to the map
      new mapboxgl.Marker(el)
        .setLngLat(feature.geometry.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(
              `<h3>${feature.properties.description}</h3>`
            )
        )
        .addTo(map);
    };

    for (const feature of geojson.people) {
      // Create a HTML element for each feature
      const el = document.createElement('div');
      el.className = 'marker-people';

      // Make a marker for each feature and add to the map
      new mapboxgl.Marker(el)
        .setLngLat(feature.geometry.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(
              `<h3>${feature.properties.description}</h3>`
            )
        )
        .addTo(map);
    };

    for (const feature of geojson.sites) {
      // Create a HTML element for each feature
      const el = document.createElement('div');
      el.className = 'marker-sites';

      // Make a marker for each feature and add to the map
      new mapboxgl.Marker(el)
        .setLngLat(feature.geometry.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(
              `<h3>${feature.properties.description}</h3>`
            )
        )
        .addTo(map);
    };