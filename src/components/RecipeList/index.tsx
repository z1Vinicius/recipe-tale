import useFetchData from "../../hooks/useFetch";
import { IRecipe } from "../../interfaces/Recipe";
import RecipeCard from "../RecipeCard";

function ExploreRecipes({title, endpoint}: {title: string, endpoint: string}){
  const { data, loading, error } = useFetchData<IRecipe[]>(endpoint);
  
  if (loading) return <div>Loading...</div>;
  
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="">
        <div className="flex w-full ">
          <h1 className="text-3xl font-bold">{title}</h1>
        </div>
        <div className="grid grid-cols-3 w-fit items-center gap-6 p-10 ">
          {
            data && data.map((recipe) => {
              return <RecipeCard key={recipe.id} data={recipe} />;
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ExploreRecipes;