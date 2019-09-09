import { Specie } from '../_models/specie';


export const SPECIES: Specie[] = [
    {specie: 'rose', type: 'red-rose', sunNeeds: 'Full Sun', soilNeeds: 'Well-drained', bloomsIn: 'Late Spring - Early Fall'},
    {specie: 'rose', type: 'yellow-rose', sunNeeds: 'Full Sun', soilNeeds: 'Partially-drained', bloomsIn: 'Late Spring - Early Fall'},
    {specie: 'rose', type: 'blue-rose', sunNeeds: 'Full Moon', soilNeeds: 'Well-drained', bloomsIn: 'Late Spring - Early Fall'},
    {specie: 'daisy', type: 'white-daisy', sunNeeds: 'Full Sun', soilNeeds: 'Well-drained', bloomsIn: 'Mid‑Summer - Early Fall'},
    {specie: 'daisy', type: 'yellow-daisy', sunNeeds: 'Full Sun', soilNeeds: 'Well-drained', bloomsIn: 'Mid‑Summer - Early Fall'},
    {specie: 'daisy', type: 'pink-daisy', sunNeeds: 'Full Sun', soilNeeds: 'Well-drained', bloomsIn: 'Mid‑Summer - Early Fall'},
    {specie: 'sunflower', type: 'sunflower', sunNeeds: 'Full Sun', soilNeeds: 'Well-drained', bloomsIn: 'Early Summer - Early Fall'},
    {specie: 'sunflower', type: 'moonflower', sunNeeds: 'Full Sun', soilNeeds: 'Well-drained', bloomsIn: 'Early Summer - Early Fall'},
    {specie: 'tulip', type: 'dutch-tulip', sunNeeds: 'Full Sun', soilNeeds: 'Well-drained', bloomsIn: 'Spring'},
    {specie: 'tulip', type: 'rainbow-tulip', sunNeeds: 'Full Sun', soilNeeds: 'Well-drained', bloomsIn: 'Spring'},
    {specie: 'tulip', type: 'crystal-tulip', sunNeeds: 'Full Sun', soilNeeds: 'Well-drained', bloomsIn: 'Spring'},
    {specie: 'lilies', type: 'purple-lilies', sunNeeds: 'Full Sun', soilNeeds: 'Well-drained', bloomsIn: 'Spring - Early Fall'},
    {specie: 'lilies', type: 'blue-lilies', sunNeeds: 'Full Sun', soilNeeds: 'Well-drained', bloomsIn: 'Spring - Early Fall'},
    {specie: 'lilies', type: 'pink-lilies', sunNeeds: 'Full Sun', soilNeeds: 'Well-drained', bloomsIn: 'Spring - Early Fall'}
];

export const SPECIE_TYPES: any[] = SPECIES.map(s => ({'specie': s.specie, 'type': s.type}));