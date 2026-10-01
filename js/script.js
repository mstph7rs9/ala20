const logo = document.querySelector('.logo')
logo.addEventListener('click', () => {
    window.location.reload()
})

const grades = document.querySelector('.grades')
const count = 500
let gradesContent = ''
for (let i = 0; i < count; i++) {
    const num = (Math.random() * (19.70 - 7.00) + 7.00).toFixed(2)
    gradesContent += `
        <div class="grade">
            ${num}<sub class="gradeSub">/20</sub>
        </div>
    `
}
grades.innerHTML = gradesContent

const hero = document.querySelector('.hero')
const observer = new IntersectionObserver((entries) => {
    const entry = entries[0]
    if (!entry.isIntersecting) {
        logo.classList.add('scrolledLogo')
        button.classList.add('scrolledButton')
        menu.classList.add('scrolledMenu')
    } else {
        logo.classList.remove('scrolledLogo')
        button.classList.remove('scrolledButton')
        menu.classList.remove('scrolledMenu')
    }
}, { threshold: 0.8 })
observer.observe(hero)

const menu = document.querySelector('.menu')
const button = document.querySelector('.button')
const initialMenuHTML = menu.innerHTML;
button.addEventListener('click', (e) => {
    e.stopPropagation()
    button.classList.toggle('open')
    menu.classList.toggle('open')
    document.querySelector('.menu').classList.add('smooth')

    if (!menu.classList.contains('open')) {
        menu.innerHTML = initialMenuHTML
        document.querySelector('.menu').classList.remove('smooth')
    }
})

function smooth () {
    menu.classList.remove('smooth')
    setTimeout(() => {
        menu.classList.add('smooth')
    }, 100)
}

const button1 = document.querySelector('.button1')
const button2 = document.querySelector('.button2')
const installOrDownload = document.querySelector('.installOrDownload')
const mobileAppFeatures = document.querySelector('.mobileAppFeatures')
document.addEventListener('click', (event) => {
    if (menu.classList.contains('open') || button.classList.contains('open') || installOrDownload.classList.contains('open') || mobileAppFeatures.classList.contains('open')) {
        if (!menu.contains(event.target) && !button.contains(event.target) && !installOrDownload.contains(event.target) && !mobileAppFeatures.contains(event.target) && !button1.contains(event.target) && !button2.contains(event.target)) {
            menu.classList.remove('open')
            button.classList.remove('open')
            installOrDownload.classList.remove('open')
            mobileAppFeatures.classList.remove('open')
            if (!menu.classList.contains('open')) {
                menu.innerHTML = initialMenuHTML
                document.querySelector('.menu').classList.remove('smooth')
            }
        }
    }
})


/*-------------------*/


function findById(data, id) {
    for (const level of data) {
        if (level.years) {
            for (const year of level.years) {
                if (year.id === id) return year

                if (year.types) {
                    for (const type of year.types) {
                        if (type.id === id) return type

                        if (type.streams) {
                            for (const stream of type.streams) {
                                if (stream.id === id) return stream
                            }
                        }
                    }
                }
                
                if (year.streams) {
                    for (const stream of year.streams) {
                        if (stream.id === id) return stream
                    }
                }
            }
        }
    }
    return null
}

let currentSelectedId = null
let currentScores = {}
let currentInputs = {}
let disabledMaterials = {}
let data = null
let svgs = null

