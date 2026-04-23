
import React, { useState } from "react";
import "./searchcont.css";
import PageTransition from "../componets/Page";

import { IoMdHeart } from "react-icons/io";



const Research = () => {
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);


  const data = [
    {
      id: 1,
      title: "Heart Disease",
      desc: "A group of conditions affecting the heart and blood vessels.",
      causes: "Smoking, high cholesterol, high blood pressure",
      treatment: "Lifestyle changes, surgery, medications",
      medications: "Aspirin, Beta-blockers, Statins",
    },
    {
      id: 2,
      title: "Depression",
      desc: "A mental health disorder causing persistent sadness.",
      causes: "Stress, trauma, chemical imbalance",
      treatment: "Therapy, lifestyle changes",
      medications: "SSRIs, Fluoxetine",
    },
    {
      id: 3,
      title: "Diabetes Type 1",
      desc: "Autoimmune condition affecting insulin production.",
      causes: "Genetics, immune system attack",
      treatment: "Insulin therapy",
      medications: "Insulin injections",
    },
    {
      id: 4,
      title: "Diabetes Type 2",
      desc: "Chronic condition affecting blood sugar regulation.",
      causes: "Obesity, lifestyle",
      treatment: "Diet, exercise",
      medications: "Metformin",
    },
    {
      id: 5,
      title: "Anxiety Disorders",
      desc: "Excessive fear and worry affecting daily life.",
      causes: "Stress, genetics",
      treatment: "Therapy, relaxation",
      medications: "Benzodiazepines, SSRIs",
    },
    {
      id: 6,
      title: "Stroke",
      desc: "Brain damage due to interrupted blood supply.",
      causes: "Clots, high blood pressure",
      treatment: "Emergency care, rehab",
      medications: "Blood thinners",
    },
    {
      id: 7,
      title: "Cancer",
      desc: "Uncontrolled growth of abnormal cells.",
      causes: "Genetics, smoking",
      treatment: "Chemotherapy, radiation",
      medications: "Targeted therapy drugs",
    },
    {
      id: 8,
      title: "Alzheimer's Disease",
      desc: "Progressive brain disorder affecting memory.",
      causes: "Age, genetics",
      treatment: "Supportive care",
      medications: "Donepezil",
    },
    {
      id: 9,
      title: "Hypertension",
      desc: "High blood pressure condition.",
      causes: "Diet, stress",
      treatment: "Lifestyle change",
      medications: "ACE inhibitors",
    },
    {
      id: 10,
      title: "Obesity",
      desc: "Excess body fat affecting health.",
      causes: "Poor diet, inactivity",
      treatment: "Diet, exercise",
      medications: "Orlistat",
    },

    
    {
      id: 11,
      title: "Asthma",
      desc: "Chronic respiratory disease causing breathing difficulty.",
      causes: "Allergens, pollution",
      treatment: "Inhalers",
      medications: "Salbutamol",
    },
    {
      id: 12,
      title: "Tuberculosis",
      desc: "Infectious lung disease.",
      causes: "Bacteria",
      treatment: "Long-term antibiotics",
      medications: "Isoniazid",
    },
    {
      id: 13,
      title: "Liver Disease",
      desc: "Damage to liver function.",
      causes: "Alcohol, hepatitis",
      treatment: "Lifestyle change",
      medications: "Antivirals",
    },
    {
      id: 14,
      title: "Kidney Failure",
      desc: "Loss of kidney function.",
      causes: "Diabetes, hypertension",
      treatment: "Dialysis",
      medications: "Diuretics",
    },
    {
      id: 15,
      title: "Sleep Disorders",
      desc: "Problems with sleep patterns.",
      causes: "Stress",
      treatment: "Sleep hygiene",
      medications: "Melatonin",
    },
    {
      id: 16,
      title: "Autism",
      desc: "Developmental disorder affecting communication.",
      causes: "Genetics",
      treatment: "Behavioral therapy",
      medications: "Risperidone",
    },
    {
      id: 17,
      title: "Eating Disorders",
      desc: "Unhealthy eating habits.",
      causes: "Psychological factors",
      treatment: "Therapy",
      medications: "Antidepressants",
    },
    {
      id: 18,
      title: "Cholesterol",
      desc: "High cholesterol levels in blood.",
      causes: "Diet",
      treatment: "Diet change",
      medications: "Statins",
    },
    {
      id: 19,
      title: "Migraine",
      desc: "Severe headache disorder.",
      causes: "Stress, triggers",
      treatment: "Pain relief",
      medications: "Ibuprofen",
    },
    {
      id: 20,
      title: "Arthritis",
      desc: "Joint inflammation.",
      causes: "Age, injury",
      treatment: "Physical therapy",
      medications: "NSAIDs",
    },
    {
      id: 21,
      title: "Flu",
      desc: "Viral respiratory infection.",
      causes: "Virus",
      treatment: "Rest",
      medications: "Paracetamol",
    },
    {
      id: 22,
      title: "COVID-19",
      desc: "Respiratory illness caused by coronavirus.",
      causes: "Virus",
      treatment: "Supportive care",
      medications: "Antivirals",
    },
    {
      id: 23,
      title: "Bronchitis",
      desc: "Inflammation of bronchial tubes.",
      causes: "Infection",
      treatment: "Rest",
      medications: "Cough suppressants",
    },
    {
      id: 24,
      title: "Pneumonia",
      desc: "Lung infection.",
      causes: "Bacteria, virus",
      treatment: "Antibiotics",
      medications: "Amoxicillin",
    },
    {
      id: 25,
      title: "Epilepsy",
      desc: "Neurological disorder with seizures.",
      causes: "Brain injury",
      treatment: "Medication",
      medications: "Valproate",
    },
    {
      id: 26,
      title: "Osteoporosis",
      desc: "Weak bones condition.",
      causes: "Calcium deficiency",
      treatment: "Supplements",
      medications: "Calcium, Vitamin D",
    },
    {
      id: 27,
      title: "Anemia",
      desc: "Low red blood cells.",
      causes: "Iron deficiency",
      treatment: "Diet",
      medications: "Iron supplements",
    },
    {
      id: 28,
      title: "Thyroid Disease",
      desc: "Hormonal imbalance.",
      causes: "Autoimmune",
      treatment: "Medication",
      medications: "Levothyroxine",
    },
    {
      id: 29,
      title: "Gastritis",
      desc: "Stomach inflammation.",
      causes: "Infection",
      treatment: "Diet",
      medications: "Antacids",
    },
    {
      id: 30,
      title: "Ulcer",
      desc: "Sores in stomach lining.",
      causes: "Bacteria",
      treatment: "Medication",
      medications: "Omeprazole",
    },
    {
      id: 31,
      title: "Skin Allergy",
      desc: "Allergic skin reaction.",
      causes: "Allergens",
      treatment: "Avoid triggers",
      medications: "Antihistamines",
    },
    {
      id: 32,
      title: "Psoriasis",
      desc: "Skin autoimmune disease.",
      causes: "Immune system",
      treatment: "Topical creams",
      medications: "Steroids",
    },
    {
      id: 33,
      title: "Eczema",
      desc: "Skin inflammation.",
      causes: "Allergy",
      treatment: "Moisturizers",
      medications: "Hydrocortisone",
    },
    {
      id: 34,
      title: "Back Pain",
      desc: "Pain in the spine area.",
      causes: "Poor posture",
      treatment: "Exercise",
      medications: "Pain relievers",
    },
    {
      id: 35,
      title: "Eye Infection",
      desc: "Infection in the eye.",
      causes: "Bacteria",
      treatment: "Eye drops",
      medications: "Antibiotics",
    },
    {
      id: 36,
      title: "Hearing Loss",
      desc: "Reduced ability to hear.",
      causes: "Age, noise",
      treatment: "Hearing aids",
      medications: "—",
    },
    {
      id: 37,
      title: "Dengue Fever",
      desc: "Mosquito-borne viral disease.",
      causes: "Virus",
      treatment: "Fluids",
      medications: "Pain relievers",
    },
    {
      id: 38,
      title: "Malaria",
      desc: "Parasitic infection.",
      causes: "Mosquito",
      treatment: "Antimalarial drugs",
      medications: "Chloroquine",
    },
    {
      id: 39,
      title: "Hepatitis",
      desc: "Liver inflammation.",
      causes: "Virus",
      treatment: "Medication",
      medications: "Antivirals",
    },
    {
      id: 40,
      title: "HIV/AIDS",
      desc: "Immune system disease.",
      causes: "Virus",
      treatment: "Antiretroviral therapy",
      medications: "ART drugs",
    },
    {
  id: 41,
  title: "Sinusitis",
  desc: "Inflammation of the sinus cavities causing pain and congestion.",
  causes: "Infection, allergies",
  treatment: "Steam inhalation, rest",
  medications: "Decongestants, Amoxicillin (if bacterial)",
},
{
  id: 42,
  title: "Appendicitis",
  desc: "Inflammation of the appendix requiring urgent care.",
  causes: "Blockage, infection",
  treatment: "Surgery (appendectomy)",
  medications: "Antibiotics, pain relievers",
},
{
  id: 43,
  title: "Gallstones",
  desc: "Solid deposits in the gallbladder.",
  causes: "High cholesterol bile",
  treatment: "Surgery, diet control",
  medications: "Ursodeoxycholic acid",
},
{
  id: 44,
  title: "Acne",
  desc: "Skin condition causing pimples and inflammation.",
  causes: "Hormones, bacteria",
  treatment: "Skin care, hygiene",
  medications: "Benzoyl peroxide, Retinoids",
},
{
  id: 45,
  title: "Constipation",
  desc: "Difficulty in passing stools.",
  causes: "Low fiber diet",
  treatment: "Increase fiber, hydration",
  medications: "Laxatives, Lactulose",
},
{
  id: 46,
  title: "Diarrhea",
  desc: "Frequent loose or watery stools.",
  causes: "Infection, food poisoning",
  treatment: "Fluids, ORS",
  medications: "Loperamide, Zinc supplements",
},
{
  id: 47,
  title: "Food Poisoning",
  desc: "Illness from contaminated food.",
  causes: "Bacteria, toxins",
  treatment: "Hydration, rest",
  medications: "Antibiotics (if severe), ORS",
},
{
  id: 48,
  title: "Allergic Rhinitis",
  desc: "Allergic reaction causing sneezing and congestion.",
  causes: "Dust, pollen",
  treatment: "Avoid allergens",
  medications: "Antihistamines, Loratadine",
},
{
  id: 49,
  title: "Vertigo",
  desc: "Feeling of spinning dizziness.",
  causes: "Inner ear problems",
  treatment: "Balance therapy",
  medications: "Betahistine",
},
{
  id: 50,
  title: "UTI (Urinary Tract Infection)",
  desc: "Infection in urinary system.",
  causes: "Bacteria",
  treatment: "Hydration, antibiotics",
  medications: "Nitrofurantoin, Ciprofloxacin",
},
{
  id: 51,
  title: "Gout",
  desc: "Joint inflammation due to uric acid buildup.",
  causes: "High uric acid",
  treatment: "Diet control",
  medications: "Allopurinol, NSAIDs",
},
{
  id: 52,
  title: "Cold (Common Cold)",
  desc: "Viral infection of the upper respiratory tract.",
  causes: "Virus",
  treatment: "Rest, fluids",
  medications: "Paracetamol, Decongestants",
},
{
  id: 53,
  title: "Bronchial Asthma",
  desc: "Chronic inflammation of airways.",
  causes: "Allergens",
  treatment: "Inhalers, avoid triggers",
  medications: "Salbutamol, Corticosteroids",
},
{
  id: 54,
  title: "Iron Deficiency",
  desc: "Lack of iron in the body.",
  causes: "Poor diet, blood loss",
  treatment: "Diet improvement",
  medications: "Ferrous sulfate",
},
{
  id: 55,
  title: "Dehydration",
  desc: "Loss of body fluids.",
  causes: "Heat, illness",
  treatment: "Fluids, ORS",
  medications: "Electrolyte solutions",
},
{
  id: 56,
  title: "Sunburn",
  desc: "Skin damage from UV rays.",
  causes: "Excess sun exposure",
  treatment: "Cooling, hydration",
  medications: "Aloe vera gel, Ibuprofen",
},
{
  id: 57,
  title: "Chickenpox",
  desc: "Viral infection causing itchy rash.",
  causes: "Varicella virus",
  treatment: "Rest, isolation",
  medications: "Acyclovir, antihistamines",
},
{
  id: 58,
  title: "Measles",
  desc: "Highly contagious viral infection.",
  causes: "Virus",
  treatment: "Supportive care",
  medications: "Vitamin A, fever reducers",
},
{
  id: 59,
  title: "Meningitis",
  desc: "Inflammation of brain membranes.",
  causes: "Bacteria, virus",
  treatment: "Emergency care",
  medications: "IV antibiotics, antivirals",
},
{
  id: 60,
  title: "Sepsis",
  desc: "Life-threatening response to infection.",
  causes: "Severe infection",
  treatment: "ICU care",
  medications: "IV antibiotics, fluids",
},
  ];

  // 🔎 Filter
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  // 💡 Suggestions
  const suggestions =
    search.length > 0
      ? data
          .filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
          )
          .slice(0, 5)
      : [];

  return (
    <PageTransition>
    <div className="research-page">
      <div className="container position-relative">

        <h2 className="research-title"><IoMdHeart/>  Find diseases and their solutions  <IoMdHeart/></h2>

        <div className={`search-wrapper ${search ? "active" : ""}`}>
          <input
            type="text"
            className="search-input"
            placeholder="Search research...."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setShowSuggestions(true);
            }}
          />
        </div>

        {showSuggestions && search && (
          <div className="suggestions-box mx-auto">
            {suggestions.length > 0 ? (
              suggestions.map((item) => (
                <div
                  key={item.id}
                  className="suggestion-item"
                  onClick={() => {
                    setSearch(item.title);
                    setShowSuggestions(false);
                  }}
                >
                  {item.title}
                </div>
              ))
            ) : (
              <div className="suggestion-item text-danger">
                No suggestions found
              </div>
            )}
          </div>
        )}

        {/* Results */}
        <div className="row mt-4">
          {search === "" ? null : filteredData.length > 0 ? (
            filteredData.map((item) => (
              <div className="col-md-4 mb-3" key={item.id}>
                <div className="card research-card h-100">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p>{item.desc}</p>
                    <p><strong>Causes:</strong> {item.causes}</p>
                    <p><strong>Treatment:</strong> {item.treatment}</p>
                    <p><strong>Medications:</strong> {item.medications}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-result">❌ No results found</div>
          )}
        </div>

      </div>
    </div>
    </PageTransition>

  );
};

export default Research;