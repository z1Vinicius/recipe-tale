import RecipePhoto from './../../assets/recipe-take.jpg'
import HeaderButton from '../HeaderButton/index';

function ShareRecipeBanner(){
  return (
    <div className="flex justify-center items-center w-full p-10 gap-10">
      <div className='w-1/4 bg-red-200'>
        <img className=' rounded-xl' src={RecipePhoto} alt="Taking a vegetable plate photo with phone camera in front representing a good recipe in other perspective" />
      </div>
      <div className='flex flex-col justify-center items-center gap-2 text-5xl text-center font-bold '>
        <span>Share Your <span className='text-red-400'>Recipes</span></span>
        <span className='text-lg text-gray-400 font-medium w-72'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae accusantium aspernatur ullam quo eius magnam voluptatum.</span>
        <HeaderButton  text='Create New Recipe' primary={true}/>
      </div>
    </div>
  )
}

export default ShareRecipeBanner