async function generatePopup (id) {

    if (!data || !svgs) {
        const dataFile = await import('./data.js')
        data = dataFile.data
        svgs = dataFile.svgs
    }
    currentSelectedId = id
    currentScores = {}
    currentInputs = {}
    disabledMaterials = {}
    const item = findById(data, id)
    const materials = item.materials
    
    updateSemesterAverage()
    
    document.querySelector('.choiceTitle').innerHTML = `${item.name}`
    document.querySelector('.materials').innerHTML = ''
    document.querySelector('.inputPoints').innerHTML = ''

    let materialsContent = ''
    for (const material of materials) {
        materialsContent += `
            <div class="material" id="${material.id}">
                ${svgs[material.id]}
                <div class="nameCoefficientAverage">
                    <h4>${material.name}</h4>
                    <div class="coefficientAverage">
                        <p>المعامل : ${material.coefficient}</p>
                        <p>0.00</p>
                        ${material.isOptional ? `
                            <div class="switch active" data-id="${material.id}">
                                <div class="switchCircle"></div>
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        `
    }
    document.querySelector('.materials').innerHTML = materialsContent

    document.querySelector('.popup').classList.add('open')
    document.querySelector('body').classList.add('stop')
    button.classList.toggle('open')
    menu.classList.toggle('open')
    if (!menu.classList.contains('open')) {
        menu.innerHTML = initialMenuHTML
    }
}

const primary = document.querySelector('#primary')
const middle = document.querySelector('#middle')
const secondary = document.querySelector('#secondary')
menu.addEventListener('click', (e) => {
    e.stopPropagation()
    const id = e.target.id
    // const targetElement = e.target.closest('[id]')
    // const id = targetElement.id

    if (id === 'primary') {
        smooth ()
        menu.innerHTML = `<h3>سيتوفر التعليم الإبتدائي قريباً...</h3>`
    } else if (id === 'middle') {
        smooth ()
        menu.innerHTML = `
            <h3 id='mid1'>السنة الأولى</h3> <hr>
            <h3 id='mid2'>السنة الثانية</h3> <hr>
            <h3 id='mid3'>السنة الثالثة</h3> <hr>
            <h3 id='mid4'>السنة الرابعة</h3>
        `
    } else if (id === 'secondary') {
        smooth ()
        menu.innerHTML = `
            <h3 id='sec1'>السنة الأولى</h3> <hr>
            <h3 id='sec2'>السنة الثانية</h3> <hr>
            <h3 id='sec3'>السنة الثالثة</h3>
        `
    }

    if (id === 'mid4') {
        smooth ()
        menu.innerHTML = `
            <h3 id='mid4Sem'>المعدل الفصلي</h3> <hr>
            <h3 id='mid4Cer'>معدل الشهادة</h3>
        `
    } else if (id === 'sec1') {
        smooth ()
        menu.innerHTML = `
            <h3 id='sec1Sci'>جذع مشترك علوم</h3> <hr>
            <h3 id='sec1Lit'>جذع مشترك آداب</h3>
        `
    } else if (id === 'sec2') {
        smooth ()
        menu.innerHTML = `
            <h3 id='sec2Sci'>العلوم التجريبية</h3> <hr>
            <h3 id='sec2Mat'>الرياضيات</h3> <hr>
            <h3 id='sec2Eng'>تقني رياضي</h3> <hr>
            <h3 id='sec2Eco'>تسيير واقتصاد</h3> <hr>
            <h3 id='sec2Lit'>أدب وفلسفة</h3> <hr>
            <h3 id='sec2Lan'>لغات أجنبية</h3>
        `
    } else if (id === 'sec3') {
        smooth ()
        menu.innerHTML = `
            <h3 id='sec3Sem'>المعدل الفصلي</h3> <hr>
            <h3 id='sec3Cer'>معدل الشهادة</h3>
        `
    } else if (id === 'sec3Sem') {
        smooth ()
        menu.innerHTML = `
            <h3 id='sec3SemSci'>العلوم التجريبية</h3> <hr>
            <h3 id='sec3SemMat'>الرياضيات</h3> <hr>
            <h3 id='sec3SemEng'>تقني رياضي</h3> <hr>
            <h3 id='sec3SemEco'>تسيير واقتصاد</h3> <hr>
            <h3 id='sec3SemLit'>أدب وفلسفة</h3> <hr>
            <h3 id='sec3SemLan'>لغات أجنبية</h3>
        `
    } else if (id === 'sec3Cer') {
        smooth ()
        menu.innerHTML = `
            <h3 id='sec3CerSci'>العلوم التجريبية</h3> <hr>
            <h3 id='sec3CerMat'>الرياضيات</h3> <hr>
            <h3 id='sec3CerEng'>تقني رياضي</h3> <hr>
            <h3 id='sec3CerEco'>تسيير واقتصاد</h3> <hr>
            <h3 id='sec3CerLit'>أدب وفلسفة</h3> <hr>
            <h3 id='sec3CerLan'>لغات أجنبية</h3>
        `
    } 
    
    if (id === 'mid1' || id === 'mid2' || id === 'mid3' || id === 'mid4Sem' || id === 'mid4Cer' || id === 'sec1Sci' || id === 'sec1Lit' || id === 'sec2Sci' || id === 'sec2Mat' || id === 'sec2Eng' || id === 'sec2Eco' || id === 'sec2Lit' || id === 'sec2Lan' || id === 'sec3SemSci' || id === 'sec3SemMat' || id === 'sec3SemEng' || id === 'sec3SemEco' || id === 'sec3SemLit' || id === 'sec3SemLan' || id === 'sec3CerSci' || id === 'sec3CerMat' || id === 'sec3CerEng' || id === 'sec3CerEco' || id === 'sec3CerLit' || id === 'sec3CerLan') {
        generatePopup(id)
    }
})

let semesterAve = 0
function calculateSemesterAverage(sumOfCoefficients, sumOfSemesterAverages) {
    return sumOfSemesterAverages / sumOfCoefficients
}

const outputElement = document.querySelector('.output h2')
const outputElementNote = document.querySelector('.output p')
function updateSemesterAverage() {
    const currentStream = findById(data, currentSelectedId)

    let sumOfCoefficients = 0
    let sumOfSemesterAverages = 0

    for (const material of currentStream.materials) {
        if (disabledMaterials[material.id]) {
            continue
        }
        
        const coefficient = material.coefficient
        sumOfCoefficients += coefficient
        
        const materialScore = currentScores[material.id] || 0
        sumOfSemesterAverages += (materialScore * coefficient)
    }

    const semesterAverage = calculateSemesterAverage(sumOfCoefficients, sumOfSemesterAverages)

    semesterAve = semesterAverage.toFixed(2)
    
    outputElement.innerHTML = `${semesterAverage.toFixed(2)}<span> /20</span>`
    
    if (semesterAverage < 10) {
        outputElementNote.innerHTML = 'راسب'
    } else if (semesterAverage < 12) {
        outputElementNote.innerHTML = 'مقبول'  
    } else if (semesterAverage < 14) {
         outputElementNote.innerHTML = 'قريب من الجيد'    
    } else if (semesterAverage < 16) {
        outputElementNote.innerHTML = 'جيد'
    } else if (semesterAverage < 18) {
        outputElementNote.innerHTML = 'جيد جدا'  
    } else {
        outputElementNote.innerHTML = 'ممتاز'
    }
}

let currentMaterialId = null;
function calculateMaterialScore() {
    const inputs = document.querySelectorAll('.inputPoints .points input')

    const activeMaterialHeader = document.querySelector('.input-header h3')
    const currentStream = findById(data, currentSelectedId)

    const materialObj = currentStream.materials.find(
        m => m.id === currentMaterialId
    )
    
    const isCertificate = currentSelectedId.includes('Cer')

    const values = []
    inputs.forEach(input => {
        const val = parseFloat(input.value)  
        values.push(isNaN(val) ? 0 : val)
    })

    let finalScore = 0;

    if (isCertificate) {
        const examVal = values[0]
        finalScore = examVal
        currentInputs[materialObj.id] = {
            exam: values[0]
        }
    } else {
        if (inputs.length === 4) {  // values.length === 4
            currentInputs[materialObj.id] = {
                continuous: values[0],
                practical: values[1],
                test: values[2],
                exam: values[3]
            }
        } else {
            currentInputs[materialObj.id] = {
                continuous: values[0],
                test: values[1],
                exam: values[2]
            }
        }

        const isMiddle = currentSelectedId.startsWith('mid')

        if (isMiddle) {
            const [continuous, test, exam] = values
            finalScore = (((continuous + test) / 2) + (exam * 2)) / 3
        } else {
            if (inputs.length === 4) {
                const [continuous, practical, test, exam] = values
                finalScore = ((continuous + test + practical) + (exam * 2)) / 5
            } else {
                const [continuous, test, exam] = values
                finalScore = ((continuous + test) + (exam * 2)) / 4
            }
        }
    }

    const scoreDisplay = document.querySelector('.input-header-description p:last-of-type')
    scoreDisplay.textContent = `${finalScore.toFixed(2)}`

    const materialInList = document.querySelector(`.material#${materialObj.id} .coefficientAverage p:last-of-type`)
    materialInList.textContent = `${finalScore.toFixed(2)}`

    currentScores[materialObj.id] = finalScore
    updateSemesterAverage()
}

document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('.inputPoints').addEventListener('input', (e) => {

        const value = parseFloat(e.target.value)

        if (value > 20) {
            e.target.value = 20
        } else if (value < 0) {
            e.target.value = 0
        }

        calculateMaterialScore()
    })

    document.querySelector('.materials').addEventListener('click', (e) => {
        const switchBtn = e.target.closest('.switch')
        if (switchBtn) {
            e.stopPropagation()
            
            const materialId = switchBtn.dataset.id
            switchBtn.classList.toggle('active')
            const isActive = switchBtn.classList.contains('active')
    
            if (!isActive) {
                disabledMaterials[materialId] = true
            } else {
                disabledMaterials[materialId] = false
            }
    
            const materialDiv = document.getElementById(materialId);
            materialDiv.classList.toggle('disabled')  //materialDiv.classList.toggle('disabled', !isActive)
    
            updateSemesterAverage()
            return
        }

        const materialItem = e.target.closest('.material')

        const materialId = materialItem.id
        currentMaterialId = materialId

        document.querySelectorAll('.materials .material').forEach(item => {
            const h4 = item.querySelector('h4')
            const svg = item.querySelector('svg')
            svg.style.color = '#000000'
            svg.style.opacity = '.4'  
            h4.style.opacity = '.4'
        })
            
        const currentH4 = materialItem.querySelector('h4')
        const currentSvg = materialItem.querySelector('svg')
        currentSvg.style.color = '#0073e6'
        currentSvg.style.opacity = '1'
        currentH4.style.opacity = '1'

        const currentStream = findById(data, currentSelectedId)
        let material
        for (const m of currentStream.materials) {
            if (m.id === materialId) {
                material = m
                break
            }
        }

        const saved = currentInputs[materialId] || {}
        const continuousVal = saved.continuous || '' // ??
        const practicalVal = saved.practical || ''
        const testVal = saved.test || ''
        const examVal = saved.exam || ''

        const currentScore = currentScores[materialId] ? `${currentScores[materialId].toFixed(2)}` : '0.00'
        const isCertificate = currentSelectedId.includes('Cer')
        
        const isMaterialDisabled = disabledMaterials[materialId]

        document.querySelector('.inputPoints').innerHTML = `
            <div class="input-header">
                <h3>${material.name} ${isMaterialDisabled ? '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="#ff1500" d="M18 6a12 12 0 1 0 12 12A12 12 0 0 0 18 6m0 22a10 10 0 1 1 10-10a10 10 0 0 1-10 10" class="clr-i-outline clr-i-outline-path-1"/><path fill="#ff1500" d="M18 20.07a1.3 1.3 0 0 1-1.3-1.3v-6a1.3 1.3 0 1 1 2.6 0v6a1.3 1.3 0 0 1-1.3 1.3" class="clr-i-outline clr-i-outline-path-2"/><circle cx="17.95" cy="23.02" r="1.5" fill="#ff1500" class="clr-i-outline clr-i-outline-path-3"/><path fill="none" d="M0 0h36v36H0z"/></svg>' : ''}</h3>
                <div class="input-header-description">
                    <p>المعامل : ${material.coefficient}</p>
                    <p>${currentScore}</p>
                </div>
            </div>
            <div class="points">
                ${isCertificate ? `
                    <div class="point">
                        <h4>علامة الامتحان في الشهادة</h4>
                        <input type="number" value="${examVal}" ${isMaterialDisabled ? 'disabled' : ''} aria-label="علامة الامتحان في الشهادة">
                    </div>
                ` : `
                    <div class="point">
                        <h4>التقويم المستمر</h4>
                        <input type="number" value="${continuousVal}" ${isMaterialDisabled ? 'disabled' : ''} aria-label="التقوييم المستمر">
                    </div>
                    ${material.hasPracticalOrOral ? `
                    <div class="point">
                        <h4>الأعمال التطبيقية</h4>
                        <input type="number" value="${practicalVal}" ${isMaterialDisabled ? 'disabled' : ''} aria-label="الأعمال التطبيقية">
                    </div>` : ''}
                    <div class="point">
                        <h4>الفروض</h4>
                        <input type="number" value="${testVal}" ${isMaterialDisabled ? 'disabled' : ''} aria-label="الفروض">
                    </div>
                    <div class="point">
                        <h4>الإختبار</h4>
                        <input type="number" value="${examVal}" ${isMaterialDisabled ? 'disabled' : ''} aria-label="الإختبار">
                    </div>
                `}
            </div>
        `

        setTimeout(() => {
            document.querySelector('.points').classList.toggle('open')
            if(isCertificate) {
                document.querySelector('.point').classList.add('cer')
                document.querySelector('.points').classList.toggle('cer')
            }
        }, 100)
        
    })

})

