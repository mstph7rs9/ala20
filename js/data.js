export const data = [
    {
        id: "primary",
        name: "التعليم الإبتدائي",
        status: "Under Development",
        // message: "سيتوفر التعليم الإبتدائي قريباً...",
        years: []
    },
    {
        id: "middle",
        name: "التعليم المتوسط",
        status: "Release",
        years: [
            {
                id: "mid1",
                name: "السنة الأولى متوسط",
                materials: [
                    { 
                        id: "ara", 
                        name: "اللغة العربية", 
                        coefficient: 2, 
                        isOptional: false
                    },
                    { 
                        id: "fre", 
                        name: "اللغة الفرنسية", 
                        coefficient: 1, 
                        isOptional: false
                    },
                    { 
                        id: "eng", 
                        name: "اللغة الإنجليزية", 
                        coefficient: 1, 
                        isOptional: false
                    },
                    { 
                        id: "mat", 
                        name: "الرياضيات", 
                        coefficient: 2, 
                        isOptional: false
                    },
                    { 
                        id: "sci", 
                        name: "علوم الطبيعة والحياة", 
                        coefficient: 1, 
                        isOptional: false
                    },
                    { 
                        id: "phy", 
                        name: "العلوم الفيزيائية والتكنولوجيا", 
                        coefficient: 1, 
                        isOptional: false
                    },
                    { 
                        id: "his", 
                        name: "التاريخ والجغرافيا", 
                        coefficient: 2, 
                        isOptional: false
                    },
                    { 
                        id: "isl", 
                        name: "التربية الإسلامية", 
                        coefficient: 1, 
                        isOptional: false
                    },
                    { 
                        id: "civ", 
                        name: "التربية المدنية", 
                        coefficient: 1, 
                        isOptional: false
                    },
                    { 
                        id: "ama", 
                        name: "اللغة الأمازيغية", 
                        coefficient: 2, 
                        isOptional: true
                    },
                    { 
                        id: "art", 
                        name: "التربية التشكيلية أو الموسيقية", 
                        coefficient: 1, 
                        isOptional: true
                    },
                    { 
                        id: "spo", 
                        name: "التربية البدنية والرياضية", 
                        coefficient: 1, 
                        isOptional: true
                    },
                    { 
                        id: "com", 
                        name: "المعلوماتية", 
                        coefficient: 1, 
                        isOptional: true
                    }
                ]
            },
            {
                id: "mid2",
                name: "السنة الثانية متوسط",
                materials: [
                    { 
                        id: "ara", 
                        name: "اللغة العربية", 
                        coefficient: 3, 
                        isOptional: false
                    },
                    { 
                        id: "fre", 
                        name: "اللغة الفرنسية", 
                        coefficient: 2, 
                        isOptional: false
                    },
                    { 
                        id: "eng", 
                        name: "اللغة الإنجليزية", 
                        coefficient: 1, 
                        isOptional: false
                    },
                    { 
                        id: "mat", 
                        name: "الرياضيات", 
                        coefficient: 3, 
                        isOptional: false
                    },
                    { 
                        id: "sci", 
                        name: "علوم الطبيعة والحياة", 
                        coefficient: 2, 
                        isOptional: false
                    },
                    { 
                        id: "phy", 
                        name: "العلوم الفيزيائية والتكنولوجيا", 
                        coefficient: 2, 
                        isOptional: false
                    },
                    { 
                        id: "his", 
                        name: "التاريخ والجغرافيا", 
                        coefficient: 2, 
                        isOptional: false
                    },
                    { 
                        id: "isl", 
                        name: "التربية الإسلامية", 
                        coefficient: 1, 
                        isOptional: false
                    },
                    { 
                        id: "civ", 
                        name: "التربية المدنية", 
                        coefficient: 1, 
                        isOptional: false
                    },
                    { 
                        id: "ama", 
                        name: "اللغة الأمازيغية", 
                        coefficient: 2, 
                        isOptional: true
                    },
                    { 
                        id: "art", 
                        name: "التربية التشكيلية أو الموسيقية", 
                        coefficient: 1, 
                        isOptional: true
                    },
                    { 
                        id: "spo", 
                        name: "التربية البدنية والرياضية", 
                        coefficient: 1, 
                        isOptional: true
                    },
                    { 
                        id: "com", 
                        name: "المعلوماتية", 
                        coefficient: 1, 
                        isOptional: true
                    }
                ]
            },
            {
                id: "mid3",
                name: "السنة الثالثة متوسط",
                materials: [
                    { 
                        id: "ara", 
                        name: "اللغة العربية", 
                        coefficient: 3, 
                        isOptional: false
                    },
                    { 
                        id: "fre", 
                        name: "اللغة الفرنسية", 
                        coefficient: 2, 
                        isOptional: false
                    },
                    { 
                        id: "eng", 
                        name: "اللغة الإنجليزية", 
                        coefficient: 1, 
                        isOptional: false
                    },
                    { 
                        id: "mat", 
                        name: "الرياضيات", 
                        coefficient: 3, 
                        isOptional: false
                    },
                    { 
                        id: "sci", 
                        name: "علوم الطبيعة والحياة", 
                        coefficient: 2, 
                        isOptional: false
                    },
                    { 
                        id: "phy", 
                        name: "العلوم الفيزيائية والتكنولوجيا", 
                        coefficient: 2, 
                        isOptional: false
                    },
                    { 
                        id: "his", 
                        name: "التاريخ والجغرافيا", 
                        coefficient: 2, 
                        isOptional: false
                    },
                    { 
                        id: "isl", 
                        name: "التربية الإسلامية", 
                        coefficient: 1, 
                        isOptional: false
                    },
                    { 
                        id: "civ", 
                        name: "التربية المدنية", 
                        coefficient: 1, 
                        isOptional: false
                    },
                    { 
                        id: "ama", 
                        name: "اللغة الأمازيغية", 
                        coefficient: 2, 
                        isOptional: true
                    },
                    { 
                        id: "art", 
                        name: "التربية التشكيلية أو الموسيقية", 
                        coefficient: 1, 
                        isOptional: true
                    },
                    { 
                        id: "spo", 
                        name: "التربية البدنية والرياضية", 
                        coefficient: 1, 
                        isOptional: true
                    },
                    { 
                        id: "com", 
                        name: "المعلوماتية", 
                        coefficient: 1, 
                        isOptional: true
                    }
                ]
            },
            {
                id: "mid4",
                name: "السنة الرابعة متوسط",
                types: [
                    { 
                        id: "mid4Sem", 
                        name: "السنة الرابعة متوسط",
                        materials: [
                            { 
                                id: "ara", 
                                name: "اللغة العربية", 
                                coefficient: 5, 
                                isOptional: false
                            },
                            { 
                                id: "fre", 
                                name: "اللغة الفرنسية", 
                                coefficient: 3, 
                                isOptional: false
                            },
                            { 
                                id: "eng", 
                                name: "اللغة الإنجليزية", 
                                coefficient: 2, 
                                isOptional: false
                            },
                            { 
                                id: "mat", 
                                name: "الرياضيات", 
                                coefficient: 4, 
                                isOptional: false
                            },
                            { 
                                id: "sci", 
                                name: "علوم الطبيعة والحياة", 
                                coefficient: 2, 
                                isOptional: false
                            },
                            { 
                                id: "phy", 
                                name: "العلوم الفيزيائية والتكنولوجيا", 
                                coefficient: 2, 
                                isOptional: false
                            },
                            { 
                                id: "his", 
                                name: "التاريخ والجغرافيا", 
                                coefficient: 3, 
                                isOptional: false
                            },
                            { 
                                id: "isl", 
                                name: "التربية الإسلامية", 
                                coefficient: 2, 
                                isOptional: false
                            },
                            { 
                                id: "civ", 
                                name: "التربية المدنية", 
                                coefficient: 1, 
                                isOptional: false
                            },
                            { 
                                id: "ama", 
                                name: "اللغة الأمازيغية", 
                                coefficient: 2, 
                                isOptional: true
                            },
                            { 
                                id: "art", 
                                name: "التربية التشكيلية أو الموسيقية", 
                                coefficient: 1, 
                                isOptional: true
                            },
                            { 
                                id: "spo", 
                                name: "التربية البدنية والرياضية", 
                                coefficient: 1, 
                                isOptional: true
                            },
                            { 
                                id: "com", 
                                name: "المعلوماتية", 
                                coefficient: 1, 
                                isOptional: true
                            }
                        ]
                    },
                    { 
                        id: "mid4Cer", 
                        name: "شهادة التعليم المتوسط",
                        materials: [
                            { 
                                id: "ara", 
                                name: "اللغة العربية", 
                                coefficient: 5, 
                                isOptional: false
                            },
                            { 
                                id: "fre", 
                                name: "اللغة الفرنسية", 
                                coefficient: 3, 
                                isOptional: false
                            },
                            { 
                                id: "eng", 
                                name: "اللغة الإنجليزية", 
                                coefficient: 2, 
                                isOptional: false
                            },
                            { 
                                id: "mat", 
                                name: "الرياضيات", 
                                coefficient: 4, 
                                isOptional: false
                            },
                            { 
                                id: "sci", 
                                name: "علوم الطبيعة والحياة", 
                                coefficient: 2, 
                                isOptional: false
                            },
                            { 
                                id: "phy", 
                                name: "العلوم الفيزيائية والتكنولوجيا", 
                                coefficient: 2, 
                                isOptional: false
                            },
                            { 
                                id: "his", 
                                name: "التاريخ والجغرافيا", 
                                coefficient: 3, 
                                isOptional: false
                            },
                            { 
                                id: "isl", 
                                name: "التربية الإسلامية", 
                                coefficient: 2, 
                                isOptional: false
                            },
                            { 
                                id: "civ", 
                                name: "التربية المدنية", 
                                coefficient: 1, 
                                isOptional: false
                            },
                            { 
                                id: "ama", 
                                name: "اللغة الأمازيغية", 
                                coefficient: 2, 
                                isOptional: true
                            },
                            { 
                                id: "art", 
                                name: "التربية التشكيلية أو الموسيقية", 
                                coefficient: 1, 
                                isOptional: true
                            },
                            { 
                                id: "spo", 
                                name: "التربية البدنية والرياضية", 
                                coefficient: 1, 
                                isOptional: true
                            },
                            { 
                                id: "com", 
                                name: "المعلوماتية", 
                                coefficient: 1, 
                                isOptional: true
                            }
                        ]
                    }
                ],
            }
        ]
    },
    {
        id: "secondary",
        name: "التعليم الثانوي",
        status: "Release",
        years: [
            {
                id: "sec1",
                name: "السنة الأولى ثانوي",
                streams: [
                    {
                        id: "sec1Sci",
                        name: "جذع مشترك علوم وتكنولوجيا",
                        materials: [
                            { 
                                id: "ara", 
                                name: "اللغة العربية وآدابها", 
                                coefficient: 3,
                                hasPracticalOrOral: true,
                                isOptional: false
                            },
                            { 
                                id: "eng", 
                                name: "اللغة الإنجليزية", 
                                coefficient: 2, 
                                hasPracticalOrOral: true,
                                isOptional: false
                            },
                            { 
                                id: "fre", 
                                name: "اللغة الفرنسية", 
                                coefficient: 2, 
                                hasPracticalOrOral: true,
                                isOptional: false
                            },
                            { 
                                id: "isl", 
                                name: "العلوم الإسلامية", 
                                coefficient: 2, 
                                hasPracticalOrOral: false,
                                isOptional: false
                            },
                            { 
                                id: "his", 
                                name: "التاريخ والجغرافيا", 
                                coefficient: 2, 
                                hasPracticalOrOral: false,
                                isOptional: false
                            },
                            { 
                                id: "mat", 
                                name: "الرياضيات", 
                                coefficient: 5, 
                                hasPracticalOrOral: false,
                                isOptional: false
                            },
                            { 
                                id: "phy", 
                                name: "العلوم الفيزيائية", 
                                coefficient: 4, 
                                hasPracticalOrOral: true,
                                isOptional: false
                            },
                            { 
                                id: "sci", 
                                name: "علوم الطبيعة والحياة", 
                                coefficient: 4, 
                                hasPracticalOrOral: true,
                                isOptional: false
                            },
                            { 
                                id: "tec", 
                                name: "تكنولوجيا", 
                                coefficient: 2, 
                                hasPracticalOrOral: true,
                                isOptional: false
                            },
                            { 
                                id: "com", 
                                name: "الإعلام الآلي", 
                                coefficient: 2, 
                                hasPracticalOrOral: true,
                                isOptional: false
                            },
                            { 
                                id: "ama", 
                                name: "اللغة الأمازيغية", 
                                coefficient: 2, 
                                hasPracticalOrOral: true,
                                isOptional: true
                            },
                            { 
                                id: "spo", 
                                name: "التربية البدنية والرياضية", 
                                coefficient: 1, 
                                hasPracticalOrOral: false,
                                isOptional: true
                            },
                            { 
                                id: "art", 
                                name: "التربية الفنية", 
                                coefficient: 1, 
                                hasPracticalOrOral: false,
                                isOptional: true
                            }
                        ]
                    },
                    {
                        id: "sec1Lit",
                        name: "جذع مشترك آداب",
                        materials: [
                            { 
                                id: "ara", 
                                name: "اللغة العربية وآدابها", 
                                coefficient: 5, 
                                hasPracticalOrOral: true,
                                isOptional: false
                            },
                            { 
                                id: "eng", 
                                name: "اللغة الإنجليزية", 
                                coefficient: 3, 
                                hasPracticalOrOral: true,
                                isOptional: false
                            },
                            { 
                                id: "fre", 
                                name: "اللغة الفرنسية", 
                                coefficient: 3, 
                                hasPracticalOrOral: true,
                                isOptional: false
                            },
                            { 
                                id: "isl", 
                                name: "العلوم الإسلامية", 
                                coefficient: 2, 
                                hasPracticalOrOral: false,
                                isOptional: false
                            },
                            { 
                                id: "his", 
                                name: "التاريخ والجغرافيا", 
                                coefficient: 3, 
                                hasPracticalOrOral: false,
                                isOptional: false
                            },
                            { 
                                id: "mat", 
                                name: "الرياضيات", 
                                coefficient: 2, 
                                hasPracticalOrOral: false,
                                isOptional: false
                            },
                            { 
                                id: "phy", 
                                name: "العلوم الفيزيائية", 
                                coefficient: 2, 
                                hasPracticalOrOral: true,
                                isOptional: false
                            },
                            { 
                                id: "sci", 
                                name: "علوم الطبيعة والحياة", 
                                coefficient: 2, 
                                hasPracticalOrOral: true,
                                isOptional: false
                            },
                            { 
                                id: "com", 
                                name: "الإعلام الآلي", 
                                coefficient: 2, 
                                hasPracticalOrOral: true,
                                isOptional: false
                            },
                            { 
                                id: "ama", 
                                name: "اللغة الأمازيغية", 
                                coefficient: 2, 
                                hasPracticalOrOral: true,
                                isOptional: true
                            },
                            { 
                                id: "spo", 
                                name: "التربية البدنية والرياضية", 
                                coefficient: 1, 
                                hasPracticalOrOral: false,
                                isOptional: true
                            },
                            { 
                                id: "art", 
                                name: "التربية الفنية", 
                                coefficient: 1, 
                                hasPracticalOrOral: false,
                                isOptional: true
                            }
                        ]
                    }
                ]
            },
            {
                id: "sec2",
                name: "السنة الثانية ثانوي",
                streams: [
                    {
                        id: "sec2Sci",
                        name: "السنة الثانية علوم تجريبية",
                        materials: [
                            { 
                                id: "sci", 
                                name: "علوم الطبيعة والحياة", 
                                coefficient: 6, 
                                hasPracticalOrOral: true,
                                isOptional: false
                            },
                            { 
                                id: "mat", 
                                name: "الرياضيات", 
                                coefficient: 5, 
                                hasPracticalOrOral: false,
                                isOptional: false
                            },
                            { 
                                id: "phy", 
                                name: "العلوم الفيزيائية", 
                                coefficient: 5, 
                                hasPracticalOrOral: true,
                                isOptional: false
                            },
                            { 
                                id: "ara", 
                                name: "اللغة العربية وآدابها", 
                                coefficient: 2, 
                                hasPracticalOrOral: true,
                                isOptional: false
                            },
                            { 
                                id: "eng", 
                                name: "اللغة الإنجليزية", 
                                coefficient: 2, 
                                hasPracticalOrOral: true,
                                isOptional: false
                            },
                            { 
                                id: "fre", 
                                name: "اللغة الفرنسية", 
                                coefficient: 2, 
                                hasPracticalOrOral: true,
                                isOptional: false
                            },
                            { 
                                id: "his", 
                                name: "التاريخ والجغرافيا", 
                                coefficient: 2, 
                                hasPracticalOrOral: false,
                                isOptional: false
                            },
                            { 
                                id: "isl", 
                                name: "العلوم الإسلامية", 
                                coefficient: 2, 
                                hasPracticalOrOral: false,
                                isOptional: false
                            },
                            { 
                                id: "ama", 
                                name: "اللغة الأمازيغية", 
                                coefficient: 2, 
                                hasPracticalOrOral: true,
                                isOptional: true
                            },
                            { 
                                id: "spo",
                                name: "التربية البدنية والرياضية", 
                                coefficient: 1,
                                hasPracticalOrOral: false,
                                isOptional: true
                            },
                            {
                                id: "art", 
                                name: "التربية الفنية", 
                                coefficient: 1, 
                                hasPracticalOrOral: false,
                                isOptional: true
                            }
                        ]
                    },
                    {
                        id: "sec2Mat",
                        name: "السنة الثانية رياضيات",
                        materials: [
                            { 
                                id: "mat", 
                                name: "الرياضيات", 
                                coefficient: 7, 
                                hasPracticalOrOral: false,
                                isOptional: false
                            },
                            { 
                                id: "phy", 
                                name: "العلوم الفيزيائية", 
                                coefficient: 6, 
                                hasPracticalOrOral: true,
                                isOptional: false
                            },
                            { 
                                id: "ara", 
                                name: "اللغة العربية وآدابها", 
                                coefficient: 2, 
                                hasPracticalOrOral: true,
                                isOptional: false
                            },
                            { 
                                id: "sci", 
                                name: "علوم الطبيعة والحياة", 
                                coefficient: 2, 
                                hasPracticalOrOral: true,
                                isOptional: false
                            },
                            { 
                                id: "eng", 
                                name: "اللغة الإنجليزية", 
                                coefficient: 2, 
                                hasPracticalOrOral: true,
                                isOptional: false
                            },
                            { 
                                id: "fre", 
                                name: "اللغة الفرنسية", 
                                coefficient: 2, 
                                hasPracticalOrOral: true,
                                isOptional: false
                            },
                            { 
                                id: "his", 
                                name: "التاريخ والجغرافيا", 
                                coefficient: 2, 
                                hasPracticalOrOral: false,
                                isOptional: false
                            },
                            { 
                                id: "isl", 
                                name: "العلوم الإسلامية", 
                                coefficient: 2, 
                                hasPracticalOrOral: false,
                                isOptional: false
                            },
                            { 
                                id: "ama", 
                                name: "اللغة الأمازيغية", 
                                coefficient: 2, 
                                hasPracticalOrOral: true,
                                isOptional: true
                            },
                            { 
                                id: "spo", 
                                name: "التربية البدنية والرياضية", 
                                coefficient: 1, 
                                hasPracticalOrOral: false,
                                isOptional: true
                            },
                            { 
                                id: "art", 
                                name: "التربية الفنية", 
                                coefficient: 1, 
                                hasPracticalOrOral: false,
                                isOptional: true
                            }
                        ]
                    },
                    {
                        id: "sec2Eng",
                        name: "السنة الثانية تقني رياضي",
                        materials: [
                            { 
                                id: "tec", 
                                name: "تكنولوجيا", 
                                coefficient: 6, 
                                hasPracticalOrOral: true,
                                isOptional: false
                            },
                            { 
                                id: "mat", 
                                name: "الرياضيات", 
                                coefficient: 6, 
                                hasPracticalOrOral: false,
                                isOptional: false
                            },
                            { 
                                id: "phy", 
                                name: "العلوم الفيزيائية", 
                                coefficient: 5, 
                                hasPracticalOrOral: true,
                                isOptional: false
                            },
                            { 
                                id: "ara", 
                                name: "اللغة العربية وآدابها", 
                                coefficient: 2, 
                                hasPracticalOrOral: true,
                                isOptional: false
                            },
                            { 
                                id: "eng", 
                                name: "اللغة الإنجليزية", 
                                coefficient: 2, 
                                hasPracticalOrOral: true,
                                isOptional: false
                            },
                            { 
                                id: "fre",
                                name: "اللغة الفرنسية",
                                coefficient: 2, 
                                hasPracticalOrOral: true,
                                isOptional: false
                            },
                            { 
                                id: "his", 
                                name: "التاريخ والجغرافيا", 
                                coefficient: 2, 
                                hasPracticalOrOral: false,
                                isOptional: false
                            },
                            { 
                                id: "isl", 
                                name: "العلوم الإسلامية", 
                                coefficient: 2, 
                                hasPracticalOrOral: false,
                                isOptional: false
                            },
                            { 
                                id: "ama", 
                                name: "اللغة الأمازيغية", 
                                coefficient: 2, 
                                hasPracticalOrOral: true,
                                isOptional: true
                            },
                            { 
                                id: "spo", 
                                name: "التربية البدنية والرياضية",
                                coefficient: 1, 
                                hasPracticalOrOral: false,
                                isOptional: true
                            }
                        ]
                    },
                    {
                        id: "sec2Eco",
                        name: "السنة الثانية تسيير واقتصاد",
                        materials: [
                            { 
                                id: "acc", 
                                name: "تسيير محاسبي ومالي", 
                                coefficient: 5,
                                hasPracticalOrOral: false,
                                isOptional: false
                            },
                            { 
                                id: "eco", 
                                name: "اقتصاد ومناجمنت", 
                                coefficient: 4, 
                                hasPracticalOrOral: false,
                                isOptional: false
                            },
                            { 
                                id: "mat", 
                                name: "الرياضيات", 
                                coefficient: 3, 
                                hasPracticalOrOral: false,
                                isOptional: false
                            },
                            { 
                                id: "ara", 
                                name: "اللغة العربية وآدابها", 
                                coefficient: 2, 
                                hasPracticalOrOral: true,
                                isOptional: false
                            },
                            { 
                                id: "eng",
                                name: "اللغة الإنجليزية", 
                                coefficient: 2, 
                                hasPracticalOrOral: true,
                                isOptional: false
                            },
                            { 
                                id: "fre",
                                name: "اللغة الفرنسية",
                                coefficient: 2,
                                hasPracticalOrOral: true,
                                isOptional: false
                            },
                            { 
                                id: "law", 
                                name: "قانون", 
                                coefficient: 2,
                                hasPracticalOrOral: false,
                                isOptional: false
                            },
                            { 
                                id: "his", 
                                name: "التاريخ والجغرافيا", 
                                coefficient: 3, 
                                hasPracticalOrOral: false,
                                isOptional: false
                            },
                            { 
                                id: "isl",
                                name: "العلوم الإسلامية", 
                                coefficient: 2, 
                                hasPracticalOrOral: false,
                                isOptional: false
                            },
                            { 
                                id: "ama", 
                                name: "اللغة الأمازيغية", 
                                coefficient: 2,
                                hasPracticalOrOral: true,
                                isOptional: true
                            },
                            {
                                id: "spo", 
                                name: "التربية البدنية والرياضية",
                                coefficient: 1, 
                                hasPracticalOrOral: false,
                                isOptional: true
                            },
                            { 
                                id: "art", 
                                name: "التربية الفنية",
                                coefficient: 1, 
                                hasPracticalOrOral: false,
                                isOptional: true
                            }
                        ]
                    },
                    {
                        id: "sec2Lit",
                        name: "السنة الثانية آداب وفلسفة",
                        materials: [
                            { 
                                id: "ara", 
                                name: "اللغة العربية وآدابها", 
                                coefficient: 5, 
                                hasPracticalOrOral: true,
                                isOptional: false
                            },
                            { 
                                id: "phi", 
                                name: "الفلسفة", 
                                coefficient: 5, 
                                hasPracticalOrOral: false,
                                isOptional: false
                            },
                            { 
                                id: "his", 
                                name: "التاريخ والجغرافيا", 
                                coefficient: 4, 
                                hasPracticalOrOral: false,
                                isOptional: false
                            },
                            { 
                                id: "eng",
                                name: "اللغة الإنجليزية", 
                                coefficient: 3,
                                hasPracticalOrOral: true,
                                isOptional: false
                            },
                            { 
                                id: "fre", 
                                name: "اللغة الفرنسية",
                                coefficient: 3, 
                                hasPracticalOrOral: true,
                                isOptional: false
                            },
                            { 
                                id: "mat",
                                name: "الرياضيات", 
                                coefficient: 2, 
                                hasPracticalOrOral: false,
                                isOptional: false
                            },
                            { 
                                id: "sci",
                                name: "علوم الطبيعة والحياة", 
                                coefficient: 2, 
                                hasPracticalOrOral: true,
                                isOptional: false
                            },
                            { 
                                id: "phy",
                                name: "العلوم الفيزيائية", 
                                coefficient: 2, 
                                hasPracticalOrOral: true,
                                isOptional: false
                            },
                            { 
                                id: "isl",
                                name: "العلوم الإسلامية",
                                coefficient: 2, 
                                hasPracticalOrOral: false,
                                isOptional: false
                            },
                            { 
                                id: "ama",
                                name: "اللغة الأمازيغية", 
                                coefficient: 2, 
                                hasPracticalOrOral: true,
                                isOptional: true
                            },
                            { 
                                id: "spo",
                                name: "التربية البدنية والرياضية", 
                                coefficient: 1, 
                                hasPracticalOrOral: false,
                                isOptional: true
                            },
                            { 
                                id: "art", 
                                name: "التربية الفنية", 
                                coefficient: 1, 
                                hasPracticalOrOral: false,
                                isOptional: true
                            }
                        ]
                    },
                    {
                        id: "sec2Lan",
                        name: "السنة الثانية لغات أجنبية",
                        materials: [
                            { 
                                id: "sgi", 
                                name: "لغة اسبانية، ألمانية، إيطالية", 
                                coefficient: 4, 
                                hasPracticalOrOral: true,
                                isOptional: false
                            },
                            { 
                                id: "eng", 
                                name: "اللغة الإنجليزية", 
                                coefficient: 4, 
                                hasPracticalOrOral: true,
                                isOptional: false
                            },
                            { 
                                id: "fre", 
                                name: "اللغة الفرنسية", 
                                coefficient: 4, 
                                hasPracticalOrOral: true,
                                isOptional: false
                            },
                            { 
                                id: "ara", 
                                name: "اللغة العربية", 
                                coefficient: 4, 
                                hasPracticalOrOral: true,
                                isOptional: false
                            },
                            { 
                                id: "his", 
                                name: "التاريخ والجغرافيا", 
                                coefficient: 4, 
                                hasPracticalOrOral: false,
                                isOptional: false
                            },
                            { 
                                id: "mat", 
                                name: "الرياضيات",
                                coefficient: 2,
                                hasPracticalOrOral: false,
                                isOptional: false
                            },
                            { 
                                id: "isl",
                                name: "العلوم الإسلامية", 
                                coefficient: 2,
                                hasPracticalOrOral: false,
                                isOptional: false
                            },
                            { 
                                id: "ama", 
                                name: "اللغة الأمازيغية", 
                                coefficient: 2, 
                                hasPracticalOrOral: true,
                                isOptional: true
                            },
                            { 
                                id: "spo", 
                                name: "التربية البدنية والرياضية", 
                                coefficient: 1, 
                                hasPracticalOrOral: false,
                                isOptional: true
                            },
                            { 
                                id: "art",
                                name: "التربية الفنية",
                                coefficient: 1,
                                hasPracticalOrOral: false,
                                isOptional: true
                            }
                        ]
                    }
                ]
            },
            {
                id: "sec3",
                name: "السنة الثالثة ثانوي",
                types: [
                    { 
                        id: "sec3Sem", 
                        name: "السنة الثالثة ثانوي",
                        streams: [
                            {
                                id: "sec3SemSci",
                                name: "السنة الثالثة علوم تجريبية",
                                materials: [
                                    { 
                                        id: "sci", 
                                        name: "علوم الطبيعة والحياة", 
                                        coefficient: 6, 
                                        hasPracticalOrOral: true,
                                        isOptional: false
                                    },
                                    { 
                                        id: "mat", 
                                        name: "الرياضيات", 
                                        coefficient: 5, 
                                        hasPracticalOrOral: false,
                                        isOptional: false
                                    },
                                    { 
                                        id: "phy", 
                                        name: "العلوم الفيزيائية",
                                        coefficient: 5,
                                        hasPracticalOrOral: true,
                                        isOptional: false
                                    },
                                    { 
                                        id: "ara", 
                                        name: "اللغة العربية وآدابها", 
                                        coefficient: 3, 
                                        hasPracticalOrOral: true,
                                        isOptional: false
                                    },
                                    { 
                                        id: "eng", 
                                        name: "اللغة الإنجليزية", 
                                        coefficient: 2, 
                                        hasPracticalOrOral: true,
                                        isOptional: false
                                    },
                                    { 
                                        id: "fre", 
                                        name: "اللغة الفرنسية", 
                                        coefficient: 2, 
                                        hasPracticalOrOral: true,
                                        isOptional: false
                                    },
                                    { 
                                        id: "isl", 
                                        name: "العلوم الإسلامية", 
                                        coefficient: 2, 
                                        hasPracticalOrOral: false,
                                        isOptional: false
                                    },
                                    { 
                                        id: "his", 
                                        name: "التاريخ والجغرافيا", 
                                        coefficient: 2, 
                                        hasPracticalOrOral: false,
                                        isOptional: false
                                    },
                                    { 
                                        id: "phi", 
                                        name: "الفلسفة", 
                                        coefficient: 2, 
                                        hasPracticalOrOral: false,
                                        isOptional: false
                                    },
                                    { 
                                        id: "ama", 
                                        name: "اللغة الأمازيغية", 
                                        coefficient: 2, 
                                        hasPracticalOrOral: true,
                                        isOptional: true
                                    },
                                    { 
                                        id: "spo",
                                        name: "التربية البدنية والرياضية",
                                        coefficient: 1,
                                        hasPracticalOrOral: false,
                                        isOptional: true
                                    }
                                ]
                            },
                            {
                                id: "sec3SemMat",
                                name: "السنة الثالثة رياضيات",
                                materials: [
                                    { 
                                        id: "mat", 
                                        name: "الرياضيات", 
                                        coefficient: 7, 
                                        hasPracticalOrOral: false,
                                        isOptional: false
                                    },
                                    { 
                                        id: "phy",
                                        name: "العلوم الفيزيائية", 
                                        coefficient: 6, 
                                        hasPracticalOrOral: true,
                                        isOptional: false
                                    },
                                    { 
                                        id: "ara", 
                                        name: "اللغة العربية وآدابها",
                                        coefficient: 3, 
                                        hasPracticalOrOral: true,
                                        isOptional: false
                                    },
                                    { 
                                        id: "sci", 
                                        name: "العلوم الطبيعية", 
                                        coefficient: 2, 
                                        hasPracticalOrOral: true,
                                        isOptional: false
                                    },
                                    { 
                                        id: "eng",
                                        name: "اللغة الإنجليزية",
                                        coefficient: 2, 
                                        hasPracticalOrOral: true,
                                        isOptional: false
                                    },
                                    { 
                                        id: "fre",
                                        name: "اللغة الفرنسية",
                                        coefficient: 2, 
                                        hasPracticalOrOral: true,
                                        isOptional: false
                                    },
                                    { 
                                        id: "isl", 
                                        name: "العلوم الإسلامية", 
                                        coefficient: 2, 
                                        hasPracticalOrOral: false,
                                        isOptional: false
                                    },
                                    { 
                                        id: "his",
                                        name: "التاريخ والجغرافيا",
                                        coefficient: 2, 
                                        hasPracticalOrOral: false,
                                        isOptional: false
                                    },
                                    { 
                                        id: "phi", 
                                        name: "الفلسفة", 
                                        coefficient: 2, 
                                        hasPracticalOrOral: false,
                                        isOptional: false
                                    },
                                    { 
                                        id: "ama", 
                                        name: "اللغة الأمازيغية", 
                                        coefficient: 2, 
                                        hasPracticalOrOral: true,
                                        isOptional: true
                                    },
                                    { 
                                        id: "spo", 
                                        name: "التربية البدنية والرياضية",
                                        coefficient: 1, 
                                        hasPracticalOrOral: false,
                                        isOptional: true
                                    }
                                ]
                            },
                            {
                                id: "sec3SemEng",
                                name: "السنة الثالثة تقني رياضي",
                                materials: [
                                    { 
                                        id: "tec", 
                                        name: "تكنولوجيا",
                                        coefficient: 7, 
                                        hasPracticalOrOral: true,
                                        isOptional: false
                                    },
                                    { 
                                        id: "mat", 
                                        name: "الرياضيات",
                                        coefficient: 6, 
                                        hasPracticalOrOral: false,
                                        isOptional: false
                                    },
                                    { 
                                        id: "phy", 
                                        name: "العلوم الفيزيائية",
                                        coefficient: 6, 
                                        hasPracticalOrOral: true,
                                        isOptional: false
                                    },
                                    { 
                                        id: "ara", 
                                        name: "اللغة العربية وآدابها",
                                        coefficient: 3, 
                                        hasPracticalOrOral: true,
                                        isOptional: false
                                    },
                                    { 
                                        id: "eng", 
                                        name: "اللغة الإنجليزية",
                                        coefficient: 2, 
                                        hasPracticalOrOral: true,
                                        isOptional: false
                                    },
                                    { 
                                        id: "fre", 
                                        name: "اللغة الفرنسية",
                                        coefficient: 2, 
                                        hasPracticalOrOral: true,
                                        isOptional: false
                                    },
                                    {
                                        id: "isl", 
                                        name: "العلوم الإسلامية", 
                                        coefficient: 2, 
                                        hasPracticalOrOral: false,
                                        isOptional: false
                                    },
                                    { 
                                        id: "his", 
                                        name: "التاريخ والجغرافيا",
                                        coefficient: 2,
                                        hasPracticalOrOral: false,
                                        isOptional: false
                                    },
                                    { 
                                        id: "phi", 
                                        name: "الفلسفة", 
                                        coefficient: 2, 
                                        hasPracticalOrOral: false,
                                        isOptional: false
                                    },
                                    { 
                                        id: "ama", 
                                        name: "اللغة الأمازيغية", 
                                        coefficient: 2, 
                                        hasPracticalOrOral: true,
                                        isOptional: true
                                    },
                                    { 
                                        id: "spo", 
                                        name: "التربية البدنية والرياضية", 
                                        coefficient: 1, 
                                        hasPracticalOrOral: false,
                                        isOptional: true
                                    }
                                ]
                            },
                            {
                                id: "sec3SemEco",
                                name: "السنة الثالثة تسيير واقتصاد",
                                materials: [
                                    { 
                                        id: "acc", 
                                        name: "تسيير محاسبي ومالي",
                                        coefficient: 6, 
                                        hasPracticalOrOral: false,
                                        isOptional: false
                                    },
                                    { 
                                        id: "eco", 
                                        name: "اقتصاد ومناجمنت",
                                        coefficient: 5,
                                        hasPracticalOrOral: false,
                                        isOptional: false
                                    },
                                    { 
                                        id: "mat", 
                                        name: "الرياضيات",
                                        coefficient: 5, 
                                        hasPracticalOrOral: false,
                                        isOptional: false
                                    },
                                    { 
                                        id: "ara", 
                                        name: "اللغة العربية وآدابها",
                                        coefficient: 3,
                                        hasPracticalOrOral: true,
                                        isOptional: false
                                    },
                                    { 
                                        id: "his",
                                        name: "التاريخ والجغرافيا",
                                        coefficient: 4, 
                                        hasPracticalOrOral: false,
                                        isOptional: false
                                    },
                                    { 
                                        id: "eng",
                                        name: "اللغة الإنجليزية",
                                        coefficient: 2, 
                                        hasPracticalOrOral: true,
                                        isOptional: false
                                    },
                                    { 
                                        id: "fre",
                                        name: "اللغة الفرنسية",
                                        coefficient: 2, 
                                        hasPracticalOrOral: true,
                                        isOptional: false
                                    },
                                    { 
                                        id: "law", 
                                        name: "قانون", 
                                        coefficient: 2, 
                                        hasPracticalOrOral: false,
                                        isOptional: false
                                    },
                                    { 
                                        id: "isl", 
                                        name: "العلوم الإسلامية", 
                                        coefficient: 2, 
                                        hasPracticalOrOral: false,
                                        isOptional: false
                                    },
                                    { 
                                        id: "phi", 
                                        name: "الفلسفة", 
                                        coefficient: 2, 
                                        hasPracticalOrOral: false,
                                        isOptional: false
                                    },
                                    {
                                        id: "ama", 
                                        name: "اللغة الأمازيغية", 
                                        coefficient: 2,
                                        hasPracticalOrOral: true,
                                        isOptional: true
                                    },
                                    {
                                        id: "spo",
                                        name: "التربية البدنية والرياضية",
                                        coefficient: 1,
                                        hasPracticalOrOral: false,
                                        isOptional: true
                                    }
                                ]
                            },
                            {
                                id: "sec3SemLit",
                                name: "السنة الثالثة آداب وفلسفة",
                                materials: [
                                    { 
                                        id: "ara", 
                                        name: "اللغة العربية وآدابها",
                                        coefficient: 6, 
                                        hasPracticalOrOral: true,
                                        isOptional: false
                                    },
                                    { 
                                        id: "phi",
                                        name: "الفلسفة", 
                                        coefficient: 6, 
                                        hasPracticalOrOral: false,
                                        isOptional: false
                                    },
                                    { 
                                        id: "his",
                                        name: "التاريخ والجغرافيا", 
                                        coefficient: 4, 
                                        hasPracticalOrOral: false,
                                        isOptional: false
                                    },
                                    { 
                                        id: "eng",
                                        name: "اللغة الإنجليزية", 
                                        coefficient: 3,
                                        hasPracticalOrOral: true,
                                        isOptional: false
                                    },
                                    { 
                                        id: "fre", 
                                        name: "اللغة الفرنسية",
                                        coefficient: 3, 
                                        hasPracticalOrOral: true,
                                        isOptional: false
                                    },
                                    { 
                                        id: "mat", 
                                        name: "الرياضيات", 
                                        coefficient: 2, 
                                        hasPracticalOrOral: false,
                                        isOptional: false
                                    },
                                    {
                                        id: "isl",
                                        name: "العلوم الإسلامية", 
                                        coefficient: 2, 
                                        hasPracticalOrOral: false,
                                        isOptional: false
                                    },
                                    { 
                                        id: "ama", 
                                        name: "اللغة الأمازيغية",
                                        coefficient: 2, 
                                        hasPracticalOrOral: true,
                                        isOptional: true
                                    },
                                    { 
                                        id: "spo", 
                                        name: "التربية البدنية والرياضية",
                                        coefficient: 1, 
                                        hasPracticalOrOral: false,
                                        isOptional: true
                                    }
                                ]
                            },
                            {
                                id: "sec3SemLan",
                                name: "السنة الثالثة لغات أجنبية",
                                materials: [
                                    { 
                                        id: "sgi", 
                                        name: "لغة اسبانية، ألمانية، إيطالية",
                                        coefficient: 4,
                                        hasPracticalOrOral: true,
                                        isOptional: false
                                    },
                                    { 
                                        id: "eng",
                                        name: "اللغة الإنجليزية",
                                        coefficient: 5, 
                                        hasPracticalOrOral: true,
                                        isOptional: false
                                    },
                                    { 
                                        id: "fre", 
                                        name: "اللغة الفرنسية", 
                                        coefficient: 5, 
                                        hasPracticalOrOral: true,
                                        isOptional: false
                                    },
                                    { 
                                        id: "ara", 
                                        name: "اللغة العربية", 
                                        coefficient: 5,
                                        hasPracticalOrOral: true,
                                        isOptional: false
                                    },
                                    { 
                                        id: "mat", 
                                        name: "الرياضيات", 
                                        coefficient: 2, 
                                        hasPracticalOrOral: false,
                                        isOptional: false
                                    },
                                    { 
                                        id: "his", 
                                        name: "التاريخ والجغرافيا", 
                                        coefficient: 2, 
                                        hasPracticalOrOral: false,
                                        isOptional: false
                                    },
                                    { 
                                        id: "isl", 
                                        name: "العلوم الإسلامية", 
                                        coefficient: 2, 
                                        hasPracticalOrOral: false,
                                        isOptional: false
                                    },
                                    { 
                                        id: "ama", 
                                        name: "اللغة الأمازيغية",
                                        coefficient: 2, 
                                        hasPracticalOrOral: true,
                                        isOptional: true
                                    },
                                    { 
                                        id: "spo", 
                                        name: "التربية البدنية والرياضية",
                                        coefficient: 1,
                                        hasPracticalOrOral: false,
                                        isOptional: true
                                    }
                                ]
                            }
                        ]
                    },
                    { 
                        id: "sec3Cer", 
                        name: "شهادة البكالوريا",
                        streams: [
                            {
                                id: "sec3CerSci",
                                name: "بكالوريا علوم تجريبية",
                                materials: [
                                    { 
                                        id: "sci", 
                                        name: "علوم الطبيعة والحياة", 
                                        coefficient: 6, 
                                        isOptional: false
                                    },
                                    { 
                                        id: "mat", 
                                        name: "الرياضيات", 
                                        coefficient: 5, 
                                        isOptional: false
                                    },
                                    { 
                                        id: "phy", 
                                        name: "العلوم الفيزيائية",
                                        coefficient: 5,
                                        isOptional: false
                                    },
                                    { 
                                        id: "ara", 
                                        name: "اللغة العربية وآدابها", 
                                        coefficient: 3, 
                                        isOptional: false
                                    },
                                    { 
                                        id: "eng", 
                                        name: "اللغة الإنجليزية", 
                                        coefficient: 2, 
                                        isOptional: false
                                    },
                                    { 
                                        id: "fre", 
                                        name: "اللغة الفرنسية", 
                                        coefficient: 2, 
                                        isOptional: false
                                    },
                                    { 
                                        id: "isl", 
                                        name: "العلوم الإسلامية", 
                                        coefficient: 2, 
                                        isOptional: false
                                    },
                                    { 
                                        id: "his", 
                                        name: "التاريخ والجغرافيا", 
                                        coefficient: 2, 
                                        isOptional: false
                                    },
                                    { 
                                        id: "phi", 
                                        name: "الفلسفة", 
                                        coefficient: 2, 
                                        isOptional: false
                                    },
                                    { 
                                        id: "ama", 
                                        name: "اللغة الأمازيغية", 
                                        coefficient: 2, 
                                        isOptional: true
                                    },
                                    { 
                                        id: "spo",
                                        name: "التربية البدنية والرياضية",
                                        coefficient: 1,
                                        isOptional: true
                                    }
                                ]
                            },
                            {
                                id: "sec3CerMat",
                                name: "بكالوريا رياضيات",
                                materials: [
                                    { 
                                        id: "mat", 
                                        name: "الرياضيات", 
                                        coefficient: 7, 
                                        isOptional: false
                                    },
                                    { 
                                        id: "phy",
                                        name: "العلوم الفيزيائية", 
                                        coefficient: 6, 
                                        isOptional: false
                                    },
                                    { 
                                        id: "ara", 
                                        name: "اللغة العربية وآدابها",
                                        coefficient: 3, 
                                        isOptional: false
                                    },
                                    { 
                                        id: "sci", 
                                        name: "العلوم الطبيعية", 
                                        coefficient: 2, 
                                        isOptional: false
                                    },
                                    { 
                                        id: "eng",
                                        name: "اللغة الإنجليزية",
                                        coefficient: 2, 
                                        isOptional: false
                                    },
                                    { 
                                        id: "fre", 
                                        name: "اللغة الفرنسية", 
                                        coefficient: 2,
                                        isOptional: false
                                    },
                                    { 
                                        id: "isl", 
                                        name: "العلوم الإسلامية", 
                                        coefficient: 2, 
                                        isOptional: false
                                    },
                                    { 
                                        id: "his",
                                        name: "التاريخ والجغرافيا",
                                        coefficient: 2, 
                                        isOptional: false
                                    },
                                    { 
                                        id: "phi", 
                                        name: "الفلسفة", 
                                        coefficient: 2, 
                                        isOptional: false
                                    },
                                    { 
                                        id: "ama", 
                                        name: "اللغة الأمازيغية", 
                                        coefficient: 2, 
                                        isOptional: true
                                    },
                                    { 
                                        id: "spo", 
                                        name: "التربية البدنية والرياضية",
                                        coefficient: 1, 
                                        isOptional: true
                                    }
                                ]
                            },
                            {
                                id: "sec3CerEng",
                                name: "بكالوريا تقني رياضي",
                                materials: [
                                    { 
                                        id: "tec", 
                                        name: "تكنولوجيا",
                                        coefficient: 7, 
                                        isOptional: false
                                    },
                                    { 
                                        id: "mat", 
                                        name: "الرياضيات",
                                        coefficient: 6, 
                                        isOptional: false
                                    },
                                    { 
                                        id: "phy", 
                                        name: "العلوم الفيزيائية",
                                        coefficient: 6, 
                                        isOptional: false
                                    },
                                    { 
                                        id: "ara", 
                                        name: "اللغة العربية وآدابها",
                                        coefficient: 3, 
                                        isOptional: false
                                    },
                                    { 
                                        id: "eng", 
                                        name: "اللغة الإنجليزية",
                                        coefficient: 2, 
                                        isOptional: false
                                    },
                                    { 
                                        id: "fre", 
                                        name: "اللغة الفرنسية",
                                        coefficient: 2, 
                                        isOptional: false
                                    },
                                    {
                                        id: "isl", 
                                        name: "العلوم الإسلامية", 
                                        coefficient: 2, 
                                        isOptional: false
                                    },
                                    { 
                                        id: "his", 
                                        name: "التاريخ والجغرافيا",
                                        coefficient: 2,
                                        isOptional: false
                                    },
                                    { 
                                        id: "phi", 
                                        name: "الفلسفة", 
                                        coefficient: 2,
                                        isOptional: false
                                    },
                                    { 
                                        id: "ama", 
                                        name: "اللغة الأمازيغية", 
                                        coefficient: 2, 
                                        isOptional: true
                                    },
                                    { 
                                        id: "spo", 
                                        name: "التربية البدنية والرياضية", 
                                        coefficient: 1, 
                                        isOptional: true
                                    }
                                ]
                            },
                            {
                                id: "sec3CerEco",
                                name: "بكالوريا تسيير واقتصاد",
                                materials: [
                                    { 
                                        id: "acc", 
                                        name: "تسيير محاسبي ومالي",
                                        coefficient: 6, 
                                        isOptional: false
                                    },
                                    { 
                                        id: "eco", 
                                        name: "اقتصاد ومناجمنت",
                                        coefficient: 5,
                                        isOptional: false
                                    },
                                    { 
                                        id: "mat", 
                                        name: "الرياضيات",
                                        coefficient: 5, 
                                        isOptional: false
                                    },
                                    { 
                                        id: "his",
                                        name: "التاريخ والجغرافيا",
                                        coefficient: 4, 
                                        isOptional: false
                                    },
                                    { 
                                        id: "ara", 
                                        name: "اللغة العربية وآدابها",
                                        coefficient: 3,
                                        isOptional: false
                                    },
                                    { 
                                        id: "eng",
                                        name: "اللغة الإنجليزية",
                                        coefficient: 2, 
                                        isOptional: false
                                    },
                                    { 
                                        id: "fre",
                                        name: "اللغة الفرنسية",
                                        coefficient: 2, 
                                        isOptional: false
                                    },
                                    { 
                                        id: "law", 
                                        name: "قانون", 
                                        coefficient: 2, 
                                        isOptional: false
                                    },
                                    { 
                                        id: "isl", 
                                        name: "العلوم الإسلامية", 
                                        coefficient: 2, 
                                        isOptional: false
                                    },
                                    { 
                                        id: "phi", 
                                        name: "الفلسفة", 
                                        coefficient: 2,
                                        isOptional: false
                                    },
                                    { 
                                        id: "ama", 
                                        name: "اللغة الأمازيغية", 
                                        coefficient: 2, 
                                        isOptional: true
                                    },
                                    {
                                        id: "spo",
                                        name: "التربية البدنية والرياضية",
                                        coefficient: 1,
                                        isOptional: true
                                    }
                                ]
                            },
                            {
                                id: "sec3CerLit",
                                name: "بكالوريا آداب وفلسفة",
                                materials: [
                                    { 
                                        id: "ara", 
                                        name: "اللغة العربية وآدابها",
                                        coefficient: 6, 
                                        isOptional: false
                                    },
                                    { 
                                        id: "phi",
                                        name: "الفلسفة", 
                                        coefficient: 6, 
                                        isOptional: false
                                    },
                                    { 
                                        id: "his",
                                        name: "التاريخ والجغرافيا", 
                                        coefficient: 4, 
                                        isOptional: false
                                    },
                                    { 
                                        id: "eng",
                                        name: "اللغة الإنجليزية", 
                                        coefficient: 3,
                                        isOptional: false
                                    },
                                    { 
                                        id: "fre", 
                                        name: "اللغة الفرنسية",
                                        coefficient: 3, 
                                        isOptional: false
                                    },
                                    { 
                                        id: "mat", 
                                        name: "الرياضيات",
                                        coefficient: 2, 
                                        isOptional: false
                                    },
                                    {
                                        id: "isl",
                                        name: "العلوم الإسلامية", 
                                        coefficient: 2, 
                                        isOptional: false
                                    },
                                    { 
                                        id: "ama", 
                                        name: "اللغة الأمازيغية", 
                                        coefficient: 2, 
                                        isOptional: true
                                    },
                                    { 
                                        id: "spo", 
                                        name: "التربية البدنية والرياضية",
                                        coefficient: 1, 
                                        isOptional: true
                                    }
                                ]
                            },
                            {
                                id: "sec3CerLan",
                                name: "بكالوريا لغات أجنبية",
                                materials: [
                                    { 
                                        id: "sgi", 
                                        name: "لغة اسبانية، ألمانية، إيطالية",
                                        coefficient: 4,
                                        isOptional: false
                                    },
                                    { 
                                        id: "eng",
                                        name: "اللغة الإنجليزية",
                                        coefficient: 5, 
                                        isOptional: false
                                    },
                                    { 
                                        id: "fre", 
                                        name: "اللغة الفرنسية", 
                                        coefficient: 5, 
                                        isOptional: false
                                    },
                                    { 
                                        id: "ara", 
                                        name: "اللغة العربية", 
                                        coefficient: 5,
                                        isOptional: false
                                    },
                                    { 
                                        id: "isl", 
                                        name: "العلوم الإسلامية", 
                                        coefficient: 2, 
                                        isOptional: false
                                    },
                                    { 
                                        id: "his", 
                                        name: "التاريخ والجغرافيا", 
                                        coefficient: 2, 
                                        isOptional: false
                                    },
                                    { 
                                        id: "phi", 
                                        name: "الفلسفة", 
                                        coefficient: 2,
                                        isOptional: false
                                    },
                                    { 
                                        id: "ama", 
                                        name: "اللغة الأمازيغية", 
                                        coefficient: 2, 
                                        isOptional: true
                                    },
                                    { 
                                        id: "spo", 
                                        name: "التربية البدنية والرياضية",
                                        coefficient: 1,
                                        isOptional: true
                                    }
                                ]
                            }
                        ]
                    }
                ],
            }
        ]
    },
]

