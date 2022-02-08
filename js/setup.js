
const SUBTITLE_STATES = [
    {
        id: 1,
        name: 'Previsto',
        color: 'rgb(255,255,255)'
    },
    {
        id: 2,
        name: 'Digitalização',
        color: 'rgb(252,141,89)'
    },
    {
        id: 3,
        name: 'Disseminação',
        color: 'rgb(145,207,96)'
    },
    {
        id: 4,
        name: 'Reambulação',
        color: 'rgb(254,224,139)'
    },
    {
        id: 5,
        name: 'Validação',
        color: 'rgb(255,255,191)'
    },
    {
        id: 6,
        name: 'Edição',
        color: 'rgb(217,239,139)'
    },
    {
        id: 7,
        name: 'Vetorização',
        color: 'rgb(222,119,174)'
    },
    {
        id: 8,
        name: 'Avaliação',
        color: 'rgb(175,141,195)'
    },
    {
        id: 9,
        name: 'Generalização',
        color: 'rgb(224,243,248)'
    },
    {
        id: 10,
        name: 'Fototriangulação',
        color: 'rgb(44,127,184)'
    },
    {
        id: 11,
        name: 'Restituição',
        color: 'rgb(186,186,186)'
    },
    {
        id: 12,
        name: 'Processamento Digital de Imagens',
        color: 'rgb(215,48,39)'
    },
    {
        id: 13,
        name: 'Medição de pontos de controle',
        color: 'rgb(0,0,0)'
    },
    {
        id: 14,
        name: 'Geração de ortoimagem',
        color: 'rgb(128,205,193)'
    },
    {
        id: 15,
        name: 'Geração de MDE',
        color: 'rgb(191,129,45)'
    },
    {
        id: 16,
        name: 'Levantamento topográfico',
        color: 'rgb(37,52,148)'
    }
]

const INIT_ZOOM = {
    center: [-41, -9],
    zoom: 5.5
}

var PROJECTS = {
    'mapeamento-do-estado-de-pernambuco 1:25000': {
        title: 'Mapeamento do Estado de Pernambuco',
        legend: [
            1,
            12,
            7,
            5,
            6,
            3
        ],
        description: `O objetivo do presente projeto consiste em realizar o mapeamento do estado de Pernambuco,
        para gerar 493 cartas ortoimagens na escala 1:25.000 visando atender a meta do Plano Interno de Trabalho(PIT) 2022 da Diretoria de Serviço Geográfico.`,
        lotes: [
            {
                name: 'mapeamento-do-estado-de-pernambuco',
                subtitle: 'Mapeamento 1:25.000',
                zoom: [
                    [-42, -10], // southwestern corner of the bounds
                    [-33, -7] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'mapeamento-do-estado-de-pernambuco-fill',
                        'source': 'mapeamento-do-estado-de-pernambuco',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'mapeamento-do-estado-de-pernambuco-border',
                        'source': 'mapeamento-do-estado-de-pernambuco',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'mapeamento-do-estado-de-pernambuco-text',
                        'source': 'mapeamento-do-estado-de-pernambuco',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 7.4,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            
        ]
    },
    'mapeamento-do-estado-de-pernambuco-1:50.000': {
        title: 'Mapeamento do Estado de Pernambuco 1:50.000',
        description: `O objetivo do presente projeto consiste em realizar o mapeamento do estado de Pernambuco,
        para gerar  69 cartas ortoimagens na escala 1:50.000 visando atender a meta do Plano Interno de Trabalho(PIT) 2022 da Diretoria de Serviço Geográfico.`,
        legend: [
            1,
            12,
            7,
            5,
            6,
            3
        ],
       
        lotes: [
            {
                name: 'mapeamento-do-estado-de-pernambuco-50000',
                subtitle: 'Mapeamento 1:50.000',
                zoom: [
                    [-42, -10], // southwestern corner of the bounds
                    [-33, -7] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'mapeamento-do-estado-de-pernambuco-50000-fill',
                        'source': 'mapeamento-do-estado-de-pernambuco-50000',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'mapeamento-do-estado-de-pernambuco-50000-border',
                        'source': 'mapeamento-do-estado-de-pernambuco-50000',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'mapeamento-do-estado-de-pernambuco-50000-text',
                        'source': 'mapeamento-do-estado-de-pernambuco-50000',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 7.4,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            
        ]
    }
}