document.querySelector('.popupClosed').addEventListener('click', () => {
    document.querySelector('.popup').classList.remove('open')
    document.querySelector('body').classList.remove('stop')
})

document.querySelector('.sideOpen').addEventListener('click', () => {
    document.querySelector('.choiceSide').classList.toggle('open')
    document.querySelector('.sideOpen svg').classList.toggle('open')
})

document.querySelector('.note svg').addEventListener('click', () => {
    document.querySelector('.note svg').classList.add('click')
    setTimeout(() => {
        document.querySelector('.note svg').classList.remove('click')
    }, 400)
})

document.querySelector('.note').addEventListener('click', () => {
    document.querySelector('.inputPoints').innerHTML = `
        <div class='notes'>
            <h1>ملاحظات : </h1>
            <p>1. يمكن إلغاء تفعيل المواد الإختيارية عن طريق فتح الشريط الجانبي وإلغائها.</p>
            <p>2. في الطور الثانوي توجد نقطة : للأعمال التطبيقية ( المواد العلمية ) ، أو التعبير الشفهي ( المواد الأدبية ) . ( تم إختصارها في "الأعمال التطبيقية" في الحالتين ).</p>
            <p>3. في حال إجتياز فرضين في أحد المواد ، يرجى حساب متوسطهما ( مجموع النقطتين تقسيم 2 ) ، ثم ملئ النقطة الناتجة في خانة الفروض.</p>
        </div>
    `
    setTimeout(() => {
        document.querySelector('.notes').classList.add('open')
    }, 100)
})


