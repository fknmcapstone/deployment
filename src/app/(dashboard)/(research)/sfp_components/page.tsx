"use client";

import {AddedComponentsCarousel, DistributionMethodsCarousel, ProcurementStrategiesCarousel, FoodTypeAndVarietyCarousel, UserFeeModelCarousel, CulturalAspectsCarousel } from "./carousels";
import styles from "./page.module.css";
import React from "react";

import {
  Chart as ChartJS,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2'; // For Donut Chart
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Data for the Layered Donut Chart
const data = {
  datasets: [
    {
      // Split up the 16 slices in outer donut chart layer appropriately
      data: [2,2,2,2,2,2,3,3,2,2,2,3,3,2,2,2],
      // Colors match given color scheme for FKNM dashboard
      backgroundColor: [  // Fill Color of Outer Donut Chart Layer
        'rgba(179, 29, 84, 0.2)',
        'rgba(179, 29, 84, 0.2)',
        'rgba(179, 29, 84, 0.2)',

        'rgba(92, 151, 210, 0.2)',
        'rgba(92, 151, 210, 0.2)',
        'rgba(92, 151, 210, 0.2)',

        'rgba(234, 198, 19, 0.2)',
        'rgba(234, 198, 19, 0.2)',

        'rgba(89, 163, 58, 0.2)',
        'rgba(89, 163, 58, 0.2)',
        'rgba(89, 163, 58, 0.2)',

        'rgba(200, 63, 140, 0.2)',
        'rgba(200, 63, 140, 0.2)',

        'rgba(235, 137, 95, 0.2)',
        'rgba(235, 137, 95, 0.2)',
        'rgba(235, 137, 95, 0.2)',        
      ],
      borderColor: [  // Border Color of Outer Donut Chart Layer
        'rgba(179, 29, 84, 0.4)',
        'rgba(179, 29, 84, 0.4)',
        'rgba(179, 29, 84, 0.4)',

        'rgba(92, 151, 210, 0.4)',
        'rgba(92, 151, 210, 0.4)',
        'rgba(92, 151, 210, 0.4)',

        'rgba(234, 198, 19, 0.4)',
        'rgba(234, 198, 19, 0.4)',

        'rgba(89, 163, 58, 0.4)',
        'rgba(89, 163, 58, 0.4)',
        'rgba(89, 163, 58, 0.4)',

        'rgba(200, 63, 140, 0.4)',
        'rgba(200, 63, 140, 0.4)',

        'rgba(235, 137, 95, 0.4)',
        'rgba(235, 137, 95, 0.4)',
        'rgba(235, 137, 95, 0.4)',
      ],
      borderWidth: 2,
      hoverOffset: 20,  // used to highlight and make individual slice pop
    },
    {
      data: [12, 12, 12, 12, 12, 12],
      backgroundColor: [  // Fill Color of Inner Donut Chart Layer
        'rgba(179, 29, 84, 0.5)',
        'rgba(92, 151, 210, 0.5)',
        'rgba(234, 198, 19, 0.5)',
        'rgba(89, 163, 58, 0.5)',
        'rgba(200, 63, 140, 0.5)',
        'rgba(235, 137, 95, 0.5)',
      ],
      borderColor: [  // Border Color of Inner Donut Chart Layer
        'rgba(179, 29, 84, 1)',
        'rgba(92, 151, 210, 1)',
        'rgba(234, 198, 19, 1)',
        'rgba(89, 163, 58, 1)',
        'rgba(200, 63, 140, 1)',
        'rgba(235, 137, 95, 1)',
      ],
      borderWidth: 2,
      hoverOffset: 10,  // used to highlight and make individual slice pop (decreased for inner layer)
    }
  ],
};

// Data Labels for Inner Donut Chart Layer (spacing adjusted)
const innerLabels = [
  '   Food    Literacy',
  'Cultural Aspects',
  '     User      Fee Model',
  'Food Type & Variety',
  'Procurement Strategies',
  '  Methods of  Distribution'
];

// Data Labels for Outer Donut Chart Layer (spacing adjusted)
const outerLabels = [
  'Nutrition Education',
  ' Food  Skills',
  '     Food    Appreciation',
  'Belonging & Connection',
  '     Consume     Cultural Foods',
  '  Meaningful  Incorporation',
  'Flexible & Affordable',
  'Universal Access & Participation',
  'Wide Food Variety',
  'Culturally Appropriate',
  ' Healthy &   High Quality',
  'Tailored & Versatile',
  'Locally Focused',
  ' Hybrid Models',
  '   Reliable   Food Provision',
  'Prioritize Mealtimes'
];

// Customizing appearance of Donut Chart
const options = {
  responsive: true,
  maintainAspectRatio: false,
  cutoutPercentage: 50, 
  layout: {
    padding: {
      top: 20
    }
  },
  plugins: {
    title: {
      display: true,
      text: 'School Food Program Components',
      position: 'top',
      align: 'start',
      color: '#000',
      font: {
        size: 20,
        weight: 'bold',
      },
      padding: {
        top: 10,
        bottom: 30
      }
    },
    legend: {
      display: false,
    },
    tooltip: {
      enabled:false
    },
    datalabels: {
      color: '#000',
      textAlign: 'center',
      font: {
        weight: 'bold',
        size: 12,
      },
      formatter: (value, context) => {
        // Check which dataset we're in to choose the correct set of labels
        if (context.datasetIndex === 1) {  // Inner dataset
          const middle = Math.ceil(innerLabels[context.dataIndex].length / 2);
          const firstHalf = innerLabels[context.dataIndex].substr(0, middle);
          const secondHalf = innerLabels[context.dataIndex].substr(middle);

          // Return the label in two lines
          return firstHalf + '\n' + secondHalf;

        } else if (context.datasetIndex === 0) {  // Outer dataset
          const middle = Math.ceil(outerLabels[context.dataIndex].length / 2);
          const firstHalf = outerLabels[context.dataIndex].substr(0, middle);
          const secondHalf = outerLabels[context.dataIndex].substr(middle);

          // Return the label in two lines
          return firstHalf + '\n' + secondHalf;
        }
        return value; // In case there are more datasets with no specific label handling
      },
    },
  },
  // Redirect User to relevant section of page is any Donut Chart slice is clicked
  onClick: (event, elements, chart) => {
    // Check if the click event is on a chart element
    if (elements.length > 0) {
      const firstElement = elements[0];
      const firstElementIndex = firstElement.index;
      const datasetIndex = firstElement.datasetIndex;

      const outerLabels = [
        'Added Components (Food Literacy)',
        'Cultural Aspects',
        'User Fee Model',
        'Food Type & Variety',
        'Procurement Strategies',
        'Distribution Methods'
      ];
      
      const innerLabels = [
        'Teaching Nutrition and Food Origins',
        'Food Skills',
        'Appreciation for Food',
        'Sense of Belonging and Connection',
        'Encourage Consumption of Traditional and Cultural Foods',
        'Meaningful Incorporation',
        'Flexible and Affordable',
        'Universal Access and Participation',
        'Wide Food Variety',
        'Culturally Appropriate',
        'Healthy and High Quality',
        'Tailored and Versatile',
        'Locally Focused',
        'Hybrid Distribution Models',
        'Consistent, Frequent, and Reliable Provision of Food',
        'Prioritize Mealtimes'
      ];

      // Get the label of the clicked slice based on datasetIndex
      const label = datasetIndex === 0 ? innerLabels[firstElementIndex] : outerLabels[firstElementIndex];

      // Define a mapping from label to section ID
      const labelToSectionId = {
        'Added Components (Food Literacy)': 'food-literacy',
        'Teaching Nutrition and Food Origins': 'food-literacy',
        'Food Skills': 'food-literacy',
        'Appreciation for Food': 'food-literacy',

        'Distribution Methods': 'distribution-methods',
        'Hybrid Distribution Models': 'distribution-methods',
        'Consistent, Frequent, and Reliable Provision of Food': 'distribution-methods',
        'Prioritize Mealtimes': 'distribution-methods',

        'Procurement Strategies': 'procurement-strategies',
        'Tailored and Versatile': 'procurement-strategies',
        'Locally Focused': 'procurement-strategies',

        'Food Type & Variety': 'food-type-variety',
        'Wide Food Variety': 'food-type-variety',
        'Culturally Appropriate': 'food-type-variety',
        'Healthy and High Quality': 'food-type-variety',

        'User Fee Model': 'user-fee-model',
        'Flexible and Affordable': 'user-fee-model',
        'Universal Access and Participation': 'user-fee-model',

        'Cultural Aspects': 'cultural-aspects',
        'Sense of Belonging and Connection': 'cultural-aspects',
        'Encourage Consumption of Traditional and Cultural Foods': 'cultural-aspects',
        'Meaningful Incorporation': 'cultural-aspects',
      };

      const sectionId = labelToSectionId[label];

      if (sectionId) {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          // Calculate the offset position
          const offset = 1;
  
          // Calculate position to scroll to by subtracting the offset from the section's offsetTop
          const positionToScroll = sectionElement.offsetTop - offset;
  
          // Use scrollTo with the top option set to the positionToScroll
          window.scrollTo({
            top: positionToScroll,
            behavior: 'smooth'
          });
        }
      }
    }
  },
};

