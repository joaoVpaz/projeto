
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
        name: 'Adequação',
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
    'mapeamento-FORPRON': {
        title: 'Vetorização de cartas para a certificação da FORPRON',
        legend: [
            1,
            7,
            8,
            5,
        ],
        description: `O objetivo do presente projeto consiste em realizar a vetorização de 24 cartas para 1:50.000, 
        no  intuito de apoiar a simulação construtiva da 10ª Bda Inf Mtz no contexto da certificação daquela GU como FORPRON
        `,
        lotes: [
            {
                name: 'mapeamento-FORPRON',
                subtitle: 'vetorização da FORPRON 1:50.000',
                zoom: [
                    [-42, -10], // southwestern corner of the bounds
                    [-33, -7] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'mapeamento-FORPRON-fill',
                        'source': 'mapeamento-FORPRON',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'mapeamento-FORPRON-border',
                        'source': 'mapeamento-FORPRON',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'mapeamento-FORPRON-text',
                        'source': 'mapeamento-FORPRON',
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
    'mapeamento-topografico-cimnc': {
        title: 'Mapeamento Topográfico do Campo de Instrução Marechal Newton Cavalcanti - CIMNC',
        description: `O objetivo do presente projeto consiste em realizar o mapeamento topográfico do Campo de Instrução Marechal Newton Cavalcanti - CIMNC,
        para gerar 4 cartas topográficas na escala 1:25.000 visando atender a meta do Plano Interno de Trabalho(PIT) 2022 da Diretoria de Serviço Geográfico.`,
        legend: [
            7,
            4,
            5,
            6,
            3,
        ],
       
        lotes: [
            {
                name: 'mapeamento-topografico-cimnc',
                subtitle: 'Mapeamento topográfico CIMNC',
                zoom: [
                    [-35.25, -8], // southwestern corner of the bounds
                    [-34.9, -7.6] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'mapeamento-topografico-cimnc-fill',
                        'source': 'mapeamento-topografico-cimnc',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'mapeamento-topografico-cimnc',
                        'source': 'mapeamento-topografico-cimnc',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'mapeamento-topografico-cimnc',
                        'source': 'mapeamento-topografico-cimnc',
                        "type": "symbol",
                        "maxzoom": 11.0,
                        "minzoom": 9,
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
    'mapeamento-do-estado-de-pernambuco 1:25000': {
        title: 'Mapeamento do Estado de Pernambuco',
        legend: [
            1,
            12,
            7,
            8,
            5,
            6,
            3
        ],
        description: `O objetivo do presente projeto consiste em realizar o mapeamento do estado de Pernambuco,
        para gerar 493 cartas ortoimagens na escala 1:25.000 visando atender a meta do Plano Interno de Trabalho(PIT) 2022 da Diretoria de Serviço Geográfico.
        Vetorização: 57,20% 
        Adequação: 18,45% 
        Validação: 2,42% 
        Finalizadas: 1,42% `,
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
            8,
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
    },
    
    'mapeamento-das-capitais': {
        title: 'Mapeamento das Capitais',
        description: `O objetivo do presente projeto consiste em realizar o mapeamento das capitais, para gerar 41 cartas ortoimagens, 8 na escala 1:25.000 
        e 33 na escala de 1:50.000, visando atender a meta do Plano Interno de Trabalho(PIT) 2022 da Diretoria de Serviço Geográfico. /n
        Finalizadas: 19,51%`,
        legend: [
            1,
            12,
            7,
            8,
            5,
            6,
            3
        ],
       
        lotes: [
            {
                name: 'mapeamento-das-capitais',
                subtitle: 'Mapeamento das capitais',
                zoom: [
                    [-46, -13.41], // southwestern corner of the bounds
                    [-34.2, -2.1] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'mapeamento-das-capitais-fill',
                        'source': 'mapeamento-das-capitais',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'mapeamento-das-capitais',
                        'source': 'mapeamento-das-capitais',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'mapeamento-das-capitais',
                        'source': 'mapeamento-das-capitais',
                        "type": "symbol",
                        "maxzoom": 11.0,
                        "minzoom": 9,
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
    
}