/*-------------------*/


const transcriptOfGrades = document.querySelector('.transcriptOfGrades')
function downloadReportCardImage() {

    const currentStream = findById(data, currentSelectedId)
    const finalScoreText = document.querySelector('.output h2').innerText
    const finalStatusText = document.querySelector('.output p').innerText
    
    let rows = ''
    let heads = ''
    
    const isMiddle = currentSelectedId.startsWith('mid')
    const isCertificate = currentSelectedId.includes('Cer')
        
    if (isCertificate) {
        for (const material of currentStream.materials) {
            if (disabledMaterials[material.id]) continue
            const inputs = currentInputs[material.id] || {}
            const score = currentScores[material.id]?.toFixed(2) || '0.00'
            rows += `
                <tr>
                    <td>${material.name}</td>
                    <td>${inputs.exam || '--'}</td>
                    <td>${material.coefficient}</td>
                    <td>${score}</td>
                </tr>
            `
        }
        heads = `
            <tr>
                <th></th>
                <th>الإختبار</th>
                <th>المعامل</th>
                <th><span>المعدل</span></th>
            </tr>
        `
    } else {
        if (isMiddle) {
            for (const material of currentStream.materials) {
                if (disabledMaterials[material.id]) continue
                const inputs = currentInputs[material.id] || {}
                const score = currentScores[material.id]?.toFixed(2) || '0.00'
                rows += `
                    <tr>
                        <td>${material.name}</td>
                        <td>${inputs.continuous || '--'}</td>
                        <td>${inputs.test || '--'}</td>
                        <td>${inputs.exam || '--'}</td>
                        <td>${material.coefficient}</td>
                        <td>${score}</td>
                    </tr>
                `
            }
            heads = `
                <tr>
                    <th></th>
                    <th>التقويم</th>
                    <th>الفروض</th>
                    <th>الإختبار</th>
                    <th>المعامل</th>
                    <th><span>المعدل</span></th>
                </tr>
            `
        } else {
            for (const material of currentStream.materials) {
                if (disabledMaterials[material.id]) continue
                const inputs = currentInputs[material.id] || {}
                const score = currentScores[material.id]?.toFixed(2) || '0.00'
                rows += `
                    <tr>
                        <td>${material.name}</td>
                        <td>${inputs.continuous || '--'}</td>
                        <td>${inputs.practical || '--'}</td>
                        <td>${inputs.test || '--'}</td>
                        <td>${inputs.exam || '--'}</td>
                        <td>${material.coefficient}</td>
                        <td>${score}</td>
                    </tr>
                `
            }
            heads = `
                <tr>
                    <th></th>
                    <th>التقويم</th>
                    <th>أ.تطبيقية</th>
                    <th>الفروض</th>
                    <th>الإختبار</th>
                    <th>المعامل</th>
                    <th><span>المعدل</span></th>
                </tr>
            `
        }
    }
    
    transcriptOfGrades.innerHTML = `
        <div class="theader">
            <h1>كشف النقـــــاط</h1>
            <h2>${currentStream.name}</h2>
        </div>
        <table>
            <thead>
                ${heads}
            </thead>
            <tbody>
                ${rows}
            </tbody>
        </table>
        <div class="footer">
            <p>هذه الوثيقة غير رسمية<br> (دقة النتائج تعتمد على دقة المدخلات)</p>
            <div>
                <h3>${semesterAve}<span>/20</span></h3>
                <p>${finalStatusText}</p>
            </div>
        </div>
    `
}

