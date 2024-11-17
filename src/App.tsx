import './App.css'
import PageHeader from './components/Header'
// import { FaChartBar } from 'react-icons/fa6';
import PageFooter from './components/Footer';
import PageBanner from './components/PageBanner';
import ShareRecipeBanner from './components/ShareBanner';
import { IRecipe } from './interfaces/Recipe';
import { useEffect, useState } from 'react';
import useFetchData from './hooks/useFetch';
import RecipeCard from './components/RecipeCard';
import ExploreRecipes from './components/RecipeList';

function App() {

  return (
    <>
      <PageHeader />  
      <PageBanner />  
      <ShareRecipeBanner />
      <ExploreRecipes title='Threading Recipes' endpoint='recipes' />
      <ExploreRecipes title='Explore Recipes' endpoint='recipes' />
      <PageFooter />
    </>
  );
}

export default App;
