import React from 'react';
import Slider from './slider/Slider';


import four4 from '@/public/assets/images/temp/info-four-header.jpeg'
import sample_1 from '@/public/images/temp/download.webp';
import UseInfo from '@/app/utils/useInfo';
const InfoFour = () => {
  const headerfirstSpan = 'Interiors, Travel I I by The Spaces Team';
  const  headerfirstH1 = 'This new Mediterranean restaurant in Miami has Michelin cred';
  const headerfirstP = 'Chef Michael White helms the kitchen at Mika in Coral Gables';
  const  photoCite = 'Photography: Pablo Enriquez';
  const imgforPhotocite1 = four4;
  const describp1 = "A recipient of six Michelin stars over his career, the American chef Michael White is a saf pair of hands in the kitchen. This fact, along with a burnished dining room in an olive-grove palette, is what makes Mika a boon to the tidy white streets of Coral Gables in Miami. The Riviera-inspired restaurant, with its menu of seafood pastas and crudos, is a new hub on Ponce de Leon Boulevard, a historic palm-lined artery through town with Mediterranean flavour."
  const describp2 = "The elegant dining room was imagined by Bishop Design and Mika co-owner Alex Pirez in rustic raw woods and wicker, made more sumptuous with the addition of velvet and leather. To combat the South Florida climate, the lighting is subtle, emanating discreetly from niches, onces and a sweeping marble-topped bar beneath three cascading  crystal chandeliers. "
  const describp3 = " The elegant dining room was imagined by Bishop Design and Mika co-owner Alex Pirez in rustic raw woods and wicker, made more sumptuous with the addition of velvet and leather. To combat the South Florida climate, the lighting is subtle, emanating discreetly from niches, sconces and a sweeping marble-topped bar beneath three cascading crystal chandeliers."
  const  imgforphotocite2 = sample_1;
  return (
<UseInfo  headerfirstSpan={ headerfirstSpan} headerfirstH1={headerfirstH1} headerfirstP={headerfirstP} 
photoCite={photoCite} imgforPhotocite1={imgforPhotocite1} describp1={describp1}   describp2={  describp2}
describp3={describp3} imgforphotocite2={imgforphotocite2} Slider={Slider}/>
  )
}

export default InfoFour;