const downloadBtn = document.getElementById('download');
let snapdom = null
downloadBtn.addEventListener("click", () => {

    document.querySelector('.download svg').classList.add('click')
    setTimeout(() => {
        document.querySelector('.download svg').classList.remove('click')
    }, 400)

    setTimeout(async () => {
        await downloadReportCardImage()
        const currentStream = findById(data, currentSelectedId)
        if (!snapdom) {
            const libraryFile = await import('./snapdom.mjs')
            snapdom = libraryFile.snapdom
        }
        const result = await snapdom(transcriptOfGrades, {
            embedFonts: true,
            scale: 3
        })
                
        await result.download({ 
            format: 'png', 
            filename: `كشف نقاط ${currentStream.name}.png`
        })

    }, 400)
})


/*-------------------*/


document.querySelector('.featureOneButton').addEventListener('click', () => {
    document.querySelector('.featureOne .featureTitleDescription').innerHTML = `
        <h2>مصدر موثوق</h2>
        <p class='more'>يتضح في السنوات الأخيرة <span>المسار الجديد</span> الذي تسعى وزارة التربية الوطنية لتحقيقه ، من أبرز ما يميزه : تعديلات كبيرة في الشعب ، المواد الخاصة بكل شعبة ، معاملاتها ... إلخ ، وهذا ما يستلزم متابعة مستمرة لمستجدات القطاع <span>أولا بأول.</span></div>
    `
    setTimeout(() => {
        document.querySelector('.featureOne').classList.add('open')
        document.querySelector('.featureOne img').classList.add('open')
        document.querySelector('.featureOneButton').classList.add('open')
    }, 100)
})

