import { IRecipe } from '../../interfaces/Recipe';
import { BsFire } from 'react-icons/bs';
import RecipeBadge from '../RecipeBadge';
import { FaBowlFood } from 'react-icons/fa6';

function RecipeCard({data}: {data: IRecipe}){
  const recipeImage = data.images[0].url
  return (
    <div className='flex flex-col w-fit rounded-xl border border-1 border-slate-100 hover:scale-105 duration-700 cursor-pointer'>
      <img src={recipeImage} alt="" className='w-80 h-40 rounded-lg rounded-b-none' />
      <div className='flex flex-col p-2 gap-2'>
        <span className='font-medium'>{data.title}</span>
        <div className='flex w-full justify-end mt-3 gap-2'>
          <RecipeBadge text={data.calories.toString() + " cals"} Icon={BsFire} />
          <RecipeBadge text={data.servingSize.toString() + " servings"} Icon={FaBowlFood} />
          <RecipeBadge text={data.servingSize.toString() + " servings"} Icon={FaBowlFood} />
        </div>
      </div>
    </div>
  )
}

export default RecipeCard;