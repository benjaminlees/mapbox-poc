const settings: object = {
    "version": 8,
    "name": "Basic",
    "metadata": {
        "mapbox:autocomposite": true
    },
    "sources": {
        "mapbox": {
            "url": "mapbox://mapbox.mapbox-streets-v7",
            "type": "vector"
        },
        "custom-source": {
            "url": "mapbox://benjilees.bbr19a0h",
            "type": "vector"
        }
    },
    "sprite": "mapbox://sprites/mapbox/basic-v8",
    "glyphs": "mapbox://fonts/mapbox/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "paint": {
                "background-color": "#dedede"
            },
            "interactive": true
        },
        {
            "id": "landuse_park",
            "type": "fill",
            "source": "mapbox",
            "source-layer": "landuse",
            "filter": [
                "==",
                "class",
                "park"
            ],
            "paint": {
                "fill-color": "#d2edae"
            },
            "interactive": true
        },
        {
            "id": "water",
            "type": "fill",
            "source": "mapbox",
            "source-layer": "water",
            "paint": {
                "fill-color": "#a0cfdf"
            },
            "interactive": true
        },
        {
            "layout": {},
            "type": "fill",
            "id": "archive-7ujowg",
            "paint": {
                "fill-color": "#006a4c"
            },
            "source": "custom-source",
            "source-layer": "Archive-7ujowg",
            "maxzoom": 22
        }
    ]
}

export default settings;