document.querySelector('.featureTwoButton').addEventListener('click', () => {
    document.querySelector('.featureTwo .featureTitleDescription').innerHTML = `
        <h2>معاينة مباشرة</h2>
        <p class='more'>تمت برمجة الموقع ليبدأ الحساب بمجرد إدخال العلامات ، وذلك لتحقيق <span>أقصى درجات سهولة الاستخدام</span> ، وإراحت المستخدم من الضغط على أزرار مشتتة هنا وهناك، دون داعي.</div>
    `
    setTimeout(() => {
        document.querySelector('.featureTwo').classList.add('open')
        document.querySelector('.featureTwo > p').classList.add('open')
        document.querySelector('.featureTwoButton').classList.add('open')
    }, 100)
})

document.querySelector('.featureThreeButton').addEventListener('click', () => {
    document.querySelector('.featureThree .featureTitleDescription').innerHTML = `
        <h2>كشف النقاط</h2>
        <p class='more'>في نهاية رحلة المستخدم في الموقع ، يمكنه الحصول على كشف نقاط مميز يحمل طابع موقع <strong>على عشرين</strong> ، وذلك كوثيقة تذكارية ورمزية تذكره <span>بالتجربة المميزة</span> التي عاشها.</div>
    `
    setTimeout(() => {
        document.querySelector('.featureThree').classList.add('open')
        document.querySelector('.featureThree img').classList.add('open')
        document.querySelector('.featureThreeButton').classList.add('open')
    }, 100)
})