export const svgs = {
    isl: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M16 2L2 7.51V12l12.72-1.59c.42-.05.85-.08 1.28-.08s.86.03 1.28.08L30 12V7.51zm0 12.29l-14 .12v10.01l14 5.5l14-5.5V14l-13.79.29zM16 20l-1.98-.32c-.42-.07-.76-.48-.76-.92v-1.14c0-.44.34-.77.76-.74l1.98.18l1.98-.18c.42-.03.76.3.76.74v1.14c0 .44-.34.85-.76.92zm-5.37-.93l-.76-.99c-.12-.16-.12-.39 0-.53l.76-.81c.13-.14.34-.12.47.04l.82 1c.14.17.14.42 0 .56l-.82.8c-.13.13-.34.1-.47-.07m-6.78-1.03c-.08.11-.22.09-.3-.04l-.49-.78a.4.4 0 0 1 0-.42l.49-.67c.08-.11.22-.1.3.03l.52.78c.09.13.09.33 0 .44zm1.83.38c-.27-.04-.48-.35-.47-.71v-.9c0-.35.21-.61.47-.59l2.51.2c.31.02.57.36.57.75v1.01c0 .39-.26.67-.57.62zm15.22.72l-.82-.81c-.14-.14-.14-.39 0-.56l.82-1c.13-.16.34-.18.47-.04l.76.81c.12.13.12.37 0 .53l-.76.99c-.13.18-.34.21-.47.08M28.45 18c-.08.13-.22.15-.3.05l-.52-.66c-.09-.11-.09-.31 0-.44l.52-.78c.08-.13.22-.14.3-.03l.49.66c.08.11.08.29 0 .42zm-1.65-.28c0 .35-.21.66-.47.71l-2.51.38c-.31.05-.57-.23-.57-.62v-1.01c0-.39.26-.72.57-.75l2.51-.2c.26-.02.47.24.47.59z"/></svg>`,
    ara: `<svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="-45 14 83 86"><path d="M17.75,14l7.1,6.6q-2,2.6,-4.05,5.15q-2.05,2.55,-4.15,5.15l-7.1,-6.6q2,-2.6,4.1,-5.2q2.1,-2.6,4.1,-5.1zm-22.5,65.55q-1.8,4.15,-4.4,7.85q-3.1,4.5,-7.35,7.5q-4.25,3,-8.7,4.25q-4.45,1.25,-8.45,0.6q-4,-0.65,-6.75,-3.35q-2.75,-2.7,-3.55,-7.7q-0.8,-5,1.15,-12.35q1.95,-7.35,7.45,-17.35q0.6,-1.2,1.25,-0.9q0.65,0.3,-0.05,2.1q-0.9,2.1,-2.25,4.85q-1.35,2.75,-2.5,5.8q-1.15,3.05,-1.45,5.9q-0.3,2.85,0.8,5.05q1.1,2.2,4.2,3.3q3.5,1.2,7.4,0.9q3.9,-0.3,7.75,-1.7q3.85,-1.4,7.2,-3.45q3.35,-2.05,5.75,-4.25q0.2,-4.2,-0.6,-7.7q-0.8,-3.5,-1.9,-6.8l5.4,-12.5q1.7,3.6,2.55,5.9q0.85,2.3,2.15,3.1q1.3,0.8,4.2,0.2l2.25,-2.6q2.25,-2.6,6.3,-6.95q4.05,-4.35,9.55,-9.55q1.6,-1.5,4.3,-2.4q2.7,-0.9,5.45,-0.7q2.75,0.2,4.45,2.2q2.1,2.5,1.7,5.2q-0.4,2.7,-2.05,5.3q-1.65,2.6,-3.35,4.9q-4,5.3,-10.25,9q-6.25,3.7,-12.75,5.4q-3,0.7,-6.35,1.4q-3.35,0.7,-5.85,1.1q-0.9,4.3,-2.7,8.45zm33.3,-28.05q-0.2,-0.8,-0.5,-1.4q-0.9,-1.7,-3.35,-2.4q-2.45,-0.7,-4.55,0.4q-3.5,1.9,-6.25,4.6q-2.75,2.7,-5.45,5.5q5.3,-1.1,10.25,-2.3q4.95,-1.2,9.25,-3.2q0.8,-0.4,0.6,-1.2z" fill="currentColor" fill-opacity="1" fill-rule="evenodd"/></svg>`,
    ama: `<svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="-23 31 45 69"><path d="M-4.3659024,48.230305q0.0102,-2.8323,0.0459,-5.4303q0.05,-3.64,0.29,-6.47q0.15,-1.76,1.81,-3.05q1.66,-1.3,3.61,-1.3q1.32,0,2.2,0.56q0.88,0.57,0.88,1.69q0,1.22,-0.25,1.73q-0.24,0.51,-0.24,2.27q0,1.42,-0.02,3.86q-0.0255,2.0751,-0.0293,6.7323q1.3445,-0.4514,2.5193,-1.3123q2.46,-1.81,4.17,-4.32q1.71,-2.52,2.71,-4.81q1,-2.3,1.25,-3.22q0.39,-1.57,1.97,-2.37q1.59,-0.81,2.62,-0.81q2,0,2.66,0.73q0.66,0.74,0.66,1.57q0,1.12,-1.03,3.66q-1.03,2.54,-3.05,5.61q-2.03,3.08,-5.03,5.94q-3,2.85,-6.98,4.71q-1.1809,0.5489,-2.4419,0.935q0.03,2.2615,0.0919,4.115q0.12,3.59,0.25,6.74q0.12,3.15,0.24,6.74q0.0508,1.5203,0.0801,3.3168q3.8885,0.4301,7.2699,2.4432q4.3,2.56,6.88,6.91q2.59,4.35,2.59,9.72q0,1.41,-1.36,3.15q-1.37,1.73,-4.16,1.73q-1.66,0,-2.22,-0.63q-0.56,-0.64,-0.56,-1.18q0,-4,-1.81,-7.54q-1.8,-3.54,-4.93,-5.76q-0.8044,-0.5723,-1.6646,-0.9971q-0.0106,2.7525,-0.0454,5.2671q-0.04,3.61,-0.29,6.49q-0.15,1.76,-1.78,3.06q-1.64,1.29,-3.64,1.29q-1.32,0,-2.2,-0.59q-0.87,-0.58,-0.87,-1.66q0,-1.22,0.24,-1.73q0.24,-0.51,0.24,-2.27q0,-1.42,0.03,-3.86q0.0172,-2.0955,0.0196,-6.8167q-1.5088,0.4487,-2.8096,1.3967q-2.46,1.81,-4.17,4.32q-1.71,2.52,-2.71,4.79q-1,2.27,-1.25,3.25q-0.39,1.51,-1.97,2.34q-1.59,0.83,-2.62,0.83q-2,0,-2.66,-0.76q-0.66,-0.75,-0.66,-1.53q0,-1.13,1.03,-3.67q1.03,-2.54,3.05,-5.61q2.03,-3.08,5.03,-5.93q3,-2.86,6.98,-4.72q1.3157,-0.6116,2.7307,-1.0209q-0.03,-2.2118,-0.0907,-4.0291q-0.12,-3.59,-0.24,-6.74q-0.13,-3.15,-0.25,-6.74q-0.0504,-1.5084,-0.0797,-3.287q-4.0529,-0.3849,-7.5603,-2.473q-4.3,-2.56,-6.88,-6.93q-2.59,-4.37,-2.59,-9.69q0,-1.42,1.36,-3.15q1.37,-1.74,4.16,-1.74q1.66,0,2.22,0.64q0.56,0.63,0.56,1.17q0,3.95,1.81,7.52q1.8,3.56,4.93,5.78q0.939,0.6711,1.9541,1.1403z" fill="currentColor" fill-opacity="1" fill-rule="evenodd"/></svg>`,
    fre: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="2 2 20 20"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2v3m-1 1h2m-4 8h6m-8 3h10M5 22h4s.906-2 3-2s3 2 3 2h4s-3.5-4-5-8s-2-10-2-10s-.5 6-2 10s-5 8-5 8"/></svg>`,
    eng: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-56 34 111 67"><path d="M-54.5,100.05q0.55,0.45,1.55,0.45q2.1,0,4.55,-0.15q2.45,-0.15,4.85,-0.25q2.4,-0.1,4.4,-0.1q4.4,0,9.5,0.05q5.1,0.05,9.9,0.15q4.8,0.1,8.35,0.15q3.55,0.05,4.85,0.05q0.7,0,1.35,-0.3q0.65,-0.3,0.85,-1q0.7,-2.3,1.45,-4.65q0.75,-2.35,1.25,-4.45q0.5,-2.1,0.5,-3.8q0,-0.7,-0.25,-1.3q-0.25,-0.6,-0.75,-0.6q-0.6,0,-1.05,0.25q-0.45,0.25,-0.85,0.95q-1.2,2.4,-2.6,4.5q-1.4,2.1,-3.1,3.5q-1.4,1.2,-3.4,1.7q-2,0.5,-4.2,0.5l-8.6,0q-2.7,0,-4,-1.2q-1.3,-1.2,-1.3,-4.2l0,-19q0,-1.2,0.65,-1.75q0.65,-0.55,1.85,-0.55l9.3,0q2,0,3.1,1.6q1.1,1.6,2,4.6q0.7,2.6,2.3,2.6q0.6,0,0.9,-0.65q0.3,-0.65,0.1,-2.05q-0.1,-1.3,-0.15,-2.7l-0.1,-2.8q-0.05,-1.4,-0.05,-2.6q0,-1.3,0.05,-2.7q0.05,-1.4,0.15,-2.8q0.1,-1.4,0.2,-2.6q0.1,-1.1,-0.3,-1.65q-0.4,-0.55,-0.9,-0.55q-1.3,0,-2,1.9q-0.9,2.5,-2.05,4.25q-1.15,1.75,-3.75,1.75l-8.8,0q-1.1,0,-1.8,-0.6q-0.7,-0.6,-0.7,-1.8l0,-18.9q0,-2.1,1.6,-3.25q1.6,-1.15,3.8,-1.15l7.5,0q2.6,0,4.3,1q1.7,1,2.9,2.1q1,1.1,1.8,2.9q0.8,1.8,1.8,4.3q0.3,0.8,0.85,1.2q0.55,0.4,1.05,0.4q0.5,0,0.9,-0.5q0.4,-0.5,0.4,-1.4q0,-2.6,-0.6,-6q-0.6,-3.4,-1,-7q-0.1,-1,-0.95,-1.45q-0.85,-0.45,-1.55,-0.45q-0.4,0,-2.5,0.35q-2.1,0.35,-5.3,0.35q-4.6,0.1,-10.5,0.2q-5.9,0.1,-11.1,0.1q-2.3,0,-4.8,-0.15q-2.5,-0.15,-5.1,-0.25q-2.6,-0.1,-5.1,-0.1q-1,0,-1.6,0.45q-0.6,0.45,-0.6,1.05q0,0.7,0.5,1.25q0.5,0.55,1.8,0.85q3.6,0.8,4.9,2.2q1.3,1.4,1.3,4.6l0,45.5q0,3.2,-1.45,4.4q-1.45,1.2,-4.85,2.1q-2.2,0.6,-2.2,2.1q0,0.6,0.55,1.05zm57.7,-0.1q0.65,0.35,1.35,0.35q2,0,3.85,-0.15q1.85,-0.15,3.6,-0.25q1.75,-0.1,3.45,-0.1q1.8,0,3.3,0.1q1.5,0.1,3.2,0.25q1.7,0.15,3.7,0.15q0.7,0,1.2,-0.4q0.5,-0.4,0.5,-1q0,-1.4,-2,-2q-1.4,-0.5,-2.5,-1.15q-1.1,-0.65,-1.1,-2.65l0,-23.6q0,-0.5,0.2,-1q0.2,-0.5,0.6,-0.9q1.8,-1.2,3.5,-1.9q1.7,-0.7,3.9,-0.7q2.9,0.1,4.65,2.25q1.75,2.15,1.75,5.95l0,19.9q0,2,-1,2.65q-1,0.65,-2.5,1.15q-0.8,0.3,-1.4,0.75q-0.6,0.45,-0.6,1.25q0,0.7,0.55,1.05q0.55,0.35,1.15,0.35q2,0,3.7,-0.15q1.7,-0.15,3.4,-0.25q1.7,-0.1,3.4,-0.1q1.8,0,3.45,0.1q1.65,0.1,3.4,0.25q1.75,0.15,3.75,0.15q0.6,0,1.15,-0.35q0.55,-0.35,0.55,-1.05q0,-0.8,-0.6,-1.25q-0.6,-0.45,-1.4,-0.75q-1.5,-0.5,-2.65,-1.15q-1.15,-0.65,-1.15,-2.65l0,-22q0,-6.6,-3.55,-10.45q-3.55,-3.85,-8.75,-3.85q-4.6,0,-8.1,1.8q-3.5,1.8,-6.9,5.1q-0.1,-0.1,-0.15,-0.6q-0.05,-0.5,-0.05,-0.9q0,-1.4,0.25,-3.15q0.25,-1.75,0.25,-2.55q0,-0.5,-0.15,-0.85q-0.15,-0.35,-0.75,-0.35q-0.4,0,-0.9,0.3q-0.5,0.3,-0.9,0.5q-2.9,1.5,-6.95,2.85q-4.05,1.35,-7.45,2.15q-1,0.3,-1,1.7q0,0.9,0.35,1.3q0.35,0.4,0.75,0.5q1.8,0.4,2.45,1.9q0.65,1.5,0.65,3.7l0,22.9q0,2,-1.15,2.65q-1.15,0.65,-2.65,1.15q-0.9,0.3,-1.6,0.75q-0.7,0.45,-0.7,1.25q0,0.7,0.65,1.05z" fill="currentColor" fill-opacity="1" fill-rule="evenodd"/></svg>`,
    mat: `<svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="-25 57 51 45"><path d="M-11.05,101.1q1.5,0.6,2.2,0.6q1.1,0,1.15,-0.7q0.05,-0.7,-0.15,-2q-0.1,-1,-0.3,-2.6q-0.2,-1.6,-0.1,-4.1q0.2,-3.7,1.05,-9.55q0.85,-5.85,3.15,-14.65q0.3,-1.2,0.9,-1.7q0.6,-0.5,1.6,-0.4l7.8,0.3q0.8,0,1.2,0.8q0.4,0.8,0.4,1.7q0,1.2,-0.4,4.1q-0.4,2.9,-0.9,6.5q-0.5,3.6,-0.9,6.85q-0.4,3.25,-0.4,5.15q0,5,2,7.5q2,2.5,4.5,2.5q2.5,0,4.1,-1.45q1.6,-1.45,2.4,-3.45q0.8,-2,0.8,-3.7q0,-0.8,-0.15,-1.2q-0.15,-0.4,-0.85,-0.4q-0.1,0,-0.55,0.2q-0.45,0.2,-1.05,0.4q-0.7,0.3,-1.65,0.45q-0.95,0.15,-1.75,0.05q-1.5,-0.1,-2.65,-0.9q-1.15,-0.8,-1.15,-2.7q0,-1.5,0.3,-4.25q0.3,-2.75,0.75,-5.8q0.45,-3.05,0.85,-5.55q0.4,-2.5,0.5,-3.6q0.3,-2.1,1.05,-2.6q0.75,-0.5,2.35,-0.5q1.1,0,3.2,0.2q2.1,0.2,4.1,0.2q0.8,0,1.65,-1.05q0.85,-1.05,1.45,-2.65q0.6,-1.6,0.6,-3q0,-1.7,-0.25,-2.4q-0.25,-0.7,-1.05,-0.7q-0.4,0,-0.95,0.4q-0.55,0.4,-1.35,0.9q-1,0.6,-2.55,1.15q-1.55,0.55,-3.65,0.55q-2.2,0,-4.65,-0.15q-2.45,-0.15,-5.05,-0.25q-3.4,-0.2,-7,-0.4q-3.6,-0.2,-7.1,-0.2q-4.9,0,-8.15,1.3q-3.25,1.3,-5.2,3.35q-1.95,2.05,-2.8,4.35q-0.85,2.3,-0.85,4.4q0,1.9,0.45,2.95q0.45,1.05,1.05,1.05q0.6,0,0.75,-0.55q0.15,-0.55,0.25,-0.95q1.3,-3.8,2.95,-5.8q1.65,-2,4.05,-2.8q2.4,-0.8,5.8,-0.8q1.7,0,2.05,0.7q0.35,0.7,-0.05,2.1l-6.2,21.9q-0.6,2.1,-1.1,3.95q-0.5,1.85,-0.5,3.85q0,0.8,1.25,1.65q1.25,0.85,2.75,1.45z" fill="currentColor" fill-opacity="1" fill-rule="evenodd"/></svg>`,
    sci: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M9.2 13.73a1 1 0 0 0-1.41-.05A11.18 11.18 0 0 0 4 22a1 1 0 0 0 2 0a9.15 9.15 0 0 1 3.15-6.86a1 1 0 0 0 .05-1.41m10.17 4.64a10.9 10.9 0 0 0-1.6-3A14.3 14.3 0 0 0 14.06 12C16.3 10.57 20 7.4 20 2a1 1 0 0 0-2 0c0 5.4-4.59 8.17-6 8.89A13.4 13.4 0 0 1 9.31 9H12a1 1 0 0 0 0-2H7.55a9.4 9.4 0 0 1-1-2H15a1 1 0 0 0 0-2H6.06A8 8 0 0 1 6 2a1 1 0 0 0-2 0c0 7.57 7.3 10.79 7.61 10.92A13 13 0 0 1 14.7 15H12a1 1 0 0 0 0 2h4.43a9 9 0 0 1 1 2H9a1 1 0 0 0 0 2h8.94a8 8 0 0 1 .06 1a1 1 0 0 0 2 0a10.5 10.5 0 0 0-.22-2.19a9 9 0 0 0-.41-1.44"/></svg>`,
    phy: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="currentColor" d="M12.19.13C9.82.04 5.8 2.66 3.21 5.69c.19.3.7.96.93 1.27c3.2-3.78 8.08-7.22 9.01-4.49c.82 2.39-1.4 6.28-3.9 9.53C15.52 7.02 15.98.27 12.19.13M2.14 1.39c-5.21.17 3.73 14.42 10.28 13.47c2.32-.34 3.69-3.33 1.39-6.53c-.25.45-.61.83-.92 1.25c1.22 2.23.56 3.6-.91 3.83C6.66 14.25-3.09.99 3.94 1.8c0 0-.27-.34-1.55-.4h-.26zM10.5 4.5a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 .16-.01c.23.28.41.53.66.88c.29-.42.51-.84.65-1.26c-.18-.23-.32-.38-.48-.54V5.5a1 1 0 0 0-1-1zM7.5 6A1.5 1.5 0 0 0 6 7.5A1.5 1.5 0 0 0 7.5 9A1.5 1.5 0 0 0 9 7.5A1.5 1.5 0 0 0 7.5 6M1.44 8.09c-1.49 2.42-2.24 5.26.27 6.03a1 1 0 0 0 .79.38a1 1 0 0 0 1-1a1 1 0 0 0-1-1a1 1 0 0 0-.62.21c-.77-.6-.6-1.67.44-3.33z"/></svg>`,
    his: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 2048 2048"><path fill="currentColor" d="M496 883q13 0 29 4t32 11t32 13t29 12l-16 2q-8 1-17 1q-17 0-31-5t-26-13t-24-12t-22-6q-10 0-18 4t-16 9q0-4-7-4q7-7 26-11t29-5m135 45q41 0 75 14q-14 5-28 8t-29 4q-20 0-36-4q5-8 10-10t8-12M1024 0q141 0 271 37t244 103t208 161t160 207t104 244t37 272q0 141-37 271t-103 244t-161 208t-207 160t-244 104t-272 37q-141 0-271-37t-244-103t-208-161t-160-207t-104-244t-37-272q0-141 37-271t103-244t161-208t207-160T752 37t272-37m762 555q-14-22-28-42t-29-41q-2 9-5 13t-4 18q0 9 7 17t18 16t22 12t19 7m-69-98q0 8-3 11h6q4 0 6 1zm-693 1463q114 0 223-29t206-82t180-130t145-172q-13-30-25-61t-12-64q0-36 3-58t7-39t4-29t-3-31t-17-41t-37-62q1-7 3-19t4-25t1-24t-5-19q-26-3-54-11t-50-24l6-5q-13 3-26 8t-25 11t-26 8t-27 4l-16-2l3-7q-14 4-30 10t-31 6q-10 0-29-7t-38-17t-34-22t-15-23l2-3q-5-6-13-11t-15-10t-13-11t-5-14l11-9l-23-3l-8-30q2 5 9 4t11-4l-36-19l25-64q-14-52-7-80t27-46t44-36t49-49l-3-12l66-80l15-2q28 0 63-2t71-7t71-10t64-13q-32-38-67-72t-75-65q-11 4-27 11t-32 18t-25 24t-11 27l6 19q-18 29-40 36t-45 8t-48 0t-48 9l-16-34l15-58l-17-25l173-54q-11-28-36-42t-55-14v-10l56-9q-93-46-193-70t-205-24q-87 0-172 17t-164 49t-153 80t-135 108q26 0 40 13t26 29t25 29t35 14l16-12l-2-22l33-47l-26-74q5-3 15-10t17-7q30 0 46 3t28 11t21 23t28 38l36-28q10 4 32 13t45 22t39 27t17 26q0 15-11 24t-29 15t-37 9t-38 8t-29 10t-12 17l58 19q-20 17-43 31t-48 26l4 17l-92 36v28l-7 3l5-35l-4-1q-7 0-8 3t-1 7t2 8t1 6l-13-7l2 4q0 3 3 9t8 11t8 10t4 5q0 3-4 6t-10 4t-8 3t0 1q14 0 6 2t-25 10t-31 23t-16 44q0 17 1 33t-1 33q-14-38-42-58t-68-20l-43 4l21 14q-17-2-35-4t-37-1t-34 8t-30 21l-6 45q0 32 14 52t49 21q30 0 59-9t57-21q-9 22-20 42t-16 44l13 6q24-16 44-5t39 32t39 43t43 32l-34 18l-80-45q1 2 2 9t-1 3l-36-61q-32-1-68-10t-73-24t-69-33t-59-38l-7 107q0 122 33 238t93 218t147 186t193 143q-5-21-1-42t10-42t13-42t7-43q0-32-10-67t-24-71t-31-71t-27-66t-16-58t6-47l-15-7q6-14 16-27t21-26t17-28t7-30q0-10-4-21t-7-21l21 5q17-39 46-53t73-15q5 0 21 4t34 11t34 11t24 8q0 7 8 9t9 7l-2 8q3 1 14 7t24 15t23 16t14 11q18 0 49 12t68 30t73 43t68 50t49 50t20 44l-34 36q4 51-7 78t-34 45t-53 30t-65 34q0 20-10 43t-25 44t-36 35t-42 14l-42-32q2 2 0 7t-5 2q10 19 5 44t-17 51t-27 49t-27 39q54 14 108 21t109 7"/></svg>`,
    spo: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0.5 0.5 15 15"><path fill="currentColor" d="M2.712 12.582a6.97 6.97 0 0 1-1.7-4.185A6 6 0 0 1 5.51 9.784zm3.507-3.507a6.98 6.98 0 0 0-5.19-1.684A6.97 6.97 0 0 1 2.71 3.417L7.293 8zM8 7.293L3.418 2.71a6.97 6.97 0 0 1 3.974-1.682a6.98 6.98 0 0 0 1.683 5.19zM6.217 10.49a6 6 0 0 1 1.387 4.498a6.97 6.97 0 0 1-4.186-1.698zm6.365 2.799a6.97 6.97 0 0 1-3.973 1.683a6.98 6.98 0 0 0-1.683-5.19L8 8.708zM9.784 5.51a6 6 0 0 1-1.386-4.5a6.97 6.97 0 0 1 4.185 1.7zm5.189 3.098a6.97 6.97 0 0 1-1.684 3.973l-4.582-4.58l1.075-1.076a6.98 6.98 0 0 0 5.19 1.683m.016-1.005a6 6 0 0 1-4.496-1.387l2.798-2.799a6.97 6.97 0 0 1 1.698 4.186"/></svg>`,
    phi: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><g fill="currentColor"><path d="M9.167 4.5a1.167 1.167 0 1 1-2.334 0a1.167 1.167 0 0 1 2.334 0"/><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M1 8a7 7 0 0 1 7-7a3.5 3.5 0 1 1 0 7a3.5 3.5 0 1 0 0 7a7 7 0 0 1-7-7m7 4.667a1.167 1.167 0 1 1 0-2.334a1.167 1.167 0 0 1 0 2.334"/></g></svg>`,
    sgi: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="2 2 20 20"><path fill="currentColor" fill-rule="evenodd" d="M15.958 8.95a1.5 1.5 0 0 1 1.085.02c.472.193.693.613.791.81c.112.227.223.523.337.828l.015.04l3.75 10a1 1 0 0 1-1.872.703l-3.613-9.633l-4.028 9.667a1 1 0 0 1-1.846-.77l4.179-10.028l.016-.04a10 10 0 0 1 .367-.815c.104-.194.34-.605.82-.781Zm-3.174-4.909a1 1 0 0 1 .675 1.243C12.476 8.6 11.432 11.04 9.87 13.02c-1.568 1.988-3.598 3.434-6.417 4.872a1 1 0 1 1-.909-1.782c2.683-1.369 4.434-2.654 5.756-4.329c1.329-1.685 2.285-3.842 3.24-7.064a1 1 0 0 1 1.243-.675Z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M5.961 7.342a1 1 0 0 1 1.235.689c.702 2.47 2.066 4.29 3.904 5.669a1 1 0 0 1-1.2 1.6c-2.162-1.622-3.798-3.802-4.627-6.723a1 1 0 0 1 .688-1.235M2 5a1 1 0 0 1 1-1h12.5a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M9 2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1m4 15a1 1 0 0 1 1-1h5.5a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1" clip-rule="evenodd"/></svg>`,
    tec: `<svg xmlns="http://www.w3.org/2000/svg" width="1.08em" height="1em" viewBox="165 165 1845 1700"><path fill="currentColor" d="M896 896q0-106-75-181t-181-75t-181 75t-75 181t75 181t181 75t181-75t75-181m768 512q0-52-38-90t-90-38t-90 38t-38 90q0 53 37.5 90.5t90.5 37.5t90.5-37.5t37.5-90.5m0-1024q0-52-38-90t-90-38t-90 38t-38 90q0 53 37.5 90.5T1536 512t90.5-37.5T1664 384m-384 421v185q0 10-7 19.5t-16 10.5l-155 24q-11 35-32 76q34 48 90 115q7 11 7 20q0 12-7 19q-23 30-82.5 89.5T999 1423q-11 0-21-7l-115-90q-37 19-77 31q-11 108-23 155q-7 24-30 24H547q-11 0-20-7.5t-10-17.5l-23-153q-34-10-75-31l-118 89q-7 7-20 7q-11 0-21-8q-144-133-144-160q0-9 7-19q10-14 41-53t47-61q-23-44-35-82l-152-24q-10-1-17-9.5T0 987V802q0-10 7-19.5T23 772l155-24q11-35 32-76q-34-48-90-115q-7-11-7-20q0-12 7-20q22-30 82-89t79-59q11 0 21 7l115 90q34-18 77-32q11-108 23-154q7-24 30-24h186q11 0 20 7.5t10 17.5l23 153q34 10 75 31l118-89q8-7 20-7q11 0 21 8q144 133 144 160q0 8-7 19q-12 16-42 54t-45 60q23 48 34 82l152 23q10 2 17 10.5t7 19.5m640 533v140q0 16-149 31q-12 27-30 52q51 113 51 138q0 4-4 7q-122 71-124 71q-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71q-4-3-4-7q0-25 51-138q-18-25-30-52q-149-15-149-31v-140q0-16 149-31q13-29 30-52q-51-113-51-138q0-4 4-7q4-2 35-20t59-34t30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70q4 3 4 7q0 25-51 138q17 23 30 52q149 15 149 31m0-1024v140q0 16-149 31q-12 27-30 52q51 113 51 138q0 4-4 7q-122 71-124 71q-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71q-4-3-4-7q0-25 51-138q-18-25-30-52q-149-15-149-31V314q0-16 149-31q13-29 30-52q-51-113-51-138q0-4 4-7q4-2 35-20t59-34t30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70q4 3 4 7q0 25-51 138q17 23 30 52q149 15 149 31"/></svg>`,
    com: `<svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1em" viewBox="0 0 20 16"><path fill="currentColor" d="M12.736.064c.52.2.787.805.598 1.353L8.546 15.305c-.19.548-.763.83-1.282.631c-.52-.2-.787-.805-.598-1.353L11.454.695c.19-.548.763-.83 1.282-.631M2.414 8.256L5.95 11.99c.39.412.39 1.08 0 1.492a.963.963 0 0 1-1.414 0L.293 9.003a1.1 1.1 0 0 1 0-1.493l4.243-4.48a.963.963 0 0 1 1.414 0a1.1 1.1 0 0 1 0 1.494zm15.172 0L14.05 4.524a1.1 1.1 0 0 1 0-1.493a.963.963 0 0 1 1.414 0l4.243 4.479c.39.412.39 1.08 0 1.493l-4.243 4.478a.963.963 0 0 1-1.414 0a1.1 1.1 0 0 1 0-1.492z"/></svg>`,
    acc: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.016 2C18.903 2 18 4.686 18 8h2.016c.972 0 1.457 0 1.758-.335c.3-.336.248-.778.144-1.661C21.64 3.67 20.894 2 20.016 2Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M18 8.054v10.592c0 1.511 0 2.267-.462 2.565c-.755.486-1.922-.534-2.509-.904c-.485-.306-.727-.458-.996-.467c-.291-.01-.538.137-1.062.467l-1.911 1.205c-.516.325-.773.488-1.06.488s-.545-.163-1.06-.488l-1.91-1.205c-.486-.306-.728-.458-.997-.467c-.291-.01-.538.137-1.062.467c-.587.37-1.754 1.39-2.51.904C2 20.913 2 20.158 2 18.646V8.054c0-2.854 0-4.28.879-5.167C3.757 2 5.172 2 8 2h12M6 6h8m-6 4H6"/><path stroke-linecap="round" d="M12.5 10.875c-.828 0-1.5.588-1.5 1.313c0 .724.672 1.312 1.5 1.312s1.5.588 1.5 1.313c0 .724-.672 1.312-1.5 1.312m0-5.25c.653 0 1.209.365 1.415.875m-1.415-.875V10m0 6.125c-.653 0-1.209-.365-1.415-.875m1.415.875V17"/></g></svg>`,
    eco: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 80 80"><g fill="none"><path fill="currentColor" d="M5.879 49.548a3 3 0 1 0 4.242 4.242zm56.568-19.8a3 3 0 1 0-4.243-4.242zM10.121 53.79l16.617-16.617l-4.242-4.242L5.878 49.548zm18.031-16.617l8.486 8.486l4.242-4.243l-8.485-8.485zm18.385 8.486l15.91-15.91l-4.243-4.243l-15.91 15.91zm-9.9 0a7 7 0 0 0 9.9 0l-4.242-4.243a1 1 0 0 1-1.415 0zm-9.899-8.486a1 1 0 0 1 1.414 0l4.243-4.242a7 7 0 0 0-9.9 0z"/><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" d="m65.811 33.113l-10.97-10.971c-1.108-1.107-.324-3 1.242-3h9.728a3 3 0 0 1 3 3v9.728c0 1.566-1.893 2.35-3 1.243"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" d="M8 12v54a2 2 0 0 0 2 2h62"/></g></svg>`,
    law: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="2 2 20 20"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><path d="m10 11.627l-4.925 5.795a1.743 1.743 0 0 1-2.564.102a1.75 1.75 0 0 1 .103-2.57l5.781-4.935"/><path stroke-linecap="round" d="m18 10.067l-4.952 4.963M9.952 2.001L5 6.965m4.333-4.343L5.62 6.344s1.857 2.482 3.714 4.343c1.858 1.861 4.334 3.723 4.334 3.723l3.714-3.723s-1.857-2.481-3.714-4.343c-1.857-1.86-4.334-3.722-4.334-3.722M20 11.659l2-1.64m-2 4.92l2 1.093m-10.998 5.967H21m-8.773 0c.551-.988.963-2.877 2.915-2.983c.58-.032 1.17-.032 1.75 0c1.951.106 2.365 1.995 2.917 2.983"/></g></svg>`,
    civ: `<svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="4.5 4.5 55 55" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><g transform="translate(32 14) rotate(-25) translate(-32 -14)"><rect x="25" y="-5" width="17" height="23" rx="2"/></g><path d="M10 24H54L58 32H6L10 24Z"/><rect x="8" y="32" width="48" height="24" rx="3"/></svg>`,
    art: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="1 1 22 22"><path fill="currentColor" d="m20.71 4.63l-1.34-1.34c-.37-.39-1.02-.39-1.41 0L9 12.25L11.75 15l8.96-8.96c.39-.39.39-1.04 0-1.41M7 14a3 3 0 0 0-3 3c0 1.31-1.16 2-2 2c.92 1.22 2.5 2 4 2a4 4 0 0 0 4-4a3 3 0 0 0-3-3"/></svg>`
}