ChartJS.register(
  ArcElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

export default function QualitativeData() {
  return (
    <main className={styles.main}>
      <div style={{ width: '900px', height: '780px' }}>
        <Doughnut data={data} options={options}/>
      </div>
      <p id="food-literacy" className={styles.card1Title}>Added Program Components (Food Literacy)</p>
      <div className={styles.card1}>
        <p id="teaching-nutrition-food-origins" className={styles.cardSubtitle}>Teaching Nutrition and Food Origins:</p>
        <p className={styles.definitionsText}>Enriching students' understanding of nutrition, healthy diets, and dietary patterns, as well as the links between food and health. As well as teaching students where food comes from through experiential learning via school gardens or connecting with people involved in food production (farmers, chefs, food producers).</p>
        <p id="food-skills" className={styles.cardSubtitle}>Food Skills:</p>
        <p className={styles.definitionsText}>Supporting students in learning how to prepare meals/dishes with others which can nurture community building, encourage students to try new foods and help them develop various life skills.</p>
        <p id="appreciation-for-food" className={styles.cardSubtitle}>Appreciation for Food:</p>
        <p className={styles.definitionsText}>Fostering an appreciation for the cultural diversity of food through activities that focus on sharing social values related to food, such as respect for others' cultural food practices/choices, sharing, gratitude, and waste reduction.</p>
        <AddedComponentsCarousel></AddedComponentsCarousel>
      </div>
      <p id="distribution-methods" className={styles.card2Title}>Distribution Methods</p>
      <div className={styles.card2}>
        <p id="hybrid-distribution-models" className={styles.cardSubtitle}>Hybrid Distribution Models:</p>
        <p className={styles.definitionsText}>A national school food program should enable schools to adopt hybrid distribution models to best serve the students and families in their schools. This involves a high priority for in-school feeding and the opportunity for take-home rations for families who could use extra support during school closures.</p>
        <p id="consistent-food" className={styles.cardSubtitle}>Consistent, Frequent, and Reliable Provision of Food:</p>
        <p className={styles.definitionsText}>A national school food program should ensure that students receive at least one snack or meal per day and allow students to regulate their own hunger cues (i.e., open snack).</p>
        <p id="prioritize-mealtimes" className={styles.cardSubtitle}>Prioritize Mealtimes:</p>
        <p className={styles.definitionsText}>A national school food program should reinforce the notion of sitting down and eating meals with others, through providing adequate time for students to eat their lunch and/or snacks.</p>
        <DistributionMethodsCarousel></DistributionMethodsCarousel>
      </div>
      <p id="procurement-strategies" className={styles.card3Title}>Procurement Strategies</p>
      <div className={styles.card3}>
        <p id="tailored-and-versatile" className={styles.cardSubtitle}>Tailored and Versatile:</p>
        <p className={styles.definitionsText}>Food procurement should be tailored to each school and adapted based on existing school food infrastructure, allowing for a versatile strategy that leverages various sources to guarantee variety and the highest quality of food.</p>
        <p id="locally-focused" className={styles.cardSubtitle}>Locally Focused:</p>
        <p className={styles.definitionsText}>School food programs should support local farms and businesses to guarantee the freshness, quality, and healthfulness of the food, while simultaneously supporting the growth of local economies.</p>
        <ProcurementStrategiesCarousel></ProcurementStrategiesCarousel>
      </div>
      <p id="food-type-variety" className={styles.card4Title}>Food Type and Variety</p>
      <div className={styles.card4}>
        <p id="wide-food-variety" className={styles.cardSubtitle}>Wide Food Variety:</p>
        <p className={styles.definitionsText}>A national school food program should offer a wide variety of foods to keep children interested, encourage them to be more open about trying new foods, and to adequately accommodate for dietary needs.</p>
        <p id="culturally-appropriate" className={styles.cardSubtitle}>Culturally Appropriate</p>
        <p className={styles.definitionsText}>Culturally Appropriate: School food programs should be locally adapted to the cultures represented in various school communities. This includes ensuring that culturally appropriate food offerings are available and incorporating various cultural foods/traditional dishes that promote diversity and multiculturalism.</p>
        <p id="healthy-high-quality" className={styles.cardSubtitle}>Healthy and High-Quality:</p>
        <p className={styles.definitionsText}>School food programs should prioritize nutrient-dense whole foods such as fruits and vegetables, and limit pre-packaged processed foods that are high in sodium, sugar, and saturated fat.</p>
        <FoodTypeAndVarietyCarousel></FoodTypeAndVarietyCarousel>
      </div>
      <p id="user-fee-model" className={styles.card5Title}>User Fee Model</p>
      <div className={styles.card5}>
        <p id="flexible-affordable" className={styles.cardSubtitle}>Flexible and Affordable:</p>
        <p className={styles.definitionsText}>If schools chose to adopt a certain user fee model (cost-shared basis, pay what you can model, subsidized standard fee), these models should be flexible to what students and their families could afford to reduce barriers to participation.</p>
        <p id="universal-access" className={styles.cardSubtitle}>Universal Access and Participation:</p>
        <p className={styles.definitionsText}>School food programs must be inclusive, ensuring access for all students, irrespective of their financial circumstances.</p>
        <UserFeeModelCarousel></UserFeeModelCarousel>
      </div>
      <p id="cultural-aspects" className={styles.card6Title}>Cultural Aspects</p>
      <div className={styles.card6}>
        <p id="belonging-connection" className={styles.cardSubtitle}>Sense of Belonging and Connection:</p>
        <p className={styles.definitionsText}>School food programs should offer a variety of cultural food/traditional dishes to make students feel connected and represented.</p>
        <p id="traditional-cultural-consumption" className={styles.cardSubtitle}>Encourage Consumption of Traditional and Cultural Foods:</p>
        <p className={styles.definitionsText}>School food programs have the potential to inspire children to embrace nutritious, traditional cultural cuisine. Introducing diverse flavors within the school environment could potentially kindle children's curiosity and appetite for a wider range of diverse cultural foods.</p>
        <p id="meaningful-incorporation" className={styles.cardSubtitle}>Meaningful Incorporation:</p>
        <p className={styles.definitionsText}>School food programs should meaningfully incorporate cultural food by including it in school food program menus, partnering with diverse local businesses that specialize in preparing cultural dishes and, incorporating food literacy activities that focus on teaching children about the diverse aspects of food (i.e., aroma, ingredients, spices, and origins).</p>
        <CulturalAspectsCarousel></CulturalAspectsCarousel>
      </div>
    </main>
  );
}