/*-------------------*/


button1.addEventListener('click', (e) => {
    e.stopPropagation()
    installOrDownload.classList.toggle('open')
})
installOrDownload.addEventListener('click', (e) => {
    e.stopPropagation()
})
button2.addEventListener('click', (e) => {
    e.stopPropagation()
    mobileAppFeatures.classList.toggle('open')
})
mobileAppFeatures.addEventListener('click', (e) => {
    e.stopPropagation()
})

const install = document.querySelector('.install')
const downlad = document.querySelector('.downlad')
let installPrompt = null
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault()
    installPrompt = e
    install.innerHTML = `
        <h5>1. تثبيت على الشاشة الرئيسية ( ستظهر أيقونة على الشاشة الرئيسية لكن يحتاج لإتصال بالنت )</h5>
        <div>تثبيت التطبيق</div>
    `
    document.querySelector('.install div').addEventListener('click', () => {
        installPrompt.prompt()
    })
})
document.querySelector('.install div').addEventListener('click', () => {
    install.innerHTML = `
        <h5>- اضغط على ⋮ أو ☰ في المتصفح</h5>
        <h5>- ثم اختر "إضافة إلى الشاشة الرئيسية"</h5>
        <h5>( ستظهر أيقونة على الشاشة الرئيسية لكن يحتاج لإتصال بالنت )</h5>
    `
})
async function checkCache() {
    const cacheNames = await caches.keys()
    const cacheName = cacheNames.find(name => name.startsWith('ala20-'))
    if (!cacheName) {
        document.querySelector('.downlad div').addEventListener('click', async () => {
            if ('serviceWorker' in navigator) {
                try {
                    const registration = await navigator.serviceWorker.register('../sw.js')
                    //console.log('Service Worker registration was successful:', registration.scope)
                } catch (error) {
                    //console.error('Service Worker registration failed:', error)
                }
                window.location.reload()
            }
        })
    } else {
        downlad.innerHTML = `
            <h5>2. يمكن حذف البيانات التي تم تحميلها ( لكن سيحتاج التطبيق للإتصال بالنت )</h5>
            <div>حذف البيانات</div>
        `
        document.querySelector('.downlad div').classList.add('delete')
        document.querySelector('.downlad div').addEventListener('click', async () => {
            const registrations = await navigator.serviceWorker.getRegistrations()
            for (const registration of registrations) {
                await registration.unregister()
            }
            await caches.delete(cacheName)
            window.location.reload()
        })
    }
}
checkCache()


/*-------------------*/


document.querySelector('.report').addEventListener('submit', (e) => {
    
    e.preventDefault()

    const recipientEmail = "mstph7.rs9@gmail.com"

    const userEmail = document.querySelector('.userEmail').value.trim()
    const userMessage = document.querySelector('.userMessage').value.trim()

    const subject = encodeURIComponent("على عشرين ( إبلاغ / إقتراح )");
    const body = encodeURIComponent(
        `البريد الإلكتروني ( للرد ) : \n${userEmail} \n\nالمشكلة / الإقتراح :\n ${userMessage}`
    )

    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`
});


/*-------------------*/


const currentYear = new Date().getFullYear()
document.querySelector('.footerCopyright > p span').innerText = currentYear

















