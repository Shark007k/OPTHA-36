const questions = [
  {
    question: "Which of the following is the most highly innervated structure ofeye",
    answers: [
    { text: "iris", correct: false },
    { text: "Cornea", correct: true },
    { text: "Retina", correct: false },
    { text: "Sclera", correct: false },
    ],
    },
    {
    question: "Not true regarding corneal stroma:",
    answers: [
    { text: "Measures 500 pm", correct: false },
    { text: "Type 1 collagen is most abundant, type 4 & 6 also found", correct:
    false },
    { text: "Transmits 90% of incoming light", correct: false },
    { text: "Derives its oxygen from aqueous humor", correct: true },
    ],
    },
    {
    question: "All of the following are true about layers of cornea except :",
    answers: [
    { text: "Predescemet's layer is also known as Dua's layer", correct: false
    },
    { text: "Type 2 & type 4 type of collagen are present in Descement membrane", correct: true },
    { text: "Corneal Stroma is the thickest layer of the cornea", correct:
    false },
    { text: "Endothelium is responsible for maintaining relatively dehydrated state of cornea", correct: false },
    ],
    },
    {
    question: "True regarding endothelium of cornea:-",
    answers: [
    { text: "it has three layer of cells ", correct: false },
    { text: "ltregenerates within 72 hours", correct: false },
    { text: "It is responsible for maintaining dehydrated state of cornea",
    correct: true },
    { text: "Endothelial cells increase with ageing & any intraocular surgery.", correct: false },
    ],
    },
    {
    question: "Ascorbic acid transport in cornea is mediated by",
    answers: [
    { text: "Carbonic anhydrase pump", correct: false },
    { text: "Na-K pump", correct: true },
    { text: "Myoinositol pump", correct: false },
    { text: "Passive diffusion", correct: false },
    ],
    },
    {
    question: "Gene responsible for Anterior segment morphogenesis?",
    answers: [
    { text: "pax6", correct: true },
    { text: "PITX2", correct: false },
    { text: "TSG", correct: false },
    { text: "GLC1", correct: false },
    ],
    },
    {
    question: "Identify the sign shown in the image below?",
    answers: [
    { text: "Rizutti sign", correct: false },
    { text: "Munson Sign", correct: true },
    { text: "Bowtie pattern", correct: false },
    { text: "Bull's eye sign", correct: false },
    ],
    },
    {
    question: "Neurocristopathy is a diverse class of pathologies that may arise from defects in the development of tissues containing cells commonly derived from the embryonic neural crest cell lineage. Which of the following below is a type of neurocristopathy ?",
    answers: [
    { text: "Macular dystrophy", correct: false },
    { text: "Arcus senilis", correct: false },
    { text: "ICE syndrome", correct: false },
    { text: "Band shaped keratopathy", correct: false },
    ],
    },
    {
    question: "Mark the incorrect statement about the given below condition?",
    answers: [
    { text: "Most specific nerve involved is lacrimal nerve", correct: true },
    { text: "Most common nerve involved is Frontal nerve", correct: false },
    { text: "Painful rash typically involving specific dermatome supplied by branches of trigeminal nerve", correct: false },
    { text: "Hutchinson's Sign suggests Corneal Involvement", correct: false },
    ],
    },
    {
    question: "Which of the following is not correct regarding contact lens -",
    answers: [
    { text: "can be used to correct high myopia", correct: false },
    { text: "Protects epithelium from windshield action of blinking", correct:
    false },
    { text: "Hard contact lens are made up of PMMA", correct: false },
    { text: "Accumulation of sorbitol can cause corneal edema", correct: true
    },
    ],
    },
    {
    question: "Which of the following statements are true about macular corneal dystrophy? 1. Autosomal dominant inheritance 2. Laser therapy can be done 3. Abnormal stromal deposits of mucopolysaccharides which stain positive with Alcian blue 4, Opacities are present throughout cornea with clear spaces in between 5.Recurs after corneal transplant",
    answers: [
    { text: "1,4,5 are correct", correct: false },
    { text: "3,4,5 are correct", correct: false },
    { text: "2,3,5 are correct", correct: true },
    { text: "1,2,5 are correct", correct: false },
    ],
    },
    {
    question: "Corneal verticiillata is acondition characterized by corneal deposits at the level of the basal epithelium forming a faint golden-brown whorl pattern. All of the following below are causative factor for this condition except ?",
    answers: [
    { text: "Indomethacin", correct: false },
    { text: "Chloroquine", correct: false },
    { text: "Fabry disease", correct: false },
    { text: "Tay sach’s disease", correct: true },
    ],
    },
    {
    question: "FemtoLASIK provides all the advantage over conventional microkeratome based laser except",
    answers: [
    { text: "Less incidence of flap related complications", correct: false },
    { text: "Less incidence of dry eyes", correct: false },
    { text: "Can be done in thinner corneas", correct: false },
    { text: "Photocoagulative laser, so itdecreases collateral damage",
    correct: true },
    ],
    },
    {
    question: "Enlarged corneal nerve is characterized by overgrowth of the corneal nerves up to 20 times the normal number. It is non-specific change and can be seen in all of the following except :",
    answers: [
    { text: "Neurofibromatosis", correct: false },
    { text: "Riley day dysautonomia", correct: false },
    { text: "MEN", correct: false },
    { text: "Band shaped keratopathy", correct: true },
    ],
    },
    {
    question: "Identify the lesion shown in the image ?",
    answers: [
    { text: "Band shaped keratopathy", correct: false },
    { text: "Corneal erosion", correct: false },
    { text: "Wilson disease", correct: false },
    { text: "Arcus senilis", correct: true },
    ],
    },
    {
    question: "Mark the incorrect statement regarding stains used in corneal diseases.",
    answers: [
    { text: "Fluorescein stain is used to stain degenerated cells and mucous strands", correct: true },
    { text: "Apple green birefringence is seen in Lattice Dystophy", correct:
    false },
    { text: "Masson trichome stain is used for Granular dystrophy", correct:
    false },
    { text: "ssamin Green isused for Dry eye", correct: false },
    ],
    },
    {
    question: "Band shaped keratopathy is an age-related deposition of calcium salts in the Bowman layer, epithelial basement membrane and anterior stroma. Which form of calcium is deposited in this condition ?",
    answers: [
    { text: "Calcium chloride", correct: false },
    { text: "Calcium hydroxyapatite", correct: true },
    { text: "Calcium cyanide", correct: false },
    { text: "Calcium Acetate", correct: false },
    ],
    },
    {
    question: "Microcornea is defined as:",
    answers: [
    { text: "<10mm corneal diameter at birth", correct: true },
    { text: "<13 mm corneal diameter at birth", correct: false },
    { text: "<10mm axial length at birth", correct: false },
    { text: "<20mm axial length at birth", correct: false },
    ],
    },
    {
    question: "Indications to use Collagen cross linking 1. Herpes infection 2. Fungal corneal ulcer 3. Severe dry eye 4. Post lasik ectasia",
    answers: [
    { text: "1,4 are correct", correct: false },
    { text: "2,4 are correct", correct: true },
    { text: "1,3 are correct", correct: false },
    { text: "23 are correct", correct: false },
    ],
    },
    {
    question: "Organism which penetrates intact corneal epithelium is: 1. Escherichia coli 2. Neisseria gonorrhoeae 3.Staphylococcus aureus 4. Streptococcus pneumonia 5. Hemophilus influenzae",
    answers: [
    { text: "1,5 are correct", correct: false },
    { text: "2,4 are correct", correct: false },
    { text: "1,3,5 are correct", correct: false },
    { text: "2,5 are correct", correct: true },
    ],
    },
    {
    question: "Aberrometer is used to measure:",
    answers: [
    { text: "Endothelial count", correct: false },
    { text: "Keratometry", correct: false },
    { text: "Higher order abberation", correct: true },
    { text: "Corneal stroma", correct: false },
    ],
    },
    {
    question: "Limbus stem cells are playing critical role in maintaining physiological barrier and corneal transparency. it is situated in:",
    answers: [
    { text: "Corneal stroma", correct: false },
    { text: "Ciliary body", correct: false },
    { text: "Fornices", correct: false },
    { text: "Palisades of Vogt", correct: true },
    ],
    },
    {
    question: "Which of the following is not true regarding fungal corneal ulcer.",
    answers: [
    { text: "Microbiological confirmation to be done before starting anti fungal treatment", correct: false },
    { text: "Immuno suppressant and patients on chronic steroids therapy are more vulnerable", correct: false },
    { text: "Aspergillus and Fusarium are common organisms causing ulcer", correct: false },
    { text: "Symptoms are more than signs in the patient", correct: true },
    ],
    },
    {
    question: "The given procedure is done for",
    answers: [
    { text: "Myopia", correct: true },
    { text: "Hypermetropia", correct: false },
    { text: "Corneal scar", correct: false },
    { text: "All the above", correct: false },
    ],
    },
    {
    question: "Not true regarding photo-ophthalmia:",
    answers: [
    { text: "Infra red rays induced injury", correct: true },
    { text: "Corneal edema", correct: false },
    { text: "Patch and reassuring the patient", correct: false },
    { text: "Cycloplegia to give relief", correct: false },
    ],
    },
    {
    question: "Corneal deposits are seen in all of these except 1. hunter's syndrome 2. Morquio's syndrome 3. Myeloma 4. Sanfilippo's syndrome",
    answers: [
    { text: "2. 4are correct", correct: false },
    { text: "1,3 are correct", correct: false },
    { text: "3,4 are correct", correct: false },
    { text: "1,4 are correct", correct: true },
    ],
    },
    {
    question: "According to biophysics, in which part of eye does maximum refraction occur?",
    answers: [
    { text: "comea", correct: true },
    { text: "Aqueous humor", correct: false },
    { text: "Cenotftrheelens", correct: false },
    { text: "Periphery of the lens", correct: false },
    ],
    },
    {
    question: "The critical angle of cornea-air interface is",
    answers: [
    { text: "36 degree", correct: false },
    { text: "46 degree", correct: true },
    { text: "56 degree", correct: false },
    { text: "66 degree", correct: false },
    ],
    },
    {
    question: "As per WHO classification of xerophthalmia, X> is:",
    answers: [
    { text: "Night blindness", correct: false },
    { text: "Conjunctival xerosis", correct: false },
    { text: "Bitot’s spots", correct: false },
    { text: "Corneal xerosis", correct: true },
    ],
    },
    {
    question: "SMILE is",
    answers: [
    { text: "Bladeless flap LASIK", correct: false },
    { text: "Blade LASIK", correct: false },
    { text: "Bladeless Flapless LASIK", correct: true },
    { text: "Blade based flapless LASIK", correct: false },
    ],
    },
    {
    question: "Patient came with acute hydrops and scarring of cornea. What would be the treatment modality you would opt for him:",
    answers: [
    { text: "Penetrating Keratoplasty", correct: false },
    { text: "Collagen cross linking", correct: false },
    { text: "Deep anterior lamellar keratoplasty", correct: false },
    { text: "Medical managemenatnd observe for 2-3 months", correct: true },
    ],
    },
    {
    question: "Not a characteristic of femtolasik:",
    answers: [
    { text: "Bladeless lasik", correct: false },
    { text: "Flapless lasik", correct: true },
    { text: "Less incidence of dry eyes", correct: false },
    { text: "Cannot be done in thinner corneas", correct: false },
    ],
    },
    {
    question: "Under hypoxic conditions, which of the following is strongly implicated as a cause of corneal edema?",
    answers: [
    { text: "Lactate", correct: true },
    { text: "Glycogen", correct: false },
    { text: "Carbon dioxide", correct: false },
    { text: "Pyruvate", correct: false },
    ],
    },
    {
    question: "Corneal transparency is maintained by:",
    answers: [
    { text: "Bowman's membrane", correct: false },
    { text: "Endothelium", correct: true },
    { text: "Keratocytes", correct: false },
    { text: "Descemet's membrane", correct: false },
    ],
    },
    {
    question: "Outer epithelium of cornea is derived from:",
    answers: [
    { text: "Endoderm", correct: false },
    { text: "Mesoderm", correct: false },
    { text: "Surface ectoderm", correct: true },
    { text: "WNeural ectoderm", correct: false },
    ],
    },
    {
    question: "The below condition affects which layer of cornea ?",
    answers: [
    { text: "Epithelium", correct: false },
    { text: "Stroma", correct: true },
    { text: "Bowman's membrane", correct: false },
    { text: "Endothelium", correct: false },
    ],
    },
 
]







const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const backButton = document.getElementById("back-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz (){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    backButton.innerHTML = "Back";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    
    if(answer.correct){
        button.dataset.correct = answer.correct;  
    }
    button.addEventListener("click", selectAnswer)

})
}


function resetState(){
nextButton.style.display = "none";
backButton.style.display = "none";

while(answerButtons.firstChild){
answerButtons.removeChild(answerButtons.firstChild);

}
}

function selectAnswer(e){

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else{
    selectedBtn.classList.add("inCorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
        button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "inline";
    backButton.style.display = "inline";

}


function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length} !`;
    nextButton.innerHTML = "Solve Again";
    nextButton.style.display = "inline"
    backButton.style.display = "inline"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else { showScore()}
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length) {
    handleNextButton();
    } else{
        startQuiz();
    }
});

function handlebackButton(){
  currentQuestionIndex--;
  if(currentQuestionIndex < questions.length){
      showQuestion();
  } else { showScore()}
}

backButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length) {
  handlebackButton();
  } else{
      startQuiz();
  }
});
startQuiz();